import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

function ChooseTravelPassUI() {
  const [selectedPrice, setSelectedPrice] = useState(-1);
  const priceOptions = ['10 (USD)', '20 (USD)', '15 (USD)'];
  const prices = [10, 20, 15];
  const credits = [3000, 6000, 4500];
  const history = useHistory();

  return (
    <div className="App">
      <h1>Temporary Travel Pass</h1>
      <div className="progress-bar">
        {/* Generate divs for the progress bar */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={index === 2 ? 'progress-active' : 'progress-inactive'}
          ></div>
        ))}
      </div>
      <h2>Choose Travel Pass</h2>
      <div>
        {priceOptions.map((option, index) => (
          <div
            key={index}
            className={`card ${selectedPrice === index ? 'card-active' : ''}`}
            onClick={() => setSelectedPrice(index)}
          >
            <p>{option}</p>
            <p>Description: Add your description here</p>
            <p>Credits: {credits[index]}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="outlined-button" onClick={() => history.goBack()}>
          BACK
        </button>
        <button
          className="filled-button"
          onClick={() => {
            if (selectedPrice !== -1) {
              history.push('/email-ui'); // navigate to EmailUI
            }
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default ChooseTravelPassUI;
