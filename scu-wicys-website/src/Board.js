import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import './Style/Board.css';
import shieldImg from './Assets/Shield.png'

function BoardMember( {name, position} ){
  return(
    <div className="BoardMember">
      <img src={shieldImg}></img>
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
        <BoardMember name="Tiffany Nguyen" position="President"></BoardMember>
        <BoardMember name="Kara Barrese" position="Vice President"></BoardMember>
        <BoardMember name="Isabella Bravo" position="Treasurer"></BoardMember>
        <BoardMember name="Ridhanya Sakthivel" position="Secretary"></BoardMember>
        <BoardMember name="Chris Shobe" position="Public Relations"></BoardMember>
        <BoardMember name="Ariana Sun" position="Events Coordinator"></BoardMember>
        <BoardMember name="Prableen Kakar" position="Events Coordinator"></BoardMember>
        <BoardMember name="Seerat Kakar" position="Project Manager"></BoardMember>
        <BoardMember name="Jessica Tuso" position="Underclassman Rep"></BoardMember>
      </div>
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default Board;
