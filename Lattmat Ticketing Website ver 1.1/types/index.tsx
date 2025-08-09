export interface TicketTier {
  id: string;
  tier_name: string;
  price: number;
  currency: string;
  description: string;
  max_quantity: number;
  available_qty: number;
  event_group_id: string;
}

export interface EventGroup {
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

export interface Event {
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

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Banner {
  id: string;
  image: string;
}

export interface User {
  name: string;
  email?: string;
  phone?: string;
}