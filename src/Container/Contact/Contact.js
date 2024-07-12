import React from "react";
import "./Contact.css";
import cv from "../../assets/img/cv.docx";
import { SiMinutemailer } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";

function Contact() {
  return (
    //Contact container is divided into two parts contact_left contain contact details and contact_ right contain a form//
    <div className="container">
      <div className="contact_container">
        <div className="contact_left">
          <h1 className="title">Contact</h1>
          <p>
            <span>
              <SiMinutemailer />{" "}
            </span>{" "}
            sucessonmyway@gmail.com
          </p>
          <p>
            <span>
              <FaPhone />{" "}
            </span>{" "}
            +91 8281620456
          </p>

          <a href={cv.docx} download className="btn">
            Download CV
          </a>
        </div>
        <div className="contact_right">
          <form>
            <input type="text" name="Name" placeholder="Your Name" required />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
