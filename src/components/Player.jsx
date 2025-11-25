import { useState } from 'react';


const Player = ({  defaultName, playerBeans, onChangePlayer }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

 

  function handleEditPlayer() {
  if (isEditing) {
    const trimmed = playerName.trim();
    const final = trimmed === '' ? defaultName : trimmed;
    onChangePlayer( final);
    setPlayerName(final);
  }
  
  setIsEditing((prevState) => !prevState);
  
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
      <span className="player">
        {content}
        <span className={`toe-bean ${playerBeans}`} />
      </span>
      <button onClick={handleEditPlayer}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};
export default Player;


// player-paw will handle the shape. playerBeans will add the color theme. 
// after logic