
import React from "react";

import cryptoimg from "../assets/crypto.jpg";
import weatherimg from "../assets/weather.jpg"

//Portfolio function
const Projects = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Crypto-Bhaiya",
      img: cryptoimg,
      description:
        "A web App designed to track the prices and performance of various cryptocurrencies and exchanges in real time using crypto APIs.",
      technologies: "Html | CSS | React Js",
      link: "https://crypto-bhaiya.vercel.app/",
      github: "https://github.com/deepak9010/CryptoBhaiyaa",
    },
    {
      id: 2,
      title: "Weather App",
      img: weatherimg,
      description:
        "Developed a web application to check the weather all over the world using API. With weather it shows you current date and time.",
      technologies: "Html | CSS | Javascript",
      link: "https://deepak9010.github.io/weatherApp/",
      github: "https://github.com/deepak9010/weatherApp",
    },

 

  ];

  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="projects__container">
        {soloProjects.map((pro) => (
          <div className="projects__item" key={pro.id}>

            <div className="projects__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            
            <div className="projects-content">
  
                 <h3>{pro.title}</h3>

                 <p>{pro.description}</p>
               
                  <p className="tech">{pro.technologies}</p>


                   <div className="projects__item-cta">
                    <a
                       href={pro.github}
                       target="_blank"
                        className="btn"
                        rel="noreferrer"
                         >
                          GitHub
                     </a>
                   <a
                      href={pro.link}
                      target="_blank"
                      className="btn btn-primary"
                      rel="noreferrer"
                        >
                          Demo
                     </a>
                    </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;