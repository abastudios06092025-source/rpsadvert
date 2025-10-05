import React from 'react';
import './Background.css';
import backgroundImage from '../Assets/Background1.png';

export default function BackgroundUI() {
  return (
    <div className="background-ui"
    style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="overlay">
        <h2 className="tagline">Rock. Paper. Scissors. Reinvented.</h2>
      </div>
    </div>
  );
}
