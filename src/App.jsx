import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Marquee2 from "./components/Marquee2"
import Project from "./components/Project"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"



const App = () => {
  return (
   <main className="font-light text-white antialiased selection:bg-line-300 selection:text-black">
    <Navbar />
    <Hero />
     <Marquee />
    <Marquee2 />
    <Project />
    <About />
    <Work />
    <Contact />
    
   
    
   </main>
    
  )
}

export default App