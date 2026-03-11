import React, { useEffect, useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";

const Dashboard = () => {
  const { aToken, getDashData, dashData, cancelAppointment } = useContext(AdminContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (aToken) {
      getDashData();
      // Simulate loading
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [aToken]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (cancelled) => {
    return cancelled ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700';
  };

  const getStatusText = (cancelled) => {
    return cancelled ? 'Cancelled' : 'Active';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6 animate-bounce-in">
          <div className="relative">
            <div className="text-6xl animate-pulse">🏥</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 font-medium">Loading dashboard...</p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    dashData && (
      <div className="min-h-screen pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in-down">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h2>
            <p className="text-gray-600 text-lg">Monitor and manage your hospital operations</p>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Doctors Card */}
            <div className="animate-fade-in-up animate-stagger-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Total Doctors</p>
                    <p className="text-4xl font-bold text-blue-600 animate-pulse">{dashData.doctors}</p>
                    <p className="text-sm text-gray-500 mt-1">Registered specialists</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-float">
                    <img className="w-8 h-8 filter brightness-0 invert" src={assets.doctor_icon} alt="Doctors Icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Appointments Card */}
            <div className="animate-fade-in-up animate-stagger-2">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Total Appointments</p>
                    <p className="text-4xl font-bold text-green-600 animate-pulse">{dashData.appointments}</p>
                    <p className="text-sm text-gray-500 mt-1">Scheduled visits</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                    <img className="w-8 h-8 filter brightness-0 invert" src={assets.appointments_icon} alt="Appointments Icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Patients Card */}
            <div className="animate-fade-in-up animate-stagger-3">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Total Patients</p>
                    <p className="text-4xl font-bold text-purple-600 animate-pulse">{dashData.patients}</p>
                    <p className="text-sm text-gray-500 mt-1">Registered patients</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                    <img className="w-8 h-8 filter brightness-0 invert" src={assets.patients_icon} alt="Patients Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="animate-fade-in-up animate-stagger-1">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Active Doctors</p>
                    <p className="text-2xl font-bold">{dashData.doctors}</p>
                  </div>
                  <div className="text-2xl animate-bounce">👨‍⚕️</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up animate-stagger-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Today's Appointments</p>
                    <p className="text-2xl font-bold">{dashData.appointments}</p>
                  </div>
                  <div className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>📅</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up animate-stagger-3">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Total Revenue</p>
                    <p className="text-2xl font-bold">₹{(dashData.appointments * 500).toLocaleString()}</p>
                  </div>
                  <div className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>💰</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up animate-stagger-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Success Rate</p>
                    <p className="text-2xl font-bold">98%</p>
                  </div>
                  <div className="text-2xl animate-bounce" style={{ animationDelay: '0.6s' }}>📈</div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Bookings Section */}
          <div className="animate-fade-in-up animate-stagger-5">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                      <img className="w-5 h-5 filter brightness-0 invert" src={assets.list_icon} alt="Latest Bookings Icon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Latest Appointments</h3>
                      <p className="text-sm text-gray-600">Recent booking activities</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {dashData.latestAppointments.length} appointments
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {dashData.latestAppointments.length === 0 ? (
                  <div className="p-8 text-center animate-fade-in-up">
                    <div className="text-4xl mb-4 animate-bounce">📋</div>
                    <p className="text-gray-500">No appointments found</p>
                  </div>
                ) : (
                  dashData.latestAppointments.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 hover:bg-gray-50 transition-all duration-300 animate-fade-in-up hover-lift"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img 
                              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-lg" 
                              src={item.docData.image} 
                              alt="Doctor" 
                            />
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white animate-pulse ${
                              item.cancelled ? 'bg-red-500' : 'bg-green-500'
                            }`}></div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{item.docData.name}</p>
                            <p className="text-sm text-gray-500">{item.docData.speciality}</p>
                            <p className="text-xs text-gray-400">{formatDate(item.slotDate)} at {item.slotTime}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.cancelled)} animate-pulse`}>
                            {getStatusText(item.cancelled)}
                          </span>
                          
                          {!item.cancelled && (
                            <button
                              onClick={() => cancelAppointment(item._id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 hover-glow"
                              title="Cancel Appointment"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
