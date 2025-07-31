import { useState, useEffect } from 'react';
import { ChevronLeft, Download, Share, QrCode } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NotificationDialog } from './NotificationDialog';

// Import the original logo and images from Figma
import imgLattmat2 from "../imports/figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";
import imgRectangle116 from "../imports/figma:asset/e14317c8df1911bbf9731f28d5054841ba42d550.png";
import imgRectangle117 from "../imports/figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

interface TicketTier {
  id: string;
  tier_name: string;
  price: number;
  currency: string;
  description: string;
  max_quantity: number;
  available_qty: number;
  event_group_id: string;
  quantity?: number;
}

interface EventGroup {
  id: string;
  name: string;
  venue_place: string;
  event_date: string;
  event_time: string;
  venue_image_url: string;
  ticketTiers: TicketTier[];
}

interface PurchaseInformationPageProps {
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
  };
  ticketData: {
    selectedEventGroup: EventGroup | null;
    ticketQuantities: Record<string, number>;
    totalAmount: number;
    selectedTickets: TicketTier[];
  };
  orderData: {
    orderId: string;
    purchaseDate: string;
    purchaseTime: string;
    paymentMethod: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    ticketOption: string;
    deliveryOption?: string;
  };
  onBack: () => void;
  onHome: () => void;
}

export function PurchaseInformationPage({ 
  event, 
  ticketData, 
  orderData, 
  onBack, 
  onHome 
}: PurchaseInformationPageProps) {
  const [selectedTicket, setSelectedTicket] = useState<'ticket1' | 'ticket2'>('ticket1');
  const [notificationDialog, setNotificationDialog] = useState<{
    isOpen: boolean;
    type: 'share' | 'download' | 'qr';
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: 'share',
    title: '',
    message: ''
  });

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = ticketData.totalAmount;
  const serviceCharge = Math.round(subtotal * 0.1);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + serviceCharge + tax;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${event.title} - Ticket`,
        text: `My ticket for ${event.title}`,
        url: window.location.href,
      }).then(() => {
        setNotificationDialog({
          isOpen: true,
          type: 'share',
          title: 'Ticket Shared!',
          message: 'Your ticket has been shared successfully.'
        });
      }).catch(() => {
        // Fallback for share failure
        navigator.clipboard.writeText(window.location.href);
        setNotificationDialog({
          isOpen: true,
          type: 'share',
          title: 'Link Copied!',
          message: 'Ticket link has been copied to your clipboard.'
        });
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      setNotificationDialog({
        isOpen: true,
        type: 'share',
        title: 'Link Copied!',
        message: 'Ticket link has been copied to your clipboard.'
      });
    }
  };

  const handleDownload = () => {
    // In a real app, this would download the ticket
    setNotificationDialog({
      isOpen: true,
      type: 'download',
      title: 'Download Started!',
      message: 'Your ticket is being downloaded. Check your downloads folder.'
    });
  };

  const handleShowQR = () => {
    setNotificationDialog({
      isOpen: true,
      type: 'qr',
      title: 'QR Code',
      message: 'Show this QR code at the venue entrance for quick check-in.'
    });
  };

  const closeNotificationDialog = () => {
    setNotificationDialog(prev => ({ ...prev, isOpen: false }));
  };

  const getTicketFeatures = () => {
    if (orderData.ticketOption === 'E-ticket') {
      return (
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleShare}
            className="bg-white border-2 border-blue-700 text-blue-700 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
          >
            <Share className="w-5 h-5" />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            onClick={handleShowQR}
            className="bg-blue-700 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
          >
            <QrCode className="w-5 h-5" />
            <span className="hidden sm:inline">QR Code</span>
          </button>
          <button
            onClick={handleDownload}
            className="bg-blue-700 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 flex-1"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>
      );
    } else {
      // Physical ticket features
      if (orderData.deliveryOption === 'pickup') {
        return (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-blue-700 mb-2">Pickup Information</h4>
            <p className="text-gray-700 text-sm">
              Your tickets are ready for pickup at the nearest partner store:
            </p>
            <p className="text-blue-700 mt-2">📍 Central Mall - Ground Floor, Shop #12</p>
            <p className="text-gray-600 text-sm">Open: 10:00 AM - 9:00 PM daily</p>
          </div>
        );
      } else {
        return (
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="text-orange-700 mb-2">Delivery Status</h4>
            <p className="text-gray-700 text-sm">Your tickets are out for delivery</p>
            <p className="text-orange-700 mt-2">🚚 Estimated delivery: Tomorrow, 2:00 PM - 6:00 PM</p>
            <p className="text-gray-600 text-sm">Track your delivery with ID: DEL123456</p>
          </div>
        );
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#f1f3f5]">
        {/* Header */}
        <header className="bg-white shadow-md relative z-10">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px] py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ImageWithFallback src={imgLattmat2} alt="Lattmat" className="h-8 sm:h-10 lg:h-12" />
              </div>
              <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                <button onClick={onHome} className="text-blue-700 hover:text-blue-800">Home</button>
                <a href="#" className="text-gray-700 hover:text-blue-700">Support</a>
                <a href="#" className="text-gray-700 hover:text-blue-700">Your Ticket</a>
                <div className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center space-x-2">
                  <span className="text-gray-700">Daniel</span>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <span>EN</span>
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

        {/* Main Content */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={onBack}
                className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-lg">Back</span>
              </button>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 lg:gap-12">
              {/* Left Column - Purchase Information */}
              <div className="flex-1">
                {/* Purchase Information Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="bg-gray-200 px-6 py-4">
                    <h2 className="text-xl text-gray-700 text-center">Purchasing Information</h2>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {/* Order ID */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-gray-800 mb-1 sm:mb-0">Order ID</span>
                      <span className="text-gray-600">{orderData.orderId}</span>
                    </div>
                    
                    {/* Purchase Date & Time */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-gray-800 mb-1 sm:mb-0">Purchasing Date</span>
                      <span className="text-gray-600">{orderData.purchaseDate}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-gray-800 mb-1 sm:mb-0">Purchasing Time</span>
                      <span className="text-gray-600">{orderData.purchaseTime}</span>
                    </div>
                    
                    {/* Payment Method & Total */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-gray-800 mb-1 sm:mb-0">Payment Method</span>
                      <span className="text-gray-600">{orderData.paymentMethod}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-gray-800 mb-1 sm:mb-0">Total Amount</span>
                      <span className="text-gray-600">{total.toLocaleString()} Ks</span>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="bg-gray-200 px-6 py-4">
                    <h2 className="text-xl text-gray-700 text-center">Customer Information</h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-gray-800 mb-2">Customer Name</h4>
                        <p className="text-gray-600">{orderData.customerName}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-800 mb-2">Phone Number</h4>
                        <p className="text-gray-600">{orderData.customerPhone}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-800 mb-2">Email</h4>
                        <p className="text-gray-600">{orderData.customerEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-200 px-6 py-4">
                    <h2 className="text-xl text-gray-700 text-center">Event Details</h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-gray-800 mb-1 sm:mb-0">Event Name</span>
                      <span className="text-blue-700">{event.title}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-gray-800 mb-2">Event Date</h4>
                        <p className="text-gray-600">
                          {ticketData.selectedEventGroup?.event_date ? 
                            new Date(ticketData.selectedEventGroup.event_date).toLocaleDateString('en-CA') : 
                            'TBD'}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-gray-800 mb-2">Event Time</h4>
                        <p className="text-gray-600">
                          {ticketData.selectedEventGroup?.event_time || 'TBD'}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-gray-800 mb-2">Event Place</h4>
                        <p className="text-gray-600">
                          {ticketData.selectedEventGroup?.venue_place || event.venue}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Your Tickets */}
              <div className="w-full xl:w-[400px] 2xl:w-[500px]">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-blue-700 px-6 py-4">
                    <h2 className="text-white text-xl text-center">Your Tickets</h2>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {/* Event Image */}
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0" style={{ backgroundColor: '#000000', opacity: 0.2 }} />
                    </div>

                    {/* Display purchased tickets dynamically */}
                    <div className="space-y-6">
                      {ticketData.selectedTickets.map((ticket, index) => (
                        <div key={ticket.id} className="space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-gray-800 mb-1 sm:mb-0">Ticket ID</span>
                            <span className="text-blue-700">TKT{(index + 1).toString().padStart(6, '0')}</span>
                          </div>
                          
                          {/* Display selected ticket details */}
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-800">{ticket.tier_name}</span>
                              <span className="text-gray-600">x{ticket.quantity}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                              <span>{ticket.price.toLocaleString()} {ticket.currency || 'Ks'} each</span>
                              <span>Total: {(ticket.price * (ticket.quantity || 0)).toLocaleString()} {ticket.currency || 'Ks'}</span>
                            </div>
                          </div>

                          {getTicketFeatures()}

                          {/* Separator line if not last ticket */}
                          {index < ticketData.selectedTickets.length - 1 && (
                            <hr className="border-gray-300" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 sm:py-12">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[150px]">
            <div className="border-t border-gray-600 pt-8 text-center">
              <p className="text-gray-400">Copyright@2022 by Lattmat</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Notification Dialog */}
      <NotificationDialog
        isOpen={notificationDialog.isOpen}
        onClose={closeNotificationDialog}
        type={notificationDialog.type}
        title={notificationDialog.title}
        message={notificationDialog.message}
      />
    </>
  );
}