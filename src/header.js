import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';  // Import Link for routing// Import the CSS file

function Header({ setView }) {
  return (
    <>
    <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
  <header className="header">
      <h3>Click The Button To Either Register or Reserve A Space(you can reserve a spot without registering with us but registered users are proritized first for reservation spot)</h3>
      <nav className="nav">
        <button onClick={() => setView('register')}>Register</button>
        <button onClick={() => setView('reserve')}>Reserve</button>
    </nav>
      </header>
      </>
  );
}

export default Header;