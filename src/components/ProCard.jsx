import React, { useState } from 'react'
import './ProCard.css'

const ProCard = ({ name, role, description, img, color, type }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  }

  return (
    <div 
      className="pro-card"
      style={{ borderColor: color, boxShadow: `0 0 15px ${color}40` }}
    >
      {/* Badge (Top Right) */}
      <div className="card-badge" style={{ backgroundColor: color }}>
        {type === 'demon' ? '👹 DEMON' : '⚔️ SLAYER'}
      </div>

      {/* Character Image */}
      <div className="card-image-container">
        <img src={img} alt={name} className="card-image" />
      </div>

      {/* Content */}
      <div className="card-content">
        <h2 style={{ color: color }}>{name.toUpperCase()}</h2>
        <h4 className="card-role">{role}</h4>
        <p className="card-desc">{description}</p>
      </div>

      {/* --- COLOR-CHANGING SVG HEART BUTTON --- */}
      <button 
        className="like-button" 
        onClick={handleLike}
        title="Love this character"
      >
        <svg 
          className="heart-icon" 
          viewBox="0 0 24 24" 
          /* LOGIC: If liked, fill with Card Color. If not, transparent. */
          fill={liked ? color : "rgba(255,255,255,0.1)"} 
          /* LOGIC: If liked, stroke is Card Color. If not, White. */
          stroke={liked ? color : "white"} 
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

    </div>
  )
}

export default ProCard