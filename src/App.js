import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about"element={<About />} />
          {/* <Route path="/user" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
