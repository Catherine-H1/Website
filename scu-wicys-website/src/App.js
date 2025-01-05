// import { useParams } from 'react-router-dom';
import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import './Style/Home.css';

import headerImg from './Assets/home img.jpeg'

function AboutUsBlock({ heading, description }) {
  return(
    <div className="AboutUsBlock">
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="Header">
        <div className="HeaderText">
          <h1>Women in <br/> Cybersecurity <br/> at SCU</h1>
          <p>#SCUWiCyS #WomenInCyberSecurity</p>
          <button>Upcoming Events</button>
        </div>
        <img className="headerImg" src={headerImg} alt="image" /> {/* TODO: make anchor or add onclick? */}
      </div>
      <div className="DividerDiv"></div>
      <div className="AboutUs">
        <h1>About Us</h1>
        <div className='AboutUsInfo'>
          <AboutUsBlock heading="What is WiCyS" description="WiCyS, or Women in Cybersecurity, is a 501(c)(3) nonprofit organization founded by Dr. Ambareen Siraj with the goal of bringing together trailblazers from academia, government and industry to promote the advancement of women in cybersecurity."></AboutUsBlock>
          <AboutUsBlock heading="Our Mission" description="At Santa Clara University, we will work to foster an inclusive community, promote cyber safety and responsible cybersecurity practices to the general SCU population, and support professional development for students interested in pursuing cybersecurity."></AboutUsBlock>
          <AboutUsBlock heading="WiCyS SCU Chapter" description="To advance our mission, we host informative workshops, networking opportunities, information sessions, socials, project workshops, guest speakers, and more!"></AboutUsBlock>
        </div>
      </div>
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default App;
