import React from "react";


// CSS
import './App.scss';

// JS
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";

const App = () => {
    return (
      <div>
        <Header />

        <main className="main">
          <Home />
          <About />
          <Projects />
          <Skills />
        </main>

        <Footer />
        <ScrollUp />
      </div>
    );
};

export default App;