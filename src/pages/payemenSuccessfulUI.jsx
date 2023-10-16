import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

function PaymentSuccessfulUI() {
  const history = useHistory();

  return (
    <div className="App">
      <h1>Temporary Travel Pass</h1>
      <div className="success-container">
        <div className="icon-wrapper">
          <svg
            height="60"
            width="60"
            viewBox="0 0 24 24"
            fill="green"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z" />
          </svg>
        </div>
        <h2 style={{ color: 'purple', fontWeight: 'bold' }}>Congratulations!</h2>
        <p style={{ color: 'purple' }}>Payment Successful</p>
        <button
          className="filled-button"
          onClick={() => history.push('/qr-screen')}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccessfulUI;
