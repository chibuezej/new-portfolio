import React from "react";
import Html from "../../img/icons8-html-5-48.png";
import Css from "../../img/icons8-css3-48.png";
import ReactImg from "../../img/icons8-react-100.png";
import bootsrap from "../../img/icons8-bootstrap-logo-24.png";
import javascript from "../../img/icons8-javascript-48.png";
import tailwind from "../../img/icons8-tailwind-css-48.png";
import github from "../../img/icons8-github-94.png";
import firebase from "../../img/icons8-firebase-48.png";
import figma from "../../img/icons8-figma-48.png";
import './Skills.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';
 

function Skills(){
  const theme = useContext(themeContext)
  const darkMode =  theme.state.darkMode
  
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: ReactImg,
      title: "React.js",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: ReactImg,
      title: "Next.js",
      style: "shadow-gray-600",
    },
    {
      id: 4,
      src: ReactImg,
      title: "React Native",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Css,
      title: "TypeScript",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: Html,
      title: "Flutter",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: javascript,
      title: "Dart",
      style: "shadow-blue-300",
    },
    {
      id: 9,
      src: Css,
      style: "shadow-purple-500",
      title: "Material UI",
    },
    {
      id: 10,
      src: Css,
      style: "shadow-teal-400",
      title: "Chakra UI",
    },
    {
      id: 11,
      src: Html,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 12,
      src: Css,
      style: "shadow-blue-500",
      title: "CSS3",
    },
    {
      id: 13,
      src: github,
      title: "Git & GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 15,
      src: figma,
      title: "Figma",
      style: "shadow-purple-400",
    },
    {
      id: 16,
      src: bootsrap,
      title: "Bootstrap",
      style: "shadow-purple-300",
    },
  ];
  
  return (
    <div id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-description">
            Technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        <div className="skills-grid">
          {techs.map(({ id, src, title }) => (
            <div key={id} className="skill-card">
              <img src={src} alt={title} />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;