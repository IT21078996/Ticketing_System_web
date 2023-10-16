import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

function EmailUI() {
  const history = useHistory();

  return (
    <div className="App">
      <h1>Email</h1>
      <div className="progress-bar-container">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            className={`progress-bar-item ${index === 3 ? 'active' : ''}`}
          ></div>
        ))}
      </div>
      <div className="email-container">
        <label>Email address:</label>
        <input 
          type="email" 
          placeholder="example@example.com"
        />
      </div>
      <div className="button-container">
        <button className="outlined-button" onClick={() => history.goBack()}>
          BACK
        </button>
        <button className="filled-button" onClick={() => history.push('/payment')}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default EmailUI;
