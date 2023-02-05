const result = document.querySelector("#result");
const computerSelection = document.querySelector("#computer");
const playerSelection = document.querySelector("#player");
const possibleChoices = document.querySelectorAll("button");
let playerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    console.log(playerChoice);
    playerSelection.innerHTML = playerChoice;
    computerPlay()
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

function playerPlay() {
  playerSelection.innerHTML = choice;
}
