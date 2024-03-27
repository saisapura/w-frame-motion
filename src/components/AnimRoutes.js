import React from 'react';
import Home from "../pages/Home"
import About from "../pages/About"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import { Routes, Route, useLocation  } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Test from '../pages/Test';
import Test2 from '../pages/Test2';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='/test2' element={<Test2/>}/>
    </Routes></AnimatePresence>
    
  )
};

export default AnimRoutes;
