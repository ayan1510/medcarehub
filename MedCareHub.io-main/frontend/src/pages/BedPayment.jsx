import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const bedPrices = {
  general: 2000,
  icu: 8000,
  hdu: 5000,
  emergency: 3000,
};

const bedTypeInfo = {
  general: {
    title: 'General Ward',
    icon: '🛏️',
    description: 'Standard care beds for stable patients'
  },
  hdu: {
    title: 'High Dependency Unit',
    icon: '🏥',
    description: 'Intermediate care for patients requiring close monitoring'
  },
  icu: {
    title: 'Intensive Care Unit',
    icon: '⚕️',
    description: 'Advanced care for critically ill patients'
  },
  emergency: {
    title: 'Emergency Ward',
    icon: '🚨',
    description: 'Immediate care for emergency cases'
  }
};

const BedPayment = () => {
  const { type, bedId } = useParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const price = bedPrices[type] || 0;
  const info = bedTypeInfo[type];
  const isEmergency = type === 'emergency';

  const handlePay = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      navigate(`/bed-receipt/${type}/${bedId}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 px-4 py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block text-4xl mb-4">{info.icon}</div>
          <h2 className="text-3xl font-bold mb-2">Complete Your Booking</h2>
          <p className="text-gray-600">{info.description}</p>
        </div>

        {/* Payment Card */}
        <div className={`bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up ${
          isEmergency ? 'border-red-200' : 'border-gray-200'
        } border`}>
          {/* Card Header */}
          <div className={`p-6 ${
            isEmergency 
              ? 'bg-gradient-to-r from-red-600 to-red-500' 
              : 'bg-gradient-to-r from-primary to-primary/90'
          } text-white`}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Booking Details</h3>
              <span className="text-sm opacity-90">Ref: {bedId}</span>
            </div>
          </div>

          {/* Booking Details */}
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <p className="text-gray-600">Ward Type</p>
                  <p className="font-semibold text-lg">{info.title}</p>
                </div>
                <span className="text-4xl">{info.icon}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <p className="text-gray-600">Bed Number</p>
                  <p className="font-semibold text-lg">#{bedId.split('-')[1]}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${
                  isEmergency ? 'bg-red-100 text-red-700' : 'bg-primary/10 text-primary'
                }`}>
                  Available
                </div>
              </div>

              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <p className="text-gray-600">Daily Rate</p>
                  <p className="font-semibold text-lg">₹{price.toLocaleString()}</p>
                </div>
                <p className="text-sm text-gray-500">Per Day</p>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-gray-600">Total Amount</p>
                  <p className="font-bold text-2xl">₹{price.toLocaleString()}</p>
                </div>
                <p className="text-sm text-gray-500">Initial Payment</p>
              </div>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePay}
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl text-white font-medium mt-6 transition-all ${
                isEmergency
                  ? 'bg-red-500 hover:bg-red-600 disabled:bg-red-300'
                  : 'bg-primary hover:bg-primary/90 disabled:bg-primary/50'
              } disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:shadow-none relative overflow-hidden`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <>
                  Pay ₹{price.toLocaleString()}
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"></div>
                </>
              )}
            </button>

            {/* Security Note */}
            <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
              <span>🔒</span>
              Secure payment powered by our payment gateway
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedPayment; 