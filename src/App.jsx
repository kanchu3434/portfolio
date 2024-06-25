import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Heroin from './Components/Heroin/Heroin';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Heroin/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
};

export default App