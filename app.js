let rounds = parseInt(prompt('how many rounds do you wish to play'));
let playerSelection = prompt('what is your sing').toLowerCase();
let playerPoints = 0;
let computerPoints = 0;


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
}

let compareSelections = (playerSelection, ComputerSelection) => {
  if (playerSelection == ComputerSelection){
    alert(`computer picked ${ComputerSelection} - it's a draw`)
  }
  else if ((playerSelection == 'rock' && ComputerSelection == 'paper') || (playerSelection == 'paper' && ComputerSelection == 'scissors') || (playerSelection == 'scissors' && ComputerSelection == 'rock')){
    alert(`computer picked ${ComputerSelection} - You've lost!`)
    ++computerPoints
  }
  else if ((playerSelection == 'rock' && ComputerSelection == 'scissors') || (playerSelection == 'paper' && ComputerSelection == 'rock') || (playerSelection == 'scissors' && ComputerSelection == 'paper')){
    alert(`computer picked ${ComputerSelection} - You've won!`)
    ++playerPoints
  }
}

for (i = 1; i <= rounds; ++i){
  compareSelections(playerSelection, getComputerSelection());
  alert(`Player points: ${playerPoints} Computer points: ${computerPoints}`)
  playerSelection = prompt('what is your sing').toLowerCase();
}