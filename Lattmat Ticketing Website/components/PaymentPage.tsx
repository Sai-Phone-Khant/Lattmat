import { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SuccessDialog } from './SuccessDialog';
import { PurchaseInformationPage } from './PurchaseInformationPage';

// Import the original logo from Figma
import imgLattmat2 from "../imports/figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";
import paymentMethodsImage from "figma:asset/ec09a1198e1a081cf02d07c62d45a030aea46cab.png";

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

interface PaymentPageProps {
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
  onBack: () => void;
  onHome: () => void;
}

export function PaymentPage({ event, ticketData, onBack, onHome }: PaymentPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    ticketOption: 'E-ticket'
  });
  const [physicalTicketOption, setPhysicalTicketOption] = useState('pickup');
  const [paymentMethod, setPaymentMethod] = useState('QR Payment');
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptRefund, setAcceptRefund] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showPurchaseInfo, setShowPurchaseInfo] = useState(false);
  const [orderData, setOrderData] = useState({
    orderId: '',
    purchaseDate: '',
    purchaseTime: '',
    paymentMethod: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    ticketOption: '',
    deliveryOption: ''
  });

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (showSuccessDialog) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [showSuccessDialog]);

  const paymentMethods = [
    'QR Payment',
    'Cash On Delivery'
  ];

  const subtotal = ticketData.totalAmount || 0;
  const serviceCharge = Math.round(subtotal * 0.1);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + serviceCharge + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTicketOptionChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      ticketOption: option
    }));
  };

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
    setShowPaymentDropdown(false);
  };

  const generateOrderId = () => {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handlePlaceOrder = () => {
    if (!acceptTerms || !acceptRefund) {
      alert('Please accept the terms and conditions and refund policy.');
      return;
    }
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    if (formData.ticketOption === 'Physical ticket' && physicalTicketOption === 'delivery' && !formData.address) {
      alert('Please provide a delivery address.');
      return;
    }

    // Create order data
    const now = new Date();
    const newOrderData = {
      orderId: generateOrderId(),
      purchaseDate: now.toLocaleDateString('en-GB').replace(/\//g, '.'),
      purchaseTime: now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      }) + ' ( MT )',
      paymentMethod: paymentMethod,
      customerName: formData.name,
      customerPhone: formData.phone,
      customerEmail: formData.email,
      ticketOption: formData.ticketOption,
      deliveryOption: formData.ticketOption === 'Physical ticket' ? physicalTicketOption : undefined
    };

    setOrderData(newOrderData);
    setShowSuccessDialog(true);
  };

  const handleContinueToDetails = () => {
    setShowSuccessDialog(false);
    setShowPurchaseInfo(true);
  };

  const handleBackFromPurchaseInfo = () => {
    setShowPurchaseInfo(false);
    onHome(); // Go back to home instead of payment page
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
  };

  // Show purchase information page
  if (showPurchaseInfo) {
    return (
      <PurchaseInformationPage
        event={event}
        ticketData={ticketData}
        orderData={orderData}
        onBack={handleBackFromPurchaseInfo}
        onHome={onHome}
      />
    );
  }

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
                  <ChevronDown className="w-4 h-4" />
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
            <div className="flex flex-col xl:flex-row gap-12 items-start">
              
              {/* Left Column - Billing Details */}
              <div className="w-full xl:flex-1">
                {/* Header with Back Button - MOVED TO FRONT */}
                <div className="flex items-center space-x-3 mb-8 sm:mb-12">
                  <button
                    onClick={onBack}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-base sm:text-lg">Back</span>
                  </button>
                  <h1 className="text-xl sm:text-2xl text-gray-800">Billing Details</h1>
                </div>

                {/* Billing Form */}
                <div className="bg-white rounded-lg p-4 sm:p-5 lg:p-6 shadow-md">
                  {/* Name Field */}
                  <div className="mb-4 sm:mb-5">
                    <label className="block text-gray-800 text-base sm:text-lg mb-1.5">
                      Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-4 sm:p-5 border border-gray-800 rounded-md text-base sm:text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="mb-4 sm:mb-5">
                    <label className="block text-gray-800 text-base sm:text-lg mb-1.5">
                      Email<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="enter your mail"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-4 sm:p-5 border border-gray-800 rounded-md text-base sm:text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="mb-4 sm:mb-5">
                    <label className="block text-gray-800 text-base sm:text-lg mb-1.5">
                      Phone Number<span className="text-red-600">*</span>
                    </label>
                    <div className="flex items-center border border-gray-800 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                      <span className="px-4 sm:px-5 py-4 sm:py-5 text-gray-800 text-base sm:text-lg border-r border-gray-800">+ 95</span>
                      <input
                        type="tel"
                        placeholder="enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="flex-1 p-4 sm:p-5 text-base sm:text-lg placeholder:text-gray-400 border-none outline-none"
                      />
                    </div>
                  </div>

                  {/* Address Field (for delivery) */}
                  {formData.ticketOption === 'Physical ticket' && physicalTicketOption === 'delivery' && (
                    <div className="mb-4 sm:mb-5">
                      <label className="block text-gray-800 text-base sm:text-lg mb-1.5">
                        Delivery Address<span className="text-red-600">*</span>
                      </label>
                      <textarea
                        placeholder="enter your delivery address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        rows={3}
                        className="w-full p-4 sm:p-5 border border-gray-800 rounded-md text-base sm:text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>
                  )}

                  {/* Ticket Option */}
                  <div className="mb-4 sm:mb-5">
                    <label className="block text-gray-800 text-base sm:text-lg mb-1.5">
                      Ticket Option
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 sm:p-5 border border-gray-800 rounded-md">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            id="e-ticket"
                            name="ticketOption"
                            value="E-ticket"
                            checked={formData.ticketOption === 'E-ticket'}
                            onChange={(e) => handleTicketOptionChange(e.target.value)}
                            className="w-4 h-4 text-blue-700 focus:ring-blue-500"
                          />
                          <label htmlFor="e-ticket" className="text-gray-800 text-base sm:text-lg">E-ticket</label>
                        </div>
                      </div>
                      
                      <div className="border border-gray-800 rounded-md">
                        <div className="flex items-center justify-between p-4 sm:p-5">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              id="physical-ticket"
                              name="ticketOption"
                              value="Physical ticket"
                              checked={formData.ticketOption === 'Physical ticket'}
                              onChange={(e) => handleTicketOptionChange(e.target.value)}
                              className="w-4 h-4 text-blue-700 focus:ring-blue-500"
                            />
                            <label htmlFor="physical-ticket" className="text-gray-800 text-base sm:text-lg">Physical ticket</label>
                          </div>
                        </div>
                        
                        {/* Physical ticket sub-options */}
                        {formData.ticketOption === 'Physical ticket' && (
                          <div className="border-t border-gray-300 p-4 sm:p-5 bg-gray-50">
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <input
                                  type="radio"
                                  id="pickup"
                                  name="physicalOption"
                                  value="pickup"
                                  checked={physicalTicketOption === 'pickup'}
                                  onChange={(e) => setPhysicalTicketOption(e.target.value)}
                                  className="w-4 h-4 text-blue-700 focus:ring-blue-500"
                                />
                                <label htmlFor="pickup" className="text-gray-700 text-sm sm:text-base">Pick Up from Partner Store</label>
                              </div>
                              
                              <div className="flex items-center space-x-3">
                                <input
                                  type="radio"
                                  id="delivery"
                                  name="physicalOption"
                                  value="delivery"
                                  checked={physicalTicketOption === 'delivery'}
                                  onChange={(e) => setPhysicalTicketOption(e.target.value)}
                                  className="w-4 h-4 text-blue-700 focus:ring-blue-500"
                                />
                                <label htmlFor="delivery" className="text-gray-700 text-sm sm:text-base">Home Delivery</label>
                              </div>
                              
                              {physicalTicketOption === 'pickup' && (
                                <div className="mt-3 p-3 bg-blue-50 rounded-md">
                                  <p className="text-blue-700 text-sm">
                                    📍 Pickup available at our partner stores. Location will be confirmed after payment.
                                  </p>
                                </div>
                              )}
                              
                              {physicalTicketOption === 'delivery' && (
                                <div className="mt-3 p-3 bg-orange-50 rounded-md">
                                  <p className="text-orange-700 text-sm">
                                    🚚 Delivery within 2-3 business days. Additional delivery charges may apply.
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Important Notice */}
                  <div className="mt-4 sm:mt-5">
                    <h3 className="text-blue-700 text-base sm:text-lg mb-3 sm:mb-3.5">Important</h3>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      The customer information won't be changed after purchasing the ticket.
                      And can't be sold to others.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="w-full xl:w-[400px] 2xl:w-[500px]">
                {/* Ticket Details Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 sm:mb-5">
                  <div className="bg-blue-700 px-4 sm:px-6 py-3 sm:py-4">
                    <h2 className="text-white text-lg sm:text-xl lg:text-2xl text-center">Your Ticket Detail</h2>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    {/* Zone and Seat */}
                    <div className="flex justify-between items-center mb-4 sm:mb-5">
                      <span className="text-gray-800 text-lg sm:text-xl lg:text-2xl">Zone</span>
                      <span className="text-gray-800 text-lg sm:text-xl lg:text-2xl">Seat</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4 sm:mb-5">
                      <span className="text-gray-600 text-base sm:text-lg">
                        {ticketData.selectedTickets && ticketData.selectedTickets.length > 0 ? ticketData.selectedTickets[0].tier_name : 'General'}
                      </span>
                      <span className="text-gray-600 text-base sm:text-lg">001</span>
                    </div>

                    <hr className="border-gray-300 mb-4 sm:mb-5" />

                    {/* Event Details */}
                    <div className="space-y-3 sm:space-y-5">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-800 text-base sm:text-lg">Event Date</span>
                        <span className="text-gray-600 text-base sm:text-lg text-right">
                          {ticketData.selectedEventGroup?.event_date ? 
                            new Date(ticketData.selectedEventGroup.event_date).toLocaleDateString('en-GB').replace(/\//g, '.') + 
                            ' (' + new Date(ticketData.selectedEventGroup.event_date).toLocaleDateString('en-US', { weekday: 'long' }) + ')' 
                            : event.date
                          }
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <span className="text-gray-800 text-base sm:text-lg">Event Place</span>
                        <span className="text-gray-600 text-base sm:text-lg text-right">
                          {ticketData.selectedEventGroup?.venue_place || event.venue}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <span className="text-gray-800 text-base sm:text-lg">Event City</span>
                        <span className="text-gray-600 text-base sm:text-lg text-right">
                          {event.location ? event.location.split(',')[0] : 'Myanmar'}
                        </span>
                      </div>

                      <hr className="border-gray-300" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800 text-base sm:text-lg">No. of tickets</span>
                        <span className="text-gray-600 text-base sm:text-lg">
                          {ticketData.selectedTickets ? ticketData.selectedTickets.reduce((total, ticket) => total + (ticket.quantity || 0), 0) : 0}
                        </span>
                      </div>

                      <hr className="border-gray-300" />

                      {/* Pricing Breakdown */}
                      <div className="space-y-2 sm:space-y-2.5">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-800 text-base sm:text-lg">Subtotal</span>
                          <span className="text-gray-600 text-base sm:text-lg">Ks {(subtotal || 0).toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-800 text-base sm:text-lg">Service Charges ( 10 % )</span>
                          <span className="text-gray-600 text-base sm:text-lg">Ks {(serviceCharge || 0).toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-800 text-base sm:text-lg">Tax ( 5 % )</span>
                          <span className="text-gray-600 text-base sm:text-lg">Ks {(tax || 0).toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between items-center pt-2 sm:pt-2.5 border-t border-gray-200">
                          <span className="text-gray-800 text-lg sm:text-xl lg:text-2xl">Total</span>
                          <span className="text-blue-700 text-lg sm:text-xl lg:text-2xl">Ks {(total || 0).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method Dropdown */}
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md mb-4 sm:mb-5 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-blue-700 rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-700 rounded-full"></div>
                      </div>
                      <span className="text-gray-800 text-base sm:text-lg">{paymentMethod}</span>
                    </div>
                    <button
                      onClick={() => setShowPaymentDropdown(!showPaymentDropdown)}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${showPaymentDropdown ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  
                  {/* Dropdown Menu */}
                  {showPaymentDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      {paymentMethods.map((method) => (
                        <button
                          key={method}
                          onClick={() => handlePaymentMethodSelect(method)}
                          className={`w-full text-left px-4 sm:px-6 py-3 text-base sm:text-lg hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            method === paymentMethod ? 'bg-blue-50 text-blue-700' : 'text-gray-800'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4 sm:space-y-5 mb-4 sm:mb-5">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="w-4 h-4 mt-1 border-2 border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      I have read and accept the{' '}
                      <a href="#" className="text-blue-700 underline hover:text-blue-800">
                        Terms and Conditions.
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={acceptRefund}
                      onChange={(e) => setAcceptRefund(e.target.checked)}
                      className="w-4 h-4 mt-1 border-2 border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      I have read and accept the{' '}
                      <a href="#" className="text-blue-700 underline hover:text-blue-800">
                        refund Policy.
                      </a>
                    </p>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-blue-700 text-white text-lg sm:text-xl lg:text-2xl py-3 sm:py-4 rounded-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Place Order
                </button>
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

      {/* Success Dialog - Rendered outside main content */}
      {showSuccessDialog && (
        <SuccessDialog
          isOpen={showSuccessDialog}
          onClose={handleCloseSuccessDialog}
          onContinue={handleContinueToDetails}
          orderData={{
            orderId: orderData.orderId,
            total: total || 0
          }}
        />
      )}
    </>
  );
}