import { Event, User } from '../types';

export function createAppHandlers(
  navigate: (path: string, params?: any) => void,
  setUser: (user: User | null) => void,
  setTicketData: (data: any) => void
) {
  const handleEventClick = (event: Event) => {
    navigate('/event/:id', { id: event.id });
  };

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    navigate('/');
  };

  const handleSignOut = () => {
    setUser(null);
    navigate('/');
  };

  const handlePaymentSuccess = () => {
    navigate('/');
  };

  const handlePaymentNavigation = (paymentTicketData: any) => {
    setTicketData(paymentTicketData);
    navigate('/payment');
  };

  return {
    handleEventClick,
    handleAuthSuccess,
    handleSignOut,
    handlePaymentSuccess,
    handlePaymentNavigation
  };
}