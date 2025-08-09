import image_50df3ebe5ebf01bc33f319690539d856be19d740 from 'figma:asset/50df3ebe5ebf01bc33f319690539d856be19d740.png';
import image_e619ae0cd78905b9eb44d2d37fab8eed43f0df2a from 'figma:asset/e619ae0cd78905b9eb44d2d37fab8eed43f0df2a.png';
import image_50df3ebe5ebf01bc33f319690539d856be19d740 from 'figma:asset/50df3ebe5ebf01bc33f319690539d856be19d740.png';
import image_50df3ebe5ebf01bc33f319690539d856be19d740 from 'figma:asset/50df3ebe5ebf01bc33f319690539d856be19d740.png';
import { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Container } from './Container';
import { EventCard } from './EventCard';
import { useCategories, useBanners, useEvents } from '../hooks/useDataFetching';
import { Event, User } from '../types';

// Import the original logo
import imgLattmat2 from "../imports/figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";

interface LattmatPlatformProps {
  user: User | null;
  onEventClick: (event: Event) => void;
  onSignUp: () => void;
  onSignOut: () => void;
  onAuthSuccess: (userData: User) => void;
}

export function LattmatPlatform({ user, onEventClick, onSignUp, onSignOut, onAuthSuccess }: LattmatPlatformProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Location');
  const [selectedDate, setSelectedDate] = useState('Date');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // Use custom hooks for data fetching
  const { categories, isLoading: isLoadingCategories, error: categoriesError } = useCategories();
  const { banners, isLoading: isLoadingBanners, error: bannersError } = useBanners();
  const { events, isLoading: isLoadingEvents, error: eventsError } = useEvents();

  // Auto-rotate carousel only if there are banners
  useEffect(() => {
    if (!isCarouselPaused && banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isCarouselPaused, banners.length]);

  // Reset currentSlide if it's out of bounds when banners change
  useEffect(() => {
    if (banners.length > 0 && currentSlide >= banners.length) {
      setCurrentSlide(0);
    }
  }, [banners.length, currentSlide]);

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

  const handleBuyNow = (event: Event, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the detail page
    onEventClick(event); // Use the prop function instead of internal state
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md relative z-10">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ImageWithFallback src={image_50df3ebe5ebf01bc33f319690539d856be19d740} alt="Lattmat" className="h-8 sm:h-9 lg:h-10 w-auto object-contain" />
              <span className="ml-3 text-xl sm:text-2xl lg:text-3xl text-blue-700 font-bold">Lattmat</span>
            </div>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a href="#/" className="text-blue-700">Home</a>
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
                      onClick={onSignOut}
                      className="text-gray-500 hover:text-gray-700 ml-2"
                      title="Sign Out"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={onSignUp}
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
                    onClick={onSignOut}
                    className="text-gray-500 hover:text-gray-700"
                    title="Sign Out"
                  >
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={onSignUp}
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
            <div className="flex items-center">
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
              
              <button className="bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-blue-800 transition-colors flex-shrink-0 text-sm sm:text-base">
                Search
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 px-[0px] py-[30px]">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative h-28 sm:h-32 lg:h-40 rounded-xl overflow-hidden transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(30,44,212,0.16)] bg-opacity-30 flex items-center justify-center text-[rgba(10,10,10,1)]">
                  <span className="text-[rgba(255,246,246,1)] text-sm sm:text-base lg:text-lg font-bold">
                    {category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Banner Carousel */}
      <section className="py-8 sm:py-12 lg:py-16 px-[0px] py-[30px]">
        <Container>
          {bannersError && (
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                ⚠️ Unable to load banners from Advertising_Banner table: {bannersError}. Using fallback data.
              </p>
            </div>
          )}
          
          {isLoadingBanners ? (
            <div className="relative h-48 sm:h-64 lg:h-80 rounded-xl bg-gray-200 animate-pulse" />
          ) : (
            <div 
              className="relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              {banners.length > 0 && (
                <ImageWithFallback
                  src={banners[currentSlide]?.image || ''}
                  alt={`Banner ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
              
              {banners.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </>
              )}
              
              {banners.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all ${
                        index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </Container>
      </section>

      {/* Trending Events */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 px-[0px] py-[30px]">
        <Container>
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium">Trending Events</h2>
            <button className="text-blue-700 hover:text-blue-800 text-sm sm:text-base">
              View All
            </button>
          </div>
          
          {eventsError && (
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                ⚠️ Unable to load events from database: {eventsError}. No events available.
              </p>
            </div>
          )}
          
          {isLoadingEvents ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 animate-pulse" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : trendingEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {trendingEvents.slice(0, 8).map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onEventClick={onEventClick}
                  onBuyNow={handleBuyNow}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No trending events available at the moment.</p>
              <p className="text-gray-400 text-sm mt-2">Check back later for exciting events!</p>
            </div>
          )}
        </Container>
      </section>

      {/* Early Access Events */}
      {earlyAccessEvents.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-16">
          <Container>
            <div className="flex items-center justify-between mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium">Early Access</h2>
              <button className="text-blue-700 hover:text-blue-800 text-sm sm:text-base">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {earlyAccessEvents.slice(0, 4).map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onEventClick={onEventClick}
                  onBuyNow={handleBuyNow}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div>
              <ImageWithFallback src={image_50df3ebe5ebf01bc33f319690539d856be19d740} alt="Lattmat" className="h-18 sm:h-21 lg:h-24 w-auto object-contain mb-4" />
              <p className="text-gray-400 text-sm">
                Don't miss your happiness. Discover and book the best events in Myanmar.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lattmat. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}