import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const bedTypes = [
  { 
    name: 'General', 
    count: 100,
    icon: '🛏️',
    description: 'Standard care beds for stable patients',
    price: '₹2,000/day',
    level: 1
  },
  { 
    name: 'HDU', 
    count: 20,
    icon: '🏥',
    description: 'High Dependency Unit for intermediate care',
    price: '₹5,000/day',
    level: 2
  },
  { 
    name: 'ICU', 
    count: 30,
    icon: '⚕️',
    description: 'Intensive Care Unit for critical patients',
    price: '₹8,000/day',
    level: 3
  },
  { 
    name: 'Emergency', 
    count: 50,
    icon: '🚨',
    description: 'Emergency ward beds for immediate care',
    price: '₹3,000/day',
    level: 4,
    isEmergency: true
  },
];

const generateBeds = (type) => {
  return Array.from({ length: type.count }, (_, i) => ({
    id: `${type.name}-${i + 1}`,
    booked: Math.random() > 0.7, // Simulating some random bookings
  }));
};

const BedCard = ({ type, beds, onBook }) => {
  const availableBeds = beds.filter(bed => !bed.booked).length;
  const occupancyRate = ((type.count - availableBeds) / type.count) * 100;
  
  return (
    <div 
      className={`rounded-2xl overflow-hidden shadow-lg border animate-fade-in-up ${
        type.isEmergency 
          ? 'border-red-200 hover:border-red-300' 
          : 'border-gray-200 hover:border-primary/30'
      }`}
      style={{ animationDelay: `${type.level * 150}ms` }}
    >
      {/* Header */}
      <div className={`p-6 ${
        type.isEmergency 
          ? 'bg-gradient-to-r from-red-600 to-red-500' 
          : 'bg-gradient-to-r from-gray-50 to-white'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{type.icon}</span>
            <div>
              <h3 className={`text-xl font-bold ${type.isEmergency ? 'text-white' : 'text-gray-800'}`}>
                {type.name} Ward
              </h3>
              <p className={`text-sm ${type.isEmergency ? 'text-red-100' : 'text-gray-500'}`}>
                {type.description}
              </p>
            </div>
          </div>
          <div className={`text-right ${type.isEmergency ? 'text-white' : 'text-gray-800'}`}>
            <p className="text-2xl font-bold">{availableBeds}</p>
            <p className="text-sm">Available</p>
          </div>
        </div>
      </div>

      {/* Bed Grid */}
      <div className="p-6 bg-white">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Occupancy Rate</span>
            <span className="text-sm font-medium">{Math.round(occupancyRate)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${
                type.isEmergency 
                  ? 'bg-red-500' 
                  : occupancyRate > 80 
                    ? 'bg-yellow-500' 
                    : 'bg-primary'
              }`}
              style={{ width: `${occupancyRate}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-10 gap-2 mb-6">
          {beds.map((bed, index) => (
            <div
              key={bed.id}
              className={`group relative aspect-square rounded-lg transition-transform hover:scale-105 animate-fade-in-up cursor-help`}
              style={{ animationDelay: `${index * 20}ms` }}
            >
              <div className={`
                absolute inset-0 rounded-lg border-2 flex items-center justify-center text-xs font-bold
                ${bed.booked 
                  ? type.isEmergency 
                    ? 'bg-red-100 border-red-200 text-red-500' 
                    : 'bg-gray-100 border-gray-200 text-gray-500'
                  : type.isEmergency
                    ? 'bg-red-50 border-red-200 text-red-500 animate-pulse'
                    : 'bg-primary/10 border-primary/20 text-primary'
                }
              `}>
                {bed.id.split('-')[1]}
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 text-center">
                  Bed {bed.id.split('-')[1]}
                  <br />
                  {bed.booked ? 'Occupied' : 'Available'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Starting from <span className="font-semibold text-gray-700">{type.price}</span>
          </p>
          <button
            onClick={() => onBook(type.name.toLowerCase())}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
              ${type.isEmergency
                ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-200'
                : 'bg-primary hover:bg-primary/90 text-white'
              } shadow-lg hover:shadow-xl`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const BedAvailability = () => {
  const navigate = useNavigate();
  const [beds, setBeds] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setBeds(
        bedTypes.reduce((acc, type) => {
          acc[type.name] = generateBeds(type);
          return acc;
        }, {})
      );
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="space-y-4 text-center">
          <div className="inline-block animate-spin text-4xl">⚕️</div>
          <p className="text-gray-500">Loading bed availability...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Bed Availability</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            View real-time bed availability across different wards. Our hospital provides various types of beds 
            to ensure the best care for every patient's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bedTypes.map((type) => (
            <BedCard
              key={type.name}
              type={type}
              beds={beds[type.name] || []}
              onBook={(bedType) => navigate(`/book-bed/${bedType}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BedAvailability; 