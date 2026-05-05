const buttons = [
  { label: "C", type: "action" },
  { label: "⌫", type: "action" },
  { label: "±", type: "action" },
  { label: "÷", type: "operator" },

  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "×", type: "operator" },

  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "-", type: "operator" },

  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator" },

  { label: "0", type: "number zero" },
  { label: ".", type: "number" },
  { label: "=", type: "equals" }
];

function ButtonPanel({ onButtonClick }) {
  return (
    <section className="button-panel">
      {buttons.map((button) => (
        <button
          key={button.label}
          className={`calculator-button ${button.type}`}
          onClick={() => onButtonClick(button.label)}
        >
          {button.label}
        </button>
      ))}
    </section>
  );
}

export default ButtonPanel;
