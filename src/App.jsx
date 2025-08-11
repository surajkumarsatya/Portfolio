import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <section className="bg-teal-600 px-5 py-5 lg:px-0 lg:py-0 flex flex-col items-center justify-center">
      <div className="max-w-screen-xl m-auto lg:px-20 lg:py-20 pb-20">
        <div className="p-5 lg:px-20 border bg-white">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
      </div>
    </section>
  );
}

export default App;
