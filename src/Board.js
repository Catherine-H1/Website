import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import './Style/Board.css';

import shieldImg from './Assets/Shield.png'
import ArianaImg from './Assets/board_headshot/Ariana.png'
import ChrisImg from './Assets/board_headshot/Chris.png'
import IzzyImg from './Assets/board_headshot/Izzy.png'
import JessicaImg from './Assets/board_headshot/Jessica.png'
import KaraImg from './Assets/board_headshot/Kara.png'
import PrableenImg from './Assets/board_headshot/Prableen.png'
import RidhanyaImg from './Assets/board_headshot/Ridhanya.png'
import TiffanyImg from './Assets/board_headshot/Tiffany.png'

function BoardMember( {name, position, image} ){
  return(
    <div className="BoardMember">
      <img src={image} alt={`${name}'s image`} />
      <h2> {name} </h2>
      <p> {position} </p>
    </div>
  );
}
function Board() {
  return (
    <div className="Board">
      <NavBar></NavBar>
      <div className="MeetTheBoard">
        <h1> Meet the Board </h1>
      </div>
      <div className="Background">
        <div className="BackgroundCircle1"></div>
        <div className="BackgroundCircle2"></div>
        <div className="BackgroundCircle3"></div>
      </div>
      <div className="AllBoardMembers">
        <BoardMember name="Tiffany Nguyen" position="President" image={TiffanyImg}></BoardMember>
        <BoardMember name="Kara Barrese" position="Vice President" image={KaraImg}></BoardMember>
        <BoardMember name="Isabella Bravo" position="Treasurer" image={IzzyImg}></BoardMember>
        <BoardMember name="Ridhanya Sakthivel" position="Secretary" image={RidhanyaImg}></BoardMember>
        <BoardMember name="Chris Shobe" position="Public Relations" image={ChrisImg}></BoardMember>
        <BoardMember name="Ariana Sun" position="Events Coordinator" image={ArianaImg}></BoardMember>
        <BoardMember name="Prableen Kakar" position="Events Coordinator" image={PrableenImg}></BoardMember>
        <BoardMember name="Seerat Kakar" position="Project Manager" image={shieldImg}></BoardMember>
        <BoardMember name="Jessica Tuso" position="Underclassman Rep" image={JessicaImg}></BoardMember>
        <BoardMember name="Jasleen Kaur" position="Faculty Advisor" image={shieldImg}></BoardMember>
      </div>
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default Board;
