import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pocket from "./components/pocket";
import Home from "./pages/home";
import About from "./pages/about";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Certifications from "./pages/certifications";
import Achievements from "./pages/achievements";
import Contact from "./pages/contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pocket" element={<Pocket />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;