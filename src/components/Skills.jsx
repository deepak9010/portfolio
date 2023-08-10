import React from 'react';
import htm from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/javascript.svg';
import c from '../assets/c.svg';
import cpp from '../assets/cplusplus.svg';
import react from '../assets/react.svg';
import node from '../assets/Node.js_logo.svg';
import mongo from '../assets/mongoDB.svg';
import sql from '../assets/sql.png'

const Skills = () => {
  return (
    
    <div id='skills'>
         <div>
            <h1>Skills</h1>
         </div>
         <div id='skills-box'>
             
            <div class="skill-icons">
             <img src={c}  alt="c" />
             <p>C</p>
             </div>

             <div class="skill-icons">
             <img src={cpp}  alt="cpp" />
             <p>Cpp</p>
             </div>

             <div class="skill-icons">
             <img src={htm}  alt="html" />
             <p>HTML</p>
             </div>

             <div class="skill-icons">
             <img src={css}  alt="css" />
             <p>CSS</p>
             </div>

             <div class="skill-icons">
             <img src={js}  alt="js" />
             <p>JS</p>
             </div>

             <div class="skill-icons">
             <img src={react}  alt="react" />
             <p>React</p>
             </div>

             <div class="skill-icons" id='node'>
             <img src={node}  alt="node" />
             <p>NodeJs</p>
             </div>

             <div class="skill-icons">
             <img src={mongo}  alt="mongo" />
             <p>Mongodb</p>
             </div>

             <div class="skill-icons">
             <img src={sql}  alt="sql" />
             <p>SQL</p>
             </div>

         </div>

    </div>
 
  )
}

export default Skills;