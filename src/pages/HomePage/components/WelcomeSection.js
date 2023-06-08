import profileImg from '../icons/profile.jpg';

function WelcomeSection() {
  return (
    <div id="welcome-section" className="section">
      <div>
        <h3>Hi, my name is</h3>
        <h1>Kyle Duval</h1>
        <p>a web developer with experience in large complex systems</p>
      </div>
      <img id="profile-pic" src={profileImg} alt="Kyle smiling" />
    </div>
  );
}

export default WelcomeSection;
