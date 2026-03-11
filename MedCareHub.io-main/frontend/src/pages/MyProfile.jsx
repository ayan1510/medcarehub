import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateUserProfileData = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();

      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);

      image && formData.append('image', image);

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } });

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateAge = (dateString) => {
    if (!dateString) return 'N/A';
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return userData && (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">My Profile</h2>
          <p className="text-gray-600">Manage your personal information and preferences</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Profile Picture */}
              <div className="relative">
                {isEdit ? (
                  <label htmlFor="image" className="cursor-pointer group">
                    <div className="relative">
                      <img
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:opacity-80 transition-opacity"
                        src={image ? URL.createObjectURL(image) : userData.image}
                        alt="Profile"
                      />
                      <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <img className="w-8 h-8" src={assets.upload_icon} alt="Upload" />
                      </div>
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden accept="image/*" />
                  </label>
                ) : (
                  <img
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    src={userData.image}
                    alt="Profile"
                  />
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{userData.name}</h3>
                <p className="text-white/80 mb-1">{userData.email}</p>
                <p className="text-white/80">{userData.phone}</p>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {userData.gender}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Age: {calculateAge(userData.dob)}
                  </span>
                </div>
              </div>

              {/* Edit Button */}
              <div>
                {isEdit ? (
                  <div className="flex gap-2">
                    <button
                      className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors"
                      onClick={() => {
                        setIsEdit(false);
                        setImage(false);
                      }}
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-white text-primary px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
                      onClick={updateUserProfileData}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-white text-primary px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setIsEdit(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                  {isEdit ? (
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      value={userData.name}
                      onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  ) : (
                    <p className="text-gray-800 font-medium">{userData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                  <p className="text-gray-800 font-medium">{userData.email}</p>
                  <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                  {isEdit ? (
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      value={userData.phone}
                      onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                    />
                  ) : (
                    <p className="text-gray-800 font-medium">{userData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Gender</label>
                  {isEdit ? (
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                      value={userData.gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <p className="text-gray-800 font-medium">{userData.gender}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Date of Birth</label>
                  {isEdit ? (
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                      value={userData.dob}
                    />
                  ) : (
                    <p className="text-gray-800 font-medium">{formatDate(userData.dob)}</p>
                  )}
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Address Information</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Address Line 1</label>
                  {isEdit ? (
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line1: e.target.value },
                        }))
                      }
                      value={userData.address.line1}
                      placeholder="Street address, apartment, suite, etc."
                    />
                  ) : (
                    <p className="text-gray-800 font-medium">{userData.address.line1}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Address Line 2</label>
                  {isEdit ? (
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line2: e.target.value },
                        }))
                      }
                      value={userData.address.line2}
                      placeholder="City, state, ZIP code"
                    />
                  ) : (
                    <p className="text-gray-800 font-medium">{userData.address.line2}</p>
                  )}
                </div>

                {/* Account Statistics */}
                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Account Overview</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">12</div>
                      <div className="text-sm text-gray-600">Appointments</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5</div>
                      <div className="text-sm text-gray-600">Bed Bookings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">₹2,500</div>
                      <div className="text-sm text-gray-600">Total Spent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">8</div>
                      <div className="text-sm text-gray-600">Medicines</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
