import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
      // Simulate loading
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [aToken]);

  const getStatusColor = (cancelled) => {
    return cancelled ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700';
  };

  const getStatusText = (cancelled) => {
    return cancelled ? 'Cancelled' : 'Active';
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.userData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.docData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.docData.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'active' && !appointment.cancelled) ||
      (filter === 'cancelled' && appointment.cancelled);
    
    return matchesSearch && matchesFilter;
  });

  const totalAppointments = appointments.length;
  const activeAppointments = appointments.filter(a => !a.cancelled).length;
  const cancelledAppointments = appointments.filter(a => a.cancelled).length;
  const totalRevenue = appointments.filter(a => !a.cancelled).reduce((sum, a) => sum + a.amount, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl animate-pulse">📅</div>
          <p className="text-gray-500">Loading appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">All Appointments</h2>
          <p className="text-gray-600">Manage and monitor all patient appointments</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in-up">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Appointments</p>
                <p className="text-2xl font-bold text-gray-800">{totalAppointments}</p>
              </div>
              <div className="text-3xl">📋</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active</p>
                <p className="text-2xl font-bold text-green-600">{activeAppointments}</p>
              </div>
              <div className="text-3xl">✅</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Cancelled</p>
                <p className="text-2xl font-bold text-red-600">{cancelledAppointments}</p>
              </div>
              <div className="text-3xl">❌</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-primary">₹{totalRevenue.toLocaleString()}</p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by patient name, doctor name, or speciality..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              </div>
            </div>
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'All', icon: '📋' },
                { key: 'active', label: 'Active', icon: '✅' },
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
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <img className="w-5 h-5" src={assets.appointment_icon} alt="Appointments Icon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Appointments List</h3>
                  <p className="text-sm text-gray-600">{filteredAppointments.length} appointments found</p>
                </div>
              </div>
            </div>
          </div>

          {filteredAppointments.length === 0 ? (
            <div className="p-12 text-center">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No appointments found</h3>
              <p className="text-gray-600">
                {searchTerm 
                  ? `No appointments match "${searchTerm}"`
                  : `No ${filter} appointments found.`
                }
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {/* Desktop Table */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-[0.5fr_2fr_1fr_2fr_2fr_1fr_1fr] py-4 px-6 border-b bg-gray-50 text-gray-700 font-medium">
                  <p>#</p>
                  <p>Patient</p>
                  <p>Age</p>
                  <p>Date & Time</p>
                  <p>Doctor</p>
                  <p>Fees</p>
                  <p>Actions</p>
                </div>

                {filteredAppointments.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[0.5fr_2fr_1fr_2fr_2fr_1fr_1fr] items-center py-4 px-6 border-b hover:bg-gray-50 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 1) * 50}ms` }}
                  >
                    <p className="font-semibold text-gray-600">{index + 1}</p>
                    
                    <div className="flex items-center gap-3">
                      <img 
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
                        src={item.userData.image} 
                        alt="Patient" 
                      />
                      <div>
                        <p className="font-medium text-gray-800">{item.userData.name}</p>
                        <p className="text-sm text-gray-500">{item.userData.email}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">{calculateAge(item.userData.dob)} years</p>
                    
                    <div>
                      <p className="font-medium text-gray-800">
                        {slotDateFormat(item.slotDate)}
                      </p>
                      <p className="text-sm text-gray-500">{item.slotTime}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <img 
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
                        src={item.docData.image} 
                        alt="Doctor" 
                      />
                      <div>
                        <p className="font-medium text-gray-800">Dr. {item.docData.name}</p>
                        <p className="text-sm text-gray-500">{item.docData.speciality}</p>
                      </div>
                    </div>
                    
                    <p className="font-bold text-primary">₹{item.amount}</p>
                    
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.cancelled)}`}>
                        {getStatusText(item.cancelled)}
                      </span>
                      
                      {!item.cancelled && (
                        <button
                          onClick={() => cancelAppointment(item._id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                          title="Cancel Appointment"
                        >
                          <img
                            src={assets.cancel_icon}
                            alt="Cancel"
                            className="w-5 h-5"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden">
                {filteredAppointments.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 border-b border-gray-100 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 1) * 50}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img 
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200" 
                          src={item.userData.image} 
                          alt="Patient" 
                        />
                        <div>
                          <p className="font-semibold text-gray-800">{item.userData.name}</p>
                          <p className="text-sm text-gray-500">{calculateAge(item.userData.dob)} years</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.cancelled)}`}>
                        {getStatusText(item.cancelled)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">📅 Date & Time</p>
                        <p className="font-medium">{slotDateFormat(item.slotDate)}</p>
                        <p className="text-sm text-gray-500">{item.slotTime}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">💰 Fees</p>
                        <p className="font-bold text-primary">₹{item.amount}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <img 
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
                        src={item.docData.image} 
                        alt="Doctor" 
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">Dr. {item.docData.name}</p>
                        <p className="text-sm text-gray-500">{item.docData.speciality}</p>
                      </div>
                    </div>

                    {!item.cancelled && (
                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={() => cancelAppointment(item._id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                        >
                          Cancel Appointment
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
