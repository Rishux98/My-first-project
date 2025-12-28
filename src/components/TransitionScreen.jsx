import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './TransitionScreen.css' 
import dropVideo from '../assets/drop.mp4'

const TransitionScreen = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoEnd = () => {
    setShowButton(true);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const skipAnimation = () => {
    navigate('/castle'); // Jumps straight to the Castle
  };

  return (
    <div className="transition-container">
      
      {/* 1. AUDIO TOGGLE (Top Right) */}
      {!showButton && (
        <button className="glass-btn sound-pos" onClick={toggleSound}>
          {isMuted ? "🔇 UNMUTE" : "🔊 SOUND ON"}
        </button>
      )}

      {/* 2. SKIP BUTTON (Bottom Right) */}
      {!showButton && (
        <button className="glass-btn skip-pos" onClick={skipAnimation}>
          SKIP ADVENTURE ⏭
        </button>
      )}

    <div className="video-background">
        <iframe 
          src="https://www.youtube.com/embed/W_bCS8M5S9c?autoplay=1&mute=1&loop=1&playlist=W_bCS8M5S9c&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=0" 
          title="Infinity Castle Background"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            zIndex: '-1',
            pointerEvents: 'none',
          }}
          frameBorder="0"
          allow="autoplay; encrypted-media" 
        ></iframe>
      </div>
      {showButton && (
        <div className="overlay-content">
          <h1>YOU HAVE FALLEN.</h1>
          <button 
            className="enter-castle-btn"
            onClick={() => navigate('/castle')}
          >
            EXPLORE THE INFINITE CASTLE
          </button>
        </div>
      )}
    </div>
  )
}

export default TransitionScreen