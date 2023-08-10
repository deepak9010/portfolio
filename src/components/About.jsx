import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
 import img6 from "../assets/img6.png";

const About = () => {
  return (
    <div id='about'>
         <h1>About me</h1>
         
         <div id='about-box'>

          <div id='about-content'>
               <p className='firstPara'>
                <AiFillCaretRight color='red'/> I am a web developer, working in both, frontend and backend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology.
                </p>
             
                 <p className='secondPara'>
                 <AiFillCaretRight color='red'/> I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done.
                 </p>

                <p className='thiedPara'>
                <AiFillCaretRight color='red'/> I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!
                 </p>
            </div>
     
            <div id='image'>
            <img src={img6}  alt="Deep" />
            </div>

         </div>

    </div>
  )
}

export default About;