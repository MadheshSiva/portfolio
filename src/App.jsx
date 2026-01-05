import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProfileDetail from "./pages/ProfileDetail";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/services";
import Portfolio from "./components/portfoliosection";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
