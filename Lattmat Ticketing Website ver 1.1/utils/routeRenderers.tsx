import { AuthenticationPage } from '../components/AuthenticationPage';
import { EventDetailPage } from '../components/EventDetailPage';
import { PaymentPage } from '../components/PaymentPage';
import { PurchaseInformationPage } from '../components/PurchaseInformationPage';
import { LattmatPlatform } from '../components/LattmatPlatform';
import { Event, User } from '../types';

interface RouteRenderProps {
  navigate: (path: string, params?: any) => void;
  selectedEvent: Event | null;
  ticketData: any;
  user: User | null;
  handlers: {
    handleAuthSuccess: (userData: User) => void;
    handlePaymentNavigation: (data: any) => void;
    handleEventClick: (event: Event) => void;
    handleSignOut: () => void;
  };
}

export function renderAuthPage({ navigate, handlers }: RouteRenderProps) {
  return (
    <div className="min-h-screen bg-white">
      <AuthenticationPage
        onClose={() => navigate('/')}
        onSuccess={handlers.handleAuthSuccess}
      />
    </div>
  );
}

export function renderEventDetailPage({ navigate, selectedEvent, handlers }: RouteRenderProps) {
  if (!selectedEvent) return null;
  
  return (
    <div className="min-h-screen bg-white">
      <EventDetailPage
        event={selectedEvent}
        onClose={() => navigate('/')}
        onPayment={handlers.handlePaymentNavigation}
      />
    </div>
  );
}

export function renderPaymentPage({ navigate, selectedEvent, ticketData }: RouteRenderProps) {
  if (!selectedEvent || !ticketData) return null;
  
  return (
    <div className="min-h-screen bg-white">
      <PaymentPage
        event={selectedEvent}
        ticketData={ticketData}
        onBack={() => navigate('/event/:id', { id: selectedEvent.id })}
        onHome={() => navigate('/')}
      />
    </div>
  );
}

export function renderPurchaseInfoPage({ navigate, selectedEvent, ticketData }: RouteRenderProps) {
  if (!selectedEvent || !ticketData) return null;
  
  return (
    <div className="min-h-screen bg-white">
      <PurchaseInformationPage
        event={selectedEvent}
        ticketData={ticketData}
        orderData={{}}
        onBack={() => navigate('/event/:id', { id: selectedEvent.id })}
        onHome={() => navigate('/')}
      />
    </div>
  );
}

export function renderHomePage({ navigate, user, handlers }: RouteRenderProps) {
  return (
    <div className="min-h-screen bg-white">
      <LattmatPlatform
        user={user}
        onEventClick={handlers.handleEventClick}
        onSignUp={() => navigate('/auth')}
        onSignOut={handlers.handleSignOut}
        onAuthSuccess={handlers.handleAuthSuccess}
      />
    </div>
  );
}