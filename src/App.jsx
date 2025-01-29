import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Skills/>
    </main>
  )
}

export default App