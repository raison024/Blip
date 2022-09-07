import React from 'react';
import './Footer.css';
import Logo from '../../Assets/logo2.png';
import IconButton from '@mui/material/IconButton';
import {Instagram, LinkedIn, Facebook, MailOutline} from '@mui/icons-material/';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from "react-router-dom";

function Footer() {
  const instaclick = () => {
    window.open("https://www.instagram.com/eatneatproject/?hl=en");
  };
  const linkedinclick = () => {
    window.open("https://www.linkedin.com/company/eatneatproject/?originalSubdomain=in");
  };
  const facebookclick = () => {
    window.open("https://www.facebook.com/eatneatproject/");
  };
  const mailclick = () => {
    window.open("https://www.instagram.com/eatneatproject/?hl=en");
  };
  return (
    <div className='Footer-App'>
      <div className='Footer-grid'>
        <img src={Logo} className="Footer-logo" aria-label='Sage'></img>
        <div className='Ready-title'>
          Ready to start binge-watching?
            <Link to="/login" className='Get-started'>
                    Get Started
            </Link>
        </div>
      </div>
        <div className='Footer-line' />
        <div className='Grid-contents'>
          <div className='Heading'>Subscribe to our newsletter<br/>
          <input type="text" placeholder='Email address' className='Sub-input'/>
          <IconButton aria-label="send" size='large' sx={{ color: '#fff'}}>
            <MailIcon fontSize='inherit' />
          </IconButton>
          </div> 
          <div className='Heading'>
            Pages
            <div className='Heading-content'>
              <p>Register</p>
              <p>Login</p>
              <p>Home</p>
            </div>
          </div>
          <div className='Heading'>
            About
            <div className='Heading-content'>
              <p>Team</p>
              <p>Customer Care</p>
              <p>Subscription</p>
            </div>
          </div>
          <div className='Heading'>
            Help
            <div className='Heading-content'>
              <p>FAQs</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className='Heading'>
            Social Media
            <div className='Heading-content'>
              <IconButton onClick={instaclick}>
                <Instagram fontSize="medium" sx={{ color: '#fff' }}/>
              </IconButton>
              <IconButton onClick={linkedinclick}>
                <LinkedIn fontSize="medium" sx={{ color: '#fff' }}/>
              </IconButton>
              <IconButton onClick={facebookclick}>
                <Facebook fontSize="medium" sx={{ color: '#fff' }}/>
              </IconButton>
              <IconButton onClick={mailclick}>
                <MailOutline fontSize="medium" sx={{ color: '#fff' }}/>
              </IconButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
