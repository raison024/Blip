import React from 'react';
import './Navbar.css';
import Logo from '../../Assets/logo2.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='Navbar'>
          <div className='Nav-logo'>
            <Link to="/">
            <img src={Logo} className='Nav-logo' />
            </Link>
          </div>
          <div className='Nav-Items'>
          <Link to="/team" className='Nav-Items'>Our Team</Link>
            <Link to="/adminlogin" className='Nav-Items'>Admin</Link>
            <Link to="/reg" className='NavSignup-button'>Register</Link>
          </div>
        </div>
  )
}

export default Navbar