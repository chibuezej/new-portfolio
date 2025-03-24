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
      title: "Javascript",
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
      src: bootsrap,
      title: "Bootsrap",
      style: "shadow-purple-300",
    },
    {
      id: 4,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: Css,
      style: "shadow-blue-500",
      title: "CSS",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 7,
      src: figma,
      title: "figma",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-red-400",
    },
    {
      id: 10,
      src: ReactImg,
      title: "React-Native",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Css,
      style: "shadow-blue-500",
      title: "Chakra-Ui",
    },
    {
      id: 12,
      src: firebase,
      title: "Supabase",
      style: "shadow-yellow-200",
    },
  ];
  return (
    <div
    id="skills"
    style={{color : darkMode? 'white': ''}}
    name="skills"
    className="bg-gradient-to-w  from-black to-gray-800 w-full text-white h-full"
  >
    <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="">
        <p style={{color: 'var(--orange)'}} className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Skills
        </p>
        <p style={{color : darkMode? 'white': 'var(--black)', fontSize: "1.5rem"}} className="py-6"> These are the technologies I have worked with</p>
      </div>

      <div style={{color: 'var(--orange)'}} className="grid sm:grid-cols-2  text-center w-full md:grid-cols-3 gap-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="toolsLogo" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Skills;