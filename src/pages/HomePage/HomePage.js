import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <WelcomeSection />
        <AboutMe />
        <Projects />
        <Contacts />
      </main>
    </div>
  );
}

export default HomePage;
