import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FirstPage from "./Pages/FirstPage";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Skill from "./Pages/Skill";
import Contact from "./Pages/Contact";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#DCAE96] selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-6 md:px-16 pt-20">
        <section
          id="home"
          className="min-h-[calc(100vh-80px)] flex items-center py-10 md:py-0"
        >
          <FirstPage />
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center py-16 md:py-24 border-t border-black/5"
        >
          <About />
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center py-16 md:py-24 border-t border-black/5"
        >
          <Project />
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center py-16 md:py-24 border-t border-black/5"
        >
          <Skill />
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center py-16 md:py-24 border-t border-black/5"
        >
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;
