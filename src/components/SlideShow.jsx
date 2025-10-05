import React, { useState, useEffect } from 'react';
import './SlideShow.css';

const choices = ['rock', 'paper', 'scissors'];

function getResult(player, opponent) {
  if (player === opponent) return { title: 'Draw', points: '0 Point' };
  if (
    (player === 'rock' && opponent === 'scissors') ||
    (player === 'scissors' && opponent === 'paper') ||
    (player === 'paper' && opponent === 'rock')
  ) {
    return { title: 'You Win!', points: '+1 Point' };
  }
  return { title: 'You Lose!', points: '0 Point' };
}


const allSlides = choices.flatMap((player) =>
  choices.map((opponent) => ({
    player,
    opponent,
    ...getResult(player, opponent),
  }))
);

export default function SlideShow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % allSlides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const slide = allSlides[index];


  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div className="slideshow-container">
      <h2 className="slideshow-title">All Possible Matchups</h2>

      <div className="slide-card fade">
        <div className="slide-images">
          <div className="slide-side">
            <img
            src={process.env.PUBLIC_URL + `/images/${slide.player}.png`}
            alt={slide.player}
            />
            <p className="label">Player: {capitalize(slide.player)}</p>
          </div>

          <span className="vs-text">VS</span>

          <div className="slide-side">
          <img
          src={process.env.PUBLIC_URL + `/images/${slide.opponent}.png`}
          alt={slide.opponent}
          className="flipped"
          />
            <p className="label">Opponent: {capitalize(slide.opponent)}</p>
          </div>
        </div>

        <h3 className="result">{slide.title}</h3>
        <p className="points">{slide.points}</p>
        <p className="matchup">
          {capitalize(slide.player)} vs {capitalize(slide.opponent)}
        </p>
      </div>

    </div>
  );
}
