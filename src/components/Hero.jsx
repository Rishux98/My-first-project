import React from 'react'
import { useNavigate } from 'react-router-dom' // 1. Import the tool
import './Hero.css' 
import muzanBg from '../assets/muzan1.jpg'
import kokushiboBg from '../assets/kokushibo1.jpg'
import nakimeBg from '../assets/nakime_red.jpg' 

const Hero = () => {
  const navigate = useNavigate(); // 2. Activate the tool

  return (
    <div 
      className="hero-section"
      style={{ backgroundImage: `url(${nakimeBg})` }}
    >
      
      {/* LEFT PANEL: Muzan */}
      <div className="side-panel left-panel">
        <img src={muzanBg} alt="Muzan" />
      </div>

      {/* RIGHT PANEL: Kokushibo */}
      <div className="side-panel right-panel">
        <img src={kokushiboBg} alt="Kokushibo" />
      </div>

      {/* CENTER CONTENT */}
      <div className="hero-content">
        <h2>WELCOME TO THE DEATH TRAP,</h2>
        <h1>INFINITE CASTLE</h1>
        <p>The eternal night awaits.</p>
        
        {/* 3. Add the Click Event here */}
        <button 
          className="join-button"
          onClick={() => navigate('/drop')}
        >
          ENTER
        </button>
      </div>

    </div>
  )
}

export default Hero