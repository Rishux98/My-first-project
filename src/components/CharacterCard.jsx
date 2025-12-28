// src/components/CharacterCard.jsx
import React from 'react';

// We are using "props" here to make the card reusable
const CharacterCard = ({ name, style, color }) => {
  const cardStyle = {
    border: `2px solid ${color}`,
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#1e1e1e',
    display: 'inline-block', // Keeps them side-by-side
    width: '200px'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ color: color }}>{name}</h2>
      <p>Breathing Style: {style}</p>
    </div>
  );
};

export default CharacterCard;