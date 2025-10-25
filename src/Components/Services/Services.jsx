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
                    Hi, I'm Nmeregini Johnhenry — a <strong>Frontend Developer</strong> with over <strong>3 years of experience</strong> building modern, user-focused digital solutions across web and mobile platforms.
                    <br /><br />
                    I began my tech journey at <strong>AltSchool Africa</strong>, where I deepened my understanding of frontend development and connected with like-minded innovators. Shortly after, I joined <strong>Keza Africa</strong> as a Frontend Developer, building responsive web applications using <strong>React, Next.js, Chakra UI, and Tailwind CSS</strong> while integrating APIs to deliver dynamic user experiences.
                    <br /><br />
                    I later transitioned into freelancing at <strong>First Registrars</strong>, where I expanded my skill set using <strong>React and Material UI</strong> to deliver clean, efficient interfaces. My growing interest in mobile development led me to learn <strong>React Native</strong>, which I applied during my time at <strong>Tech Amaka</strong>, contributing to the development of <strong>Labtraca</strong>, a mobile app that enables users to order lab kits and first aid treatments.
                    <br /><br />
                    Currently, I serve as the <strong>Frontend Lead at JéGO</strong>, where I oversee the development of both web and mobile experiences. On the web, I leverage <strong>Next.js and Tailwind CSS</strong> to create scalable and performant interfaces, while on the mobile side, I use <strong>Flutter</strong> to deliver smooth, cross-platform experiences. I also manage deployments using <strong>Codemagic</strong> and maintain content management through <strong>Sanity CMS</strong>.
                    <br /><br />
                    Over the years, I've successfully collaborated with multiple teams across <strong>four organizations</strong>, delivering products that users love — including the successful deployment of the <strong>JéGO app</strong> to both the <strong>Play Store and App Store</strong>, reaching <strong>thousands of users worldwide</strong>.
                    <br /><br />
                    My technical expertise spans <strong>JavaScript, TypeScript, Dart</strong>, and modern frameworks such as <strong>React, Next.js, React Native, and Flutter</strong>, complemented by <strong>Tailwind CSS, Material UI, and Chakra UI</strong> for design excellence.
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