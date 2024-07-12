import React from "react";
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

function Footer(){
    return(
        //Social media icons are taken from react icon//
        //using 'a tag' three social media links were displayed //
        <div className="container">
            <div className="Footer_container">
                <div className="footer_heading"> 
                    <h1>Keep in Touch</h1>
                </div>
           <div className="footer_content">
           <div className="footer_description">
            <p>Lets work together to touch your dream by consistant learning and practicing the technical world!!! </p>
           </div>
            <div className="social_icons">
                <a href ="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEQza2IBLzTbwAAAZB3KjRIlOpK7AB47lCpyNZOur4qrAwd3qDjQyje5glRaiNNwWZ-G7g47kV2O69I-Ybbp94PEGlAE1YjA0zDTQ2A3eLnMZoUJIC0dqqBxwukfmw7UBajiTs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fameedha-vp-6a2639277%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" target="_blank"><IoLogoLinkedin /></a>
                    <a href="https://www.facebook.com/amdhi.vp?mibextid=ZbWKwL" target="_blank"><FaFacebook /></a>
                    <a href="https://github.com/ameedha" target="_blank"><FaGithub /></a>
                </div>
           </div>
           
            </div>
        </div>
    )
}
export default Footer;