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

      <video 
        ref={videoRef}
        autoPlay 
        muted 
        playsInline 
        className="fullscreen-video"
        onEnded={handleVideoEnd}
      >
        <source src={dropVideo} type="video/mp4" />
      </video>

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