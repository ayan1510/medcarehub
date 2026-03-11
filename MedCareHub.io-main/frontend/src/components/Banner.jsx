import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-primary via-emerald-500 to-teal-600 rounded-3xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-2xl'>
      {/* Background decoration with moving objects */}
      <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 animate-rotate-slow'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl transform -translate-x-32 translate-y-32 animate-rotate-fast'></div>
      
      {/* Moving objects */}
      <div className='absolute top-20 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-moving-object'></div>
      <div className='absolute top-40 right-20 w-3 h-3 bg-blue-300 rounded-full animate-moving-object-reverse'></div>
      <div className='absolute bottom-20 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-moving-object'></div>
      <div className='absolute bottom-40 right-1/3 w-5 h-5 bg-orange-300 rounded-full animate-moving-object-reverse'></div>
      <div className='absolute top-1/2 left-1/3 w-3 h-3 bg-purple-300 rounded-full animate-moving-object'></div>
      <div className='absolute bottom-1/3 right-1/4 w-4 h-4 bg-cyan-300 rounded-full animate-moving-object-reverse'></div>
      
      {/* Sliding window effects */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-window'></div>
      <div className='absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-window-reverse'></div>
      
      <div className='relative flex flex-col md:flex-row items-center'>
        {/* ------left side------ */}
        <div className='flex-1 py-12 sm:py-16 lg:py-24 lg:pl-5 animate-fade-in-left'>
          <div className='space-y-6'>
            <div className='space-y-4'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-text-slide'>
                Book Appointment
              </h2>
              <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-glow-pulse'>
                With 100+ Trusted Doctors
              </h3>
            </div>
            
            <div className='space-y-4'>
              <div className='flex items-center gap-3 text-white/90 animate-slide-left-right'>
                <div className='flex space-x-1'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className='text-yellow-300 text-lg animate-wave' style={{animationDelay: `${i * 0.1}s`}}>★</span>
                  ))}
                </div>
                <span className='text-sm font-medium animate-text-slide'>4.8/5 Rating</span>
              </div>
              
              <div className='flex items-center gap-6 text-white/80 text-sm animate-slide-left-right' style={{animationDelay: '0.3s'}}>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse-glow'></div>
                  <span className='animate-text-slide'>24/7 Available</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow'></div>
                  <span className='animate-text-slide'>Instant Booking</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
              className='group relative bg-white/95 backdrop-blur-sm text-gray-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-bounce-in overflow-hidden'
            >
              <span className='relative z-10 animate-text-slide'>Create Account</span>
              <div className='absolute inset-0 bg-gradient-to-r from-gray-100 to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-moving-object'></div>
              {/* Shimmer effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer'></div>
            </button>
          </div>
        </div>
        
        {/* ------right side------ */}
        <div className='hidden md:block md:w-1/2 lg:w-[400px] relative animate-fade-in-right'>
          <div className='relative'>
            <img 
              className='w-full absolute bottom-0 right-0 max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700 animate-glow-pulse' 
              src={assets.appointment_img} 
              alt="" 
            />
            
            {/* Floating elements with advanced animations */}
            <div className='absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg animate-float'>
              <div className='w-4 h-4 bg-green-500 rounded-full animate-pulse-glow'></div>
            </div>
            <div className='absolute bottom-16 left-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-float-delay'>
              <div className='w-3 h-3 bg-blue-500 rounded-full animate-scale-bounce'></div>
            </div>
            
            {/* Wave animation elements */}
            <div className='absolute top-1/4 left-8 flex space-x-1'>
              <div className='w-1 h-4 bg-yellow-300 rounded-full animate-wave'></div>
              <div className='w-1 h-4 bg-yellow-300 rounded-full animate-wave-delay-1'></div>
              <div className='w-1 h-4 bg-yellow-300 rounded-full animate-wave-delay-2'></div>
              <div className='w-1 h-4 bg-yellow-300 rounded-full animate-wave-delay-3'></div>
              <div className='w-1 h-4 bg-yellow-300 rounded-full animate-wave-delay-4'></div>
            </div>
            
            {/* Rotating elements */}
            <div className='absolute top-1/3 right-8 w-8 h-8 border-2 border-white/30 rounded-full animate-rotate-slow'></div>
            <div className='absolute bottom-1/3 left-12 w-6 h-6 border-2 border-white/30 rounded-full animate-rotate-fast'></div>
            
            {/* Bounce rotate elements */}
            <div className='absolute top-1/2 right-1/4 w-4 h-4 bg-orange-400 rounded-full animate-bounce-rotate'></div>
            <div className='absolute bottom-1/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-bounce-rotate' style={{animationDelay: '1s'}}></div>
            
            {/* Slide scale elements */}
            <div className='absolute top-1/4 left-1/4 w-5 h-5 bg-purple-400 rounded-full animate-slide-scale'></div>
            <div className='absolute bottom-1/3 right-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-slide-scale' style={{animationDelay: '2s'}}></div>
            
            {/* Morphing decorative elements */}
            <div className='absolute top-1/3 left-1/3 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 animate-morph'></div>
            <div className='absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 animate-morph' style={{animationDelay: '3s'}}></div>
            
            {/* Stats card with animations */}
            <div className='absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-slide-in-up overflow-hidden'>
              <div className='text-center relative'>
                <div className='text-2xl font-bold text-primary animate-text-slide'>500+</div>
                <div className='text-xs text-gray-600 animate-text-slide' style={{animationDelay: '0.2s'}}>Happy Patients</div>
                {/* Shimmer effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 hover:opacity-100 transition-opacity duration-500 animate-shimmer'></div>
              </div>
            </div>
            
            {/* Additional floating particles */}
            <div className='absolute top-1/2 left-4 w-2 h-2 bg-yellow-400/60 rounded-full animate-float'></div>
            <div className='absolute bottom-1/2 right-4 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float-delay'></div>
            <div className='absolute top-1/4 right-1/4 w-3 h-3 bg-pink-400/60 rounded-full animate-moving-object'></div>
            <div className='absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400/60 rounded-full animate-moving-object-reverse'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
