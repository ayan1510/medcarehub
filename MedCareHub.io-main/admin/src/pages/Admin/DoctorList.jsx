import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext)
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
      // Simulate loading
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [aToken])

  const getSpecialityColor = (speciality) => {
    const colors = {
      'General physician': 'bg-blue-50 text-blue-700 border-blue-200',
      'Gynecologist': 'bg-pink-50 text-pink-700 border-pink-200',
      'Dermatologist': 'bg-green-50 text-green-700 border-green-200',
      'Pediatricians': 'bg-yellow-50 text-yellow-700 border-yellow-200',
      'Neurologist': 'bg-purple-50 text-purple-700 border-purple-200',
      'Gastroenterologist': 'bg-orange-50 text-orange-700 border-orange-200',
    }
    return colors[speciality] || 'bg-gray-50 text-gray-700 border-gray-200'
  }

  const getSpecialityIcon = (speciality) => {
    const icons = {
      'General physician': '👨‍⚕️',
      'Gynecologist': '👩‍⚕️',
      'Dermatologist': '🔬',
      'Pediatricians': '👶',
      'Neurologist': '🧠',
      'Gastroenterologist': '🫀',
    }
    return icons[speciality] || '👨‍⚕️'
  }

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'available' && doctor.available) ||
      (filter === 'unavailable' && !doctor.available)
    
    return matchesSearch && matchesFilter
  })

  const totalDoctors = doctors.length
  const availableDoctors = doctors.filter(d => d.available).length
  const unavailableDoctors = doctors.filter(d => !d.available).length

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl animate-pulse">👨‍⚕️</div>
          <p className="text-gray-500">Loading doctors...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">All Doctors</h2>
          <p className="text-gray-600">Manage and monitor your medical staff</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Doctors</p>
                <p className="text-2xl font-bold text-gray-800">{totalDoctors}</p>
              </div>
              <div className="text-3xl">👨‍⚕️</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Available</p>
                <p className="text-2xl font-bold text-green-600">{availableDoctors}</p>
              </div>
              <div className="text-3xl">✅</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Unavailable</p>
                <p className="text-2xl font-bold text-red-600">{unavailableDoctors}</p>
              </div>
              <div className="text-3xl">❌</div>
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
                  placeholder="Search by name, speciality, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              </div>
            </div>
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'All', icon: '👨‍⚕️' },
                { key: 'available', label: 'Available', icon: '✅' },
                { key: 'unavailable', label: 'Unavailable', icon: '❌' }
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

        {/* Doctors Grid */}
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {filteredDoctors.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h3>
              <p className="text-gray-600">
                {searchTerm 
                  ? `No doctors match "${searchTerm}"`
                  : `No ${filter} doctors found.`
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor, index) => (
                <div
                  key={doctor._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* Doctor Image */}
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getSpecialityColor(doctor.speciality)}`}>
                        {doctor.speciality}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        doctor.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {doctor.available ? 'Available' : 'Unavailable'}
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                        <p className="text-gray-500 mb-2">{doctor.email}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">{getSpecialityIcon(doctor.speciality)}</span>
                          <span className="text-sm text-gray-600">{doctor.speciality}</span>
                        </div>
                      </div>
                    </div>

                    {/* Doctor Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">🎓</span>
                        <span className="text-sm text-gray-600">{doctor.degree}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">⏰</span>
                        <span className="text-sm text-gray-600">{doctor.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">💰</span>
                        <span className="text-sm text-gray-600">₹{doctor.fees} consultation fee</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">📍</span>
                        <span className="text-sm text-gray-600">{doctor.address.line1}</span>
                      </div>
                    </div>

                    {/* About Doctor */}
                    {doctor.about && (
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 line-clamp-3">{doctor.about}</p>
                      </div>
                    )}

                    {/* Availability Toggle */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={doctor.available}
                            onChange={() => changeAvailability(doctor._id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                        <span className="text-sm font-medium text-gray-700">
                          {doctor.available ? 'Available' : 'Unavailable'}
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                          ✏️
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorList
