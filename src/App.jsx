import NavBar from "./components/NavBar/NavBar";
import Home from './components/Home/Home'
import About from "./components/About/About";
import Projets from "./components/Projets/Projets";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
import Whatsapp from "./components/Messages/Whatssap"
import Contact from "./components/Contact/Contact"
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <main className="sections">
        <Home/>
        <About/>
        <Projets/>
        <Skills/>
        <Certificates/>
        <Contact/> 
        <Whatsapp/> 
      </main>
    </div>
  )
}

export default App;
