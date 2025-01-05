// import { useParams } from 'react-router-dom';
import NavBar from './Components/Navbar'
import './Style/Home.css';

import headerImg from './Assets/home img.jpeg'
import slack from './Assets/social_media_icon/slack.png'
import insta from './Assets/social_media_icon/insta.png'
import linkedin from './Assets/social_media_icon/linkedin.png'
import gmail from './Assets/social_media_icon/gmail.png'

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
      <div className="StayUpdated">
        <p>Stay Updated</p>
        <div>
          <a href="https://www.instagram.com/wicys_scu/" target="_blank">
            <img src={insta} alt="Insta" />
          </a>
          <a href="https://join.slack.com/t/scuwicys/shared_invite/zt-2x67pqixi-OKGIa3789B2HmZ0qQcqkyw" target="_blank"> {/* NOTE: slack invite expires in 30 days */}
            <img src={slack} alt="Slack" />
          </a>
          <a href="mailto:scuwicys@gmail.com"> {/* TODO: update w/ SCU email */}
            <img src={gmail} alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/company/scu-wicys/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
