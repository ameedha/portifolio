import React from "react";
import Header from "../../Component/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Services from "../Services/Services";
import Portifolio from "../Portifolio/Portifolio";
import Contact from "../Contact/Contact";
import Footer from "../../Component/Header/Footer/Footer";

function RouterLayout() {
  return (
    //React Router to route to pages based on URL//
    //Header and footer are common to all pages//
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portifolio" element={<Portifolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default RouterLayout;
