let playerSelection;
let playerPoints = 0;
let computerPoints = 0;
const buttons = document.querySelectorAll('.button');
let playerPointsElement = document.getElementById('player-points');
let ComputerPointsElement = document.getElementById('computer-points');
let messageElement = document.getElementById('message');
let outputMessage;

let getComputerSelection = () => {
  let randomChoice = Math.floor(Math.random()*3);
  if (randomChoice == 0){
    return 'rock';
  }
  else if (randomChoice == 1){
    return 'paper';
  }
  else if (randomChoice == 2){
    return 'scissors';
  };
};

let compareSelections = (playerSelection, ComputerSelection) => {
  if (playerSelection == ComputerSelection){
    outputMessage = `computer picked ${ComputerSelection} - it's a draw`;
  }
  else if ((playerSelection == 'rock' && ComputerSelection == 'paper') || (playerSelection == 'paper' && ComputerSelection == 'scissors') || (playerSelection == 'scissors' && ComputerSelection == 'rock')){
    outputMessage = `computer picked ${ComputerSelection} - You've lost!`;
    ++computerPoints;
  }
  else if ((playerSelection == 'rock' && ComputerSelection == 'scissors') || (playerSelection == 'paper' && ComputerSelection == 'rock') || (playerSelection == 'scissors' && ComputerSelection == 'paper')){
    outputMessage = `computer picked ${ComputerSelection} - You've won!`;
    ++playerPoints;
  };
};


let playGame = () => {
  compareSelections(playerSelection, getComputerSelection());
  playerPointsElement.textContent = `${playerPoints}`;
  ComputerPointsElement.textContent = `${computerPoints}`;
  messageElement.textContent = `${outputMessage}`;
};

buttons.forEach(button => {
  button.addEventListener('click', getUserInput = () => {
    playerSelection = button.id;
    playGame();
  }); 
});
