import React from 'react'
import Sidbar from './components/Sidebar/Sidbar'
import Check from './components/Test-folder/Check'
import { Route, Routes } from 'react-router-dom'
import Leads from './pages/Leads/Leads'
import User from './pages/User/User'
import Vendors from './pages/Vendors/Vendors'
import moodboard from './pages/moodboard/moodboard'
function App() {
  return (
    <div className="main-layout">
  <aside className="sidebar">
    <Sidbar/>
  </aside>
  <div className="dashboard-content">
    <Leads/>
  </div>
  <Routes>
        {/* <Route path="/leads" element={<Leads/>}/> */}
         <Route path="/user" element={<User/>}/>
         <Route path="/moodboard" element={<moodboard/>}/>
         <Route path="/vendors" element={<Vendors/>}/>
       </Routes>
      
</div>
      
  )
}

export default App
