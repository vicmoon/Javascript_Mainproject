const computerSelection = document.querySelector("#computer");
const playerSelection = document.querySelector("#player");
const possibleChoices = document.querySelectorAll("button");
const result = document.querySelector("#result");
let playerChoice
let computerChoice
let resultFinal

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    console.log(playerChoice);
    playerSelection.innerHTML = playerChoice;
    computerPlay()
    oneRound()
  })
);

function computerPlay() {
  const compChoice = Math.floor(Math.random() * 3) +1;
  console.log(compChoice);

  if (compChoice === 1) {
    computerChoice = 'Paper'
  }
  if (compChoice === 2) {
    computerChoice ='Rock'
  }
  if (compChoice === 3) {
    computerChoice ='Scissors'
  }
  computerSelection.innerHTML =computerChoice; 
}


function oneRound(){
if (playerChoice === computerChoice){
  finalResult = 'Same same!'
  }
if (playerChoice === 'Rock' && computerChoice === 'Paper'){
  finalResult = 'You win!'
}
if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
  finalResult = 'You win!'
}
if (playerChoice === 'Paper' && computerChoice === 'Scissors'){
  finalResult = 'You lost!'
}
if (playerChoice === 'Paper' && computerChoice === 'Rock'){
  finalResult = 'You lost!'
}
if (playerChoice === 'Scissors' && computerChoice === 'Rock'){
  finalResult = 'You lost!'
}
if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
  finalResult = 'You win!'
}

result.innerHTML= finalResult

}