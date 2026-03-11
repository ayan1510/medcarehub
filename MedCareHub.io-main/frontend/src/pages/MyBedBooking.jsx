import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const mockBookings = [
  {
    id: 'B001',
    bedType: 'General Ward',
    bedNumber: '12',
    amount: 500,
    date: '2024-06-10',
    checkIn: '2024-06-10 14:00',
    checkOut: '2024-06-12 10:00',
    status: 'Confirmed',
    duration: '2 days',
    patientName: 'John Doe',
    emergency: false,
  },
  {
    id: 'B002',
    bedType: 'ICU',
    bedNumber: '5',
    amount: 2000,
    date: '2024-06-08',
    checkIn: '2024-06-08 09:00',
    checkOut: '2024-06-10 16:00',
    status: 'Confirmed',
    duration: '3 days',
    patientName: 'Jane Smith',
    emergency: true,
  },
  {
    id: 'B003',
    bedType: 'HDU',
    bedNumber: '8',
    amount: 1500,
    date: '2024-06-01',
    checkIn: '2024-06-01 11:00',
    checkOut: '2024-06-03 14:00',
    status: 'Completed',
    duration: '3 days',
    patientName: 'Mike Johnson',
    emergency: false,
  },
  {
    id: 'B004',
    bedType: 'Emergency',
    bedNumber: '2',
    amount: 1500,
    date: '2024-05-28',
    checkIn: '2024-05-28 23:00',
    checkOut: '2024-05-29 08:00',
    status: 'Cancelled',
    duration: '1 day',
    patientName: 'Sarah Wilson',
    emergency: true,
  },
];

const MyBedBooking = () => {
  const [bookings, setBookings] = useState(mockBookings);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-700';
      case 'Completed': return 'bg-blue-100 text-blue-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getBedTypeColor = (bedType) => {
    switch (bedType) {
      case 'ICU': return 'bg-red-50 text-red-700 border-red-200';
      case 'HDU': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Emergency': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-green-50 text-green-700 border-green-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status.toLowerCase() === filter;
  });

  const totalSpent = bookings
    .filter(b => b.status === 'Completed' || b.status === 'Confirmed')
    .reduce((sum, b) => sum + b.amount, 0);

  const cancelBooking = (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;
    
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'Cancelled' }
        : booking
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl animate-pulse">🛏️</div>
          <p className="text-gray-500">Loading bed bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">My Bed Bookings</h2>
          <p className="text-gray-600">Manage and track your hospital bed reservations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in-up">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-800">{bookings.length}</p>
              </div>
              <div className="text-3xl">🛏️</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active</p>
                <p className="text-2xl font-bold text-green-600">
                  {bookings.filter(b => b.status === 'Confirmed').length}
                </p>
              </div>
              <div className="text-3xl">✅</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-2xl font-bold text-blue-600">
                  {bookings.filter(b => b.status === 'Completed').length}
                </p>
              </div>
              <div className="text-3xl">🏥</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Spent</p>
                <p className="text-2xl font-bold text-primary">₹{totalSpent.toLocaleString()}</p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'All Bookings', icon: '📋' },
              { key: 'confirmed', label: 'Active', icon: '✅' },
              { key: 'completed', label: 'Completed', icon: '🏥' },
              { key: 'cancelled', label: 'Cancelled', icon: '❌' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  filter === tab.key
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">🛏️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No bed bookings found</h3>
              <p className="text-gray-600 mb-6">
                {filter === 'all' 
                  ? "You haven't booked any beds yet."
                  : `No ${filter} bookings found.`
                }
              </p>
              <button
                onClick={() => navigate('/bed-availability')}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book a Bed
              </button>
            </div>
          ) : (
            filteredBookings.map((booking, index) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Bed Type Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-2xl ${
                        booking.emergency ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        {booking.emergency ? '🚨' : '🛏️'}
                      </div>
                    </div>

                    {/* Booking Details */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-gray-800">
                              {booking.bedType} - Bed {booking.bedNumber}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getBedTypeColor(booking.bedType)}`}>
                              {booking.bedType}
                            </span>
                            {booking.emergency && (
                              <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
                                Emergency
                              </span>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">👤 Patient</p>
                              <p className="font-medium">{booking.patientName}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">📅 Booking Date</p>
                              <p className="font-medium">{formatDate(booking.date)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">⏰ Check-in</p>
                              <p className="font-medium">{formatDateTime(booking.checkIn)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">⏰ Check-out</p>
                              <p className="font-medium">{formatDateTime(booking.checkOut)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">⏱️ Duration</p>
                              <p className="font-medium">{booking.duration}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">💰 Amount</p>
                              <p className="font-medium">₹{booking.amount.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>

                        {/* Status and Actions */}
                        <div className="flex flex-col items-end gap-4">
                          <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            {booking.status === 'Confirmed' && (
                              <button
                                onClick={() => cancelBooking(booking.id)}
                                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                              >
                                ❌ Cancel
                              </button>
                            )}
                            
                            {booking.status === 'Completed' && (
                              <button
                                onClick={() => navigate('/my-billing')}
                                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                              >
                                📄 View Bill
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBedBooking; 