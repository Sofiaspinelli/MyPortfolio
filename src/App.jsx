import NavBar from "./components/NavBar/NavBar";
import Home from './components/Home/Home'
import About from "./components/About/About";
import Projets from "./components/Projets/Projets";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <main className="sections">
        <Home/>
        <About/>
        <Projets/>
      </main>
    </div>
  )
}

export default App;
