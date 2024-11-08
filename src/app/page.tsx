
import Hero from "./component/Hero";
import Contact from "./component/Contact";
import Project from "./component/Project";
import About from "./component/About";
import Skill from "./component/Skill";

export default function Home() {
  
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}
