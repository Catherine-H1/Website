import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import { Link } from "react-router-dom";
import './Style/Newsletter.css';

function Newsletter() {
  return (
    <div className="Newsletter">
      <NavBar></NavBar>
      <div className="NewsletterHeading">
        <h1> Join Our Newstter </h1>
      </div>
      <div className="NewsletterBlock">
        <p className="NewsletterBlurb">Enter your SCU email at the mailchimp link below to added to our newsletter to get updates on future events!</p>
        <button>
            <Link to="https://gmail.us12.list-manage.com/subscribe?u=2417fc2788acbdf58b4fd02aa&id=868fb760fb&fbclid=PAY2xjawH2jVpleHRuA2FlbQIxMAABptroCfWx-64HFqO9Q0chUqe8X0KQa8eNpBW8hL3i3B1b8N2-xfV4BH86Eg_aem_z7RKlD35fguhZdnNBPlroA" style={{ textDecoration: "none", color: "inherit" }}>
              Sign Up
            </Link>
          </button>
      </div>
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default Newsletter;
