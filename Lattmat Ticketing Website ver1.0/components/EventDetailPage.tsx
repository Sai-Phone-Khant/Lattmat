import { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, X, Minus, Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PaymentPage } from './PaymentPage';

// Import the original logo and images from Figma
import imgLattmat2 from "../imports/figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";
import imgFloorPlan from "../imports/figma:asset/b4f7510077295e920b803b10200a84fba436f7d4.png";
import imgFloorPlan1 from "../imports/figma:asset/eae313a48883a46e7a2a60ee806e73a8052191be.png";
import imgFloorPlan2 from "../imports/figma:asset/2e99086b095ca7cbe92593d0cfcb8eb99814df15.png";
import imgFloorPlan3 from "../imports/figma:asset/2824de8b32f9a571dfaf6d46a1a9f7681cc8bd47.png";
import imgFloorPlan4 from "../imports/figma:asset/97294dee0ce033ab88d20986d4756e7800ee195f.png";
import imgFloorPlan5 from "../imports/figma:asset/da98676d10ff7bcea750c145400133269eeb489d.png";
import imgRectangle88 from "../imports/figma:asset/674f7549f9e3c7ab54e25c11e880d2766c64c7e8.png";

interface EventDetailPageProps {
  event: {
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
  };
  onClose: () => void;
}

export function EventDetailPage({ event, onClose }: EventDetailPageProps) {
  const [selectedDate, setSelectedDate] = useState('2024.01.02');
  const [selectedLocation, setSelectedLocation] = useState('Yangon');
  const [gaQuantity, setGaQuantity] = useState(0);
  const [vipQuantity, setVipQuantity] = useState(0);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    venue: true,
    location: true,
    dateTime: true,
    ticketTiers: true
  });

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleGaQuantityChange = (change: number) => {
    setGaQuantity(prev => Math.max(0, prev + change));
  };

  const handleVipQuantityChange = (change: number) => {
    setVipQuantity(prev => Math.max(0, prev + change));
  };

  const handleBuyNow = () => {
    if (totalAmount > 0) {
      setShowPaymentPage(true);
    }
  };

  const handleBackFromPayment = () => {
    setShowPaymentPage(false);
  };

  const floorPlanImages = [
    imgFloorPlan,
    imgFloorPlan1,
    imgFloorPlan2,
    imgFloorPlan3,
    imgFloorPlan4,
    imgFloorPlan5
  ];

  const dates = ['2024.01.02', '2024.01.03', '2024.01.04', '2024.01.05'];
  const locations = ['Yangon', 'Mandalay', 'Taunggyi'];

  const getCategoryTags = () => {
    const baseTags = ['2023'];
    switch (event.category) {
      case 'concerts':
        return ['EDM Festival', 'Concert', ...baseTags];
      case 'night':
        return ['Night Party', 'Club', ...baseTags];
      case 'arts':
        return ['Art Exhibition', 'Culture', ...baseTags];
      case 'sports':
        return ['Sports Event', 'Championship', ...baseTags];
      case 'restaurants':
        return ['Food Festival', 'Dining', ...baseTags];
      case 'funs':
        return ['Entertainment', 'Comedy', ...baseTags];
      default:
        return baseTags;
    }
  };

  const totalAmount = (gaQuantity * 50000) + (vipQuantity * 300000);

  // Show payment page if user clicked Buy Now
  if (showPaymentPage) {
    return (
      <PaymentPage
        event={event}
        ticketData={{
          gaQuantity,
          vipQuantity,
          totalAmount
        }}
        onBack={handleBackFromPayment}
        onHome={onClose}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md relative z-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px] py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ImageWithFallback src={imgLattmat2} alt="Lattmat" className="h-8 sm:h-10 lg:h-12" />
            </div>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <button onClick={onClose} className="text-blue-700 hover:text-blue-800">Home</button>
              <a href="#" className="text-gray-700 hover:text-blue-700">Support</a>
              <a href="#" className="text-gray-700 hover:text-blue-700">Your Ticket</a>
              <div className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center space-x-2">
                <span className="text-gray-700">Daniel</span>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="flex items-center space-x-2 text-gray-700">
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </nav>
            <button onClick={onClose} className="md:hidden p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-[150px] py-8">
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: '#000000', opacity: 0.3 }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4">{event.title}</h1>
              <p className="text-sm sm:text-base lg:text-lg">{event.venue} • {event.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-[150px] py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column - Information */}
          <div className="flex-1">
            {/* Event Information */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-xl lg:text-2xl mb-4">Event Description</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                {event.description}
              </p>

              <h3 className="text-lg lg:text-xl mb-4">Additional Information</h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm sm:text-base">
                <li>• Tickets are available online and at select retailers.</li>
                <li>• Limited VIP packages are available, which include access to a private area with a dedicated bar and restrooms.</li>
                <li>• The venue is located at: {event.venue}, {event.location}.</li>
                <li>• Parking is available on-site.</li>
                <li>• Public transportation is also available.</li>
              </ul>

              <h3 className="text-lg lg:text-xl mb-4">Notice of Awareness</h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm sm:text-base">
                <li>• Don't bring illegal substances.</li>
                <li>• Don't drink and drive.</li>
                <li>• Don't litter.</li>
                <li>• Don't fight or cause trouble.</li>
                <li>• Don't leave valuables unattended.</li>
                <li>• Don't take photos or videos of others without their permission.</li>
                <li>• Don't be rude or disrespectful to other attendees.</li>
              </ul>

              <h3 className="text-lg lg:text-xl mb-4">Follow Us on Social Media</h3>
              <div className="flex space-x-4 mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">f</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">V</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">i</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">Y</span>
                </div>
              </div>

              <h3 className="text-lg lg:text-xl mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {getCategoryTags().map((tag, index) => (
                  <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Floor Plans */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {floorPlanImages.map((image, index) => (
                <div key={index} className="relative">
                  <ImageWithFallback
                    src={image}
                    alt={`Floor plan ${index + 1}`}
                    className="w-full h-32 sm:h-40 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="w-full lg:w-80 xl:w-96">
            <div className="bg-white rounded-lg p-6 sticky top-8">
              {/* Event Venue */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('venue')}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg lg:text-xl">Event Venue</h3>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.venue ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.venue && (
                  <div className="mb-4">
                    <ImageWithFallback
                      src={imgRectangle88}
                      alt="Venue map"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="border-t pt-6 mb-6"></div>

              {/* Location */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('location')}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg lg:text-xl">Location</h3>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.location ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.location && (
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => setSelectedLocation(location)}
                        className={`px-3 sm:px-4 py-2 rounded border text-sm sm:text-base ${
                          selectedLocation === location
                            ? 'bg-blue-700 text-white border-blue-700'
                            : 'bg-white text-gray-700 border-gray-300'
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t pt-6 mb-6"></div>

              {/* Date & Time */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('dateTime')}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg lg:text-xl">Date &amp; Time</h3>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.dateTime ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.dateTime && (
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {dates.slice(0, 3).map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`px-3 sm:px-4 py-2 rounded border text-sm sm:text-base ${
                            selectedDate === date
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'bg-white text-gray-700 border-gray-300'
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dates.slice(3).map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`px-3 sm:px-4 py-2 rounded border text-sm sm:text-base ${
                            selectedDate === date
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'bg-white text-gray-700 border-gray-300'
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t pt-6 mb-6"></div>

              {/* Ticket Selection */}
              <div className="mb-6">
                {/* GA Ticket */}
                <div className="mb-6">
                  <h3 className="text-lg lg:text-xl text-gray-700 mb-2">GA ticket</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm sm:text-base">50,000 Ks</p>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleGaQuantityChange(-1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                        disabled={gaQuantity <= 0}
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="w-8 text-center text-gray-700 text-sm sm:text-base">{gaQuantity}</span>
                      <button
                        onClick={() => handleGaQuantityChange(1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* VIP Ticket */}
                <div className="mb-6">
                  <h3 className="text-lg lg:text-xl text-gray-700 mb-2">VIP Ticket</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm sm:text-base">300,000 Ks</p>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleVipQuantityChange(-1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                        disabled={vipQuantity <= 0}
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="w-8 text-center text-gray-700 text-sm sm:text-base">{vipQuantity}</span>
                      <button
                        onClick={() => handleVipQuantityChange(1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mb-6"></div>

              {/* Total Amount */}
              {totalAmount > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg lg:text-xl text-gray-700">Total</h3>
                    <p className="text-lg lg:text-xl text-blue-600">{totalAmount.toLocaleString()} Ks</p>
                  </div>
                </div>
              )}

              {/* Buy Now Button */}
              <button 
                onClick={handleBuyNow}
                className={`w-full py-3 sm:py-4 rounded-lg text-lg lg:text-xl transition-colors ${
                  totalAmount > 0 
                    ? 'bg-blue-700 text-white hover:bg-blue-800' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={totalAmount <= 0}
              >
                {totalAmount > 0 ? 'Buy Now' : 'Select Tickets'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-gray-400">Copyright@2022 by Lattmat</p>
          </div>
        </div>
      </footer>
    </div>
  );
}