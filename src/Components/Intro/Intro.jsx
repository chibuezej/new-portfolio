import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/Group 101 (2).png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { useSpring, animated } from "@react-spring/web";
import resume from "../Services/Nmeregini.pdf";
import Typewriter from "typewriter-effect";
// Import profile image for avatar
import profileAvatar from "../../img/avater.jpeg";

function Intro() {
  const springs = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 },
  });
  
  const imageSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1200 },
  });

  const floatAnimation = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(-20px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { duration: 2000 },
  });

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="intro" id="Home">
      <animated.div className="i-left" style={springs}>
    
        
        <div className="i-badge">
          <span className="badge-text">Available for Work</span>
        </div>
        
        <span className="i-text1" style={{ color: darkMode ? "white" : "" }}>
          Hi! I'm
        </span>
        
        <span className="i-text2">Nmeregini Johnhenry</span>
        
        <div className="i-typewriter">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Mobile App Developer", 
                "React Expert",
                "Flutter Developer"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </div>

        <span className="i-text3" style={{ color: darkMode ? "rgba(255,255,255,0.8)" : "" }}>
          Frontend Developer with <strong>3+ years of experience</strong> crafting exceptional 
          digital experiences. Specialized in building scalable web and mobile applications 
          using <strong>React, Next.js, Flutter & React Native</strong>. Successfully deployed 
          apps to production with <strong>50K+ downloads</strong>.
        </span>
        
        <div className="i-tech-stack">
          <span className="tech-label" style={{ color: darkMode ? "rgba(255,255,255,0.6)" : "" }}>
            Tech Stack
          </span>
          <div className="tech-icons">
            <span className="tech-item">React</span>
            <span className="tech-item">Next.js</span>
            <span className="tech-item">TypeScript</span>
            <span className="tech-item">Flutter</span>
            <span className="tech-item">React Native</span>
          </div>
        </div>
        
        <div className="i-buttons">
          <a href={resume} download>
            <button className="button i-button-primary">Download CV</button>
          </a>
          <a href="#Contact">
            <button className="button i-button-secondary" style={{
              background: darkMode ? "transparent" : "transparent",
              color: darkMode ? "white" : "var(--orange)",
              border: darkMode ? "2px solid white" : "2px solid var(--orange)"
            }}>
              Let's Talk
            </button>
          </a>
        </div>
        
        <div className="i-icons">
          <a href="https://github.com/chibuezej" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/johnhenry-chibueze-b01ba41b3/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </animated.div>

      <animated.div className="i-right" style={imageSpring}>
        <div className="image-container">
    <animated.img 
            src={profileAvatar} 
            alt="Nmeregini Johnhenry" 
            className="image-background"
            style={imageSpring}
          />
        </div>
      
        <animated.div
          className="floating-div floating-1"
          style={floatAnimation}
        >
          <FloatingDiv image={Crown} txt1="3+ Years" txt2="Experience" />
        </animated.div>
        
        <animated.div
          className="floating-div floating-2"
          style={{
            ...floatAnimation,
            delay: 1000,
          }}
        >
          <FloatingDiv image={thumbup} txt1="4 Companies" txt2="Worked For" />
        </animated.div>
{/*         
        <div className="blur blur-1"></div>
        <div className="blur blur-2"></div> */}
      </animated.div>
    </div>
  );
}

export default Intro;
