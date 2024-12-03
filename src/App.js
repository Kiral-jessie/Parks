
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import myImage from './images/images (24).jpeg'; // Adjust the path if needed

import UserReg from'./components/userReg';
import ParkingReservation from'./components/parkingReservation';
import './App.css';
import Footer from './footer.js'
import About from './about.js'
import Contact from './contact.js'

import Header from './header.js'; 

function App() {
  const[view,setView]=useState("")
  return(
    <Router>
  <div>
    <div className="background"></div>
      <h1>Cynthia's Smart Parking System</h1>
     <Header setView={setView} />
     <Routes>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    
    
    {view==='register'&& <UserReg />}
    {view==='reserve'&& <ParkingReservation />}
    <Footer />
    </div>
    </Router>
  );
}

export default App;
