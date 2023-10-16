import React, { useState } from "react";
import "./App.css";

function App() {
  const [dropdownValue, setDropdownValue] = useState("Foreigner");
  const [isUserTypeSelected, setIsUserTypeSelected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userTypes = ["Foreigner", "Visitors", "Local", "Other"];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Navigate to the DurationOfStayUI page
    // This is where you'd typically use a React Router or similar
  };

  return (
    <div className="App">
      <h1>Travel Pass UI</h1>
      <div className="progress-bar-container">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            className={`progress-bar-item ${
              index === 1 ? "active" : ""
            }`}
          ></div>
        ))}
      </div>
      <div className="dropdown-container">
        <select
          value={dropdownValue}
          onChange={(e) => {
            setDropdownValue(e.target.value);
            setIsUserTypeSelected(true);
          }}
        >
          {userTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      {/* You can add your image here */}
      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "NEXT"}
      </button>
      {isSubmitting && <div className="linear-progress"></div>}
    </div>
  );
}

export default App;
