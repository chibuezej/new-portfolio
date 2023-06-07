import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import { useContext, useState } from 'react';
import { themeContext } from '../../Context';

function Navbar(){
    const [nav, setNav] = useState(false);
    const links = [
      { id: 1, link: "Home" },
      { id: 2, link: "Services" },
      { id: 3, link: "Experience" },
      { id: 4, link: "skills" },
      { id: 5, link: "portfolio" },
      { id: 6, link: "contact" },
    ];
    const theme = useContext(themeContext)
    const darkMode =  theme.state.darkMode
    return(
      
        <div style={{color : darkMode? 'white': 'black', backgroundColor : darkMode? 'black' : 'white',}} id='n-wrapper' className="flex justify-between items-center w-full h-20 text-white bg-black pl-1 pr-20 fixed mb:px-4 ">
        <div>
          <Link to="home" spy={true} smooth={true}>
          <div className="n-name">
          Meriles
                 <Toggle/> 
             </div>
             
          </Link>
        </div>
  
        <ul className="hidden md:flex">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-orange-400 hover:scale-105 duration-200"
              style={{color : darkMode? 'white': 'black', backgroundColor : darkMode? 'black' : 'white',}}
            >
              <Link to={link} smooth duration={500}>
                {" "}
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className=" cursor-pointer p-1 z-10 text-gray-400 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}{" "}
        </div>
  
        {/* show nav content when you click  */}
        {nav && (
          <ul id='nav-list' className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
            {links.map(({ link, id }) => (
              <li
                // onClick={() => setNav(false)}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
            {/* <a href="https://pscon.hashnode.dev/" target={"_blank"}>
              <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200">
                {" "}
                Blog{" "}
              </li>
            </a> */}
          </ul>
        )}
      </div>
    )
}

export default Navbar;