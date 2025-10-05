
import React from 'react';
import './VideoPlayer.css';

export default function VideoPlayer() {
  return (
    <div className="video-section">
      <h2 className="video-title">Watch Gameplay Preview</h2>
      <video
        controls
        width="100%"
        height="auto"
        className="gameplay-video"
        /*poster="/images/video-placeholder.png"*/
      >
        <source src={process.env.PUBLIC_URL + '/videos/gameplay.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
