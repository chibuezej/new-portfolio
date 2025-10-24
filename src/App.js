
import { useContext, useEffect } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Apply dark mode class to body for global styles
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
