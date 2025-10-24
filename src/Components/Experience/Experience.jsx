import React, { useContext, useState, useEffect } from "react";
import { themeContext } from "../../Context";
import './Experience.css'

function Experience(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [yearsCount, setYearsCount] = useState(0);
    const [projectsCount, setProjectsCount] = useState(0);
    const [orgsCount, setOrgsCount] = useState(0);

    useEffect(() => {
        // Animate years counter
        const yearsInterval = setInterval(() => {
            setYearsCount(prev => {
                if (prev >= 3) {
                    clearInterval(yearsInterval);
                    return 3;
                }
                return prev + 1;
            });
        }, 200);

        // Animate projects counter
        const projectsInterval = setInterval(() => {
            setProjectsCount(prev => {
                if (prev >= 20) {
                    clearInterval(projectsInterval);
                    return 20;
                }
                return prev + 2;
            });
        }, 100);

        // Animate organizations counter
        const orgsInterval = setInterval(() => {
            setOrgsCount(prev => {
                if (prev >= 4) {
                    clearInterval(orgsInterval);
                    return 4;
                }
                return prev + 1;
            });
        }, 300);

        return () => {
            clearInterval(yearsInterval);
            clearInterval(projectsInterval);
            clearInterval(orgsInterval);
        };
    }, []);

    return(
        <div className="experience" id="Experience">
            <div className="achievment">
                <div className="circle">
                    <span className="number-display">{yearsCount}+</span>
                </div>
                <span className="achievement-title">Years</span>
                <span className="achievement-subtitle">Experience</span>
            </div>
            <div className="achievment">
                <div className="circle">
                    <span className="number-display">{projectsCount}+</span>
                </div>
                <span className="achievement-title">Completed</span>
                <span className="achievement-subtitle">Projects</span>
            </div>
            <div className="achievment">
                <div className="circle">
                    <span className="number-display">{orgsCount}</span>
                </div>
                <span className="achievement-title">Organizations</span>
                <span className="achievement-subtitle">Worked For</span>
            </div>
        </div>
    )
}

export default Experience;