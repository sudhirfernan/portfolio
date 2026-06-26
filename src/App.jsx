import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Home from './home/Page'
import About from './about/Page'
import Footer from './components/Footer'
import Projects from './projects/Page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chatbot from './chatbot/Page'
function App() {
  

  return (
   <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </>
    
    
  )
}

export default App
