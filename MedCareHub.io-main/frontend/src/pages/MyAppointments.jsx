import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const navigate = useNavigate();

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_');
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
  };

  const getStatusColor = (appointment) => {
    if (appointment.cancelled) return 'bg-red-100 text-red-700';
    if (appointment.payment) return 'bg-green-100 text-green-700';
    return 'bg-yellow-100 text-yellow-700';
  };

  const getStatusText = (appointment) => {
    if (appointment.cancelled) return 'Cancelled';
    if (appointment.payment) return 'Confirmed';
    return 'Pending Payment';
  };

  const getUserAppointments = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(backendUrl + '/api/user/appointments', {
        headers: { token },
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return;
    
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } });
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'MedCareHub',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(backendUrl + '/api/user/verifyrazorpay', response, { headers: { token } });
          if (data.success) {
            getUserAppointments();
            navigate('/my-appointments');
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } });
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error('Payment initialization failed');
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true;
    if (filter === 'upcoming' && !appointment.cancelled) return true;
    if (filter === 'completed' && appointment.payment) return true;
    if (filter === 'cancelled' && appointment.cancelled) return true;
    return false;
  });

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl animate-pulse">🏥</div>
          <p className="text-gray-500">Loading appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">My Appointments</h2>
          <p className="text-gray-600">Manage and track your medical appointments</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in-up">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Appointments</p>
                <p className="text-2xl font-bold text-gray-800">{appointments.length}</p>
              </div>
              <div className="text-3xl">📅</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">
                  {appointments.filter(a => a.payment && !a.cancelled).length}
                </p>
              </div>
              <div className="text-3xl">✅</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Payment</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {appointments.filter(a => !a.payment && !a.cancelled).length}
                </p>
              </div>
              <div className="text-3xl">⏳</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Cancelled</p>
                <p className="text-2xl font-bold text-red-600">
                  {appointments.filter(a => a.cancelled).length}
                </p>
              </div>
              <div className="text-3xl">❌</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'All Appointments', icon: '📋' },
              { key: 'upcoming', label: 'Upcoming', icon: '⏰' },
              { key: 'completed', label: 'Completed', icon: '✅' },
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

        {/* Appointments List */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {filteredAppointments.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No appointments found</h3>
              <p className="text-gray-600 mb-6">
                {filter === 'all' 
                  ? "You haven't booked any appointments yet."
                  : `No ${filter} appointments found.`
                }
              </p>
              <button
                onClick={() => navigate('/doctors')}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book an Appointment
              </button>
            </div>
          ) : (
            filteredAppointments.map((appointment, index) => (
              <div
                key={appointment._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Doctor Image */}
                    <div className="flex-shrink-0">
                      <img
                        className="w-24 h-24 rounded-xl object-cover shadow-md"
                        src={appointment.docData.image}
                        alt={appointment.docData.name}
                      />
                    </div>

                    {/* Appointment Details */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Dr. {appointment.docData.name}
                          </h3>
                          <p className="text-primary font-medium mb-3">{appointment.docData.speciality}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">📅 Appointment Date</p>
                              <p className="font-medium">{slotDateFormat(appointment.slotDate)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">⏰ Time</p>
                              <p className="font-medium">{appointment.slotTime}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">📍 Location</p>
                              <p className="font-medium">{appointment.docData.address.line1}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">📞 Contact</p>
                              <p className="font-medium">{appointment.docData.phone}</p>
                            </div>
                          </div>
                        </div>

                        {/* Status and Actions */}
                        <div className="flex flex-col items-end gap-4">
                          <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(appointment)}`}>
                            {getStatusText(appointment)}
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            {!appointment.cancelled && !appointment.payment && (
                              <button
                                onClick={() => appointmentRazorpay(appointment._id)}
                                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                              >
                                💳 Pay Now
                              </button>
                            )}
                            
                            {!appointment.cancelled && (
                              <button
                                onClick={() => cancelAppointment(appointment._id)}
                                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                              >
                                ❌ Cancel
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

export default MyAppointments;
