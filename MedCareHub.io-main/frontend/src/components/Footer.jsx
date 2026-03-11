import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-gradient-to-br from-gray-50 via-white to-gray-100 border-t border-gray-200/50 overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-full blur-3xl animate-float'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delayed'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse-slow'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-20'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16'>
          {/* Company Info */}
          <div className='space-y-6 animate-fade-in-up'>
            <div className='group cursor-pointer'>
              <div className='flex items-center gap-3 mb-4'>
                {/* Enhanced Logo Icon */}
                <div className='relative'>
                  <div className='w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110'>
                    <div className='relative w-7 h-7'>
                      <div className='absolute left-1/2 top-0 w-0.5 h-7 bg-white transform -translate-x-1/2 group-hover:animate-pulse-glow'></div>
                      <div className='absolute top-1/2 left-0 w-7 h-0.5 bg-white transform -translate-y-1/2 group-hover:animate-pulse-glow'></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-bounce group-hover:animate-ping'></div>
                  <div className='absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full animate-bounce-delayed group-hover:animate-ping'></div>
                  
                  {/* Pulse Ring */}
                  <div className='absolute inset-0 rounded-full border-2 border-blue-300/50 animate-ping'></div>
                  <div className='absolute inset-0 rounded-full border-2 border-blue-200/30 animate-ping' style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Text Logo */}
                <div className='relative'>
                  <h2 className='text-2xl font-bold'>
                    <span className='text-blue-600 group-hover:text-blue-700 transition-colors duration-300'>Med</span>
                    <span className='text-green-500 group-hover:text-green-600 transition-colors duration-300'>Care</span>
                    <span className='text-red-500 group-hover:text-red-600 transition-colors duration-300'>Hub</span>
                  </h2>
                  <div className='w-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-red-500 group-hover:w-full transition-all duration-500'></div>
                </div>
              </div>
            </div>
            <p className='text-gray-600 leading-relaxed text-sm'>
              Your trusted partner in health and wellness, providing top-tier medical care and seamless access to expert doctors. Experience compassionate healthcare designed for your needs, anytime, anywhere.
            </p>
            
            {/* Social Media Links */}
            <div className='flex space-x-4'>
              {[
                { icon: '📘', label: 'Facebook', href: '#' },
                { icon: '📷', label: 'Instagram', href: '#' },
                { icon: '🐦', label: 'Twitter', href: '#' },
                { icon: '💼', label: 'LinkedIn', href: '#' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className='group p-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200/50'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className='text-lg group-hover:rotate-12 transition-transform duration-300'>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6 animate-fade-in-up' style={{ animationDelay: '200ms' }}>
            <h3 className='text-xl font-semibold text-gray-800 mb-4 relative'>
              Quick Links
              <div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-emerald-500'></div>
            </h3>
            <ul className='space-y-3'>
              {[
                { path: '/', label: 'Home' },
                { path: '/doctors', label: 'Find Doctors' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact Us' },
                { path: '/bed-availability', label: 'Bed Availability' },
                { path: '/medicine', label: 'Medicine Store' }
              ].map((link, index) => (
                <li key={link.path} style={{ animationDelay: `${index * 50}ms` }}>
                  <NavLink
                    to={link.path}
                    className='group flex items-center text-gray-600 hover:text-primary transition-all duration-300'
                  >
                    <span className='w-2 h-2 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-all duration-300'></span>
                    <span className='group-hover:translate-x-1 transition-transform duration-300'>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-6 animate-fade-in-up' style={{ animationDelay: '400ms' }}>
            <h3 className='text-xl font-semibold text-gray-800 mb-4 relative'>
              Our Services
              <div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-emerald-500'></div>
            </h3>
            <ul className='space-y-3'>
              {[
                { icon: '👨‍⚕️', label: 'Doctor Consultations' },
                { icon: '🛏️', label: 'Bed Booking' },
                { icon: '💊', label: 'Medicine Delivery' },
                { icon: '📅', label: 'Appointment Booking' },
                { icon: '🏥', label: 'Emergency Care' },
                { icon: '🔬', label: 'Lab Tests' }
              ].map((service, index) => (
                <li key={service.label} style={{ animationDelay: `${index * 50}ms` }}>
                  <div className='group flex items-center text-gray-600 hover:text-primary transition-all duration-300'>
                    <span className='text-lg mr-3 group-hover:scale-110 transition-transform duration-300'>{service.icon}</span>
                    <span className='group-hover:translate-x-1 transition-transform duration-300'>{service.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-6 animate-fade-in-up' style={{ animationDelay: '600ms' }}>
            <h3 className='text-xl font-semibold text-gray-800 mb-4 relative'>
              Get In Touch
              <div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-emerald-500'></div>
            </h3>
            <div className='space-y-4'>
              <div className='group flex items-start space-x-3'>
                <div className='p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300'>
                  <span className='text-lg'>📞</span>
                </div>
                <div>
                  <p className='font-medium text-gray-800'>Phone</p>
                  <p className='text-gray-600 text-sm group-hover:text-primary transition-colors duration-300'>+91 9800542729</p>
                </div>
              </div>
              
              <div className='group flex items-start space-x-3'>
                <div className='p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300'>
                  <span className='text-lg'>✉️</span>
                </div>
                <div>
                  <p className='font-medium text-gray-800'>Email</p>
                  <p className='text-gray-600 text-sm group-hover:text-primary transition-colors duration-300'>ayanmondal151020@gmail.com</p>
                </div>
              </div>
              
              <div className='group flex items-start space-x-3'>
                <div className='p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300'>
                  <span className='text-lg'>📍</span>
                </div>
                <div>
                  <p className='font-medium text-gray-800'>Address</p>
                  <p className='text-gray-600 text-sm group-hover:text-primary transition-colors duration-300'>Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className='mt-6'>
              <h4 className='font-medium text-gray-800 mb-3'>Subscribe to Newsletter</h4>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                />
                <button className='px-4 py-2 bg-gradient-to-r from-primary to-emerald-500 text-white rounded-r-lg hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5'>
                  📧
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-200/50 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-600 text-sm text-center md:text-left'>
              © {currentYear} <span className='font-semibold'>MedCareHub</span>. All rights reserved.
            </p>
            
            <div className='flex space-x-6 text-sm'>
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Cookie Policy', href: '#' }
              ].map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='text-gray-600 hover:text-primary transition-colors duration-300 group'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className='group-hover:underline'>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className='absolute top-10 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce'></div>
      <div className='absolute top-20 right-20 w-3 h-3 bg-emerald-500/20 rounded-full animate-bounce-delayed'></div>
      <div className='absolute bottom-20 left-20 w-2 h-2 bg-blue-500/20 rounded-full animate-bounce'></div>
    </footer>
  )
}

export default Footer
