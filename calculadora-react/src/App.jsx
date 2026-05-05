import { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import "./App.css";

function App() {
  const [value, setValue] = useState("0");
  const [savedValue, setSavedValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNumber, setWaitingForNumber] = useState(false);
  const [expression, setExpression] = useState("");

  const calculate = (firstNumber, secondNumber, currentOperator) => {
    if (currentOperator === "+") {
      return firstNumber + secondNumber;
    }

    if (currentOperator === "-") {
      return firstNumber - secondNumber;
    }

    if (currentOperator === "×") {
      return firstNumber * secondNumber;
    }

    if (currentOperator === "÷") {
      if (secondNumber === 0) {
        return "Error";
      }

      return firstNumber / secondNumber;
    }

    return secondNumber;
  };

  const handleNumber = (number) => {
    if (value === "Error") {
      setValue(number);
      setExpression("");
      return;
    }

    if (waitingForNumber) {
      setValue(number);
      setWaitingForNumber(false);
      return;
    }

    if (value === "0") {
      setValue(number);
    } else {
      setValue(value + number);
    }
  };

  const handleDecimal = () => {
    if (value === "Error") {
      setValue("0.");
      setExpression("");
      return;
    }

    if (waitingForNumber) {
      setValue("0.");
      setWaitingForNumber(false);
      return;
    }

    if (!value.includes(".")) {
      setValue(value + ".");
    }
  };

  const handleOperator = (selectedOperator) => {
    if (value === "Error") {
      return;
    }

    const currentNumber = parseFloat(value);

    if (savedValue === null) {
      setSavedValue(currentNumber);
      setExpression(`${currentNumber} ${selectedOperator}`);
    } else if (operator) {
      const result = calculate(savedValue, currentNumber, operator);

      if (result === "Error") {
        setValue("Error");
        setSavedValue(null);
        setOperator(null);
        setExpression("No se puede dividir entre 0");
        return;
      }

      setSavedValue(result);
      setValue(String(result));
      setExpression(`${result} ${selectedOperator}`);
    }

    setOperator(selectedOperator);
    setWaitingForNumber(true);
  };

  const handleEquals = () => {
    if (operator === null || savedValue === null || value === "Error") {
      return;
    }

    const secondNumber = parseFloat(value);
    const result = calculate(savedValue, secondNumber, operator);

    if (result === "Error") {
      setValue("Error");
      setExpression("No se puede dividir entre 0");
    } else {
      setValue(String(result));
      setExpression(`${savedValue} ${operator} ${secondNumber} =`);
    }

    setSavedValue(null);
    setOperator(null);
    setWaitingForNumber(true);
  };

  const clearCalculator = () => {
    setValue("0");
    setSavedValue(null);
    setOperator(null);
    setWaitingForNumber(false);
    setExpression("");
  };

  const deleteLastDigit = () => {
    if (value === "Error" || waitingForNumber) {
      setValue("0");
      setExpression("");
      setWaitingForNumber(false);
      return;
    }

    if (value.length === 1 || (value.length === 2 && value.startsWith("-"))) {
      setValue("0");
    } else {
      setValue(value.slice(0, -1));
    }
  };

  const changeSign = () => {
    if (value === "0" || value === "Error") {
      return;
    }

    if (value.startsWith("-")) {
      setValue(value.slice(1));
    } else {
      setValue("-" + value);
    }
  };

  const handleButtonClick = (button) => {
    if (!Number.isNaN(Number(button))) {
      handleNumber(button);
      return;
    }

    if (button === ".") {
      handleDecimal();
      return;
    }

    if (["+", "-", "×", "÷"].includes(button)) {
      handleOperator(button);
      return;
    }

    if (button === "=") {
      handleEquals();
      return;
    }

    if (button === "C") {
      clearCalculator();
      return;
    }

    if (button === "⌫") {
      deleteLastDigit();
      return;
    }

    if (button === "±") {
      changeSign();
    }
  };

  return (
    <main className="app-container">
      <section className="calculator-card">
        <div className="calculator-header">
          <p>Laboratorio 7</p>
          <h1>Calculadora React</h1>
        </div>

        <Display expression={expression} value={value} />
        <ButtonPanel onButtonClick={handleButtonClick} />
      </section>
    </main>
  );
}

export default App;
