import { useState } from "react";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Result from "./Components/Result/Result";
import logo from "./assets/investment-calculator-logo.png";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }


  return (
    <div>
      <Header image={logo} />
      <Form onCalculate={calculateHandler} />
      {!userInput && <h1 style={{textAlign: "center"}}>No Investment Yet...</h1>}
      {userInput && (
        <Result
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
  
        />
      )}
    </div>
  );
}

export default App;
