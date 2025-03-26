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

function Intro() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });
  const spring = useSpring({
    from: { x: 100 },
    to: { x: 0 },
  });

  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="Home">
      <div className="i-left">
        <div></div>
        <span className="i-text1" style={{ color: darkMode ? "white" : "" }}>
          Hi! my name is
        </span>
        <span className="i-text2">Nmeregini Johnhenry</span>
        <span className="i-text2" style={{ color: "blue" }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Software Engineer")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Technical Writer")
                .deleteAll()
                .typeString("Frontend Developer")
                .start();
            }}
          />
        </span>

        <span className="i-text3" style={{ color: darkMode ? "white" : "" }}>
          Hello, i am a Frontend Developer with a year learning experience in{" "}
          <br /> web design and development, i love solving peoblems{" "}
        </span>
        <a href={resume}>
          {" "}
          <button className="button i-button">Hire Me</button>{" "}
        </a>
        <div className="i-icons">
          <a href="https://github.com/chibuezej">
            <img src={Github} alt="" />{" "}
          </a>

          <a href="https://www.linkedin.com/in/johnhenry-chibueze-b01ba41b3/">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" className="profile" />
        <animated.img
          transition={transition}
          style={{ ...springs }}
          src={glassesimoji}
          alt=""
          springs
        />
        <animated.div
          className="floating-div"
          style={{
            top: "-4%",
            left: "50%",
            transition: "ease-in-out 5s",
            ...spring,
          }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </animated.div>
        <animated.div
          className="floating-div"
          style={{
            top: "18rem",
            left: "-15rem",
            transition: "ease-in-out 5s",
            ...springs,
          }}
        >
          <FloatingDiv image={thumbup} txt1="Learning" txt2="Daily" />
        </animated.div>
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
