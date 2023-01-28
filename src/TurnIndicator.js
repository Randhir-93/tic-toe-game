const TurnIndicator = ({ turn }) => {
  return (
    <div className="turn-indicator">
      <div className={turn === "X" ? "active" : ""}>X</div>
      <div className={turn === "O" ? "active" : ""}>O</div>
    </div>
  );
};

export default TurnIndicator;
