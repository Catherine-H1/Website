import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import './Style/Events.css';
import events from './Assets/Winter2024 Events.png'

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
      <img src={events} alt="events" className="UpcomingEventsImg"></img>
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default Events;
