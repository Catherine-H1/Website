import '../Style/Navbar.css';
import logo from '../Assets/wicys logo.png';

const NavBar = () => {
  return <div className="Bar">
    <a href="/" >
      <img className="NavbarLogo" src={logo} alt="logo" />
    </a> 
    <div className="AllLinks">
      <a href="/" className="NavbarItem"><p>About</p> <i class="fas fa-chevron-down"></i> </a> 
      <a href="/events" className="NavbarItem"><p>Events</p> <i class="fas fa-chevron-down"></i></a>
      <a href="/board" className="NavbarItem"><p>Board</p> <i class="fas fa-chevron-down"></i></a>
      <a href="/newsletter" className="NavbarItem"><p>Newsletter</p> <i class="fas fa-chevron-down"></i></a>
    </div>
  </div>;
}

export default NavBar;