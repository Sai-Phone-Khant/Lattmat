import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Event } from '../types';

export function useEventLoader() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadEventDetails = async (eventId: string, onError: () => void) => {
    setIsLoading(true);
    try {
      console.log('Loading event details for ID:', eventId);
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-ecf3a44f/events/${eventId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        console.error('Failed to fetch event details');
        onError();
        return;
      }

      const data = await response.json();
      
      if (data.error) {
        console.error('Error fetching event details:', data.error);
        onError();
        return;
      }

      console.log('Event details loaded:', data.event);
      setSelectedEvent(data.event);
      
    } catch (error) {
      console.error('Error loading event details:', error);
      onError();
    } finally {
      setIsLoading(false);
    }
  };

  const clearEvent = () => {
    setSelectedEvent(null);
  };

  return {
    selectedEvent,
    isLoading,
    loadEventDetails,
    clearEvent
  };
}