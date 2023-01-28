import Board from "./Board";
import { useEffect, useState } from "react";
import TurnIndicator from "./TurnIndicator";
const winnerPossiblity = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const initState = () => Array.from(Array(3), () => Array(3).fill(""));
const TicToeGame = () => {
  const [positions, setPositions] = useState(initState());
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const onCellClick = (i, j) => {
    if (positions[i][j]) return;
    setPositions((positions) => {
      positions[i][j] = turn;
      return [...positions];
    });
    setTurn(turn === "O" ? "X" : "O");
  };

  const resetGame = () => {
    setPositions(initState());
    setWinner(null);
    setTurn("X");
  };

  useEffect(() => {
    for (let i = 0; i < winnerPossiblity.length; i++) {
      let [col1, col2, col3] = winnerPossiblity[i];
      let char = positions[Math.floor(col1 / 3)][col1 % 3];
      if (
        char &&
        positions[Math.floor(col2 / 3)][col2 % 3] === char &&
        positions[Math.floor(col3 / 3)][col3 % 3] === char
      ) {
        setWinner(char);
      }
    }
  }, [positions]);

  return (
    <div>
      <TurnIndicator turn={turn} />
      <div>{`${turn} Turn`}</div>
      <Board valArr={positions} onCellClick={onCellClick} />
      {winner && <div className="winner">Winner is: {winner}</div>}
      <button type="button" className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicToeGame;
