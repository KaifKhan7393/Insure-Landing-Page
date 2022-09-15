import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import FindOutBox from './Components/FindOutBox';
import Footer from './Components/Footer';
// import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <FindOutBox />
      <Footer />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
    </>
  )
}

export default App;