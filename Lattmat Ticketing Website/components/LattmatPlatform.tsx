import { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { EventDetailPage } from './EventDetailPage';
import { AuthenticationPage } from './AuthenticationPage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Import the original logo
import imgLattmat2 from "../imports/figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";

interface TicketTier {
  id: string;
  tier_name: string;
  price: number;
  currency: string;
  description: string;
  max_quantity: number;
  available_qty: number;
  event_group_id: string;
}

interface EventGroup {
  id: string;
  name: string;
  description: string;
  venue_place: string;
  event_date: string;
  event_time: string;
  venue_image_url: string;
  venue_image: string;
  ticketTiers: TicketTier[];
}

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  time: string;
  image: string;
  banner_image_url: string;
  description: string;
  price: string;
  isEarlyAccess?: boolean;
  category: string;
  eventGroup: EventGroup;
  eventGroups: EventGroup[];
  ticketTiers: TicketTier[];
}

interface Category {
  id: string;
  name: string;
  image: string;
}

interface Banner {
  id: string;
  image: string;
}

export function LattmatPlatform() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Location');
  const [selectedDate, setSelectedDate] = useState('Date');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isLoadingBanners, setIsLoadingBanners] = useState(true);
  const [bannersError, setBannersError] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);
  const [eventsError, setEventsError] = useState<string | null>(null);
  const [showAuthPage, setShowAuthPage] = useState(false);
  const [user, setUser] = useState<{ name: string; email?: string; phone?: string } | null>(null);

  // Initialize data helper function
  const initializeData = async () => {
    try {
      console.log('Attempting to initialize sample data in Advertising_Banner table...');
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-ecf3a44f/initialize-data`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.log('Initialize data failed:', errorData);
        return false;
      }

      const data = await response.json();
      console.log('Data initialization result:', data);
      return true;
    } catch (error) {
      console.error('Error initializing data:', error);
      return false;
    }
  };

  // Fetch categories from database table
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoadingCategories(true);
        setCategoriesError(null);
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-ecf3a44f/categories`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! status: ${response.status} - ${errorData.details || response.statusText}`);
        }

        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error + (data.details ? `: ${data.details}` : ''));
        }
        
        console.log('Categories loaded from database:', data.categories);
        setCategories(data.categories || []);
        
      } catch (error) {
        console.error('Error fetching categories from database:', error);
        setCategoriesError(error instanceof Error ? error.message : 'Unknown error occurred');
        
        // Fallback to default categories if database fails
        console.log('Using fallback categories due to database error');
        setCategories([
          { 
            id: 'concerts', 
            name: 'Concerts', 
            image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=300&fit=crop&auto=format'
          },
          { 
            id: 'night', 
            name: 'Night', 
            image: 'https://images.unsplash.com/photo-1551447981-c8ba72d8b5be?w=400&h=300&fit=crop&auto=format'
          },
          { 
            id: 'restaurants', 
            name: 'Restaurants', 
            image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop&auto=format'
          },
          { 
            id: 'arts', 
            name: 'Arts', 
            image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&h=300&fit=crop&auto=format'
          },
          { 
            id: 'sports', 
            name: 'Sports', 
            image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&auto=format'
          },
          { 
            id: 'funs', 
            name: 'Funs', 
            image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=300&fit=crop&auto=format'
          }
        ]);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch advertising banners from Advertising_Banner table
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setIsLoadingBanners(true);
        setBannersError(null);
        
        console.log('Fetching banners from Advertising_Banner table...');
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-ecf3a44f/advertising-banners`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.log('Banner fetch failed from Advertising_Banner table, error data:', errorData);
          
          // Try to initialize data if this is a table-related error
          if (response.status === 500 && errorData.details) {
            console.log('Attempting to initialize Advertising_Banner table due to 500 error...');
            const initialized = await initializeData();
            if (initialized) {
              // Retry the fetch after initialization
              console.log('Retrying banner fetch from Advertising_Banner table after initialization...');
              const retryResponse = await fetch(
                `https://${projectId}.supabase.co/functions/v1/make-server-ecf3a44f/advertising-banners`,
                {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${publicAnonKey}`,
                    'Content-Type': 'application/json',
                  },
                }
              );
              
              if (retryResponse.ok) {
                const retryData = await retryResponse.json();
                setBanners(retryData.banners || []);
                console.log('Successfully fetched banners from Advertising_Banner table after initialization:', retryData.banners);
                return;
              }
            }
          }
          
          throw new Error(`HTTP error! status: ${response.status} - ${errorData.details || response.statusText}`);
        }

        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error + (data.details ? `: ${data.details}` : ''));
        }
        
        console.log('Advertising banners loaded from Advertising_Banner table:', data.banners);
        setBanners(data.banners || []);
        
        // Reset carousel to first slide if current slide is out of bounds
        if (data.banners && data.banners.length > 0 && currentSlide >= data.banners.length) {
          setCurrentSlide(0);
        }
        
      } catch (error) {
        console.error('Error fetching advertising banners from Advertising_Banner table:', error);
        setBannersError(error instanceof Error ? error.message : 'Unknown error occurred');
        
        // Fallback to default banners if database fails
        console.log('Using fallback banners due to Advertising_Banner table error');
        setBanners([
          { 
            id: '1', 
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop&auto=format'
          },
          { 
            id: '2', 
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=400&fit=crop&auto=format'
          },
          { 
            id: '3', 
            image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&h=400&fit=crop&auto=format'
          }
        ]);
      } finally {
        setIsLoadingBanners(false);
      }
    };

    fetchBanners();
  }, []);

  // Fetch events from database tables
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoadingEvents(true);
        setEventsError(null);
        
        console.log('Fetching events from database...');
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-ecf3a44f/events`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! status: ${response.status} - ${errorData.details || response.statusText}`);
        }

        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error + (data.details ? `: ${data.details}` : ''));
        }
        
        console.log('Events loaded from database:', data.events?.length || 0, 'events');
        setEvents(data.events || []);
        
      } catch (error) {
        console.error('Error fetching events from database:', error);
        setEventsError(error instanceof Error ? error.message : 'Unknown error occurred');
        
        // No fallback for events - show empty state if database fails
        console.log('No events loaded due to database error');
        setEvents([]);
      } finally {
        setIsLoadingEvents(false);
      }
    };

    fetchEvents();
  }, []);

  // Auto-rotate carousel only if there are banners
  useEffect(() => {
    if (!isCarouselPaused && banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isCarouselPaused, banners.length]);

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const trendingEvents = filteredEvents.filter(event => !event.isEarlyAccess);
  const earlyAccessEvents = filteredEvents.filter(event => event.isEarlyAccess);

  const handleEventClick = async (event: Event) => {
    try {
      console.log('Fetching detailed event data for event:', event.id);
      
      // Fetch complete event data with nested relationships
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-ecf3a44f/events/${event.id}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        console.error('Failed to fetch detailed event data');
        // Fallback to using the event data we already have
        setSelectedEvent(event);
        setShowDetailPage(true);
        return;
      }

      const data = await response.json();
      
      if (data.error) {
        console.error('Error fetching detailed event data:', data.error);
        // Fallback to using the event data we already have
        setSelectedEvent(event);
        setShowDetailPage(true);
        return;
      }

      console.log('Successfully fetched detailed event data:', {
        id: data.event.id,
        title: data.event.title,
        eventGroups: data.event.eventGroups?.length || 0,
        ticketTiers: data.event.ticketTiers?.length || 0
      });

      // Use the detailed event data with complete nested structure
      setSelectedEvent(data.event);
      setShowDetailPage(true);
      
    } catch (error) {
      console.error('Error fetching detailed event data:', error);
      // Fallback to using the event data we already have
      setSelectedEvent(event);
      setShowDetailPage(true);
    }
  };

  const handleCloseDetailPage = () => {
    setShowDetailPage(false);
    setSelectedEvent(null);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const nextSlide = () => {
    if (banners.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }
  };

  const prevSlide = () => {
    if (banners.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    }
  };

  const handleSignUp = () => {
    setShowAuthPage(true);
  };

  const handleAuthSuccess = (userData: { name: string; email?: string; phone?: string }) => {
    setUser(userData);
    setShowAuthPage(false);
  };

  const handleAuthClose = () => {
    setShowAuthPage(false);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  const handleBuyNow = async (event: Event, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the detail page
    
    try {
      console.log('Fetching detailed event data for buy now:', event.id);
      
      // Fetch complete event data with nested relationships
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-ecf3a44f/events/${event.id}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        console.error('Failed to fetch detailed event data for buy now');
        // Fallback to using the event data we already have
        setSelectedEvent(event);
        setShowDetailPage(true);
        return;
      }

      const data = await response.json();
      
      if (data.error) {
        console.error('Error fetching detailed event data for buy now:', data.error);
        // Fallback to using the event data we already have
        setSelectedEvent(event);
        setShowDetailPage(true);
        return;
      }

      // Use the detailed event data with complete nested structure
      setSelectedEvent(data.event);
      setShowDetailPage(true);
      
    } catch (error) {
      console.error('Error fetching detailed event data for buy now:', error);
      // Fallback to using the event data we already have
      setSelectedEvent(event);
      setShowDetailPage(true);
    }
  };

  // Show authentication page
  if (showAuthPage) {
    return (
      <AuthenticationPage
        onClose={handleAuthClose}
        onSuccess={handleAuthSuccess}
      />
    );
  }

  // Show detail page if an event is selected
  if (showDetailPage && selectedEvent) {
    return (
      <EventDetailPage
        event={selectedEvent}
        onClose={handleCloseDetailPage}
      />
    );
  }

  const EventCard = ({ event }: { event: Event }) => (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={() => handleEventClick(event)}
    >
      <div className="relative">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: '#000000', opacity: 0.2 }} />
        {event.isEarlyAccess && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-lg z-10">
            Early Access
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 min-h-[3.5rem]">
          {event.title}
        </h3>
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-600 mb-1">{event.date}</p>
            <p className="text-gray-600">{event.location}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 mb-1">{event.venue}</p>
            <p className="text-gray-600">{event.time}</p>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 mb-1">Starting from</p>
              <p className="text-blue-600">{event.price}</p>
            </div>
            <button
              onClick={(e) => handleBuyNow(event, e)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Container component for max-width responsive layout
  const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`} style={{ paddingLeft: 'max(1rem, calc((100vw - 1580px) / 2 + 2rem))', paddingRight: 'max(1rem, calc((100vw - 1580px) / 2 + 2rem))' }}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md relative z-10">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ImageWithFallback src={imgLattmat2} alt="Lattmat" className="h-8 sm:h-10 lg:h-12" />
            </div>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a href="#" className="text-blue-700">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-700">Support</a>
              <a href="#" className="text-gray-700 hover:text-blue-700">Your Ticket</a>
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2">
                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-gray-700 text-sm">{user.name}</span>
                    <button
                      onClick={handleSignOut}
                      className="text-gray-500 hover:text-gray-700 ml-2"
                      title="Sign Out"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={handleSignUp}
                  className="bg-blue-700 text-white px-4 lg:px-6 py-2 rounded-lg hover:bg-blue-800"
                >
                  Sign Up
                </button>
              )}
              <div className="flex items-center space-x-2 border border-gray-300 rounded px-3 py-2">
                <span className="text-gray-700">EN</span>
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </div>
            </nav>
            <div className="md:hidden flex items-center space-x-3">
              {user ? (
                <div className="flex items-center space-x-2 bg-gray-100 border border-gray-300 rounded-lg px-2 py-1">
                  <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-700 text-xs">{user.name.split(' ')[0]}</span>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-500 hover:text-gray-700"
                    title="Sign Out"
                  >
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handleSignUp}
                  className="bg-blue-700 text-white px-3 py-1 rounded text-xs hover:bg-blue-800"
                >
                  Sign Up
                </button>
              )}
              <button className="p-2">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-700"></div>
                  <div className="w-full h-0.5 bg-gray-700"></div>
                  <div className="w-full h-0.5 bg-gray-700"></div>
                </div>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Section with Search */}
      <section className="bg-blue-700 py-8 sm:py-12 lg:py-16">
        <Container>
          <div className="bg-white rounded-xl border border-gray-300 p-2 w-full">
            {/* Single row flex container for all search elements */}
            <div className="flex items-center">
              {/* Search Input - Flexible but with minimum width */}
              <div className="flex items-center space-x-3 flex-1 px-3 sm:px-4 min-w-0" style={{ minWidth: '200px' }}>
                <Search className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 py-3 lg:py-4 text-sm sm:text-base lg:text-lg text-gray-800 placeholder-gray-500 border-none outline-none bg-transparent min-w-0"
                />
              </div>
              
              {/* Location Selector */}
              <div className="flex items-center space-x-2 border-l border-gray-300 px-3 sm:px-4 py-3 lg:py-4">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="text-gray-700 bg-transparent border-none outline-none text-sm sm:text-base"
                  style={{ minWidth: '80px' }}
                >
                  <option value="Location">Location</option>
                  <option value="YGN, Myanmar">YGN, Myanmar</option>
                  <option value="BKK, Thailand">BKK, Thailand</option>
                </select>
              </div>
              
              {/* Date Selector */}
              <div className="flex items-center space-x-2 border-l border-gray-300 px-3 sm:px-4 py-3 lg:py-4">
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="text-gray-700 bg-transparent border-none outline-none text-sm sm:text-base"
                  style={{ minWidth: '80px' }}
                >
                  <option value="Date">Date</option>
                  <option value="This Week">This Week</option>
                  <option value="This Month">This Month</option>
                  <option value="Next Month">Next Month</option>
                </select>
              </div>
              
              {/* Search Button */}
              <button className="bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-blue-800 transition-colors flex-shrink-0 text-sm sm:text-base">
                Search
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <Container>
          {/* Show error message if categories failed to load from database */}
          {categoriesError && (
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                ⚠️ Unable to load categories from database: {categoriesError}. Using fallback data.
              </p>
            </div>
          )}
          
          {isLoadingCategories ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-28 sm:h-32 lg:h-40 rounded-xl bg-gray-200 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`relative h-28 sm:h-32 lg:h-40 rounded-xl overflow-hidden transition-all duration-200 transform hover:scale-105 ${
                    selectedCategory === category.id ? 'ring-4 ring-blue-500' : ''
                  }`}
                >
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: '#000000', opacity: 0.2 }} />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-white text-sm sm:text-base lg:text-xl">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Banner Carousel - Connected to Advertising_Banner table */}
      <section className="py-8 sm:py-12 lg:py-16">
        <Container>
          {/* Show error message if banners failed to load from Advertising_Banner table */}
          {bannersError && (
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                ⚠️ Unable to load advertising banners from Advertising_Banner table: {bannersError}. Using fallback data.
              </p>
            </div>
          )}
          
          {isLoadingBanners ? (
            <div className="relative rounded-xl overflow-hidden">
              <div className="h-48 sm:h-64 lg:h-80 bg-gray-200 animate-pulse" />
            </div>
          ) : banners.length > 0 ? (
            <div 
              className="relative rounded-xl overflow-hidden"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              <div className="relative h-48 sm:h-64 lg:h-80">
                <ImageWithFallback
                  src={banners[currentSlide]?.image}
                  alt={`Advertisement Banner ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ backgroundColor: '#000000', opacity: 0.2 }} />
              </div>
              
              {/* Navigation arrows - only show if more than 1 banner */}
              {banners.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all z-20"
                  >
                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all z-20"
                  >
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                  
                  {/* Dots indicator - only show if more than 1 banner */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {banners.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-100 rounded-xl">
              <p className="text-gray-600 text-lg">No advertising banners available from Advertising_Banner table</p>
            </div>
          )}
        </Container>
      </section>

      {/* Trending Events - Now database-driven */}
      <section className="py-8 sm:py-12 lg:py-16">
        <Container>
          {/* Show error message if events failed to load from database */}
          {eventsError && (
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                ⚠️ Unable to load events from database: {eventsError}
              </p>
            </div>
          )}

          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Trending Now</h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-700 mx-auto rounded-full" />
          </div>
          
          {isLoadingEvents ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-xl h-80 animate-pulse" />
              ))}
            </div>
          ) : trendingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {trendingEvents.slice(0, 6).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {eventsError ? 'Unable to load events from database.' : 'No trending events found matching your criteria.'}
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Early Access Events - Now database-driven */}
      {earlyAccessEvents.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl mb-4">Early Access</h2>
              <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {earlyAccessEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Features Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: '⏰',
                title: 'Save time & money',
                description: "Don't need to panic to get your favorite concert's ticket. We can help you what you want"
              },
              {
                icon: '🎫',
                title: 'Easy to buy tickets',
                description: "Don't need to panic to get your favorite concert's ticket. We can help you what you want"
              },
              {
                icon: '💳',
                title: 'Variety Of Payments',
                description: "Don't need to panic to get your favorite concert's ticket. We can help you what you want"
              },
              {
                icon: '⚡',
                title: 'Anytime Anywhere',
                description: "Don't need to panic to get your favorite concert's ticket. We can help you what you want"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 lg:p-8 text-center border border-gray-200 shadow-sm">
                <div className="text-3xl lg:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg lg:text-xl text-blue-700 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div>
              <ImageWithFallback src={imgLattmat2} alt="Lattmat" className="h-8 sm:h-10 lg:h-12 mb-4 brightness-0 invert" />
              <p className="text-gray-400 mb-4">Don't miss your happiness</p>
              <div className="space-y-2">
                <h4>Contact Us</h4>
                <p className="text-gray-400">+959 999 999 999</p>
                <p className="text-gray-400">+959 666 666 666</p>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">Home</a>
                <a href="#" className="block text-gray-400 hover:text-white">Concerts</a>
                <a href="#" className="block text-gray-400 hover:text-white">Arts</a>
                <a href="#" className="block text-gray-400 hover:text-white">Sports</a>
                <a href="#" className="block text-gray-400 hover:text-white">Funs</a>
                <a href="#" className="block text-gray-400 hover:text-white">Nights</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Others</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">Support</a>
                <a href="#" className="block text-gray-400 hover:text-white">Term & Conditions</a>
                <a href="#" className="block text-gray-400 hover:text-white">Privacy Policies</a>
                <a href="#" className="block text-gray-400 hover:text-white">FAQs</a>
                <a href="#" className="block text-gray-400 hover:text-white">Careers</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Follow us on</h4>
              <div className="flex space-x-4 mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                  <span className="text-lg lg:text-xl">f</span>
                </div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                  <span className="text-lg lg:text-xl">t</span>
                </div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                  <span className="text-lg lg:text-xl">i</span>
                </div>
              </div>
              <h4 className="mb-4">Download from</h4>
              <div className="space-y-2">
                <div className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors cursor-pointer">
                  <span>App Store</span>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors cursor-pointer">
                  <span>Google Play</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">Copyright@2022 by Lattmat</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}