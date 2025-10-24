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

      <div className="w-left">
        <div className="awesome-contact">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Let's Work Together</span>
          <span style={{ color: darkMode ? "rgba(255,255,255,0.8)" : "" }}>
            I'm a <strong>mid-senior software frontend engineer</strong> with extensive experience 
            in <strong>web development</strong> and <strong>Flutter</strong>. I'm passionate about 
            building exceptional user experiences and scalable applications.
            <br/><br/>
            Whether you're looking for collaboration, have a project in mind, or just want 
            to connect, feel free to reach out using the form.
          </span>
      
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name="name" 
            className="user" 
            placeholder="Your Name" 
            required 
          />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Your Email"
            required
          />
          <textarea 
            name="message" 
            className="user" 
            placeholder="Tell me about your project..."
            required
          />
          <button
            type="submit"
            value="Send"
            className="send-button"
          >
            Send Message
          </button>
          {done && (
            <span className="success-message">
              ✓ Thank you for reaching out! I'll get back to you soon.
            </span>
          )}
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
