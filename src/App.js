import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MenuDrawer from './components/Drawer';

function App() {
  return (
    <div className="App">
      <MenuDrawer></MenuDrawer>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
