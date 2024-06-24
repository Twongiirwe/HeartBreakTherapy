// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to HeartBreak Therapy</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Love Songs</h2>
          <p>Listen to soothing love songs</p>
          <button onClick={() => alert('Navigate to Love Songs')}>Go</button>
        </div>
        <div className="card">
          <h2>Gospel Music</h2>
          <p>Find peace with gospel music</p>
          <button onClick={() => alert('Navigate to Gospel Music')}>Go</button>
        </div>
        <div className="card">
          <h2>Motivational Speeches</h2>
          <p>Get inspired by motivational speeches</p>
          <button onClick={() => alert('Navigate to Motivational Speeches')}>Go</button>
        </div>
        <div className="card">
          <h2>Express Your Feelings</h2>
          <p>Write how you feel and get an AI-generated answer or human interaction</p>
          <button onClick={() => alert('Navigate to Express Your Feelings')}>Go</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
