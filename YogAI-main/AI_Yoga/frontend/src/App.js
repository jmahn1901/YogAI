import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Yoga from './pages/Yoga/Yoga';
import About from './pages/About/About';

import InfoPose from './pages/YogaInfo/InfoPose';
import InfoMap from './pages/YogaInfo/InfoMap';
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Home from './pages/Home/Home';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='home' element={<Home />}/>
        <Route path='infopose' element={<InfoPose/>}/>
        <Route path='infomap' element={<InfoMap/>}/>
        <Route path='start' element={<Yoga />} />
        <Route path='/about' element={<About />} />
        
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


