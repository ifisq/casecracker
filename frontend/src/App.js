import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Justices from './components/pages/Justices';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route> 
        <Route path='/About' element={<About />}></Route> 
        <Route path='/Justices' element={<Justices />}></Route> 
      </Routes>
      </Router>

    </div>
  );
}

export default App;
