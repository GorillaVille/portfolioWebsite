import './App.css';
//there is an error lurking in components vs. Components
import Navbar from "./components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
    return ( <div className = "App" >
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/resume" exact element={<Experience />}/>
          <Route path="/contact" exact element={<Contact />}/>
          <Route path="/about" exact element={<About />}/>
        </Routes>
        <Footer/>
      </Router>
      </div>
    );
}

export default App;