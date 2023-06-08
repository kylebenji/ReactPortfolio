import forkifyImg from '../icons/forkify-img.png';
import bankistAccount from '../icons/bankist-account-img.png';
import bankistSite from '../icons/bankist-site-img.png';
import clickerImg from '../icons/bankist-site-img.png';
import maptyImg from '../icons/mapty-img.png';
import octoplanImg from '../icons/Octoplan-img.png';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div id="projects" className="section">
      <div className="section_title">
        <h2>What I've been working on</h2>
        <div className="line"></div>
      </div>
      <div className="projects_content">
        <div className="project-wrapper">
          <div className="project_content_container">
            <h2>Octoplan</h2>
            <p>
              The <Link to="/octoplan">to do list app</Link> for people who
              simply need 8 more arms. Uses React, Redux, Bootstrap, and SASS to
              build an interactive to do list with filters, sorting, editing,
              and saving data to local storage. Also shows current weather for
              your location and stats on tasks on your list.
            </p>

            <p className="small">
              See on
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/kylebenji/octoplan"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="image-border">
            <a href="../apps/octoplan/">
              <img
                className="project-image"
                src={octoplanImg}
                alt="Octoplan Application"
              />
            </a>
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project_content_container">
            <h2>Forkify</h2>
            <p>
              A<a href="../apps/forkify/">recipe searching app</a>
              where you can search for
              <a href="https://forkify-api.herokuapp.com/phrases.html">
                keywords
              </a>
              , upload your own recipes, and dynamically calculate ingredient
              quantities for different serving amounts! Also has recipe
              bookmarking and pagination functionality.
            </p>
            <p className="small">
              Design by Jonas Schmedtmann, Javascript and parts of HTML and CSS
              by me. Created as part of
              <a
                href="https://www.udemy.com/course/the-complete-javascript-course/"
                target="_blank"
                rel="noreferrer"
              >
                course
              </a>
              on Udemy
            </p>
            <p className="small">
              See on
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/kylebenji/forkify"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="image-border">
            <a href="./src/forkify/">
              <img
                className="project-image"
                src={forkifyImg}
                alt="Forkify application"
              />
            </a>
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project_content_container">
            <h2>Mapty</h2>
            <p>
              A<a href="./src/maptyApp/">fitness tracking application</a> that
              allows you to track data and locations of workouts. It saves off
              your data and shows it on an interactive map!
            </p>

            <p className="small">
              Design by Jonas Schmedtmann, Javascript and parts of HTML and CSS
              by me. Created as part of
              <a
                href="https://www.udemy.com/course/the-complete-javascript-course/"
                target="_blank"
                rel="noreferrer"
              >
                course
              </a>
              on Udemy
            </p>
            <p className="small">
              See on
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/kylebenji/mapty"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="image-border">
            <a href="./src/maptyApp/">
              <img
                className="project-image"
                src={maptyImg}
                alt="Mapty Application"
              />
            </a>
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project_content_container">
            <h2 className="project_header">Bankist</h2>
            <p className="">
              A streamlined <a href="./src/bankistApp/">banking app</a> and
              <a href="./src/bankistWebsite/">marketing website</a>
              <br />
              example. The banking interface adjusts based on user locale and
              currency.
            </p>
            <p className="small">
              Design by Jonas Schmedtmann, Javascript and parts of HTML and CSS
              by me. Created as part of
              <a
                href="https://www.udemy.com/course/the-complete-javascript-course/"
                target="_blank"
                rel="noreferrer"
              >
                course
              </a>
              on Udemy
            </p>
            <p className="small">
              See full functionality and test users on
              <a
                href="https://github.com/kylebenji/bankist-app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="two-image">
            <div className="image-border image-first">
              <a href="./src/bankistApp/">
                <img
                  className="project-image"
                  src={bankistAccount}
                  alt="Bankist App"
                />
              </a>
            </div>
            <div className="image-border image-second">
              <a href="./src/bankistWebsite/">
                <img
                  className="project-image"
                  src={bankistSite}
                  alt="Bankist marketing Site"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project_content_container">
            <h2>Prep Cook Clicker Game</h2>
            <p>
              A <a href="./src/prepCookClicker/">clicker game</a> where you cut
              onions, train your abilities, and build up enough onion cutting
              expertise to automate the process!
            </p>
            <p className="small">
              See on
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/kylebenji/clicker-game"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="image-border">
            <a href="./src/prepCookClicker/">
              <img
                className="project-image"
                src={clickerImg}
                alt="Clicker site"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
