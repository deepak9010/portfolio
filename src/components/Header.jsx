import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineMenu} from "react-icons/ai" 

const Header = ({menuOpen, setMenuOpen}) => {
  return (
  <>
    <nav>
      <NavContent setMenuOpen={setMenuOpen}/>
    
    </nav>

       <button className="navBtn" onClick={() => setMenuOpen( !menuOpen)} >
          <AiOutlineMenu />
       </button>
  </>
  );
};


 
const NavContent = ({setMenuOpen})=>(
    <>
       <h2> DS</h2>
       <div>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacts</Link>
       </div>

       <a href="https://drive.google.com/file/d/1KVwog4o7GwNnoX_SVTpLETP6haeq1Os6/view?usp=drive_link">
        <button>Resume</button>
       </a>
    </>
)


// for phone navbar
export const HeaderPhone = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}` }>
         <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};


export default Header;