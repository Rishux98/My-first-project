import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './TransitionScreen.css'; // This works here because they are neighbors!
import castleVideo from '../assets/castle_lite.mp4'; 

const TransitionScreen = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    navigate('/castle'); 
  };

  return (
    <div className="transition-container">
      {/* LOCAL VIDEO BACKGROUND */}
      <video 
        className="background-video" 
        src={castleVideo} 
        autoPlay 
        loop 
        muted 
        playsInline 
      />

      {/* OVERLAY CONTENT */}
      <div className="overlay-content">
        <h1>INFINITY CASTLE</h1>
        
        {showButton && (
          <button 
            className="enter-castle-btn" 
            onClick={handleEnter} 
          >
            Enter
          </button>
        )}
      </div>
    </div>
  );
};

export default TransitionScreen;