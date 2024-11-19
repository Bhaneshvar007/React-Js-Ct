import './App.css'
import NavBar from './Component/NavBar/NavBar'
import Footer from './Component/Footer/Footer'
import Skills from './Component/Skills/Skills'
import Home from './Component/HomePage/Home'
import Projects from './Component/Projects/Projects'
import About from './Component/About/About'
import Contact from './Component/Contect/Contect'

function App() {
  return (
    <>
      <NavBar/>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="project"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  )
}

export default App;
