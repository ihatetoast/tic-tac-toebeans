import { useState } from 'react';
import Player from './components/Player.jsx';

// combinations for wins:
import { WIN_OPTIONS } from './win-options.js';
import TicTacToeBoard from './components/TicTacToeBoard.jsx';

const GAME_PLAYERS = [
  {
    id: 1,
    playerName: 'Nana',
    playerTheme: 'black',
  },
  {
    id: 2,
    playerName: 'Pusspuss',
    playerTheme: 'pink',
  },
];

const INITIAL_GAME_GRID = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState(GAME_PLAYERS);
  const [gameGrid, setGameGrid]=useState(INITIAL_GAME_GRID);
  const [activePlayer, setActivePlayer]=useState('black');

  function handlePlayerNameChange(newName) {
    // map through players, match index, update that name. otherwise return player
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, idx) =>
        idx === player.id ? { ...player, playerName: newName } : player
      )
    );
  }

  function handleSelectCell(rowIdx, colIdx){
    setActivePlayer((prevActivePlayer)=> {
      // use black and pink becasue they'll be the css themes
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
      <span>maybe game details or message</span>
    </main>
  );
}

export default App;
