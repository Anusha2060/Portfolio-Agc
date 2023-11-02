import { useState } from "react";
import "./App.css";
import Toolbar from "./component/navigation/Tool_bar";
import Home from "./Pages/Home";
import Footer from "./component/Footer";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Skill from "./Pages/Skill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ReactTypingEffect from 'react-typing-effect';
function App() {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Router>
        <div className="h-110 ">
          <Toolbar />
        </div>
        <div className="h-120 overflow-scroll scroll ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
        <div className="h-100  relative">
          <Footer />
        </div>
      </Router>

     
    </div>
  );
}

export default App;
