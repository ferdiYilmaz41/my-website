import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Footer/>
    </main>
  )
}

export default App