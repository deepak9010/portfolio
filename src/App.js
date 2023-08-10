import { useState } from "react";
import{  BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Header,{HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./styles/header.scss";
import './styles/mediaquery.scss';
import "./styles/home.scss";
import './styles/about.scss';
import "./styles/skills.scss";
import "./styles/projects.scss";
import "./styles/contact.scss";


function App(){
  const [menuOpen,setMenuOpen] = useState(false)
 console.log(menuOpen);

  return( 
  <Router>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
   </Routes>
  </Router>
);
}

export default App;