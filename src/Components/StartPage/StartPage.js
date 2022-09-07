import './StartPage.css';
import Mockup1 from '../../Assets/mockup2.png';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function StartPage() {
  return (
    <div className="StartPage">
      <header className="StartPage-header">
        <Navbar />
          <div className='Start-Homepage'>
            <div className='Start-title'>
              Welcome to<span style={{color: '#AD2FF5', fontSize: '9vmin', fontWeight: 'bold'}}> Blip</span>
              <div className='Start-content'>Watch Unlimited TV Shows and Movies just logging in</div>
              <Link to="/login" className='StartSign-button'>Sign In</Link>
            </div>
            
          </div>

          <div className='StartContent-page'>
            <div className='StartContent-title'>
              Enjoy on all your devices
                <div className='StartContent-para'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
            </div>
            <img src={Mockup1} className='StartContent-img' />
          </div>
          <Footer />
      </header>
    </div>
  );
}

export default StartPage;
