import About from "./components/About";
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
      </main>
    </>
  );
};

export default App;
