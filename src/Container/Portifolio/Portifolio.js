import React from "react";
import "./Portifolio.css";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import dictionary from "../../assets/img/dictionary.jpg";
import quotes from "../../assets/img/quotes.webp";
import smile from "../../assets/img/smile.avif";

function Portifolio() {
  const workdata = [
    //Created an array to store the data od image,title,desceiption and link under the keyword workdata//
    {
      image: dictionary,
      title: "English Dictionary",
      description:
        "The free offline English dictionary application explains the meaning of English words! Definitions are based on English Wiktionary. Searching can be done easily and fasly .",
      link: "https://www.linkedin.com/posts/ameedha-vp-6a2639277_english-dictonary-a-mini-project-on-javascript-activity-7086298024481624065-JYYk?utm_source=combined_share_message&utm_medium=member_android",
    },
    {
      image: quotes,
      title: "Random Quotes generator",
      description:
        "Random Quotes generates the quotes that keeps you motivated.Getting motivation everyday at the single click helps to energise easily.",
      link: "https://www.linkedin.com/posts/ameedha-vp-6a2639277_merry-christmas-activity-7144459735923064832-C9bK?utm_source=combined_share_message&utm_medium=member_android",
    },
    {
      image: smile,
      title: "Random Smile Generator",
      description:
        "In a world that can sometimes feel overwhelming, Random Smile Generator is here to remind you of the power of a simple smile",
      link: "https://www.linkedin.com/posts/ameedha-vp-6a2639277_activity-7147463935846211584-6_AB?utm_source=combined_share_message&utm_medium=member_android",
    },
  ];
  return (
    //Data from the array is retrived using mapping and index is used to identify each element in array elements//
    <div className="container">
      <div className="portifolio_container">
        <h1>My works</h1>

        <div className="work">
          {workdata.map((work, index) => (
            <div className="work_list" key={index}>
              <div className="image">
                <img src={work.image} alt="" />
              </div>

              <div className="work_content">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <a href={work.link} target="_blank">
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
            //target attribute _blank is used to open the linked document in new tab//
          ))}
        </div>
      </div>
    </div>
  );
}
export default Portifolio;
