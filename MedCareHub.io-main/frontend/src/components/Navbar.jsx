import React, { useContext, useState, useEffect } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {token, setToken, userData} = useContext(AppContext)
    const [showMenu, setShowMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    
    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
    }

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
                : 'bg-transparent'
        }`}>
            <div className='flex items-center justify-between text-sm py-4 px-6 md:px-10 lg:px-20'>
                {/* Enhanced Logo with Icon */}
                <div 
                    className='flex items-center cursor-pointer group'
                    onClick={() => navigate('/')}
                >
                    <div className='relative flex items-center gap-3'>
                        {/* Custom Medical Logo Icon */}
                        <div className='relative'>
                            {/* Main Circle */}
                            <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110'>
                                {/* Cross Symbol */}
                                <div className='relative w-6 h-6'>
                                    {/* Vertical line */}
                                    <div className='absolute left-1/2 top-0 w-0.5 h-6 bg-white transform -translate-x-1/2 group-hover:animate-pulse-glow'></div>
                                    {/* Horizontal line */}
                                    <div className='absolute top-1/2 left-0 w-6 h-0.5 bg-white transform -translate-y-1/2 group-hover:animate-pulse-glow'></div>
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
                            <h1 className='text-2xl md:text-3xl font-bold animate-text-slide'>
                                <span className='text-blue-600 group-hover:text-blue-700 transition-colors duration-300'>Med</span>
                                <span className='text-green-500 group-hover:text-green-600 transition-colors duration-300'>Care</span>
                                <span className='text-red-500 group-hover:text-red-600 transition-colors duration-300'>Hub</span>
                            </h1>
                            {/* Animated underline */}
                            <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-red-500 group-hover:w-full transition-all duration-500'></div>
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex items-center gap-8 font-medium'>
                    {[
                        { path: '/', label: 'HOME' },
                        { path: '/doctors', label: 'ALL DOCTORS' },
                        { path: '/about', label: 'ABOUT' },
                        { path: '/contact', label: 'CONTACT' },
                        { path: '/bed-availability', label: 'BED ALLOCATION' },
                        { path: '/medicine', label: 'MEDICINE' }
                    ].map((item, index) => (
                        <NavLink 
                            key={item.path} 
                            to={item.path}
                            className='group relative'
                        >
                            <li className='py-2 px-1 transition-all duration-300 hover:text-primary'>
                                {item.label}
                            </li>
                            {/* Animated underline */}
                            <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-500 group-hover:w-full transition-all duration-500'></div>
                            {/* Active state */}
                            {location.pathname === item.path && (
                                <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-emerald-500 animate-pulse-glow'></div>
                            )}
                        </NavLink>
                    ))}
                </ul>

                {/* User Actions */}
                <div className='flex items-center gap-4'>
                    {token && userData ? (
                        <div className='flex items-center gap-3 cursor-pointer group relative'>
                            <div className='relative'>
                                <img 
                                    className='w-10 h-10 rounded-full border-2 border-white/50 shadow-lg group-hover:border-primary/50 transition-all duration-300 animate-scale-bounce' 
                                    src={userData.image} 
                                    alt=""
                                />
                                {/* Online indicator */}
                                <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-glow'></div>
                            </div>
                            <img 
                                className='w-3 transition-transform duration-300 group-hover:rotate-180' 
                                src={assets.dropdown_icon} 
                                alt=""
                            />
                            
                            {/* Dropdown Menu */}
                            <div className='absolute top-full right-0 pt-4 text-base font-medium text-gray-600 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2'>
                                <div className='bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 flex flex-col gap-2 p-4 min-w-48 animate-fade-in-up'>
                                    {[
                                        { path: 'my-profile', label: 'My Profile', icon: '👤' },
                                        { path: 'my-appointments', label: 'My Appointments', icon: '📅' },
                                        { path: 'my-bed-booking', label: 'My Bed Booking', icon: '🛏️' },
                                        { path: 'my-billing', label: 'My Billing', icon: '💰' }
                                    ].map((item, index) => (
                                        <div
                                            key={item.path}
                                            onClick={() => navigate(item.path)}
                                            className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer group/item animate-fade-in-up'
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            <span className='text-lg group-hover/item:scale-110 transition-transform duration-300'>{item.icon}</span>
                                            <span className='group-hover/item:translate-x-1 transition-transform duration-300'>{item.label}</span>
                                        </div>
                                    ))}
                                    <hr className='my-2 border-gray-200' />
                                    <div
                                        onClick={logout}
                                        className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-300 cursor-pointer group/item'
                                    >
                                        <span className='text-lg group-hover/item:scale-110 transition-transform duration-300'>🚪</span>
                                        <span className='group-hover/item:translate-x-1 transition-transform duration-300'>Logout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button 
                            onClick={() => navigate('/login')} 
                            className='group relative bg-gradient-to-r from-primary to-emerald-500 text-white px-8 py-3 rounded-full font-medium hidden md:block hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden'
                        >
                            <span className='relative z-10'>Create Account</span>
                            <div className='absolute inset-0 bg-gradient-to-r from-emerald-500 to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            {/* Shimmer effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer'></div>
                        </button>
                    )}

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setShowMenu(true)} 
                        className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'
                    >
                        <img className='w-6 h-6' src={assets.menu_icon} alt="" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${showMenu ? 'fixed inset-0' : 'pointer-events-none'} md:hidden z-50 transition-all duration-500`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
                        showMenu ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={() => setShowMenu(false)}
                ></div>
                
                {/* Menu Panel */}
                <div className={`absolute right-0 top-0 bottom-0 w-80 bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-500 ${
                    showMenu ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className='flex items-center justify-between p-6 border-b border-gray-200'>
                        <div className='flex items-center gap-3'>
                            {/* Mobile Logo */}
                            <div className='relative'>
                                <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg'>
                                    <div className='relative w-5 h-5'>
                                        <div className='absolute left-1/2 top-0 w-0.5 h-5 bg-white transform -translate-x-1/2'></div>
                                        <div className='absolute top-1/2 left-0 w-5 h-0.5 bg-white transform -translate-y-1/2'></div>
                                    </div>
                                </div>
                                <div className='absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-bounce'></div>
                            </div>
                            <h1 className='text-xl font-bold'>
                                <span className='text-blue-600'>Med</span>
                                <span className='text-green-500'>Care</span>
                                <span className='text-red-500'>Hub</span>
                            </h1>
                        </div>
                        <button 
                            onClick={() => setShowMenu(false)}
                            className='p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'
                        >
                            <img className='w-6 h-6' src={assets.cross_icon} alt="" />
                        </button>
                    </div>
                    
                    <div className='p-6'>
                        <ul className='flex flex-col gap-2'>
                            {[
                                { path: '/', label: 'Home', icon: '🏠' },
                                { path: '/doctors', label: 'All Doctors', icon: '👨‍⚕️' },
                                { path: '/about', label: 'About', icon: 'ℹ️' },
                                { path: '/contact', label: 'Contact', icon: '📞' },
                                { path: '/bed-availability', label: 'Bed Allocation', icon: '🛏️' },
                                { path: '/medicine', label: 'Medicine', icon: '💊' }
                            ].map((item, index) => (
                                <NavLink 
                                    key={item.path}
                                    onClick={() => setShowMenu(false)} 
                                    to={item.path}
                                    className='group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300'
                                >
                                    <span className='text-lg group-hover:scale-110 transition-transform duration-300'>{item.icon}</span>
                                    <span className='font-medium group-hover:translate-x-1 transition-transform duration-300'>{item.label}</span>
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


