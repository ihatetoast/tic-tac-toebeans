import React from 'react';

const initialGameGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TicTacToeGrid = () => {
  return (
    <ol className='tic-tac-toe-grid'>
      {initialGameGrid.map((row, idx) => {
        return (
          <li key={idx} className='game-row'>
            <ol className='row-columns'>
              {row.map((col, i) => <li key={i} className='game-cell'><button className="game-btn">{col}</button></li>)}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default TicTacToeGrid;
