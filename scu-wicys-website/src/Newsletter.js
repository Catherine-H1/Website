import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import './Style/Newsletter.css';

const GoogleForm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "40px"}}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfMojNlZnhz0PJiC3SX7D-k7btD3ow4uSeRFfM6cvPjtxXRag/viewform?embedded=true" width="50%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
};

function Newsletter() {
  return (
    <div className="Newsletter">
      <NavBar></NavBar>
      <div className="NewsletterHeading">
        <h1> Join Our Newstter </h1>
      </div>
      <p>Fill out the form below to be added to our newsletter to get updates on future events!</p>
      <GoogleForm />
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default Newsletter;
