import { useState } from 'react';
import Player from './components/Player.jsx';

// combinations for wins:
import { WIN_OPTIONS } from './win-options.js';
import TicTacToeBoard from './components/TicTacToeBoard.jsx';
import Log from './components/Log.jsx';

const GAME_PLAYERS = [
  {
    id: 0,
    playerName: 'Nana',
    playerTheme: 'black',
  },
  {
    id: 1,
    playerName: 'Pusspuss',
    playerTheme: 'pink',
  },
];

const INITIAL_GAME_GRID = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// determine winner function
  function determineWinner(gameGrid){
    let winner;
    for(const combo of WIN_OPTIONS){
      // does my head in. 
      // gist is every combo--an array of three objects that match to a cell in winning combo
      // assign square one to three the values in those cells.
      // checks by rows, then cols, then diags
      const squareOne = gameGrid[combo[0].row][combo[0].col];
      const squareTwo = gameGrid[combo[1].row][combo[1].col];
      const squareThree = gameGrid[combo[2].row][combo[2].col];

        // now check that they are the same
      if(squareOne && squareOne === squareTwo && squareOne === squareThree){
        winner = squareOne;
      }
    
    }
      return winner;
  
  }

function App() {
  const [players, setPlayers] = useState(GAME_PLAYERS);
  const [gameGrid, setGameGrid]=useState(INITIAL_GAME_GRID);
  const [turns, setTurns] = useState(0);

  const [activePlayer, setActivePlayer]=useState('black');
  const winner = determineWinner(gameGrid, activePlayer);
  const gameIsTied = !winner && turns === 9;
  console.log("game is tied: ", gameIsTied);

  function handlePlayerNameChange(id, newName) {
    // map through players, match index, update that name. otherwise return player
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, playerName: newName } : player
      )
    );
  }

  function handleSelectCell(rowIdx, colIdx){
    setTurns((prevTurns)=> prevTurns + 1);

    setActivePlayer((prevActivePlayer)=> {
      return prevActivePlayer === 'black' ? 'pink' : 'black';
    });
    

    setGameGrid((prevGrid) => {
      // makey the changey with a deeeep copy
      const prevGridDeepCopy = [...prevGrid.map(innerRow => [...innerRow])];
      prevGridDeepCopy[rowIdx][colIdx] = activePlayer;
       // returny the griddy
      return prevGridDeepCopy;
    })
  }
  console.log("turns in App:", turns);
  if(winner){
    // get name of winner, but for now just log
  console.log("the winner is: ", winner);
  }



  function handleGameReset(){
    setGameGrid(INITIAL_GAME_GRID);
    setTurns(0);
    setActivePlayer('black');
  }
console.log("PLAYERS: ",players);
  return (
    <main>
      <div className='main-game-container'>
        <ol className='players-list'>
          {players.map((player) => {
            return (
              <Player
                key={player.id}
                id={player.id}
                defaultName={player.playerName}
                playerBeans={player.playerTheme}
                onChangePlayer={handlePlayerNameChange}
                activePlayer={player.playerTheme === activePlayer}
              />
            );
          })}
        </ol>
        <div className='grid-container'>
          <TicTacToeBoard gameGrid={gameGrid} onSquareClick={handleSelectCell}/>
        </div>
      </div>
      <Log activePlayer={players.find((player) => player.playerTheme === activePlayer)}  />
    </main>
  );
}

export default App;
