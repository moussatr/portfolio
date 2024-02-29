import React from "react";
import "../src/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Interests from "./pages/Interests";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/interests" element={<Interests />} />
          {/* Ajoutez d'autres routes si nécessaire */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
