import React from "react";

const Result = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Tahun</th>
          <th>Total Tabungan</th>
          <th>Bunga (Year)</th>
          <th>Total Target</th>
          <th>Modal</th>
        </tr>
      </thead>
      <tbody>
      {props.data.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{yearData.savingsEndOfYear}</td>
              <td>{yearData.yearlyInterest}</td>
              <td>
                {yearData.savingsEndOfYear -
                  props.initialInvestment -
                  yearData.yearlyContribution * yearData.year}
              </td>
              <td>
                {props.initialInvestment +
                  yearData.yearlyContribution * yearData.year}
              </td>
            </tr>
          );
        })}
       
      </tbody>
    </table>
  );
};

export default Result;
