import '../Style/StayUpdated.css';
import slack from '../Assets/social_media_icon/slack.png'
import insta from '../Assets/social_media_icon/insta.png'
import linkedin from '../Assets/social_media_icon/linkedin.png'
import gmail from '../Assets/social_media_icon/gmail.png'

const StayUpdated = () => {
  return <div className="StayUpdated">
    <p>Stay Updated</p>
    <div className="StayUpdatedImgContainer">
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
  </div>;
}

export default StayUpdated;