import '../Style/Navbar.css';
import { Link } from "react-router-dom";
import logo from '../Assets/wicys logo.png';

const NavBar = () => {
  return <div className="Bar">
    <Link to="/"> <img className="NavbarLogo" src={logo} alt="logo" /></Link> 
    <div className="AllLinks">
      <Link to="/" className="NavbarItem"><p>About</p> <i class="fas fa-chevron-down"></i> </Link> 
      <Link to="/events" className="NavbarItem"><p>Events</p> <i class="fas fa-chevron-down"></i></Link>
      <Link to="/board" className="NavbarItem"><p>Board</p> <i class="fas fa-chevron-down"></i></Link>
      <Link to="/newsletter" className="NavbarItem"><p>Newsletter</p> <i class="fas fa-chevron-down"></i></Link>
    </div>
  </div>;
}

export default NavBar;