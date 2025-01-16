import '../Style/Navbar.css';
import logo from '../Assets/wicys logo.png';

const NavBar = () => {
  return <div className="Bar">
    <a href="/" >
      <img className="NavbarLogo" src={logo} alt="logo" />
    </a> 
    <div className="AllLinks">
      <a href="/Website/" className="NavbarItem"><p>About</p> <i class="fas fa-chevron-down"></i> </a> 
      <a href="/Website/events" className="NavbarItem"><p>Events</p> <i class="fas fa-chevron-down"></i></a>
      <a href="/Website/board" className="NavbarItem"><p>Board</p> <i class="fas fa-chevron-down"></i></a>
      <a href="/Website/newsletter" className="NavbarItem"><p>Newsletter</p> <i class="fas fa-chevron-down"></i></a>
    </div>
  </div>;
}

export default NavBar;