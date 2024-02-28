import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Footer from './Components/Pages/Footer';
// import SliderImage from './Components/Pages/Slider';

function App() {
  const [themeColor, setThemeColor] = useState('#333');

  const changeThemeColor = () => {
    const newColor = '#4CAF50'; // Example color
    setThemeColor(newColor);
  };

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <header style={{ backgroundColor: themeColor, color: 'black', textAlign: 'center', padding: '10px' }}>
          <h1>Your Website</h1>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/about">About Us</Link> |
            <Link to="/contact">Contact Us</Link>
            <button style={{ backgroundColor: '#008CBA', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }} onClick={changeThemeColor}>
              Change Theme Color
            </button>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home themeColor={themeColor} />} />
          <Route path="/about" element={<About themeColor={themeColor} />} />
          <Route path="/contact" element={<Contact themeColor={themeColor} />} />
        </Routes>

        <div>
      </div>

        <Footer themeColor={themeColor} />
      </div>
     
    </Router>
  );
}

export default App;


 

     

      
 

