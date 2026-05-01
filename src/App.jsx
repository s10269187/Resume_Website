import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CoCurricular from './components/CoCurricular'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CoCurricular />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
