import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Heroin from './Components/Heroin/Heroin';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Mywork } from './Components/MyWork/Myproject';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Heroin/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      <Mywork/>
    </div>
  )
};

export default App