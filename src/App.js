import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NoteState from './context/notes/NoteState';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <NoteState> 
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
