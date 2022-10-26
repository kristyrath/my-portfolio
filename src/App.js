import './App.scss';
import Navigation from './routes/navigation/navigation.component';
import Header from './components/header/header.component';
import Projects from './components/projects/projects.component';
import Skills from './components/skills/skills.component';
import Contact from './components/contact/contact.component';
import Education from './components/education/education.component';
function App() {
  return (
    <div className='app'>
      <Navigation/> 
      <Header/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
