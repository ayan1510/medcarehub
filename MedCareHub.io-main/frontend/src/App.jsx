import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import BedAvailability from './pages/BedAvailability';
import BookBed from './pages/BookBed';
import BedPayment from './pages/BedPayment';
import BedReceipt from './pages/BedReceipt';
import MyBedBooking from './pages/MyBedBooking';
import Medicine from './pages/Medicine';
import MyBilling from './pages/MyBilling';
import Chatbot from './components/Chatbot';
import EmergencyPopup from './components/EmergencyPopup';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/my-bed-booking' element={<MyBedBooking/>}/>
        <Route path='/my-billing' element={<MyBilling/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path="/bed-availability" element={<BedAvailability/>}/>
        <Route path="/book-bed/:type" element={<BookBed/>}/>
        <Route path="/bed-payment/:type/:bedId" element={<BedPayment/>}/>
        <Route path="/bed-receipt/:type/:bedId" element={<BedReceipt/>}/>
        <Route path='/medicine' element={<Medicine/>}/>
      </Routes>
      <Footer/>
      <EmergencyPopup/>
      <Chatbot/>
    </div>
  )
}

export default App
