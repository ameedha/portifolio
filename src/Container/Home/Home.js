import React from "react";
import "./Home.css";
import profile from "../../assets/img/profile.avif";
import About from "../About/About";
import Services from "../Services/Services";
import Portifolio from "../Portifolio/Portifolio";
import Contact from "../Contact/Contact";

function Home() {
  //Function for creating background image to fit the Home container//

  const mystyle = {
    backgroundImage: `url(${profile})`,
    width: "100%",
    height: "200vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    //Using fragments different elements(home,about etc) are rendering //

    //Home content is placed under the section to separete from other elements//
    <>
      <section>
        <div className="container">
          <div className="home_container" style={mystyle}>
            <div className="home_text">
              <p>Web Developer</p>
              <h3>
                Hi,I'm <span>Ameedha V P</span>
              </h3>
              <h3>From India</h3>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portifolio />
      <Contact />
    </>
  );
}
export default Home;
