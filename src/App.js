import React from "react";
import "./App.css";
import {
  Footer,
  Faqs,
  Navbar,
  Hero,
  About,
  Roadmaps,
  Team,
  LimitedSale,
  Story,
  Slider,
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      {/* <Story /> */}
      <LimitedSale />
      <Slider />
      <Roadmaps />
      <Team />
      <Faqs />
      <Footer />
    </Router>
  );
}

export default App;
