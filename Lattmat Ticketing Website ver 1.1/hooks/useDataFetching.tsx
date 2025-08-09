import { useState, useEffect } from 'react';
import { Category, Banner, Event } from '../types';
import { FALLBACK_CATEGORIES, FALLBACK_BANNERS } from '../constants/fallbackData';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function useCategories() {
  const [categories] = useState<Category[]>(FALLBACK_CATEGORIES);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  // Simply return the fallback categories - no database fetching
  return { categories, isLoading, error };
}

export function useBanners() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log('Fetching banners from Advertising_Banner table...');
        
        // Check if we're in development mode
        if (!projectId || !publicAnonKey) {
          throw new Error('Supabase configuration missing');
        }

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
          const errorData = await response.json().catch(() => ({ details: 'Unknown server error' }));
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
        
      } catch (error) {
        console.error('Error fetching advertising banners from Advertising_Banner table:', error);
        
        // Check if it's a network error
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
          setError('Network connection error. Please check your internet connection and try again.');
        } else {
          setError(error instanceof Error ? error.message : 'Unknown error occurred');
        }
        
        // Fallback to default banners if database fails
        console.log('Using fallback banners due to Advertising_Banner table error');
        setBanners(FALLBACK_BANNERS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanners();
  }, []); // Removed currentSlide dependency to prevent unnecessary refetching

  return { banners, isLoading, error };
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log('Fetching events from database...');
        
        // Check if we're in development mode
        if (!projectId || !publicAnonKey) {
          throw new Error('Supabase configuration missing');
        }
        
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
          const errorData = await response.json().catch(() => ({ details: 'Unknown server error' }));
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
        
        // Check if it's a network error
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
          setError('Network connection error. Please check your internet connection and try again.');
        } else {
          setError(error instanceof Error ? error.message : 'Unknown error occurred');
        }
        
        // No fallback for events - show empty state if database fails
        console.log('No events loaded due to database error');
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, isLoading, error };
}