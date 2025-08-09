import { Event } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventCardProps {
  event: Event;
  onEventClick: (event: Event) => void;
  onBuyNow: (event: Event, e: React.MouseEvent) => void;
}

export function EventCard({ event, onEventClick, onBuyNow }: EventCardProps) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={() => onEventClick(event)}
    >
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />

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
          <div className="flex-1 mr-4">
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
              onClick={(e) => onBuyNow(event, e)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}