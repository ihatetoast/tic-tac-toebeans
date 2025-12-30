import { useState } from 'react';


const Player = ({  defaultName, playerBeans, onChangePlayer, activePlayer, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  function handleEditPlayer() {
  if (isEditing) {
    const trimmed = playerName.trim();
    const final = trimmed === '' ? defaultName : trimmed;
    onChangePlayer(id, final);
    setPlayerName(final);
  }
  
  setIsEditing((prevEditState) => !prevEditState);
  
  if (!isEditing) {
    setPlayerName('');
  }
}

  function handlePlayerInput(e) {
    setPlayerName(e.target.value);
  }

  let content =  <span className='player-name'>{playerName}</span>;
  if(isEditing) {
    content =  <input name="player-input" type='text' placeholder='Enter name for player' onChange={handlePlayerInput} value={playerName}/>;
  }

  return (
    <li className='player-item'>
      <span className={"player" + (activePlayer ? ` active-player-${playerBeans}` : '')}>
        {content}
        <span className={`toe-bean ${playerBeans}`} role="img" aria-label={`${playerBeans} toe bean`}/>
      </span>
      <button onClick={handleEditPlayer}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};
export default Player;
