import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Experience.css'

function Experience(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="experience" id="Experience">
            <div className="achievment">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
            <span  style={{color: darkMode?'white':''}}>Years</span>
            <span>Experience</span>
            </div>
            <div className="achievment">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
            <span  style={{color: darkMode?'white':''}}>Completed</span>
            <span>Projects</span>
            </div>
            <div className="achievment">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3</div>
            <span  style={{color: darkMode?'white':''}}>Companies</span>
            <span>work</span>
            </div>
        </div>
    )
}

export default Experience;