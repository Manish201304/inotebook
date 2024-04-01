import './App.css';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NoteState from './context/notes/NoteState';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <NoteState> 
      <Router>
          <Navbar />
        <Alerts message = "This is an alert message"/>
        <div className='container'>
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
