import React from "react";
import "./Header.css";
import logo1 from "../../assets/img/logo1.jpg";
import { Link } from "react-router-dom";

function Header() {
  //Creating an array to display the navbar content//
  const nav_item = [
    { path: "/", display: "Home" },
    { path: "/About", display: "About" },
    { path: "/Services", display: "Services" },
    { path: "/Portifolio", display: "Portifolio" },
    { path: "/Contact", display: "Contact" },
  ];

  return (
    //Creating a header contents inside the header tag//
    //Display the images from source folder of my project//
    <header classname="header">
      <div className="container">
        <div className="nav_container">
          <div className="logo">
            <div className="logo_image">
              <img src={logo1} alt="" />
            </div>
          </div>
          <div className="nav_items">
            <ul className="menu">
              {nav_item.map((item) => (
                <li>
                  <Link to={item.path}>{item.display}</Link>
                </li> //Separating the navbar items using mapping function //
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
