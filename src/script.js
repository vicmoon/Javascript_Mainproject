function computerPlay() {
  const computerSelection = document.querySelector("#computer");
  const sides = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * sides.length);
  computerSelection.innerHTML = sides[index];
  console.log(sides[index]);
}

function playerPlay() {
  const playerSelection = document.querySelector("#player");
  playerSelection.innerHTML = choice;
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection != playerSelection) {
    alert("Play again!");
  } else {
    alert("Same!");
  }
}

const result = document.querySelector("#result");
const choice = window.prompt("Enter your choice : Paper, Rock or Scissors");
const computerSelection = computerPlay();
const playerSelection = playerPlay();

console.log((playerSelection, computerSelection));
playRound();
