const result = document.querySelector("#result");
const computerSelection = document.querySelector("#computer");
const playerSelection = document.querySelector("#player");
const choice = window.prompt("Enter your choice : Paper, Rock or Scissors");
const computerSelection = computerPlay();
const playerSelection = playerPlay();

function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * choice.length);
  computerSelection.innerHTML = choice[index];
  console.log(choice[index]);
}

function playerPlay() {
  playerSelection.innerHTML = choice;
}
