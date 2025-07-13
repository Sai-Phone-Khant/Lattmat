import { CheckCircle, Share, Download, QrCode, X } from 'lucide-react';

interface NotificationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'share' | 'download' | 'qr';
  title: string;
  message: string;
}

export function NotificationDialog({ isOpen, onClose, type, title, message }: NotificationDialogProps) {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'share':
        return <Share className="w-12 h-12 text-blue-500 mx-auto mb-4" />;
      case 'download':
        return <Download className="w-12 h-12 text-green-500 mx-auto mb-4" />;
      case 'qr':
        return <QrCode className="w-12 h-12 text-purple-500 mx-auto mb-4" />;
      default:
        return <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />;
    }
  };

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
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-sm w-full p-6 text-center relative border-2 border-gray-200"
        style={{ 
          zIndex: 1000000,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-6">
          {getIcon()}
          <h2 className="text-xl text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{message}</p>
        </div>
        
        {type === 'qr' && (
          <div className="mb-6">
            <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center border-2 border-dashed border-gray-300">
              <QrCode className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Scan this QR code to access your ticket</p>
          </div>
        )}
        
        <button
          onClick={onClose}
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-md"
        >
          OK
        </button>
      </div>
    </div>
  );
}