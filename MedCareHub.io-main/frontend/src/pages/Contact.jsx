import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
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
            Contact <span className='bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent'>Us</span>
          </h1>
          <p className='text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay'>
            Get in touch with our team. We're here to help and answer any questions you may have.
          </p>
        </div>

        {/* Main Content Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Image Section */}
          <div className='relative animate-fade-in-left'>
            <div className='relative'>
              <img 
                className='w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700' 
                src={assets.contact_image} 
                alt="Contact MedCareHub" 
              />
              {/* Floating elements */}
              <div className='absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-primary to-emerald-500 rounded-xl flex items-center justify-center shadow-lg animate-float'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
              </div>
              <div className='absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg animate-float-delayed'>
                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className='space-y-6 animate-fade-in-right'>
            {/* Office Information */}
            <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade-in-delay'>
              <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-3'>
                <div className='w-8 h-8 bg-gradient-to-r from-primary to-emerald-500 rounded-full flex items-center justify-center'>
                  <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                  </svg>
                </div>
                Our Office
              </h3>
              <div className='space-y-3 text-gray-700'>
                <p className='flex items-center gap-3 text-sm'>
                  <svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  <span>54709 Willms Station, Suite 350<br />Washington, USA</span>
                </p>
                <p className='flex items-center gap-3 text-sm'>
                  <svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                  <span>+91 9800542729</span>
                </p>
                <p className='flex items-center gap-3 text-sm'>
                  <svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  <span>ayanmondal151020@gmail.com</span>
                </p>
              </div>
            </div>

            {/* Careers Section */}
            <div className='bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-2xl p-6 border border-primary/20 animate-fade-in-delay-2'>
              <h3 className='text-xl font-bold text-gray-800 mb-3 flex items-center gap-3'>
                <div className='w-8 h-8 bg-gradient-to-r from-primary to-emerald-500 rounded-full flex items-center justify-center'>
                  <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6' />
                  </svg>
                </div>
                Careers at MedCareHub
              </h3>
              <p className='text-gray-700 mb-4 leading-relaxed text-sm'>
                Learn more about our teams and exciting job opportunities. Join us in revolutionizing healthcare technology.
              </p>
              <button className='group relative bg-gradient-to-r from-primary to-emerald-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden'>
                <span className='relative z-10 flex items-center gap-2 text-sm'>
                  Explore Jobs
                  <svg className='w-3 h-3 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-emerald-500 to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
              Send us a <span className='bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent'>Message</span>
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto text-sm'>
              Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Full Name</label>
                <input 
                  type='text' 
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                  placeholder='Enter your full name'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
                <input 
                  type='email' 
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                  placeholder='Enter your email'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Phone Number</label>
                <input 
                  type='tel' 
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                  placeholder='Enter your phone number'
                />
              </div>
            </div>

            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Subject</label>
                <select className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Appointment Booking</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div className='md:col-span-2'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Message</label>
                <textarea 
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none'
                  placeholder='Tell us how we can help you...'
                ></textarea>
              </div>
            </div>

            <div className='md:col-span-2 text-center'>
              <button 
                type='submit'
                className='group relative bg-gradient-to-r from-primary to-emerald-500 text-white px-10 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden'
              >
                <span className='relative z-10 flex items-center gap-2'>
                  Send Message
                  <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                  </svg>
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-emerald-500 to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
