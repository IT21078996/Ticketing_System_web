
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function DurationOfStayUI() {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [duration, setDuration] = useState('');

  const calculateDuration = () => {
    if (arrivalDate && departureDate) {
      const difference = departureDate - arrivalDate;
      const durationDays = difference / (1000 * 60 * 60 * 24);
      setDuration(`${durationDays} days`);
    } else {
      setDuration('');
    }
  };

  return (
    <div className="App">
      <h1>Duration of Stay</h1>
      <div className="progress-bar-container">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            className={`progress-bar-item ${index === 1 ? 'active' : ''}`}
          ></div>
        ))}
      </div>
      <div className="date-container">
        <label>Arrival Date:</label>
        <DatePicker
          selected={arrivalDate}
          onChange={(date) => {
            setArrivalDate(date);
            calculateDuration();
          }}
        />
      </div>
      <div className="date-container">
        <label>Departure Date:</label>
        <DatePicker
          selected={departureDate}
          onChange={(date) => {
            setDepartureDate(date);
            calculateDuration();
          }}
        />
      </div>
      <div className="duration-box">
        <span>Duration: {duration}</span>
      </div>
      <div className="button-container">
        <button className="outlined-button" onClick={() => { /* Navigate back */ }}>
          BACK
        </button>
        <button className="filled-button" onClick={() => { /* Navigate to ChooseTravelPassUI */ }}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default DurationOfStayUI;
