import React from 'react'

const SASSY_COMMENTARY ={
  beforeGame:["Welcome to another game of Tic-Tac-Toebeans! Black toe beans will go first.", "Paws up! Black beans will start the game."], 
  commentary: ["made a daring move with their toe beans!", "used the classic paws gambit", "their mark with a paw-some play!"],
  gameOver: ["won this round", "is the toe bean champion!", "takes the crown with those mighty beans!"]
}

// before game / onload, rando from before game. turns === 0
// every turn will get rando from commentary. // 
// game over will get rando from game over.

// button to reset. will need also info if tied and who the winner is.

 const Log = ({activePlayer}) => {
  return (
    <div className="log">
      <p>{SASSY_COMMENTARY['beforeGame'][0]}</p>
      <p>It's {`${activePlayer.playerName}`}'s turn. This will be the fun component. Do last.</p>
     
    </div>
  )
}


export default Log;