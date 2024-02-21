import React from 'react';
import Typewriter from "typewriter-effect";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import imgg from "../assets/img5.png";

const Home = () => {
  return (
    <div id="home"> 
      <section id='intro'>
          <div>
             <h1>Hello jii!</h1>
             <h2>Deepak Singh</h2>
             <h3>I'm an engineering undergrad</h3>

             <Typewriter 
                options={{
                  strings: ["A Web Developer", "A programmer", "React JS Developer"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  wrapperClassName : "typewriterpara"
                }}
             />

            <div id='social'>
             
             <a href="https://www.linkedin.com/in/deepak-singh-8a49a5216/" >
                <AiFillLinkedin size={'40px'} />
              </a>

             <a href="https://github.com/deepak9010" >
              <AiFillGithub size={'40px'}/>
             </a>
             
              <a href="https://www.linkedin.com/in/deepak-singh-8a49a5216/" >
                <AiFillInstagram  size={'40px'}/>
               </a>
             

             </div>

          </div>
      </section>

      <section id="imgsection">
          <img src={imgg}  alt="Deepak" />
      </section>


    </div>
  );
};

export default Home;