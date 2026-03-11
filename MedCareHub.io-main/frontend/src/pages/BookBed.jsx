import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const bedTypeCounts = {
  general: 100,
  icu: 30,
  hdu: 20,
  emergency: 50,
};

const bedTypeInfo = {
  general: {
    title: 'General Ward',
    icon: '🛏️',
    description: 'Standard care beds for stable patients',
    price: '₹2,000/day'
  },
  hdu: {
    title: 'High Dependency Unit',
    icon: '🏥',
    description: 'Intermediate care for patients requiring close monitoring',
    price: '₹5,000/day'
  },
  icu: {
    title: 'Intensive Care Unit',
    icon: '⚕️',
    description: 'Advanced care for critically ill patients',
    price: '₹8,000/day'
  },
  emergency: {
    title: 'Emergency Ward',
    icon: '🚨',
    description: 'Immediate care for emergency cases',
    price: '₹3,000/day'
  }
};

const BookBed = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [selectedBed, setSelectedBed] = useState(null);
  const beds = Array.from({ length: bedTypeCounts[type] }, (_, i) => ({
    id: `${type}-${i + 1}`,
    booked: Math.random() > 0.7, // Simulating some random bookings
  }));

  const handleSelect = (bed) => {
    if (!bed.booked) setSelectedBed(bed.id);
  };

  const handleProceed = () => {
    if (selectedBed) {
      navigate(`/bed-payment/${type}/${selectedBed}`);
    }
  };

  const isEmergency = type === 'emergency';
  const info = bedTypeInfo[type];

  return (
    <div className="min-h-screen pt-20 px-4 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block text-4xl mb-4">{info.icon}</div>
          <h2 className="text-3xl font-bold mb-2">Book a {info.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{info.description}</p>
        </div>

        {/* Bed Selection Card */}
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
              <h3 className="text-xl font-semibold">Select a Bed</h3>
              <span className="text-sm opacity-90">{info.price}</span>
            </div>
          </div>

          {/* Bed Grid */}
          <div className="p-6">
            <div className="grid grid-cols-10 gap-3 mb-8">
              {beds.map((bed, index) => (
                <div
                  key={bed.id}
                  className={`group relative aspect-square rounded-lg transition-all duration-200 animate-fade-in-up cursor-pointer ${
                    bed.booked 
                      ? 'cursor-not-allowed' 
                      : 'hover:scale-110'
                  }`}
                  style={{ animationDelay: `${index * 20}ms` }}
                  onClick={() => handleSelect(bed)}
                >
                  <div className={`
                    absolute inset-0 rounded-lg border-2 flex items-center justify-center text-sm font-bold
                    ${bed.booked 
                      ? isEmergency 
                        ? 'bg-red-100 border-red-200 text-red-500' 
                        : 'bg-gray-100 border-gray-200 text-gray-500'
                      : selectedBed === bed.id
                        ? isEmergency
                          ? 'bg-red-500 border-red-600 text-white'
                          : 'bg-primary border-primary text-white'
                        : isEmergency
                          ? 'bg-red-50 border-red-200 text-red-500'
                          : 'bg-primary/10 border-primary/20 text-primary'
                    }
                    ${!bed.booked && 'hover:shadow-lg'}
                  `}>
                    {bed.id.split('-')[1]}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 text-center">
                      Bed {bed.id.split('-')[1]}
                      <br />
                      {bed.booked ? 'Occupied' : 'Available'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded border ${
                  isEmergency ? 'bg-red-50 border-red-200' : 'bg-primary/10 border-primary/20'
                }`}></div>
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded border ${
                  isEmergency ? 'bg-red-500 border-red-600' : 'bg-primary border-primary'
                }`}></div>
                <span className="text-gray-600">Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gray-100 border border-gray-200"></div>
                <span className="text-gray-600">Occupied</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center">
              <button
                className={`px-8 py-3 rounded-full text-white font-medium transition-all ${
                  isEmergency
                    ? 'bg-red-500 hover:bg-red-600 disabled:bg-red-300'
                    : 'bg-primary hover:bg-primary/90 disabled:bg-primary/50'
                } disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:shadow-none`}
                disabled={!selectedBed}
                onClick={handleProceed}
              >
                {selectedBed ? 'Proceed to Payment' : 'Select a Bed to Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookBed; 