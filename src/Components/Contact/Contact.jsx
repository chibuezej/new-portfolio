import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dk1d4al",
        "template_7o4q7bq",
        form.current,
        "nbfKl_z7VxB2GyMkd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome-contact">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <span>
            I have gained more experience and am currently looking for a
            junior-level role in React or React Native. <br/>I am also interested in
            freelancing opportunities and internships to further enhance my
            skills.<br/> My goal is to work on as many projects as possible, so if
            you have any opportunities, feel free to contact me using the form
          </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="Name" />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <button
            type="submit"
            value="Send"
            className="button"
            style={{ color: darkMode ? "white" : "black" }}
          >
            SEND
          </button>
          <span>
            {done && "Thanks for reaching out i will get back to you soonest"}
          </span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
