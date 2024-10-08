import React, { useState } from 'react';

const HomeLoan = () => {
  const [loanAmount, setLoanAmount] = useState(20000);

  const handleSliderChange = (e) => {
    setLoanAmount(e.target.value);
  };

  // Calculate the percentage of the track to be filled based on the slider value
  const calculatePercentage = (value) => {
    return ((value - 20000) / (60000 - 20000)) * 100;
  };

  return (
    <div className="container mt-5">
      <div className="row loan-card">
        <div className="col-4">
          <h2>Need a Home Loan?</h2>
          <p>Select How much Home loan you can take</p>
        </div>
        <div className="col-8 py-4">
          <input
            type="range"
            min="20000"
            max="60000"
            step="10000"
            value={loanAmount}
            onChange={handleSliderChange}
            className="slider"
            style={{
              background: `linear-gradient(to right, #F06711 ${calculatePercentage(loanAmount)}%, #d3d3d3 ${calculatePercentage(loanAmount)}%)`
            }}
          />
          <div className="loan-amount">
            <span>$20K</span>
            <span>$30K</span>
            <span>$40K</span>
            <span>$50K</span>
            <span>$60K+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
