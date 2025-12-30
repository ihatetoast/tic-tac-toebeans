import Paw from './Paw.jsx';


const TicTacToeBoard = ({gameGrid, onSquareClick, setDisabled }) => {
  return (
    <ol className='tic-tac-toe-grid'>
      {gameGrid.map((row, rowIdx) => {
        return (
          <li key={rowIdx} className='game-row'>
            <ol className='row-columns'>
              {row.map((col, colIdx) => {
                return <li key={colIdx} className='game-cell'>{
                col ?
                <Paw className={col}/> :
                <button onClick={()=>onSquareClick(rowIdx, colIdx)} className="game-btn" disabled={setDisabled}>{col}</button>
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
