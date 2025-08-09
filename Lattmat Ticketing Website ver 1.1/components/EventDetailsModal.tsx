import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    date: string;
    location: string;
    venue: string;
    time: string;
    image: string;
    description: string;
    price: string;
    isEarlyAccess?: boolean;
  };
}

export function EventDetailsModal({
  isOpen,
  onClose,
  event,
}: EventDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-64 bg-center bg-cover rounded-t-lg overflow-hidden">
            <ImageWithFallback
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#000000",
                opacity: 0.2,
              }}
            />
            {event.isEarlyAccess && (
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg z-10">
                Early Access
              </div>
            )}
          </div>

          <div className="p-6">
            <h2 className="text-2xl text-gray-800 mb-4">
              {event.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-gray-700 mb-2">
                  Date & Time
                </h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-600">{event.time}</p>
              </div>
              <div>
                <h3 className="text-gray-700 mb-2">Location</h3>
                <p className="text-gray-600">{event.venue}</p>
                <p className="text-gray-600">
                  {event.location}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-gray-700 mb-2">
                About this Event
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-700">
                    Starting from
                  </h3>
                  <p className="text-2xl text-blue-600">
                    {event.price}
                  </p>
                </div>
                <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}