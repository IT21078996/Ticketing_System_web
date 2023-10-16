import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

function PaymentUI() {
  const history = useHistory();

  // This will be called upon successful payment
  const onSuccess = (payment) => {
    // Handle successful payment here, like redirecting to another component
    history.push('/payment-successful');
  };

  return (
    <div className="App">
      <h1>Payment</h1>
      <div className="progress-bar-container">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            className={`progress-bar-item ${index === 4 ? 'active' : ''}`}
          ></div>
        ))}
      </div>
      <div className="payment-container">
        <label>Name on card:</label>
        <input type="text" />
        <label>Card number:</label>
        <input type="text" />
        <div className="payment-row">
          <div className="payment-half">
            <label>Exp. Date:</label>
            <input type="text" />
          </div>
          <div className="payment-half">
            <label>CVV:</label>
            <input type="password" />
          </div>
        </div>
        <button className="filled-button" onClick={() => history.push('/payment-successful')}>
          PAY NOW
        </button>
        <div id="paypal-button-container"></div> {/* For PayPal button */}
      </div>
      <div className="button-container">
        <button className="outlined-button" onClick={() => history.goBack()}>
          BACK
        </button>
      </div>
    </div>
  );
}

export default PaymentUI;
