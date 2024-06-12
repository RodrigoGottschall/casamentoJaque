import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurStory from "./components/OurStory";
import RsvpForm from "./components/RsvpForm";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nossa-historia" element={<OurStory />} />
          <Route path="/confirmar-presenca" element={<RsvpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
