import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <div id="abt-me">
        <Hero />
      </div>
      <div id="expertise">
        <Skills />
      </div>
      <div id="works">
        <Projects />
      </div>
    </>
  );
}

export default Home;
