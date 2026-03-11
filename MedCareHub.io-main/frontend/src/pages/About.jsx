import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
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
            About <span className='bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent'>MedCareHub</span>
          </h1>
          <p className='text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay'>
            Your trusted partner in managing healthcare needs conveniently and efficiently
          </p>
        </div>

        {/* Main Content Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Image Section */}
          <div className='relative animate-fade-in-left'>
            <div className='relative'>
              <img 
                className='w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700' 
                src={assets.about_image} 
                alt="About MedCareHub" 
              />
              {/* Floating elements */}
              <div className='absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-primary to-emerald-500 rounded-xl flex items-center justify-center shadow-lg animate-float'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                </svg>
              </div>
              <div className='absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg animate-float-delayed'>
                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className='space-y-6 animate-fade-in-right'>
            <div className='space-y-4'>
              <p className='text-base text-gray-700 leading-relaxed animate-fade-in-delay'>
                Welcome to <span className='font-semibold text-primary'>MedCareHub</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At MedCareHub, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
              </p>
              <p className='text-base text-gray-700 leading-relaxed animate-fade-in-delay-2'>
                MedCareHub is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, MedCareHub is here to support you every step of the way.
              </p>
            </div>

            {/* Vision Section */}
            <div className='bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-2xl p-6 border border-primary/20 animate-fade-in-delay-3'>
              <h3 className='text-xl font-bold text-gray-800 mb-3 flex items-center gap-3'>
                <div className='w-8 h-8 bg-gradient-to-r from-primary to-emerald-500 rounded-full flex items-center justify-center'>
                  <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                </div>
                Our Vision
              </h3>
              <p className='text-gray-700 leading-relaxed text-sm'>
                Our vision at MedCareHub is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='mb-16'>
          <div className='text-center mb-10 animate-fade-in-up'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4'>
              Why Choose <span className='bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent'>Us</span>
            </h2>
            <p className='text-base text-gray-600 max-w-2xl mx-auto'>
              We provide exceptional healthcare services with cutting-edge technology and compassionate care
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                icon: '⚡',
                title: 'Efficiency',
                description: 'Streamlined appointment scheduling that fits into your busy lifestyle.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🎯',
                title: 'Convenience',
                description: 'Access to a network of trusted healthcare professionals in your area.',
                color: 'from-emerald-500 to-green-500'
              },
              {
                icon: '💎',
                title: 'Personalization',
                description: 'Tailored recommendations and reminders to help you stay on top of your health.',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className='group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up cursor-pointer border border-gray-100'
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className='relative z-10 mb-4'>
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className='relative z-10'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed text-sm'>
                    {feature.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${feature.color.split('-')[1]}-200 rounded-2xl transition-colors duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className='bg-gradient-to-r from-primary to-emerald-500 rounded-2xl p-8 text-white animate-fade-in-up'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
            {[
              { number: '100+', label: 'Doctors' },
              { number: '10K+', label: 'Patients' },
              { number: '24/7', label: 'Support' },
              { number: '4.9', label: 'Rating' }
            ].map((stat, index) => (
              <div key={stat.label} className='animate-fade-in-up' style={{ animationDelay: `${index * 100}ms` }}>
                <div className='text-2xl md:text-3xl font-bold mb-2 animate-count-up'>
                  {stat.number}
                </div>
                <div className='text-white/80 font-medium text-sm'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
