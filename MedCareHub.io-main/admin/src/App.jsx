import React from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import { Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';



const App = () => {

  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      {/* Fixed Navbar */}
      <Navbar/>
      
      {/* Main Layout */}
      <div className='flex items-start pt-20'>
        {/* Sidebar */}
        <Sidebar/>
        
        {/* Main Content Area */}
        <div className='flex-1 min-h-screen transition-all duration-300'>
          <div className='p-6 lg:p-8'>
            <Routes>
              <Route path='/' element={<></>} />
              <Route 
                path='/admin-dashboard' 
                element={
                  <div className="animate-fade-in-up">
                    <Dashboard/>
                  </div>
                } 
              />
              <Route 
                path='/all-appointments' 
                element={
                  <div className="animate-fade-in-up">
                    <AllAppointments/>
                  </div>
                } 
              />
              <Route 
                path='/add-doctor' 
                element={
                  <div className="animate-fade-in-up">
                    <AddDoctor/>
                  </div>
                } 
              />
              <Route 
                path='/doctor-list' 
                element={
                  <div className="animate-fade-in-up">
                    <DoctorList/>
                  </div>
                } 
              />
            </Routes>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="animate-fade-in-up">
        <Login/>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
