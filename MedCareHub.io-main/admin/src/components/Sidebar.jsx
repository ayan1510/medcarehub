import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    {
      path: '/admin-dashboard',
      icon: assets.home_icon,
      label: 'Dashboard',
      description: 'Overview and analytics',
      color: 'from-blue-500 to-blue-600'
    },
    {
      path: '/all-appointments',
      icon: assets.appointment_icon,
      label: 'Appointments',
      description: 'Manage all appointments',
      color: 'from-green-500 to-green-600'
    },
    {
      path: '/add-doctor',
      icon: assets.add_icon,
      label: 'Add Doctor',
      description: 'Register new doctors',
      color: 'from-purple-500 to-purple-600'
    },
    {
      path: '/doctor-list',
      icon: assets.people_icon,
      label: 'Doctor List',
      description: 'View all doctors',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const getActiveItem = () => {
    return menuItems.find(item => item.path === location.pathname);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-64'
    }`}>
      {aToken && (
        <div className="p-4">
          {/* Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full mb-6 p-2 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 flex items-center justify-center group"
          >
            <svg 
              className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  group relative block p-3 rounded-xl transition-all duration-300 transform hover:scale-105
                  ${isActive 
                    ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200'
                  }
                `}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Active Indicator */}
                {location.pathname === item.path && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full shadow-lg"></div>
                )}

                <div className="flex items-center gap-3">
                  {/* Icon Container */}
                  <div className={`
                    relative p-2 rounded-lg transition-all duration-300
                    ${location.pathname === item.path 
                      ? 'bg-white/20' 
                      : 'bg-gray-100 group-hover:bg-white'
                    }
                  `}>
                    <img 
                      src={item.icon} 
                      alt="" 
                      className={`w-5 h-5 transition-all duration-300 ${
                        location.pathname === item.path ? 'filter brightness-0 invert' : ''
                      }`}
                    />
                    
                    {/* Hover Effect */}
                    {hoveredItem === index && location.pathname !== item.path && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                    <p className={`font-medium transition-colors duration-200 ${
                      location.pathname === item.path ? 'text-white' : 'text-gray-800'
                    }`}>
                      {item.label}
                    </p>
                    <p className={`text-xs transition-colors duration-200 ${
                      location.pathname === item.path ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <svg 
                    className={`w-4 h-4 transition-all duration-300 ${
                      location.pathname === item.path ? 'text-white' : 'text-gray-400'
                    } ${isCollapsed ? 'opacity-0' : 'opacity-100'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Quick Stats Section */}
          {!isCollapsed && (
            <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Quick Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">Active Doctors</span>
                  <span className="font-semibold text-blue-600">24</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">Today's Appointments</span>
                  <span className="font-semibold text-green-600">156</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">Pending Reviews</span>
                  <span className="font-semibold text-orange-600">8</span>
                </div>
              </div>
            </div>
          )}

          {/* System Status */}
          <div className={`mt-6 p-3 bg-green-50 rounded-xl border border-green-200 ${isCollapsed ? 'text-center' : ''}`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {!isCollapsed && (
                <div>
                  <p className="text-xs font-medium text-green-800">System Online</p>
                  <p className="text-xs text-green-600">All services running</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
