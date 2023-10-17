const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER WIN';

let gameisRunning = false;

// const getPlayerChoice = () => {
//   const selection = prompt(`${ROCK}, ${SCISSORS} or ${PAPER}?`, '').toUpperCase();
//   if (
//     selection !== ROCK &&
//     selection !== SCISSORS&&
//     selection !== PAPER 
//   ) {
//     alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
//     return DEFAULT_USER_CHOICE;
//   }
//   return selection;
// };
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${SCISSORS} or ${PAPER}?`, '').toUpperCase();
  const isValidChoice = selection === ROCK || selection === SCISSORS || selection === PAPER;
  
  return isValidChoice 
    ? selection 
    : (alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`));
};


// const getComputerChoice = () => {
//   const randomValue = Math.random();
//   if (randomValue < 0.34){
//     return ROCK;
//   }else if (randomValue > 0.67){
//     return SCISSORS;
//   }else {
//     return PAPER;
//   }
// };


const getComputerChoice = () =>{
const randomValue = Math.random();
 return (randomValue < 0.34) 
    ? ROCK
    : (randomValue > 0.67)
    ? SCISSORS
    : PAPER;
}



const getWinner = (pChoice = DEFAULT_USER_CHOICE , cChoice) =>
  pChoice ===cChoice 
    ? RESULT_DRAW
    : pChoice === ROCK && cChoice === SCISSORS ||
      pChoice === PAPER && cChoice === ROCK ||
      pChoice === SCISSORS && cChoice === PAPER
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;
    


// const getWinner = function(pChoice, cChoice){
//   if(pChoice ===cChoice){
//     return RESULT_DRAW;
//   }else if(
//     pChoice === ROCK && cChoice === SCISSORS ||
//     pChoice === PAPER && cChoice === ROCK ||
//     pChoice === SCISSORS && cChoice ===PAPER
//     ){
//       return RESULT_PLAYER_WIN;
//     }else{
//       return RESULT_COMPUTER_WIN;
//     }
// }

startGameBtn.addEventListener('click', ()=> {
  if(gameisRunning){
    return;
  }
  gameisRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
let winner;
if(playerChoice){
  winner = getWinner(playerChoice, computerChoice);
}else{
  winner = getWinner(computerChoice);
}
  
  let message = `player picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}`;
  if(winner === RESULT_DRAW){
    message = message + ' DRAW.';
  }
  else if(winner === RESULT_PLAYER_WIN){
    message = message + ' WIN.';
  }
  else{
    message = message + ' LOST.';
  }
  alert(message);
  gameisRunning = false;
});
