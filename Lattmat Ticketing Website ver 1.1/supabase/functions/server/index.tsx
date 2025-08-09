import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-ecf3a44f/health", (c) => {
  return c.json({ status: "ok" });
});

// Sign up endpoint for phone-based registration
app.post("/make-server-ecf3a44f/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name, phone } = body;
    
    if (!email || !password || !name || !phone) {
      return c.json({ error: 'Missing required fields: email, password, name, phone' }, 400);
    }
    
    console.log('Creating new user with phone registration...');
    
    // Create user with Supabase Auth Admin
    const { data, error } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      user_metadata: { 
        name: name,
        phone: phone 
      },
      // Automatically confirm the user's email since we're using phone as primary identifier
      email_confirm: true
    });

    if (error) {
      console.error('User creation error:', error);
      return c.json({ 
        error: 'Failed to create user account', 
        details: error.message 
      }, 400);
    }

    console.log('User created successfully:', data.user?.id);
    
    return c.json({ 
      message: 'User created successfully',
      user: {
        id: data.user?.id,
        email: data.user?.email,
        name: name,
        phone: phone
      }
    }, 201);
  } catch (error) {
    console.error('Signup error:', error);
    return c.json({ 
      error: 'Failed to process signup', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Get all categories from database table
app.get("/make-server-ecf3a44f/categories", async (c) => {
  try {
    const { data: categories, error } = await supabase
      .from('category')
      .select('id, name, image_url')
      .order('id');

    if (error) {
      console.log('Database error fetching categories:', error);
      return c.json({ error: 'Failed to fetch categories from database', details: error.message }, 500);
    }

    // Transform data to match frontend expectations
    const transformedCategories = categories?.map(cat => ({
      id: cat.id,
      name: cat.name,
      image: cat.image_url
    })) || [];

    return c.json({ categories: transformedCategories });
  } catch (error) {
    console.log('Error fetching categories:', error);
    return c.json({ error: 'Failed to fetch categories', details: error.message }, 500);
  }
});

// Create a new category in database table
app.post("/make-server-ecf3a44f/categories", async (c) => {
  try {
    const body = await c.req.json();
    const { id, name, image } = body;
    
    if (!id || !name || !image) {
      return c.json({ error: 'Missing required fields: id, name, image' }, 400);
    }
    
    // Insert into database table
    const { data: newCategory, error } = await supabase
      .from('category')
      .insert([
        { 
          id: id, 
          name: name, 
          image_url: image 
        }
      ])
      .select('id, name, image_url')
      .single();
      
    if (error) {
      console.log('Database error creating category:', error);
      if (error.code === '23505') { // Unique constraint violation
        return c.json({ error: 'Category with this ID already exists' }, 409);
      }
      return c.json({ error: 'Failed to create category in database', details: error.message }, 500);
    }
    
    // Transform response to match frontend expectations
    const transformedCategory = {
      id: newCategory.id,
      name: newCategory.name,
      image: newCategory.image_url
    };
    
    return c.json({ 
      message: 'Category created successfully', 
      category: transformedCategory 
    }, 201);
  } catch (error) {
    console.log('Error creating category:', error);
    return c.json({ error: 'Failed to create category', details: error.message }, 500);
  }
});

// Update a category in database table
app.put("/make-server-ecf3a44f/categories/:id", async (c) => {
  try {
    const categoryId = c.req.param('id');
    const body = await c.req.json();
    const { name, image } = body;
    
    if (!name || !image) {
      return c.json({ error: 'Missing required fields: name, image' }, 400);
    }
    
    // Update in database table
    const { data: updatedCategory, error } = await supabase
      .from('category')
      .update({ 
        name: name, 
        image_url: image 
      })
      .eq('id', categoryId)
      .select('id, name, image_url')
      .single();
      
    if (error) {
      console.log('Database error updating category:', error);
      return c.json({ error: 'Failed to update category in database', details: error.message }, 500);
    }
    
    if (!updatedCategory) {
      return c.json({ error: 'Category not found' }, 404);
    }
    
    // Transform response to match frontend expectations
    const transformedCategory = {
      id: updatedCategory.id,
      name: updatedCategory.name,
      image: updatedCategory.image_url
    };
    
    return c.json({ 
      message: 'Category updated successfully', 
      category: transformedCategory 
    });
  } catch (error) {
    console.log('Error updating category:', error);
    return c.json({ error: 'Failed to update category', details: error.message }, 500);
  }
});

// Delete a category from database table
app.delete("/make-server-ecf3a44f/categories/:id", async (c) => {
  try {
    const categoryId = c.req.param('id');
    
    // Delete from database table
    const { error } = await supabase
      .from('category')
      .delete()
      .eq('id', categoryId);
      
    if (error) {
      console.log('Database error deleting category:', error);
      return c.json({ error: 'Failed to delete category from database', details: error.message }, 500);
    }
    
    return c.json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.log('Error deleting category:', error);
    return c.json({ error: 'Failed to delete category', details: error.message }, 500);
  }
});

// Get all advertising banners from Advertising_Banner table
app.get("/make-server-ecf3a44f/advertising-banners", async (c) => {
  try {
    console.log('Fetching advertising banners from Advertising_Banner table...');
    
    const { data: banners, error } = await supabase
      .from('Advertising_Banner')
      .select('id, image_url')
      .order('id');

    if (error) {
      console.log('Database error fetching advertising banners:', error);
      return c.json({ 
        error: 'Failed to fetch advertising banners from database', 
        details: error.message,
        table: 'Advertising_Banner'
      }, 500);
    }

    console.log('Successfully fetched banners from Advertising_Banner table:', banners);

    // Transform data to match frontend expectations
    const transformedBanners = banners?.map(banner => ({
      id: banner.id,
      image: banner.image_url
    })) || [];

    console.log('Transformed banners:', transformedBanners);
    return c.json({ banners: transformedBanners });
  } catch (error) {
    console.log('Error fetching advertising banners:', error);
    return c.json({ 
      error: 'Failed to fetch advertising banners', 
      details: error.message,
      table: 'Advertising_Banner'
    }, 500);
  }
});

// Create a new advertising banner in Advertising_Banner table
app.post("/make-server-ecf3a44f/advertising-banners", async (c) => {
  try {
    const body = await c.req.json();
    const { image } = body;
    
    if (!image) {
      return c.json({ error: 'Missing required field: image' }, 400);
    }
    
    console.log('Creating new advertising banner in Advertising_Banner table...');
    
    // Insert into Advertising_Banner table
    const { data: newBanner, error } = await supabase
      .from('Advertising_Banner')
      .insert([
        { 
          image_url: image 
        }
      ])
      .select('id, image_url')
      .single();
      
    if (error) {
      console.log('Database error creating advertising banner:', error);
      return c.json({ 
        error: 'Failed to create advertising banner in database', 
        details: error.message,
        table: 'Advertising_Banner'
      }, 500);
    }
    
    console.log('Successfully created banner in Advertising_Banner table:', newBanner);
    
    // Transform response to match frontend expectations
    const transformedBanner = {
      id: newBanner.id,
      image: newBanner.image_url
    };
    
    return c.json({ 
      message: 'Advertising banner created successfully', 
      banner: transformedBanner 
    }, 201);
  } catch (error) {
    console.log('Error creating advertising banner:', error);
    return c.json({ 
      error: 'Failed to create advertising banner', 
      details: error.message,
      table: 'Advertising_Banner'
    }, 500);
  }
});

// Update an advertising banner in Advertising_Banner table
app.put("/make-server-ecf3a44f/advertising-banners/:id", async (c) => {
  try {
    const bannerId = c.req.param('id');
    const body = await c.req.json();
    const { image } = body;
    
    if (!image) {
      return c.json({ error: 'Missing required field: image' }, 400);
    }
    
    console.log(`Updating advertising banner ${bannerId} in Advertising_Banner table...`);
    
    // Update in Advertising_Banner table
    const { data: updatedBanner, error } = await supabase
      .from('Advertising_Banner')
      .update({ 
        image_url: image 
      })
      .eq('id', bannerId)
      .select('id, image_url')
      .single();
      
    if (error) {
      console.log('Database error updating advertising banner:', error);
      return c.json({ 
        error: 'Failed to update advertising banner in database', 
        details: error.message,
        table: 'Advertising_Banner'
      }, 500);
    }
    
    if (!updatedBanner) {
      return c.json({ error: 'Advertising banner not found' }, 404);
    }
    
    console.log('Successfully updated banner in Advertising_Banner table:', updatedBanner);
    
    // Transform response to match frontend expectations
    const transformedBanner = {
      id: updatedBanner.id,
      image: updatedBanner.image_url
    };
    
    return c.json({ 
      message: 'Advertising banner updated successfully', 
      banner: transformedBanner 
    });
  } catch (error) {
    console.log('Error updating advertising banner:', error);
    return c.json({ 
      error: 'Failed to update advertising banner', 
      details: error.message,
      table: 'Advertising_Banner'
    }, 500);
  }
});

// Delete an advertising banner from Advertising_Banner table
app.delete("/make-server-ecf3a44f/advertising-banners/:id", async (c) => {
  try {
    const bannerId = c.req.param('id');
    
    console.log(`Deleting advertising banner ${bannerId} from Advertising_Banner table...`);
    
    // Delete from Advertising_Banner table
    const { error } = await supabase
      .from('Advertising_Banner')
      .delete()
      .eq('id', bannerId);
      
    if (error) {
      console.log('Database error deleting advertising banner:', error);
      return c.json({ 
        error: 'Failed to delete advertising banner from database', 
        details: error.message,
        table: 'Advertising_Banner'
      }, 500);
    }
    
    console.log('Successfully deleted banner from Advertising_Banner table');
    
    return c.json({ message: 'Advertising banner deleted successfully' });
  } catch (error) {
    console.log('Error deleting advertising banner:', error);
    return c.json({ 
      error: 'Failed to delete advertising banner', 
      details: error.message,
      table: 'Advertising_Banner'
    }, 500);
  }
});

// Get all events with related data using proper nested Supabase queries
app.get("/make-server-ecf3a44f/events", async (c) => {
  try {
    console.log('Fetching events from database with proper nested relationships...');
    
    // Use the proper nested query structure as provided by the user
    const { data: events, error } = await supabase
      .from('events')
      .select(`
        id,
        name,
        type,
        title,
        status,
        enabled,
        partner,
        created_at,
        event_date,
        updated_at,
        description,
        background_image_url,
        social_links,
        campaign_type,
        banner_image_url,
        additional_images,
        event_time,
        ticket_price,
        event_groups (
          id,
          created_at,
          venue_place,
          event_date,
          event_time,
          venue_image_url,
          group_name,
          ticket_tiers (
            id,
            tier_name,
            price,
            available_qty,
            created_at
          )
        )
      `)
      .order('event_date', { ascending: true })
      .order('event_time', { ascending: true, foreignTable: 'event_groups' });

    if (error) {
      console.log('Database error fetching events with nested data:', error);
      return c.json({ 
        error: 'Failed to fetch events from database', 
        details: error.message 
      }, 500);
    }

    console.log('Successfully fetched events with nested data:', events?.length || 0, 'events');
    console.log('Sample event structure:', events?.[0] ? {
      id: events[0].id,
      title: events[0].title,
      event_groups_count: events[0].event_groups?.length || 0,
      first_group_ticket_tiers: events[0].event_groups?.[0]?.ticket_tiers?.length || 0
    } : 'No events');

    // Transform data to match frontend expectations
    const transformedEvents = events?.map(event => {
      // Get all ticket tiers from all event groups
      const allTicketTiers = event.event_groups?.flatMap(group => 
        group.ticket_tiers?.map(tier => ({
          ...tier,
          event_group_id: group.id
        })) || []
      ) || [];

      // Get the lowest price from all ticket tiers
      const lowestPrice = allTicketTiers.length > 0 
        ? Math.min(...allTicketTiers.map(tier => tier.price))
        : 0;
      
      // Format date from first event group or main event
      const primaryEventGroup = event.event_groups?.[0];
      const eventDate = primaryEventGroup?.event_date || event.event_date;
      
      let formattedDate = 'TBD';
      if (eventDate) {
        try {
          const date = new Date(eventDate);
          formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });
        } catch (dateError) {
          console.log('Date formatting error for event', event.id, ':', dateError);
          formattedDate = 'TBD';
        }
      }

      // Transform event groups with their ticket tiers
      const transformedEventGroups = event.event_groups?.map(group => ({
        id: group.id,
        name: group.group_name,
        description: group.group_name, // Use group_name as description if no separate description
        venue_place: group.venue_place,
        event_date: group.event_date,
        event_time: group.event_time,
        venue_image_url: group.venue_image_url,
        venue_image: group.venue_image_url, // Alias for compatibility
        ticketTiers: group.ticket_tiers?.map(tier => ({
          id: tier.id,
          tier_name: tier.tier_name,
          price: tier.price,
          currency: 'Ks', // Default currency
          description: tier.tier_name, // Use tier_name as description
          max_quantity: 999, // Default max quantity
          available_qty: tier.available_qty,
          event_group_id: group.id
        })) || []
      })) || [];

      return {
        id: event.id,
        title: event.title || event.name || 'Untitled Event',
        description: event.description || '',
        date: formattedDate,
        time: primaryEventGroup?.event_time || event.event_time || 'TBD',
        location: 'Myanmar', // Default location
        venue: primaryEventGroup?.venue_place || 'TBD',
        image: event.background_image_url || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&auto=format',
        banner_image_url: event.banner_image_url || event.background_image_url || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop&auto=format',
        price: lowestPrice > 0 ? `${lowestPrice.toLocaleString()} Ks` : 'TBD',
        isEarlyAccess: false, // Default value
        category: transformedEventGroups[0]?.name?.toLowerCase() || 'general',
        
        // Complete event groups with ticket tiers
        eventGroups: transformedEventGroups,
        
        // Legacy single event group for backward compatibility
        eventGroup: {
          id: transformedEventGroups[0]?.id,
          name: transformedEventGroups[0]?.name,
          description: transformedEventGroups[0]?.description,
          venue_place: transformedEventGroups[0]?.venue_place,
          event_date: transformedEventGroups[0]?.event_date,
          event_time: transformedEventGroups[0]?.event_time,
          venue_image_url: transformedEventGroups[0]?.venue_image_url
        },
        
        // All ticket tiers flattened for reference
        ticketTiers: allTicketTiers.map(tier => ({
          id: tier.id,
          tier_name: tier.tier_name,
          price: tier.price,
          currency: 'Ks',
          description: tier.tier_name,
          max_quantity: 999,
          available_qty: tier.available_qty,
          event_group_id: tier.event_group_id
        }))
      };
    }) || [];

    console.log('Transformed events:', transformedEvents.length);
    console.log('First event with groups:', transformedEvents?.[0] ? {
      id: transformedEvents[0].id,
      title: transformedEvents[0].title,
      eventGroups_count: transformedEvents[0].eventGroups?.length || 0,
      first_group_tickets: transformedEvents[0].eventGroups?.[0]?.ticketTiers?.length || 0
    } : 'No transformed events');

    return c.json({ events: transformedEvents });
  } catch (error) {
    console.log('Error fetching events:', error);
    return c.json({ 
      error: 'Failed to fetch events', 
      details: error.message 
    }, 500);
  }
});

// Get a single event by ID with proper nested relationships for dynamic location switching
app.get("/make-server-ecf3a44f/events/:id", async (c) => {
  try {
    const eventId = c.req.param('id');
    console.log(`Fetching event ${eventId} with proper nested relationships...`);
    
    // Use the same nested query structure for single event
    const { data: event, error } = await supabase
      .from('events')
      .select(`
        id,
        name,
        type,
        title,
        status,
        enabled,
        partner,
        created_at,
        event_date,
        updated_at,
        description,
        background_image_url,
        social_links,
        campaign_type,
        banner_image_url,
        additional_images,
        event_time,
        ticket_price,
        event_groups (
          id,
          created_at,
          venue_place,
          event_date,
          event_time,
          venue_image_url,
          group_name,
          ticket_tiers (
            id,
            tier_name,
            price,
            available_qty,
            created_at
          )
        )
      `)
      .eq('id', eventId)
      .single();

    if (error) {
      console.log('Database error fetching event:', error);
      if (error.code === 'PGRST116') {
        return c.json({ error: 'Event not found' }, 404);
      }
      return c.json({ 
        error: 'Failed to fetch event from database', 
        details: error.message 
      }, 500);
    }

    console.log('Successfully fetched event with nested data:', {
      id: event.id,
      title: event.title,
      event_groups_count: event.event_groups?.length || 0,
      total_ticket_tiers: event.event_groups?.reduce((sum, group) => sum + (group.ticket_tiers?.length || 0), 0) || 0
    });

    // Get all ticket tiers from all event groups
    const allTicketTiers = event.event_groups?.flatMap(group => 
      group.ticket_tiers?.map(tier => ({
        ...tier,
        event_group_id: group.id
      })) || []
    ) || [];

    // Get the lowest price from all ticket tiers
    const lowestPrice = allTicketTiers.length > 0 
      ? Math.min(...allTicketTiers.map(tier => tier.price))
      : 0;
    
    // Format date from first event group or main event
    const primaryEventGroup = event.event_groups?.[0];
    const eventDate = primaryEventGroup?.event_date || event.event_date;
    
    let formattedDate = 'TBD';
    if (eventDate) {
      try {
        const date = new Date(eventDate);
        formattedDate = date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
      } catch (dateError) {
        console.log('Date formatting error for event', event.id, ':', dateError);
        formattedDate = 'TBD';
      }
    }

    // Transform event groups with their ticket tiers
    const transformedEventGroups = event.event_groups?.map(group => ({
      id: group.id,
      name: group.group_name,
      description: group.group_name, // Use group_name as description if no separate description
      venue_place: group.venue_place,
      event_date: group.event_date,
      event_time: group.event_time,
      venue_image_url: group.venue_image_url,
      venue_image: group.venue_image_url, // Alias for compatibility
      ticketTiers: group.ticket_tiers?.map(tier => ({
        id: tier.id,
        tier_name: tier.tier_name,
        price: tier.price,
        currency: 'Ks', // Default currency
        description: tier.tier_name, // Use tier_name as description
        max_quantity: 999, // Default max quantity
        available_qty: tier.available_qty,
        event_group_id: group.id
      })) || []
    })) || [];

    const transformedEvent = {
      id: event.id,
      title: event.title || event.name || 'Untitled Event',
      description: event.description || '',
      date: formattedDate,
      time: primaryEventGroup?.event_time || event.event_time || 'TBD',
      location: 'Myanmar', // Default location
      venue: primaryEventGroup?.venue_place || 'TBD',
      image: event.background_image_url || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&auto=format',
      banner_image_url: event.banner_image_url || event.background_image_url || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop&auto=format',
      price: lowestPrice > 0 ? `${lowestPrice.toLocaleString()} Ks` : 'TBD',
      isEarlyAccess: false, // Default value
      category: transformedEventGroups[0]?.name?.toLowerCase() || 'general',
      
      // Complete event groups with ticket tiers
      eventGroups: transformedEventGroups,
      
      // Legacy single event group for backward compatibility
      eventGroup: {
        id: transformedEventGroups[0]?.id,
        name: transformedEventGroups[0]?.name,
        description: transformedEventGroups[0]?.description,
        venue_place: transformedEventGroups[0]?.venue_place,
        event_date: transformedEventGroups[0]?.event_date,
        event_time: transformedEventGroups[0]?.event_time,
        venue_image_url: transformedEventGroups[0]?.venue_image_url,
        venue_image: transformedEventGroups[0]?.venue_image
      },
      
      // All ticket tiers flattened for reference
      ticketTiers: allTicketTiers.map(tier => ({
        id: tier.id,
        tier_name: tier.tier_name,
        price: tier.price,
        currency: 'Ks',
        description: tier.tier_name,
        max_quantity: 999,
        available_qty: tier.available_qty,
        event_group_id: tier.event_group_id
      }))
    };

    console.log('Transformed single event:', {
      id: transformedEvent.id,
      title: transformedEvent.title,
      eventGroups_count: transformedEvent.eventGroups?.length || 0,
      total_ticket_tiers: transformedEvent.ticketTiers?.length || 0,
      first_group_venue: transformedEvent.eventGroups?.[0]?.venue_place
    });

    return c.json({ event: transformedEvent });
  } catch (error) {
    console.log('Error fetching event:', error);
    return c.json({ 
      error: 'Failed to fetch event', 
      details: error.message 
    }, 500);
  }
});

// Create ticket transactions (one row per ticket tier)
app.post("/make-server-ecf3a44f/ticket-transactions", async (c) => {
  try {
    const body = await c.req.json();
    const { 
      event_id,
      full_name,
      billing_email,
      billing_phone,
      billing_address,
      ticket_delivery_option,
      payment_method,
      selected_tickets,
      event_group_id,
      total_amount,
      user_id // Optional, for authenticated users
    } = body;
    
    if (!event_id || !full_name || !billing_email || !billing_phone || !billing_address || !ticket_delivery_option || !payment_method || !selected_tickets || !total_amount || !event_group_id) {
      return c.json({ error: 'Missing required fields' }, 400);
    }
    
    if (!Array.isArray(selected_tickets) || selected_tickets.length === 0) {
      return c.json({ error: 'No tickets selected' }, 400);
    }
    
    console.log('Creating ticket transactions for', selected_tickets.length, 'ticket tiers...');
    
    // Calculate total tickets count for proportional amount distribution
    const totalTicketsCount = selected_tickets.reduce((sum, ticket) => sum + ticket.quantity, 0);
    
    // Prepare transaction rows - one for each ticket tier
    const transactionRows = selected_tickets.map(ticket => {
      // Calculate proportional amount for this ticket tier
      const tierTotal = (ticket.price * ticket.quantity);
      const proportionalAmount = (tierTotal / selected_tickets.reduce((sum, t) => sum + (t.price * t.quantity), 0)) * total_amount;
      
      return {
        user_id: user_id || null,
        event_id: event_id,
        event_group_id: event_group_id,
        ticket_tier_id: ticket.id,
        number_of_tickets: ticket.quantity,
        full_name: full_name,
        billing_email: billing_email,
        billing_phone: billing_phone,
        billing_address: billing_address,
        ticket_delivery_option: ticket_delivery_option,
        total_amount: Math.round(proportionalAmount * 100) / 100, // Round to 2 decimal places
        currency: 'MMK',
        payment_method: payment_method,
        transaction_status: 'pending',
        payment_gateway_transaction_id: null
      };
    });
    
    console.log('Inserting', transactionRows.length, 'transaction rows...');
    
    // Insert all transaction rows into the ticket_transactions table
    const { data: insertedTransactions, error } = await supabase
      .from('ticket_transactions')
      .insert(transactionRows)
      .select('*');
      
    if (error) {
      console.error('Database error creating ticket transactions:', error);
      return c.json({ 
        error: 'Failed to create ticket transactions in database', 
        details: error.message 
      }, 500);
    }
    
    console.log('Ticket transactions created successfully:', insertedTransactions?.length || 0, 'rows');
    
    return c.json({ 
      message: 'Ticket transactions created successfully', 
      transactions: insertedTransactions,
      summary: {
        total_rows: insertedTransactions?.length || 0,
        total_tickets: totalTicketsCount,
        total_amount: total_amount,
        event_id: event_id,
        customer_email: billing_email
      }
    }, 201);
  } catch (error) {
    console.error('Error creating ticket transactions:', error);
    return c.json({ 
      error: 'Failed to create ticket transactions', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Get ticket transactions by customer email
app.get("/make-server-ecf3a44f/ticket-transactions/:email", async (c) => {
  try {
    const customerEmail = c.req.param('email');
    console.log(`Fetching ticket transactions for customer: ${customerEmail}`);
    
    // Query ticket_transactions table by billing_email
    const { data: transactions, error } = await supabase
      .from('ticket_transactions')
      .select('*')
      .eq('billing_email', customerEmail)
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Database error fetching ticket transactions:', error);
      return c.json({ 
        error: 'Failed to fetch ticket transactions from database', 
        details: error.message 
      }, 500);
    }
    
    console.log(`Found ${transactions?.length || 0} transaction rows for ${customerEmail}`);
    
    return c.json({ transactions: transactions || [] });
  } catch (error) {
    console.error('Error fetching ticket transactions:', error);
    return c.json({ 
      error: 'Failed to fetch ticket transactions', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Get a specific ticket transaction by ID
app.get("/make-server-ecf3a44f/ticket-transactions/id/:id", async (c) => {
  try {
    const transactionId = c.req.param('id');
    console.log(`Fetching ticket transaction: ${transactionId}`);
    
    // Query ticket_transactions table by ID
    const { data: transaction, error } = await supabase
      .from('ticket_transactions')
      .select('*')
      .eq('id', transactionId)
      .single();
      
    if (error) {
      console.error('Database error fetching ticket transaction:', error);
      if (error.code === 'PGRST116') {
        return c.json({ error: 'Ticket transaction not found' }, 404);
      }
      return c.json({ 
        error: 'Failed to fetch ticket transaction from database', 
        details: error.message 
      }, 500);
    }
    
    console.log('Ticket transaction found:', transactionId);
    
    return c.json({ transaction });
  } catch (error) {
    console.error('Error fetching ticket transaction:', error);
    return c.json({ 
      error: 'Failed to fetch ticket transaction', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Get ticket transactions by event ID
app.get("/make-server-ecf3a44f/ticket-transactions/event/:eventId", async (c) => {
  try {
    const eventId = c.req.param('eventId');
    console.log(`Fetching ticket transactions for event: ${eventId}`);
    
    // Query ticket_transactions table by event_id
    const { data: transactions, error } = await supabase
      .from('ticket_transactions')
      .select('*')
      .eq('event_id', eventId)
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Database error fetching event ticket transactions:', error);
      return c.json({ 
        error: 'Failed to fetch event ticket transactions from database', 
        details: error.message 
      }, 500);
    }
    
    console.log(`Found ${transactions?.length || 0} transaction rows for event ${eventId}`);
    
    // Group transactions by customer for easier management
    const groupedTransactions = transactions?.reduce((acc: any, transaction: any) => {
      const key = `${transaction.billing_email}_${transaction.created_at.split('T')[0]}`;
      if (!acc[key]) {
        acc[key] = {
          customer_email: transaction.billing_email,
          customer_name: transaction.full_name,
          customer_phone: transaction.billing_phone,
          billing_address: transaction.billing_address,
          ticket_delivery_option: transaction.ticket_delivery_option,
          payment_method: transaction.payment_method,
          transaction_status: transaction.transaction_status,
          created_at: transaction.created_at,
          total_amount: 0,
          tickets: []
        };
      }
      acc[key].total_amount += parseFloat(transaction.total_amount);
      acc[key].tickets.push({
        ticket_tier_id: transaction.ticket_tier_id,
        number_of_tickets: transaction.number_of_tickets,
        amount: transaction.total_amount
      });
      return acc;
    }, {}) || {};
    
    return c.json({ 
      transactions: transactions || [],
      grouped_transactions: Object.values(groupedTransactions),
      summary: {
        total_transaction_rows: transactions?.length || 0,
        unique_customers: Object.keys(groupedTransactions).length,
        total_revenue: transactions?.reduce((sum: number, t: any) => sum + parseFloat(t.total_amount), 0) || 0
      }
    });
  } catch (error) {
    console.error('Error fetching event ticket transactions:', error);
    return c.json({ 
      error: 'Failed to fetch event ticket transactions', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Update ticket transaction status
app.put("/make-server-ecf3a44f/ticket-transactions/:id/status", async (c) => {
  try {
    const transactionId = c.req.param('id');
    const body = await c.req.json();
    const { transaction_status, payment_gateway_transaction_id } = body;
    
    if (!transaction_status) {
      return c.json({ error: 'Missing required field: transaction_status' }, 400);
    }
    
    console.log(`Updating ticket transaction ${transactionId} status to: ${transaction_status}`);
    
    // Update ticket_transactions table
    const { data: updatedTransaction, error } = await supabase
      .from('ticket_transactions')
      .update({ 
        transaction_status,
        payment_gateway_transaction_id: payment_gateway_transaction_id || null,
        updated_at: new Date().toISOString()
      })
      .eq('id', transactionId)
      .select('*')
      .single();
      
    if (error) {
      console.error('Database error updating ticket transaction:', error);
      if (error.code === 'PGRST116') {
        return c.json({ error: 'Ticket transaction not found' }, 404);
      }
      return c.json({ 
        error: 'Failed to update ticket transaction in database', 
        details: error.message 
      }, 500);
    }
    
    console.log('Ticket transaction status updated successfully:', transactionId);
    
    return c.json({ 
      message: 'Ticket transaction status updated successfully', 
      transaction: updatedTransaction
    });
  } catch (error) {
    console.error('Error updating ticket transaction status:', error);
    return c.json({ 
      error: 'Failed to update ticket transaction status', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Initialize sample data in Advertising_Banner table if empty
app.post("/make-server-ecf3a44f/initialize-data", async (c) => {
  try {
    console.log('Initializing sample data in Advertising_Banner table...');
    
    // Check if Advertising_Banner table exists and has data
    const { data: existingBanners, error: bannerError } = await supabase
      .from('Advertising_Banner')
      .select('id')
      .limit(1);
      
    if (bannerError) {
      console.log('Advertising_Banner table error:', bannerError);
      return c.json({ 
        error: 'Cannot initialize data - Advertising_Banner table not accessible',
        details: bannerError.message,
        table: 'Advertising_Banner'
      }, 500);
    }
    
    if (!existingBanners || existingBanners.length === 0) {
      console.log('No banners found in Advertising_Banner table, creating sample data...');
      
      // Create sample advertising banners
      const sampleBanners = [
        { image_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop&auto=format' },
        { image_url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=400&fit=crop&auto=format' },
        { image_url: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&h=400&fit=crop&auto=format' }
      ];
      
      const { error: insertError } = await supabase
        .from('Advertising_Banner')
        .insert(sampleBanners);
        
      if (insertError) {
        console.log('Error inserting sample banners into Advertising_Banner table:', insertError);
        return c.json({ 
          error: 'Failed to initialize sample banners',
          details: insertError.message,
          table: 'Advertising_Banner'
        }, 500);
      }
      
      console.log('Sample banners created successfully in Advertising_Banner table');
    } else {
      console.log('Advertising_Banner table already has data, skipping initialization');
    }
    
    return c.json({ message: 'Data initialization completed for Advertising_Banner table' });
  } catch (error) {
    console.log('Error initializing data:', error);
    return c.json({ 
      error: 'Failed to initialize data', 
      details: error.message,
      table: 'Advertising_Banner'
    }, 500);
  }
});

Deno.serve(app.fetch);