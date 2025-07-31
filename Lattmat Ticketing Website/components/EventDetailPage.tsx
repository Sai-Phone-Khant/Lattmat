import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Minus,
  Plus,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PaymentPage } from "./PaymentPage";

// Import the original logo and fallback venue image from Figma
import imgLattmat2 from "../imports/figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";
import imgRectangle88 from "../imports/figma:asset/674f7549f9e3c7ab54e25c11e880d2766c64c7e8.png";

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

interface EventDetailPageProps {
  event: {
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
    eventGroups: EventGroup[];
    ticketTiers: TicketTier[];
    additional_images?: string[] | string;
  };
  onClose: () => void;
}

export function EventDetailPage({
  event,
  onClose,
}: EventDetailPageProps) {
  // State for selected event group (controlled by location selection)
  const [selectedEventGroup, setSelectedEventGroup] =
    useState<EventGroup | null>(null);
  const [ticketQuantities, setTicketQuantities] = useState<
    Record<string, number>
  >({});
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    venue: true,
    location: true,
    dateTime: true,
    ticketTiers: true,
  });

  // Initialize with first event group if available
  useEffect(() => {
    if (
      event.eventGroups &&
      event.eventGroups.length > 0 &&
      !selectedEventGroup
    ) {
      setSelectedEventGroup(event.eventGroups[0]);
    }
  }, [event.eventGroups, selectedEventGroup]);

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (
    section: keyof typeof expandedSections,
  ) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleTicketQuantityChange = (
    tierId: string,
    change: number,
  ) => {
    setTicketQuantities((prev) => ({
      ...prev,
      [tierId]: Math.max(0, (prev[tierId] || 0) + change),
    }));
  };

  // Location selection handler - this is the key validation checkpoint
  const handleLocationSelection = (location: string) => {
    // Find the event group that matches the selected location (venue_place)
    const matchingEventGroup = event.eventGroups?.find(
      (group) => group.venue_place === location,
    );
    if (matchingEventGroup) {
      setSelectedEventGroup(matchingEventGroup);
      // Reset ticket quantities when switching event groups
      setTicketQuantities({});
    }
  };

  const handleBuyNow = () => {
    if (totalAmount > 0 && selectedEventGroup) {
      setShowPaymentPage(true);
    }
  };

  const handleBackFromPayment = () => {
    setShowPaymentPage(false);
  };

  // Parse additional images from the event data
  const getAdditionalImages = () => {
    if (!event.additional_images) return [];

    // Handle if additional_images is a JSON string
    if (typeof event.additional_images === "string") {
      try {
        const parsed = JSON.parse(event.additional_images);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        // If it's not valid JSON, treat it as a single URL
        return [event.additional_images];
      }
    }

    // Handle if additional_images is already an array
    if (Array.isArray(event.additional_images)) {
      return event.additional_images;
    }

    return [];
  };

  const additionalImages = getAdditionalImages();

  const getCategoryTags = () => {
    const baseTags = ["2023"];
    switch (event.category) {
      case "concerts":
        return ["EDM Festival", "Concert", ...baseTags];
      case "night":
        return ["Night Party", "Club", ...baseTags];
      case "arts":
        return ["Art Exhibition", "Culture", ...baseTags];
      case "sports":
        return ["Sports Event", "Championship", ...baseTags];
      case "restaurants":
        return ["Food Festival", "Dining", ...baseTags];
      case "funs":
        return ["Entertainment", "Comedy", ...baseTags];
      default:
        return baseTags;
    }
  };

  // Calculate total amount based on selected tickets from current event group
  const totalAmount =
    selectedEventGroup?.ticketTiers.reduce((total, tier) => {
      const quantity = ticketQuantities[tier.id] || 0;
      return total + tier.price * quantity;
    }, 0) || 0;

  // Get unique locations from all event groups (venue_place values)
  const availableLocations =
    event.eventGroups
      ?.map((group) => group.venue_place)
      .filter(
        (place, index, array) => array.indexOf(place) === index,
      ) || [];

  // Get formatted date and time for current selected event group
  const getFormattedDateTime = () => {
    if (!selectedEventGroup) return "TBD";

    const formattedDate = selectedEventGroup.event_date
      ? new Date(
          selectedEventGroup.event_date,
        ).toLocaleDateString("en-CA")
      : "TBD";
    const time = selectedEventGroup.event_time || "TBD";

    return `${formattedDate}, ${time}`;
  };

  // Show payment page if user clicked Buy Now
  if (showPaymentPage && selectedEventGroup) {
    const ticketData = {
      selectedEventGroup,
      ticketQuantities,
      totalAmount,
      selectedTickets: selectedEventGroup.ticketTiers
        .filter((tier) => (ticketQuantities[tier.id] || 0) > 0)
        .map((tier) => ({
          ...tier,
          quantity: ticketQuantities[tier.id] || 0,
        })),
    };

    return (
      <PaymentPage
        event={event}
        ticketData={ticketData}
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
              <ImageWithFallback
                src={imgLattmat2}
                alt="Lattmat"
                className="h-8 sm:h-10 lg:h-12"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <button
                onClick={onClose}
                className="text-blue-700 hover:text-blue-800"
              >
                Home
              </button>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-700"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-700"
              >
                Your Ticket
              </a>
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
            src={event.banner_image_url}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#000000", opacity: 0.3 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4">
                {event.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg">
                {selectedEventGroup?.venue_place || event.venue}{" "}
                • {getFormattedDateTime()}
              </p>
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
              <h2 className="text-xl lg:text-2xl mb-4">
                Event Description
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                {event.description}
              </p>

              <h3 className="text-lg lg:text-xl mb-4">
                Additional Information
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm sm:text-base">
                <li>
                  • Tickets are available online and at select
                  retailers.
                </li>
                <li>
                  • Limited VIP packages are available, which
                  include access to a private area with a
                  dedicated bar and restrooms.
                </li>
                <li>
                  • The venue is located at:{" "}
                  {selectedEventGroup?.venue_place ||
                    event.venue}
                  , {event.location}.
                </li>
                <li>• Parking is available on-site.</li>
                <li>
                  • Public transportation is also available.
                </li>
              </ul>

              <h3 className="text-lg lg:text-xl mb-4">
                Notice of Awareness
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm sm:text-base">
                <li>• Don't bring illegal substances.</li>
                <li>• Don't drink and drive.</li>
                <li>• Don't litter.</li>
                <li>• Don't fight or cause trouble.</li>
                <li>• Don't leave valuables unattended.</li>
                <li>
                  • Don't take photos or videos of others
                  without their permission.
                </li>
                <li>
                  • Don't be rude or disrespectful to other
                  attendees.
                </li>
              </ul>

              <h3 className="text-lg lg:text-xl mb-4">
                Follow Us on Social Media
              </h3>
              <div className="flex space-x-4 mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">
                    f
                  </span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">
                    V
                  </span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">
                    i
                  </span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">
                    Y
                  </span>
                </div>
              </div>

              <h3 className="text-lg lg:text-xl mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {getCategoryTags().map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Images - Only show when data exists */}
            {additionalImages.length > 0 && (
              <div>
                <h3 className="text-lg lg:text-xl mb-4">
                  Additional Images
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {additionalImages.map((image, index) => (
                    <div key={index} className="relative">
                      <ImageWithFallback
                        src={image}
                        alt={`Additional image ${index + 1}`}
                        className="w-full h-32 sm:h-40 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking */}
          <div className="w-full lg:w-80 xl:w-96">
            <div className="bg-white rounded-lg p-6 sticky top-8">
              {/* Event Venue - Dynamic based on selected event group */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection("venue")}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg lg:text-xl">
                    Event Venue
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${expandedSections.venue ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSections.venue && (
                  <div className="mb-4">
                    <ImageWithFallback
                      src={
                        selectedEventGroup?.venue_image_url ||
                        selectedEventGroup?.venue_image ||
                        imgRectangle88
                      }
                      alt="Venue map"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="border-t pt-6 mb-6"></div>

              {/* Location - Dynamic from event_groups, acts as master control */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection("location")}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg lg:text-xl">
                    Location
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${expandedSections.location ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSections.location && (
                  <div>
                    {availableLocations.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {availableLocations.map((location) => {
                          const isSelected =
                            selectedEventGroup?.venue_place ===
                            location;
                          return (
                            <button
                              key={location}
                              onClick={() =>
                                handleLocationSelection(
                                  location,
                                )
                              }
                              className={`px-3 sm:px-4 py-2 rounded border text-sm sm:text-base ${
                                isSelected
                                  ? "bg-blue-700 text-white border-blue-700"
                                  : "bg-white text-gray-700 border-gray-300"
                              }`}
                            >
                              {location}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-gray-600">
                          No locations available
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          Location information will be available
                          once event details are loaded
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="border-t pt-6 mb-6"></div>

              {/* Date & Time - Dynamic based on selected event group */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection("dateTime")}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg lg:text-xl">
                    Date &amp; Time
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${expandedSections.dateTime ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSections.dateTime && (
                  <div>
                    {selectedEventGroup ? (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-700">
                              Date:
                            </span>
                            <span className="text-gray-900">
                              {selectedEventGroup.event_date
                                ? new Date(
                                    selectedEventGroup.event_date,
                                  ).toLocaleDateString("en-CA")
                                : "TBD"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">
                              Time:
                            </span>
                            <span className="text-gray-900">
                              {selectedEventGroup.event_time ||
                                "TBD"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-gray-600">
                          No event group selected
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          Please select a location first to see
                          date and time information
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="border-t pt-6 mb-6"></div>

              {/* Ticket Selection - Dynamic based on selected event group */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection("ticketTiers")}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg lg:text-xl">
                    Ticket Selection
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${expandedSections.ticketTiers ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSections.ticketTiers && (
                  <div>
                    {selectedEventGroup?.ticketTiers &&
                    selectedEventGroup.ticketTiers.length >
                      0 ? (
                      <div className="space-y-6">
                        {selectedEventGroup.ticketTiers.map(
                          (tier) => (
                            <div key={tier.id}>
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="text-lg lg:text-xl text-gray-700">
                                    {tier.tier_name}
                                  </h4>
                                  {tier.description && (
                                    <p className="text-xs text-gray-500">
                                      {tier.description}
                                    </p>
                                  )}
                                </div>
                                <div className="text-right">
                                  <p className="text-gray-600 text-sm sm:text-base">
                                    {tier.price.toLocaleString()}{" "}
                                    {tier.currency || "Ks"}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {tier.available_qty}{" "}
                                    available
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <button
                                    onClick={() =>
                                      handleTicketQuantityChange(
                                        tier.id,
                                        -1,
                                      )
                                    }
                                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    disabled={
                                      (ticketQuantities[
                                        tier.id
                                      ] || 0) <= 0
                                    }
                                  >
                                    <Minus className="w-4 h-4 text-gray-600" />
                                  </button>
                                  <span className="w-8 text-center text-gray-700 text-sm sm:text-base">
                                    {ticketQuantities[
                                      tier.id
                                    ] || 0}
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleTicketQuantityChange(
                                        tier.id,
                                        1,
                                      )
                                    }
                                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    disabled={
                                      (ticketQuantities[
                                        tier.id
                                      ] || 0) >=
                                      tier.available_qty
                                    }
                                  >
                                    <Plus className="w-4 h-4 text-gray-600" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    ) : (
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-gray-600">
                          No ticket tiers available
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          {selectedEventGroup
                            ? "No ticket tiers are currently configured for this location"
                            : "Please select a location first to see available tickets"}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="border-t pt-6 mb-6"></div>

              {/* Total Amount */}
              {totalAmount > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg lg:text-xl text-gray-700">
                      Total
                    </h3>
                    <p className="text-lg lg:text-xl text-blue-600">
                      {totalAmount.toLocaleString()} Ks
                    </p>
                  </div>
                </div>
              )}

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className={`w-full py-3 sm:py-4 rounded-lg text-lg lg:text-xl transition-colors ${
                  totalAmount > 0
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={totalAmount <= 0}
              >
                {totalAmount > 0 ? "Buy Now" : "Select Tickets"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-gray-400">
              Copyright@2022 by Lattmat
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}