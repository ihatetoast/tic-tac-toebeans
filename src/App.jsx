import { useState } from 'react';
import Player from './components/Player.jsx';

// combinations for wins:
import { WIN_OPTIONS } from './win-options.js';
import TicTacToeGrid from './components/TicTacToeGrid.jsx';

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

function App() {
  const [players, setPlayers] = useState(GAME_PLAYERS);

  function handlePlayerNameChange(newName) {

    console.log("new name is: ", newName);
     // map through players, match index, update that name. otherwise return player
    setPlayers((prevPlayers) =>  prevPlayers.map((player, idx) =>
        idx === player.id ? { ...player, playerName: newName } : player
      )
    );
  }

  return (
    <main>
      <div className='main-game-container'>
        <ol className='players-list'>
          {players.map((player) => {
            return (<Player
              key={player.id}
              id={player.id}
              defaultName={player.playerName}
              playerBeans={player.playerTheme}
              onChangePlayer={handlePlayerNameChange}
            />);
          })}
        </ol>
       <TicTacToeGrid />
      </div>
      <span>maybe game details or message</span>
    </main>
  );
}

export default App;
