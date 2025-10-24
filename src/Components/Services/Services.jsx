import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Card from '../Card/Card';
import Humble from '../../img/humble.png'
import resume from './Nmeregini.pdf'
import { useContext } from 'react';
import { themeContext } from '../../Context';


function Services() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="services" id='Services'>
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>About Me</span>
                <span>My Expertise</span>
                <span style={{ color: darkMode ? 'white' : '' }} className="about-text">
                    Hi, I'm Nmeregini Johnhenry, a passionate <strong>Frontend Developer</strong> with <strong>3+ years 
                    of professional experience</strong> building innovative digital solutions. I specialize in crafting 
                    responsive web applications with <strong>React and Next.js</strong>, and mobile apps using 
                    <strong> Flutter and React Native</strong>.
                    <br /><br />
                    Throughout my career, I've had the privilege of working with <strong>4 organizations</strong>, 
                    delivering high-quality products that users love. One of my proudest achievements is successfully 
                    deploying the <strong>Jego app</strong> to both the <strong>Play Store and App Store</strong>, 
                    reaching thousands of users worldwide.
                    <br /><br />
                    I'm proficient in <strong>JavaScript, TypeScript, and Dart</strong>, and I leverage modern CSS 
                    frameworks like <strong>Tailwind CSS, Material UI, and Chakra UI</strong> to create stunning, 
                    user-friendly interfaces.
                </span>
                <a href={resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>

                <div className='blur s-blur1' style={{ background: "#abf1ff94" }}></div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div>
            {/* <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Web Development'}
                        detail={'React, Next.js, TypeScript, JavaScript'}
                    />
                </div>
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card emoji={Glasses}
                        heading={'Mobile Development'}
                        detail={"Flutter, React Native, Dart, App Store Deployment"}
                    />
                </div>
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI Frameworks & Tools'}
                        detail={"Tailwind CSS, Material UI, Chakra UI, Git"}
                    />
                </div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div> */}
        </div>
    )
}
export default Services; 