import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Me from "./components/Me";
import Project from "./components/Project";
import Skill from "./components/Skill";

const App = () => {
  return (
    <>
      <Header />;
      <main>
        <Me />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
