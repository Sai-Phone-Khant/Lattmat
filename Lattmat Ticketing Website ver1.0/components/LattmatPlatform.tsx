import { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { EventDetailPage } from './EventDetailPage';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import the original logo
import imgLattmat2 from "../imports/figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  time: string;
  image: string;
  description: string;
  price: string;
  isEarlyAccess?: boolean;
  category: string;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'To Sir, With Love 1st Fan Meeting',
    date: 'Feb 7, 2023',
    location: 'YGN, Myanmar',
    venue: 'Novotel Hotel',
    time: '15:00 PM',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&auto=format',
    description: 'An intimate fan meeting with beloved artists, featuring exclusive performances, meet & greet sessions, and unforgettable moments.',
    price: '90,000 MMK',
    category: 'concerts'
  },
  {
    id: '2',
    title: 'Black Pink - Born Pink World Tour Hong Kong',
    date: 'Apr 4, 2023',
    location: 'BKK, Thailand',
    venue: 'Asiaworld Arena',
    time: '18:00 PM',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop&auto=format',
    description: 'BLACKPINK brings their Born Pink World Tour to Hong Kong with spectacular performances and stunning visuals.',
    price: '240,000 MMK',
    category: 'concerts'
  },
  {
    id: '3',
    title: 'Art Modern Exhibition',
    date: 'June 1, 2023',
    location: 'YGN, Myanmar',
    venue: 'National Museum',
    time: '15:00 PM',
    image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop&auto=format',
    description: 'Experience the finest collection of modern art from renowned artists around the world.',
    price: '50,000 MMK',
    category: 'arts'
  },
  {
    id: '4',
    title: 'Halloween Scariest Night',
    date: 'Oct 25, 2023',
    location: 'YGN, Myanmar',
    venue: 'YGN Bustro',
    time: '22:00 - 24:00 AM',
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&h=400&fit=crop&auto=format',
    description: 'The ultimate Halloween experience with spine-chilling performances and haunting atmosphere.',
    price: '70,000 MMK',
    category: 'night'
  },
  {
    id: '5',
    title: 'Taylor Swift - Reputation Tour',
    date: 'Nov 1st, 2023',
    location: 'BKK, Thailand',
    venue: 'BKK Inter Stadium',
    time: '18:00 PM',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&auto=format',
    description: 'Taylor Swift brings her iconic Reputation Tour with all the hit songs and spectacular stage production.',
    price: '300,000 MMK',
    category: 'concerts',
    isEarlyAccess: true
  },
  {
    id: '6',
    title: 'Aveo Beat - Unstoppable Party',
    date: 'May 25, 2023',
    location: 'YGN, Myanmar',
    venue: 'Aveo Bar',
    time: '21:00 - 4:00 AM',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
    description: 'Non-stop electronic music party with top DJs and an incredible sound system.',
    price: '80,000 MMK',
    category: 'night',
    isEarlyAccess: true
  },
  {
    id: '7',
    title: 'EDM Festival 2023',
    date: 'Dec 15, 2023',
    location: 'YGN, Myanmar',
    venue: 'Convention Center',
    time: '20:00 PM',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop&auto=format',
    description: 'The biggest EDM festival featuring international DJs and mind-blowing stage production.',
    price: '150,000 MMK',
    category: 'concerts',
    isEarlyAccess: true
  },
  {
    id: '8',
    title: 'Jazz Night Experience',
    date: 'Aug 20, 2023',
    location: 'YGN, Myanmar',
    venue: 'Blue Note Club',
    time: '19:30 PM',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=600&h=400&fit=crop&auto=format',
    description: 'An intimate jazz performance featuring renowned musicians from around the world.',
    price: '60,000 MMK',
    category: 'concerts'
  },
  {
    id: '9',
    title: 'Food Festival Weekend',
    date: 'Sep 10, 2023',
    location: 'YGN, Myanmar',
    venue: 'Central Park',
    time: '12:00 - 20:00 PM',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format',
    description: 'A culinary adventure featuring the best restaurants and street food vendors in the city.',
    price: '30,000 MMK',
    category: 'restaurants'
  },
  {
    id: '10',
    title: 'Basketball Championship',
    date: 'Jul 15, 2023',
    location: 'YGN, Myanmar',
    venue: 'Sports Arena',
    time: '19:00 PM',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop&auto=format',
    description: 'Watch the most exciting basketball matches with top teams competing for the championship.',
    price: '40,000 MMK',
    category: 'sports'
  },
  {
    id: '11',
    title: 'Comedy Night Show',
    date: 'Aug 5, 2023',
    location: 'YGN, Myanmar',
    venue: 'Laugh Factory',
    time: '20:00 PM',
    image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=600&h=400&fit=crop&auto=format',
    description: 'An evening filled with laughter featuring the best comedians in town.',
    price: '35,000 MMK',
    category: 'funs'
  },
  {
    id: '12',
    title: 'Rooftop Sunset Party',
    date: 'Jun 20, 2023',
    location: 'BKK, Thailand',
    venue: 'Sky Bar',
    time: '18:00 - 02:00 AM',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=600&h=400&fit=crop&auto=format',
    description: 'Enjoy breathtaking city views while dancing to the best DJs under the stars.',
    price: '120,000 MMK',
    category: 'night',
    isEarlyAccess: true
  }
];

const categories = [
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
];

const bannerSlides = [
  {
    id: 1,
    title: 'Experience the Beat',
    subtitle: 'Join the ultimate EDM concerts this season',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop&auto=format',
    cta: 'Book Now'
  },
  {
    id: 2,
    title: 'Early Access Available',
    subtitle: 'Get exclusive access to premium events',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=400&fit=crop&auto=format',
    cta: 'Get Access'
  },
  {
    id: 3,
    title: 'Don\'t Miss Out',
    subtitle: 'Limited tickets available for trending events',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&h=400&fit=crop&auto=format',
    cta: 'View Events'
  }
];

export function LattmatPlatform() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Location');
  const [selectedDate, setSelectedDate] = useState('Date');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isCarouselPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isCarouselPaused]);

  const filteredEvents = mockEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const trendingEvents = filteredEvents.filter(event => !event.isEarlyAccess);
  const earlyAccessEvents = filteredEvents.filter(event => event.isEarlyAccess);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setShowDetailPage(true);
  };

  const handleCloseDetailPage = () => {
    setShowDetailPage(false);
    setSelectedEvent(null);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const handleBuyNow = (event: Event, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the detail page
    setSelectedEvent(event);
    setShowDetailPage(true);
  };

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md relative z-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px] py-4">
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
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-700"></div>
                <div className="w-full h-0.5 bg-gray-700"></div>
                <div className="w-full h-0.5 bg-gray-700"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Search - Fixed single row layout */}
      <section className="bg-blue-700 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
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
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
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
        </div>
      </section>

      {/* Banner Carousel - Now with auto-rotation */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
          <div 
            className="relative rounded-xl overflow-hidden"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <div className="relative h-48 sm:h-64 lg:h-80">
              <ImageWithFallback
                src={bannerSlides[currentSlide].image}
                alt={bannerSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ backgroundColor: '#000000', opacity: 0.2 }} />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center text-white px-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">
                    {bannerSlides[currentSlide].title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                    {bannerSlides[currentSlide].subtitle}
                  </p>
                  <button className="bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-800 transition-colors">
                    {bannerSlides[currentSlide].cta}
                  </button>
                </div>
              </div>
            </div>
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Events */}
      {trendingEvents.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl mb-4">Trending Now</h2>
              <div className="w-16 sm:w-24 h-1 bg-blue-700 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {trendingEvents.slice(0, 6).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            
            {trendingEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No trending events found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Early Access Events */}
      {earlyAccessEvents.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl mb-4">Early Access</h2>
              <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {earlyAccessEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
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
        </div>
      </footer>
    </div>
  );
}