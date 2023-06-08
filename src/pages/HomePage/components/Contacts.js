import githubIcon from '../icons/github-mark-white.png';
import linkedinIcon from '../icons/LI-Logo.png';

function Contacts() {
  return (
    <div id="contacts" className="section">
      <div className="section_title">
        <h2>Contact me!</h2>
        <div className="line"></div>
      </div>
      <p>I'd love to hear what you'd like to work together on!</p>
      <div className="social-icons">
        <a
          id="profile-link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kylebenji"
        >
          <img className="social-icon" src={githubIcon} alt="Github icon" />
        </a>
        <a
          id="profile-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kyleduval/"
        >
          <img className="social-icon" src={linkedinIcon} alt="Github icon" />
        </a>
      </div>
      <div className="social-links">
        <p>
          <strong>Email:</strong> kylebduval@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contacts;
