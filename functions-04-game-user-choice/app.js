const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER WIN';

let gameisRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${SCISSORS} or ${PAPER}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== SCISSORS&&
    selection !== PAPER 
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function() {
  const randomValue = Math.random();
  if (randomValue < 0.34){
    return ROCK;
  }else if (randomValue > 0.67){
    return SCISSORS;
  }else {
    return PAPER;
  }
};

const getWinner = function(pChoice, cChoice){
  if(pChoice ===cChoice){
    return RESULT_DRAW;
  }else if(
    pChoice === ROCK && cChoice === SCISSORS ||
    pChoice === PAPER && cChoice === ROCK ||
    pChoice === SCISSORS && cChoice ===PAPER
    ){
      return RESULT_PLAYER_WIN;
    }else{
      return RESULT_COMPUTER_WIN;
    }
}

startGameBtn.addEventListener('click', function() {
  if(gameisRunning){
    return;
  }
  gameisRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  console.log(`
  PLAYER : ${playerChoice}, 
  COMPUTER : ${computerChoice},
  RESULT: ${winner}`);
});
