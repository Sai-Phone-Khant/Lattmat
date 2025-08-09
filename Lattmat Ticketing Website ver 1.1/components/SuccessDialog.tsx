import { CheckCircle, X } from 'lucide-react';
import { useEffect } from 'react';

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  orderData: {
    orderId: string;
    total: number;
  };
}

export function SuccessDialog({ isOpen, onClose, onContinue, orderData }: SuccessDialogProps) {
  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = '0';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="bg-white rounded-xl max-w-md w-full p-6 text-center relative border-2 border-gray-200"
        style={{ 
          zIndex: 1000000,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl text-gray-800 mb-2">Payment Successful!</h2>
          <p className="text-gray-600">Your order has been placed successfully.</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Order ID:</span>
            <span className="text-blue-700">{orderData.orderId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Total Amount:</span>
            <span className="text-green-600">{orderData.total.toLocaleString()} Ks</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={onContinue}
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-md"
          >
            View Purchase Details
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}