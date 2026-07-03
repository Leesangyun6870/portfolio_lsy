import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Design from "./components/Design";
import Contact from "./components/Contact";
import AiWorkflow from "./components/AiWorkflow";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutMe />
      <Project />
      <Design />
      <AiWorkflow />
      <Contact />
    </div>
  );
}

export default App;
