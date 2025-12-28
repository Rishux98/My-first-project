import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import TransitionScreen from './components/TransitionScreen'
import Castle from './components/Castle'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Route 1: Home Page (The Hero Section) */}
        <Route path="/" element={<Hero />} />

        {/* Route 2: The Video Drop */}
        <Route path="/drop" element={<TransitionScreen />} />

        {/* Route 3: The Castle Database */}
        <Route path="/castle" element={<Castle />} />
      </Routes>
    </div>
  )
}

export default App