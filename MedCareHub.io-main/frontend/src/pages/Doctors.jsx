import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialities = [
    'General physician',
    'Gynecologist', 
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ];

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-full blur-3xl animate-float'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delayed'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse-slow'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-8'>
        {/* Header Section */}
        <div className='text-center mb-12 animate-fade-in-up'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 animate-slide-in-left'>
            Find Your <span className='bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent'>Perfect Doctor</span>
          </h1>
          <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay'>
            Browse through our extensive network of trusted healthcare specialists and book appointments with ease
          </p>
        </div>

        {/* Filter Section */}
        <div className='mb-10'>
          <div className='flex flex-col sm:flex-row items-start gap-4'>
            {/* Mobile Filter Button */}
            <button 
              className={`sm:hidden group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                showFilter 
                  ? 'bg-gradient-to-r from-primary to-emerald-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary'
              }`}
              onClick={() => setShowFilter(prev => !prev)}
            >
              <span className='flex items-center gap-2'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z' />
                </svg>
                Filters
                <svg className={`w-3 h-3 transition-transform duration-300 ${showFilter ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </span>
            </button>

            {/* Filter Options */}
            <div className={`flex flex-col sm:flex-row gap-2 w-full sm:w-auto ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
              {specialities.map((spec, index) => (
                <button
                  key={spec}
                  onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
                  className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    speciality === spec 
                      ? 'bg-gradient-to-r from-primary to-emerald-500 text-white shadow-lg' 
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary hover:bg-gray-50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className='relative z-10'>{spec}</span>
                  {speciality === spec && (
                    <div className='absolute inset-0 bg-gradient-to-r from-primary to-emerald-500 rounded-xl animate-pulse-glow'></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className='relative overflow-hidden'>
                <img 
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={item.image} 
                  alt={item.name} 
                />
                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Status Badge */}
                <div className='absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-pulse-glow'>
                  <div className='w-1.5 h-1.5 bg-white rounded-full animate-pulse'></div>
                  Available
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm font-medium">{item.speciality}</p>
                
                {/* Action Button */}
                <div className='flex items-center justify-between'>
                  <button className='group/btn relative bg-gradient-to-r from-primary to-emerald-500 text-white px-3 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden'>
                    <span className='relative z-10 flex items-center gap-1 text-sm'>
                      Book Now
                      <svg className='w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                      </svg>
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-emerald-500 to-primary rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></div>
                  </button>
                  
                  {/* Rating */}
                  <div className='flex items-center gap-1 text-yellow-500'>
                    <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <span className='font-semibold text-gray-700 text-sm'>4.9</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className='absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-300'></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filterDoc.length === 0 && (
          <div className='text-center py-16 animate-fade-in-up'>
            <div className='w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg className='w-10 h-10 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>No Doctors Found</h3>
            <p className='text-gray-600 mb-6'>We couldn't find any doctors matching your criteria.</p>
            <button 
              onClick={() => navigate('/doctors')}
              className='bg-gradient-to-r from-primary to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105'
            >
              View All Doctors
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
