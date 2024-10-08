import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Actions from "./pages/Actions";
import Adoption from "./pages/Adoption";
import Filozoikes from "./pages/Filozoikes";
import AdoptionForm from "./pages/AdoptionForm";
import List from "./pages/List";
import Vets from "./pages/Vets";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Services />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/filozoikes" element={<Filozoikes />} />
          <Route path="/adoptionform" element={<AdoptionForm />} />
          <Route path="/list" element={<List />} />
          <Route path="/vets" element={<Vets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
