import Paw from './Paw.jsx';


// paw theme will end up determining the paw pure CSS. Leave as color until the end.
// css comes after logic and do for fun. test on codepen first. 
const TicTacToeBoard = ({gameGrid, onSquareClick, }) => {
  return (
    <ol className='tic-tac-toe-grid'>
      {gameGrid.map((row, rowIdx) => {
        return (
          <li key={rowIdx} className='game-row'>
            <ol className='row-columns'>
              {row.map((col, colIdx) => {
                // if col has a val, show paw with pink or black theme. else show button to select cell
                // else show button. so button only shows if null and can't be clicked if already has a paw
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
