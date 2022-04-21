import React from "react";
import "./App.css";
import {
  Footer,
  Faqs,
  Navbar,
  Hero,
  About,
  Testemonial,
  Team,
  Story,
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Team />
      {/* <Story /> */}
      {/* <Testemonial /> */}
      <Faqs />
      <Footer />
    </Router>
  );
}

export default App;
