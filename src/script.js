function computerPlay() {
  const computerSelection = document.querySelector("#computer");
  const choice = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * choice.length);
  computerSelection.innerHTML = choice[index];
  console.log(choice[index]);
}

function playerPlay() {
  const playerSelection = document.querySelector("#player");
  playerSelection.innerHTML = choice;
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection != playerSelection) {
    alert("Play again!");
  }
}

const result = document.querySelector("#result");
const choice = window.prompt("Enter your choice : Paper, Rock or Scissors");
const computerSelection = computerPlay();
const playerSelection = playerPlay();
result.innerHTML = "The round result should be here";

console.log((playerSelection, computerSelection));
playRound();
