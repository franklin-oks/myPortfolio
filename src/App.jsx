import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Call from "./components/call/Call";
import EducationData from "./components/education/EducationData";
import Channel from "./components/channel/Channel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <div id="home" className="h-0 w-0"></div>
      <Home />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Call />
      <EducationData />
      <Channel />
      <Footer />
    </div>
  );
}

export default App;
