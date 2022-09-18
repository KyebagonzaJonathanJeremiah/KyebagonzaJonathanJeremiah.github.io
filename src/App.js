
import './App.css';
import Header from './components/header/Header';
import AboutMe from './components/header/aboutMe/AboutMe';
import Skills from './components/header/skills/Skills';
import Resume from './components/header/resume/Resume';
import Testimonials from './components/header/testimonials/Testimonials';
import ContactMe from './components/header/contact/ContactMe';
import Footer from './components/header/footer/Footer';
import NavBar from './components/header/navBar/navBar';
import Route from './components/header/Route/Route';



function App() {


  return (
    
    <div className="App">
      <NavBar />
      <div>
        <Route path="/">
          <Header/>
          <AboutMe />
          <Skills />
          <Resume />
          <Testimonials />
          <ContactMe />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/skill">
          <Skills />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/testimonial">
          <Testimonials />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
        
      </div>
      <Footer />
    </div>
  
  );
}

export default App;
