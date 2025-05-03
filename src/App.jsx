import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Me from "./components/Me";
import Project from "./components/Project";
import Skill from "./components/Skill";

import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Me />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
