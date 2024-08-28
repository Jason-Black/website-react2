import React from 'react';
import './index.css'; // Ensure this CSS file is imported

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Developers from './components/Developers';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
    <About />
    <Developers />
    <Footer />
    </div>
  );
}

export default App;


