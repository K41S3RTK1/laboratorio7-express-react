function Display({ expression, value }) {
  return (
    <section className="display">
      <p className="display-expression">{expression || "Calculadora React"}</p>
      <p className="display-value">{value}</p>
    </section>
  );
}

export default Display;
