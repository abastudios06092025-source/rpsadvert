import React from 'react';
import './Header.css'; 

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">

        <h1 className="logo">Rock Paper Scissors Shoot !!!</h1>

        {/* Optional Download Button */}
        {/*<a href="#" className="download-button">Download Now</a>*/}
      </div>
    </header>
  );
}
