import '../Style/Navbar.css';
import logo from '../Assets/WiCyS Logo.png';

const NavBar = () => {
  return <div className="Bar">
    <img className="NavbarLogo" src={logo} alt="logo" /> {/* TODO: make anchor or add onclick? */}
    <div className="AllLinks">
      {/* TODO: fix href */}
      <a href="/dashboard" className="NavbarItem"><p>About</p> <i class="fas fa-chevron-down"></i> </a> 
      <a href="/enterinfo" className="NavbarItem"><p>Events</p> <i class="fas fa-chevron-down"></i></a>
      <a href="/" className="NavbarItem"><p>Board</p> <i class="fas fa-chevron-down"></i></a>
      <a href="/" className="NavbarItem"><p>Newsletter</p> <i class="fas fa-chevron-down"></i></a>
    </div>
  </div>;
}

export default NavBar;