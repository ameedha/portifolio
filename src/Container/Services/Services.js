import React from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa6";
import { MdCropRotate } from "react-icons/md";
import { FaAppStore } from "react-icons/fa";

function Services() {
  const serviceItems = [
    //created an array to store the values of icon,title and description of service content//
    {
      //icons are retrivied from React icons//
      icon: <FaAppStore />,
      title: "App Development",
      description:
        "Creating Apps which can be used for getting knowledge for students like English dictionary.So a certain group of people can take the benifits from such apps.",
    },
    {
      icon: <MdCropRotate />,
      title: "Website Creation",
      description:
        "Creating websites as per the customers demand.We ensure the clients satisfaction in our development process.We promiss you the best output by creating excellent websites.",
    },
    {
      icon: <FaCode />,
      title: "e-commerce Website Creation",
      description:
        "Creating the responsive eCommerce websiteas per the clients requirements.Make sure that best quality products can be exchanged under the best quality websites.",
    },
  ];
  return (
    //Data from the array is retrived using mapping and index is used to identify each element in array elements//
    <div className="container">
      <div className="service_container">
        <h1>My Services</h1>
        <div className="service_Wrapper">
          {serviceItems.map((service, index) => (
            <div className="service_item" key={index}>
              <span className="service_icon">{service.icon}</span>

              <div className="service_content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <a href="/">Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Services;
