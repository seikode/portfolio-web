import About from "./components/About";
import Header from "./components/Header";
import Me from "./components/Me";

const App = () => {
  return (
    <>
      <Header />;
      <main>
        <Me />
        <About />
      </main>
    </>
  );
};

export default App;
