import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import UpButton from "./components/UpButton"
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section id="about">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      
      <section id="contact">
      <Footer />
      </section>
      <UpButton/>
    </main>
  )
}

export default App