import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import './Style/Events.css';
import Winter2024Events from './Assets/Winter2024 Events.png'
import Spring2025Events from './Assets/Spring2025 Events.png'

function Events() {
  return (
    <div className="Events">
      <NavBar></NavBar>
      <div className="UpcomingEvents">
        <h1> Upcoming Events </h1>
        <div className="Circle1"></div>
        <div className="Circle2"></div>
        <div className="Circle3"></div>
        <div className="Circle4"></div>
        <div className="Circle6"> 
          <div className="Circle5"></div> 
        </div>
      </div>
      <img src={Spring2025Events} alt="events" className="UpcomingEventsImg"></img>
      {/* <h1> Past Events </h1>
      <img src={Winter2024Events} alt="events" className="UpcomingEventsImg"></img> */}
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default Events;
