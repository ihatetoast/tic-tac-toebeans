import {useState, useEffect} from 'react'

const SASSY_COMMENTARY ={
  beforeGame:["Welcome to another game of Tic-Tac-Toebeans! Black toe beans will go first.", "Paws up! Black beans will start the game.", "Guys, gals, non-binary pals! We are starting the game with Black toe beans."], 
  commentary: ["made a daring move with their toe beans!", "used the classic paws gambit", "made their mark with a paw-some play!"],
  gameOverWin: ["won this game. Was it luck or pluck?", "is the toe bean champion!", "takes the crown-o-floofs with those mighty beans!"],
  gameOvserTie:["It's a tie game. Pink and Black rule together.", "Like a flamingo, pink and black exist in harmony.", "It night not be a winner winner chicken dinner, but it definitely is a tie tie pizza pie!"]
}

const initRandom = Math.random();
const Log = ({activePlayer, turns, result}) => {
  const [random, setRandom] = useState(initRandom);
    useEffect(() => {
      function getRandomDecimal() {
        setRandom(Math.random());
      }
      getRandomDecimal();
    }, [activePlayer, turns, result]);

  function getRandomCommentary(arr) {
    const randomIndex = Math.floor(random * arr.length);
    return arr[randomIndex];
  }

function getMessage(result){
  if(result === 'black' || result === 'pink'){
  return result.toUpperCase() + " " + getRandomCommentary(SASSY_COMMENTARY['gameOverWin']);
  }
  if(result === 'tie'){
    return getRandomCommentary(SASSY_COMMENTARY['gameOvserTie']);
  }
}

return (
  <div className="log">
    {turns === 0 && <p>{getRandomCommentary(SASSY_COMMENTARY['beforeGame'])}</p>}
    {turns > 0 && <p>{activePlayer.playerTheme === 'black' ? 'Pink' : 'Black'} {getRandomCommentary(SASSY_COMMENTARY['commentary'])} </p>}
    {!result && <p>It's {`${activePlayer.playerName}`}'s turn.</p>}
    {result && "Game over! " + getMessage(result)}
    
  </div>
)
}


export default Log;