import { useRouter, matchRoute } from './utils/router';
import { useState, useEffect } from 'react';
import { User } from './types';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useEventLoader } from './hooks/useEventLoader';
import { createAppHandlers } from './utils/appHandlers';
import { 
  renderAuthPage, 
  renderEventDetailPage, 
  renderPaymentPage, 
  renderPurchaseInfoPage, 
  renderHomePage 
} from './utils/routeRenderers';
import { LOADING_MESSAGES, ROUTES } from './constants/appConstants';
import { SupabaseProvider } from './contexts/SupabaseContext';

function AppContent() {
  const { route, navigate } = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [ticketData, setTicketData] = useState<any>(null);
  
  // Use custom hook for event loading
  const { selectedEvent, isLoading, loadEventDetails, clearEvent } = useEventLoader();
  
  // Create handlers using utility function
  const handlers = createAppHandlers(navigate, setUser, setTicketData);

  // Load event data when on event detail page
  useEffect(() => {
    if (matchRoute(route.path, ROUTES.EVENT) && route.params.id) {
      loadEventDetails(route.params.id, () => navigate(ROUTES.HOME));
    } else if (!matchRoute(route.path, ROUTES.EVENT) && 
               !matchRoute(route.path, ROUTES.PAYMENT) && 
               !matchRoute(route.path, ROUTES.PURCHASE_INFO)) {
      // Clear selected event and ticket data when navigating away from event-related pages
      clearEvent();
      setTicketData(null);
    }
  }, [route.path, route.params.id]);

  // Show loading screen when loading event details or when we're on an event route but don't have event data yet
  if (matchRoute(route.path, ROUTES.EVENT) && (isLoading || !selectedEvent)) {
    return <LoadingSpinner message={LOADING_MESSAGES.EVENT_DETAILS} />;
  }

  // Route-based rendering using extracted render functions
  const routeProps = {
    navigate,
    selectedEvent,
    ticketData,
    user,
    handlers
  };

  if (matchRoute(route.path, ROUTES.AUTH)) {
    return renderAuthPage(routeProps);
  }

  if (matchRoute(route.path, ROUTES.EVENT) && selectedEvent) {
    return renderEventDetailPage(routeProps);
  }

  if (matchRoute(route.path, ROUTES.PAYMENT) && selectedEvent && ticketData) {
    return renderPaymentPage(routeProps);
  }

  if (matchRoute(route.path, ROUTES.PURCHASE_INFO) && selectedEvent && ticketData) {
    return renderPurchaseInfoPage(routeProps);
  }

  // Default to home page
  return renderHomePage(routeProps);
}

export default function App() {
  return (
    <SupabaseProvider>
      <AppContent />
    </SupabaseProvider>
  );
}