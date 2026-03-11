import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='relative flex flex-col items-center gap-8 py-20 text-gray-800 bg-gradient-to-b from-white to-gray-50 overflow-hidden' id='speciality'>
      {/* Background decoration with moving objects */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5'></div>
      
      {/* Moving background objects */}
      <div className='absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse animate-moving-object'></div>
      <div className='absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000 animate-moving-object-reverse'></div>
      <div className='absolute top-1/2 left-20 w-16 h-16 bg-blue-500/10 rounded-full blur-lg animate-moving-object'></div>
      <div className='absolute bottom-1/3 right-20 w-12 h-12 bg-purple-500/10 rounded-full blur-lg animate-moving-object-reverse'></div>
      
      {/* Sliding window effects */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-slide-window'></div>
      <div className='absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-slide-window-reverse'></div>
      
      {/* Rotating decorative elements */}
      <div className='absolute top-20 right-20 w-8 h-8 border-2 border-primary/20 rounded-full animate-rotate-slow'></div>
      <div className='absolute bottom-20 left-20 w-6 h-6 border-2 border-primary/20 rounded-full animate-rotate-fast'></div>
      
      <div className='relative z-10 text-center space-y-4 animate-fade-in-up'>
        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-text-slide'>
          Find by Speciality
        </h1>
        <p className='max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed animate-text-slide' style={{animationDelay: '0.3s'}}>
          Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free
        </p>
      </div>
      
      <div className='relative z-10 flex justify-center gap-6 pt-8 w-full overflow-x-auto scrollbar-hide'>
        {specialityData.map((item, index) => (
          <Link 
            onClick={() => scrollTo(0, 0)} 
            className='group flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:scale-110 hover:-translate-y-4 transition-all duration-500 animate-fade-in-up relative'
            style={{ animationDelay: `${index * 100}ms` }}
            key={index} 
            to={`/doctors/${item.speciality}`}
          >
            <div className='relative mb-4'>
              {/* Moving background glow */}
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-moving-object'></div>
              
              <div className='relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-primary/30 overflow-hidden'>
                {/* Shimmer effect on hover */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer'></div>
                
                <img 
                  className='w-16 sm:w-20 h-16 sm:h-20 object-contain transition-transform duration-500 group-hover:scale-110 relative z-10 animate-scale-bounce' 
                  src={item.image} 
                  alt="" 
                />
                
                {/* Floating particles */}
                <div className='absolute top-2 right-2 w-2 h-2 bg-primary/60 rounded-full animate-float'></div>
                <div className='absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-500/60 rounded-full animate-float-delay'></div>
              </div>
              
              {/* Hover effect with glow */}
              <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse'></div>
              
              {/* Wave animation on hover */}
              <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <div className='w-1 h-2 bg-primary rounded-full animate-wave'></div>
                <div className='w-1 h-2 bg-primary rounded-full animate-wave-delay-1'></div>
                <div className='w-1 h-2 bg-primary rounded-full animate-wave-delay-2'></div>
              </div>
            </div>
            
            <p className='font-semibold text-gray-700 group-hover:text-primary transition-colors duration-300 animate-text-slide'>
              {item.speciality}
            </p>
            
            {/* Animated underline */}
            <div className='w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-500 mt-1 animate-slide-scale'></div>
            
            {/* Bounce rotate indicator */}
            <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-rotate'></div>
          </Link>
        ))}
      </div>
      
      {/* Additional floating elements */}
      <div className='absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400/30 rounded-full animate-float'></div>
      <div className='absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-400/30 rounded-full animate-float-delay'></div>
      <div className='absolute top-1/3 right-1/3 w-5 h-5 bg-blue-400/30 rounded-full animate-moving-object'></div>
      <div className='absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-moving-object-reverse'></div>
    </div>
  )
}

export default SpecialityMenu
