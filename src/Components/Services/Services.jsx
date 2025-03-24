import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Card from '../Card/Card';
import Humble from '../../img/humble.png'
import resume from './Nmeregini.pdf'
import { useContext } from 'react';
import { themeContext } from '../../Context';


function Services(){
    const theme = useContext(themeContext)
    const darkMode =  theme.state.darkMode
    return(
        <div className="services" id='Services'>
            <div className="awesome">
            <span style={{ color : darkMode ? 'white': ''}}>About My Awesome</span>
            <span>Services</span>
            <span style={{ color : darkMode ? 'white': ''}}>
            Hi, I am Nmeregini Johnhenry, a Frontend Developer based in Lagos, Nigeria who enjoys building products that leverage the internet.<br/>
             I am a highly resourceful and focused software engineer with experience in building web and mobile applications. <br/>
             I am intrested and I'm invested in every stage of the life cycle of software development, <br/>including design implementation, coding, debugging, testing, and maintenance.
                
            </span>
            <a href={resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
           
            <div className='blur s-blur1' style={{background: "#abf1ff94"}}></div>
            </div>
            <div className="cards">
                <div style={{left: '14rem'}}>
                <Card 
            emoji={HeartEmoji}
            heading={'Design'}
            detail= {'Chakra-ui, Canva, Bootsrap, Next-Js'}
            />
                </div>
                <div style={{top: "12rem", left: "-4rem"}}>
                <Card emoji={Glasses}
                heading={'Frontend Developer'}
                detail={"Html, Css,JavaScript, React, React Native"}
                />
                </div>
                <div style={{top: '19rem', left: '12rem' }}>
                <Card
                emoji={Humble}
                heading={'Familiar Tools'}
                detail={"Tailwind, Material Ui, Github, Notion, Trello"}
                />
                </div>
                <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}
export default Services; 