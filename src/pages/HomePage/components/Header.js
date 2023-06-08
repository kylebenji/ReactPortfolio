function Header() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-links">
          <a href="#about-me" className="nav_link">
            About
          </a>
          <a href="#projects" className="nav_link">
            Projects
          </a>
          <a href="#contacts" className="nav_link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// //General
// const nav = document.querySelector('#navbar');
// const welcomeSection = document.querySelector('#welcome-section');

// //////////////////////////
// ///////Page behavior//////
// //sticky nav bar
// let prevScrollPos = window.scrollY;
// window.onscroll = function (e) {
//   let currScrollPos = window.scrollY;
//   nav.style.top = currScrollPos < prevScrollPos ? '0px' : '-50px';
//   prevScrollPos = currScrollPos;
// };

// //Navigation bar smooth scrolling
// document.querySelector('.nav-links').addEventListener('click', function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains('nav_link')) {
//     let id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });
