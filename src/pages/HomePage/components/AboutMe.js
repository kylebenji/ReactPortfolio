function AboutMe() {
  return (
    <div id="about-me" className="section">
      <div className="section_title">
        <h2>About Me</h2>
        <div className="line"></div>
      </div>
      <p>
        <strong>Pronouns:</strong> He/They
      </p>
      <p>
        <strong>Location: </strong>Chandler, AZ, USA
      </p>
      <p>
        <strong>Education:</strong> BS Chemical Engineering from Georgia Tech
        (May '21)
      </p>
      <p>
        <strong>Previous Work:</strong> I worked as a Technical Services
        Engineer at Epic Systems from 2021 to 2022 where I was primary technical
        support in Willow Inpatient and Data Courier for 5 customer. While there
        I learned the MUMPS and SQL programming languages and I built an
        excellent troubleshooting and development foundation.
      </p>
      <p>
        <strong>Certifications:</strong>{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.freecodecamp.org/certification/kylebduval/responsive-web-design"
        >
          Responsive Web Design
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.freecodecamp.org/certification/kylebduval/javascript-algorithms-and-data-structures"
        >
          Javascript Algorithms and Data Structures
        </a>{' '}
        from freeCodeCamp,{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.udemy.com/certificate/UC-8cd37efa-089c-4a98-9cf6-00b69c2c6949/"
        >
          Complete Front End Javascript
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.udemy.com/certificate/UC-39ab18c8-dbce-480d-89ec-34fa7fefaf48/"
        >
          Beginning C++ Programming
        </a>{' '}
        from Udemy, and 6 Epic software certifications including Willow
        Inpatient, Data Courier, and Cogito Reporting.
      </p>
      <div>
        <p>
          <strong>Key Skills:</strong>
        </p>
        <ul id="skills">
          <li>Javascript</li>
          <li>HTML/CSS</li>
          <li>Data Analysis</li>
          <li>Troubleshooting</li>
          <li>Data Structures</li>
          <li>Databases</li>
          <li>Customer Communication</li>
          <li>GitHub</li>
          <li>Debugging</li>
        </ul>
      </div>
      <p>
        <strong>Hobbies:</strong> When I'm not coding I love to cook, run, play
        with my cat Patchy, and hike with my partner.
      </p>
    </div>
  );
}

export default AboutMe;
