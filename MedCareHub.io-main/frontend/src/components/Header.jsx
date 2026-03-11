import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='relative w-full overflow-hidden bg-gradient-to-br from-primary via-emerald-500 to-teal-600 shadow-2xl rounded-b-3xl mx-auto max-w-7xl mb-6'>
      {/* Background decoration with moving objects */}
      <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-b-3xl'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 animate-rotate-slow'></div>
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl transform -translate-x-32 translate-y-32 animate-rotate-fast'></div>
      
      {/* Additional background elements for full width */}
      <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-float'></div>
      <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-green-400/20 to-yellow-400/20 rounded-full blur-2xl animate-float-delayed'></div>
      
      {/* Moving objects */}
      <div className='absolute top-20 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-moving-object'></div>
      <div className='absolute top-40 right-20 w-3 h-3 bg-blue-300 rounded-full animate-moving-object-reverse'></div>
      <div className='absolute bottom-20 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-moving-object'></div>
      <div className='absolute bottom-40 right-1/3 w-5 h-5 bg-orange-300 rounded-full animate-moving-object-reverse'></div>
      <div className='absolute top-1/3 left-1/3 w-3 h-3 bg-purple-300 rounded-full animate-moving-object'></div>
      <div className='absolute bottom-1/3 right-1/3 w-4 h-4 bg-cyan-300 rounded-full animate-moving-object-reverse'></div>
      
      {/* Sliding window effects */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-window rounded-b-3xl'></div>
      <div className='absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-window-reverse rounded-b-3xl'></div>
      <div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-window rounded-b-3xl' style={{animationDelay: '2s'}}></div>
      
      {/* Full width content container */}
      <div className='relative flex flex-col lg:flex-row items-center justify-center w-full min-h-[500px] md:min-h-[600px]'>
        {/* --------Left Side------*/}
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-8 py-16 px-6 md:px-10 lg:px-16 xl:px-20 animate-fade-in-up'>
          <div className='space-y-8 text-center lg:text-left max-w-lg'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight animate-slide-in-left'>
              <span className='animate-text-slide inline-block'>Book</span>{' '}
              <span className='animate-text-slide inline-block' style={{animationDelay: '0.5s'}}>Appointment</span> <br/> 
              <span className='bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-glow-pulse'>
                With Trusted Doctors
              </span>
            </h1>
            <p className='text-lg md:text-xl text-white/90 font-light leading-relaxed animate-fade-in-delay'>
              Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free and get the care you deserve
            </p>
          </div>
          
          <div className='flex items-center gap-5 text-white/80 text-sm font-light animate-fade-in-delay-2'>
            <div className='relative'>
              <img className='w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-white/20 shadow-lg animate-scale-bounce' src={assets.group_profiles} alt="" />
              <div className='absolute -bottom-1 -right-1 w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center animate-pulse-glow'>
                <div className='w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full animate-pulse'></div>
              </div>
              {/* Morphing decoration */}
              <div className='absolute -top-2 -left-2 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-pink-400 to-purple-500 animate-morph'></div>
            </div>
            <div className='space-y-1'>
              <p className='font-semibold text-base md:text-lg animate-text-slide'>100+ Doctors</p>
              <p className='text-sm animate-text-slide' style={{animationDelay: '0.3s'}}>Available 24/7</p>
              <p className='text-xs text-white/70 animate-text-slide' style={{animationDelay: '0.6s'}}>Trusted by 10,000+ patients</p>
            </div>
          </div>
          
          <div className='flex flex-col sm:flex-row items-center gap-4 animate-fade-in-delay-2'>
            {/* Enhanced Book Appointment Button */}
            <a 
              href="#speciality" 
              className='group relative bg-gradient-to-r from-white to-gray-100 text-gray-800 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 animate-bounce-in overflow-hidden border border-white/20'
            >
              <span className='relative z-10 flex items-center gap-2'>
                <span>Book Appointment</span>
                <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </span>
              {/* Shimmer effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer'></div>
              {/* Glow effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </a>
            
            {/* Enhanced Learn More Button */}
            <button className='group relative bg-transparent border-2 border-white/40 backdrop-blur-sm px-6 py-4 rounded-2xl text-white font-semibold hover:bg-white/10 hover:border-white/60 hover:shadow-xl transition-all duration-300 animate-fade-in-delay-3 overflow-hidden'>
              <span className='relative z-10 flex items-center gap-2'>
                <span>Learn More</span>
                <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </span>
              {/* Hover glow */}
              <div className='absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
          </div>
        </div>

        {/* --------Right Side -----*/}
        <div className='w-full lg:w-1/2 relative animate-fade-in-right flex items-center justify-center p-6 md:p-10 lg:px-16 xl:px-20 lg:pr-8 xl:pr-12'>
          <div className='relative max-w-md md:max-w-lg w-full'>
            <img 
              className='w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700 animate-glow-pulse' 
              src={assets.header_img} 
              alt="" 
            />
            
            {/* Floating elements with advanced animations */}
            <div className='absolute top-4 md:top-6 right-4 md:right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-lg animate-float'>
              <div className='w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse-glow'></div>
            </div>
            <div className='absolute bottom-6 md:bottom-10 left-4 md:left-6 bg-white/90 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg animate-float-delay'>
              <div className='w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full animate-scale-bounce'></div>
            </div>
            
            {/* Wave animation elements */}
            <div className='absolute top-1/4 left-6 md:left-10 flex space-x-1'>
              <div className='w-1 h-4 md:h-6 bg-yellow-300 rounded-full animate-wave'></div>
              <div className='w-1 h-4 md:h-6 bg-yellow-300 rounded-full animate-wave-delay-1'></div>
              <div className='w-1 h-4 md:h-6 bg-yellow-300 rounded-full animate-wave-delay-2'></div>
              <div className='w-1 h-4 md:h-6 bg-yellow-300 rounded-full animate-wave-delay-3'></div>
              <div className='w-1 h-4 md:h-6 bg-yellow-300 rounded-full animate-wave-delay-4'></div>
            </div>
            
            {/* Rotating elements */}
            <div className='absolute top-1/3 right-6 md:right-10 w-8 h-8 md:w-10 md:h-10 border-2 border-white/30 rounded-full animate-rotate-slow'></div>
            <div className='absolute bottom-1/3 left-8 md:left-14 w-6 h-6 md:w-8 md:h-8 border-2 border-white/30 rounded-full animate-rotate-fast'></div>
            
            {/* Bounce rotate elements */}
            <div className='absolute top-1/2 right-1/4 w-4 h-4 md:w-5 md:h-5 bg-orange-400 rounded-full animate-bounce-rotate'></div>
            <div className='absolute bottom-1/4 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-pink-400 rounded-full animate-bounce-rotate' style={{animationDelay: '1s'}}></div>
            
            {/* Slide scale elements */}
            <div className='absolute top-1/4 left-1/4 w-5 h-5 md:w-6 md:h-6 bg-purple-400 rounded-full animate-slide-scale'></div>
            <div className='absolute bottom-1/3 right-1/4 w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full animate-slide-scale' style={{animationDelay: '2s'}}></div>
            
            {/* Additional floating stats */}
            <div className='absolute -top-2 md:-top-4 -left-2 md:-left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-lg animate-float'>
              <div className='text-center'>
                <div className='text-lg md:text-2xl font-bold text-primary'>4.9</div>
                <div className='text-xs text-gray-600'>Rating</div>
              </div>
            </div>
            
            <div className='absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-lg animate-float-delayed'>
              <div className='text-center'>
                <div className='text-lg md:text-2xl font-bold text-emerald-500'>24/7</div>
                <div className='text-xs text-gray-600'>Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header