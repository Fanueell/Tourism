import { NavLink } from 'react-router-dom';
import { useState } from 'react'; // For toggling mobile menu
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // Mobile menu state

  return (
    <nav className='nav'>
      <div className="nav-logo">Tourism</div>
      
      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Links container */}
      <ul className={isMobile ? "nav-menu mobile" : "nav-menu"}>
        <li><NavLink exact activeClassName="active" className='links' to='/' onClick={() => setIsMobile(false)}>Home</NavLink></li>
        <li><NavLink activeClassName="active" className='links' to='/about' onClick={() => setIsMobile(false)}>About</NavLink></li>
        <li><NavLink activeClassName="active" className='links' to='/explore' onClick={() => setIsMobile(false)}>Explore</NavLink></li>
        <li className='nav-contact'><NavLink activeClassName="active" className='links' to='/contact' onClick={() => setIsMobile(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
