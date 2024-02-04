import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar /> 
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
