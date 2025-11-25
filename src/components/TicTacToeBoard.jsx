import Paw from './Paw.jsx';

const TicTacToeBoard = ({gameGrid, onSquareClick, }) => {
  // console.log(gameGrid);

  return (
    <ol className='tic-tac-toe-grid'>
      {gameGrid.map((row, rowIdx) => {
        return (
          <li key={rowIdx} className='game-row'>
            <ol className='row-columns'>
              {row.map((col, colIdx) => {
                console.log("col is ", col);
               return <li key={colIdx} className='game-cell'>{
                col ?
                <Paw theme={col}/> :
                <button onClick={()=>onSquareClick(rowIdx, colIdx)} className="game-btn">{col}</button>
                }</li>
                })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default TicTacToeBoard;
