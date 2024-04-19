import NavBar from "./components/NavBar/NavBar";
import Home from './components/Home/Home'
import About from "./components/About/About";
import Projets from "./components/Projets/Projets";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
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
   {/*      <Footer/>
        <Whatsapp/> */}
      </main>
    </div>
  )
}

export default App;
