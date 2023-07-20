import React, { useState } from "react";

const defaultValue = {
  "current-savings": 1000,
  "yearly-contribution": 120,
  "expected-return":5,
  duration: 12,
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(defaultValue);

  const handlerSubmit = (e) => {
    e.preventDefault();
    props.onCalculate(userInput)
    console.log(userInput);
  };

  const handlerReset = () => {
    setUserInput(defaultValue);
  };

  const changeHandler = (input, value) => {
    
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <>
      <form className="form" onSubmit={handlerSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Tabungan Saat Ini</label>
            <input
              type="number"
              onChange={(e) => changeHandler("current-savings", e.target.value)}
              id="current-savings"
              value={userInput["current-savings"]}
              
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Penyimpanan Tahunan </label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(e) =>
                changeHandler("yearly-contribution", e.target.value)
              }
              value={userInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Bunga yang Diharapkan (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(e) => changeHandler("expected-return", e.target.value)}
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Durasi Investasi (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(e) => changeHandler("duration", e.target.value)}
              value={userInput["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={handlerReset}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default Form;
