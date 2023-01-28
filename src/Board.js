const Board = ({ valArr, onCellClick }) => {
  return (
    <div className="board">
      {valArr &&
        valArr.map((row, i) => {
          return (
            <div className="row" key={i}>
              {row.map((val, j) => {
                return (
                  <div
                    className="block"
                    key={j}
                    onClick={() => onCellClick(i, j)}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Board;
