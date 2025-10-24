import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="footer-email">Johnhenrychibueze@gmail.com</span>
        <div className="f-icons">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a 
            href="https://www.linkedin.com/in/johnhenry-chibueze-b01ba41b3/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a 
            href="https://github.com/chibuezej" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Nmeregini Johnhenry. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
