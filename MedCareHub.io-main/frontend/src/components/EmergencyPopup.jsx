import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const EmergencyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds of page load only for the first time
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const emergencyServices = [
    { title: '24 Hrs Pharmacy', icon: '💊' },
    { title: '24 Hrs Diagnostics', icon: '🔬' },
    { title: '24 Hrs Specialist Doctor', icon: '👨‍⚕️' },
    { title: '24 Hrs Ambulance Service', icon: '🚑' }
  ];

  return (
    <>
      {/* Emergency Button */}
      {!isOpen && (
        <button
          className="fixed bottom-24 right-6 z-50 bg-red-600 p-4 rounded-full shadow-lg hover:scale-110 transition-all animate-pulse-slow group"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative">
            <span className="text-2xl">🚨</span>
            {/* Tooltip */}
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-lg text-sm text-red-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Emergency Services
            </div>
          </div>
        </button>
      )}

      {/* Emergency Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-xl shadow-2xl border border-red-100 animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚨</span>
              <h3 className="font-semibold">Emergency Services</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-100 transition-colors"
            >
              ×
            </button>
          </div>

          {/* Services List */}
          <div className="p-4 bg-gradient-to-b from-red-50 to-white">
            <div className="space-y-3">
              {emergencyServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-delay-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-gray-800 font-medium">{service.title}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="mt-4 space-y-2 border-t border-red-100 pt-4">
              <div className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors">
                <span className="text-lg">📞</span>
                <a href="tel:9800542729" className="font-medium">
                  Quick Contact: 9800542729
                </a>
              </div>
              <div className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors">
                <span className="text-lg">✉️</span>
                <a href="mailto:ayan@gmail.com" className="text-sm">
                  ayan@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmergencyPopup; 