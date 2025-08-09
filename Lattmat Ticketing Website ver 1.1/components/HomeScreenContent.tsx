import { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
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

export function HomeScreenContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
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

  const EventCard = ({ event }: { event: Event }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
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
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm">
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
              <button className="bg-blue-700 text-white px-4 lg:px-6 py-2 rounded-lg hover:bg-blue-800">
                Sign Up
              </button>
              <div className="flex items-center space-x-2 border border-gray-300 rounded px-3 py-2">
                <span className="text-gray-700">EN</span>
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </div>
            </nav>
            <div className="md:hidden flex items-center space-x-3">
              <button className="bg-blue-700 text-white px-3 py-1 rounded text-xs hover:bg-blue-800">
                Sign Up
              </button>
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
                  className={`relative h-28 sm:h-32 lg:h-40 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                    selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 right-2 sm:right-3 lg:right-4">
                    <p className="text-white text-sm sm:text-base lg:text-lg font-medium text-center">
                      {category.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Advertising Banners Carousel */}
      {!isLoadingBanners && banners.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-16">
          <Container>
            <div 
              className="relative h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              {/* Current Banner */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={banners[currentSlide]?.image || banners[0]?.image}
                  alt="Advertisement"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              </div>
              
              {/* Navigation Buttons */}
              {banners.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="Previous banner"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="Next banner"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Dots Indicator */}
              {banners.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to banner ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Events Sections */}
      {!isLoadingEvents && (
        <>
          {/* Trending Events */}
          {trendingEvents.length > 0 && (
            <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
              <Container>
                <h2 className="mb-6 sm:mb-8 lg:mb-10 text-center">Trending</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {trendingEvents.slice(0, 8).map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </Container>
            </section>
          )}

          {/* Early Access Events */}
          {earlyAccessEvents.length > 0 && (
            <section className="py-8 sm:py-12 lg:py-16">
              <Container>
                <h2 className="mb-6 sm:mb-8 lg:mb-10 text-center">Early Access</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {earlyAccessEvents.slice(0, 8).map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </Container>
            </section>
          )}
        </>
      )}

      {/* Loading States */}
      {isLoadingEvents && (
        <section className="py-8 sm:py-12 lg:py-16">
          <Container>
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-32 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mb-4 w-2/3"></div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <div className="h-4 bg-gray-200 rounded w-20"></div>
                          <div className="h-8 bg-gray-200 rounded w-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div>
              <ImageWithFallback src={imgLattmat2} alt="Lattmat" className="h-8 sm:h-10 mb-4 brightness-0 invert" />
              <p className="text-gray-400 text-sm sm:text-base">
                Don't miss your happiness. Find and book the best events in your city.
              </p>
            </div>
            <div>
              <h3 className="mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2024 Lattmat. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}