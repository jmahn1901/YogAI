import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'
import About from './pages/About/About'
import Tutorials from './pages/Tutorials/Tutorials'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './pages/Header'
import Footer from './pages/Footer'

import './App.css'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* khs - login, register */}
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path='/start' element={<Yoga />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
      <Footer />
    </Router>
  )
}


