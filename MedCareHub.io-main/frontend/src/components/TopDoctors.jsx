import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className='relative flex flex-col items-center gap-8 my-20 text-gray-900 md:mx-10 overflow-hidden'>
      {/* Background decoration with moving objects */}
      <div className='absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white'></div>
      
      {/* Moving background objects */}
      <div className='absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-moving-object'></div>
      <div className='absolute bottom-20 right-20 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-moving-object-reverse'></div>
      <div className='absolute top-1/2 left-1/4 w-20 h-20 bg-purple-500/5 rounded-full blur-lg animate-moving-object'></div>
      <div className='absolute bottom-1/3 right-1/4 w-16 h-16 bg-pink-500/5 rounded-full blur-lg animate-moving-object-reverse'></div>
      
      {/* Sliding window effects */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-slide-window'></div>
      <div className='absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-slide-window-reverse'></div>
      
      {/* Rotating decorative elements */}
      <div className='absolute top-10 right-10 w-10 h-10 border-2 border-primary/20 rounded-full animate-rotate-slow'></div>
      <div className='absolute bottom-10 left-10 w-8 h-8 border-2 border-primary/20 rounded-full animate-rotate-fast'></div>
      
      <div className='relative z-10 text-center space-y-4 animate-fade-in-up'>
        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-text-slide'>
          Top Doctors to Book
        </h1>
        <p className='max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed animate-text-slide' style={{animationDelay: '0.3s'}}>
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      
      <div className='relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8 px-4 sm:px-0'>
        {doctors.slice(0, 8).map((item, index) => (
          <div 
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
            className='group relative bg-white rounded-2xl overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl border border-gray-100 animate-fade-in-up'
            style={{ animationDelay: `${index * 100}ms` }}
            key={index}
          >
            {/* Card background gradient with moving effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-moving-object'></div>
            
            {/* Image container */}
            <div className='relative overflow-hidden'>
              <img 
                className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 animate-glow-pulse' 
                src={item.image} 
                alt="" 
              />
              {/* Overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
              
              {/* Status indicator with pulse glow */}
              <div className='absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg animate-scale-bounce'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse-glow'></div>
                <span className='text-xs font-semibold text-green-600 animate-text-slide'>Available</span>
              </div>
              
              {/* Rating badge with wave animation */}
              <div className='absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg animate-float'>
                <div className='flex items-center gap-1'>
                  <span className='text-yellow-500 text-sm animate-wave'>★</span>
                  <span className='text-xs font-semibold text-gray-700 animate-text-slide'>4.8</span>
                </div>
              </div>
              
              {/* Floating particles */}
              <div className='absolute top-1/4 left-4 w-2 h-2 bg-yellow-400/60 rounded-full animate-float'></div>
              <div className='absolute bottom-1/4 right-4 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float-delay'></div>
              
              {/* Rotating border on hover */}
              <div className='absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500 animate-rotate-slow opacity-0 group-hover:opacity-100'></div>
            </div>
            
            {/* Content */}
            <div className='relative p-6 space-y-3'>
              <div className='space-y-1'>
                <h3 className='text-lg font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 animate-text-slide'>
                  {item.name}
                </h3>
                <p className='text-sm text-gray-600 font-medium animate-text-slide' style={{animationDelay: '0.1s'}}>{item.speciality}</p>
              </div>
              
              {/* Doctor info with slide animation */}
              <div className='flex items-center justify-between text-xs text-gray-500 animate-slide-left-right'>
                <span>Experience: 8+ years</span>
                <span>Patients: 500+</span>
              </div>
              
              {/* Action button with shimmer effect */}
              <div className='pt-2 relative overflow-hidden'>
                <div className='w-full bg-gradient-to-r from-primary to-emerald-500 text-white text-center py-2 rounded-lg font-semibold text-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 animate-glow-pulse'>
                  <span className='relative z-10'>Book Appointment</span>
                  {/* Shimmer effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer'></div>
                </div>
              </div>
            </div>
            
            {/* Hover border effect with morphing */}
            <div className='absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500 animate-morph opacity-0 group-hover:opacity-100'></div>
            
            {/* Bounce rotate indicator */}
            <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-rotate'></div>
          </div>
        ))}
      </div>
      
      <div className='relative z-10 pt-8 animate-fade-in-up' style={{ animationDelay: '800ms' }}>
        <button 
          onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
          className='group relative bg-gradient-to-r from-primary to-emerald-500 text-white px-12 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden'
        >
          <span className='relative z-10 animate-text-slide'>View All Doctors</span>
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-500 to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-moving-object'></div>
          {/* Shimmer effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer'></div>
        </button>
      </div>
      
      {/* Additional floating elements */}
      <div className='absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400/30 rounded-full animate-float'></div>
      <div className='absolute bottom-1/4 right-1/4 w-4 h-4 bg-pink-400/30 rounded-full animate-float-delay'></div>
      <div className='absolute top-1/3 right-1/3 w-5 h-5 bg-blue-400/30 rounded-full animate-moving-object'></div>
      <div className='absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-moving-object-reverse'></div>
      
      {/* Wave animation elements */}
      <div className='absolute top-1/2 left-10 flex space-x-1'>
        <div className='w-1 h-3 bg-primary/30 rounded-full animate-wave'></div>
        <div className='w-1 h-3 bg-primary/30 rounded-full animate-wave-delay-1'></div>
        <div className='w-1 h-3 bg-primary/30 rounded-full animate-wave-delay-2'></div>
        <div className='w-1 h-3 bg-primary/30 rounded-full animate-wave-delay-3'></div>
      </div>
    </div>
  )
}

export default TopDoctors
