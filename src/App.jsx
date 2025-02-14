import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Service from './Components/Service'
import Project from './Components/Project'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

function App() {

  return (
      <div class="bg-black overflow-y-scroll">
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Service/>
        <Project/>
        <ContactMe/>
        <Footer/>
      </div>
  )
}

export default App
