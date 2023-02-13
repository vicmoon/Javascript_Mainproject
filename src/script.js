const computerSelection = document.querySelector("#computer");
const playerSelection = document.querySelector("#player");
const possibleChoices = document.querySelectorAll("button");
const result = document.querySelector("#result");

function greeting(){
   alert('Hello, let\'s start playing! Push a button :)');
}
greeting();




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


let playerScore= 0;
let computerScore =0;

function oneRound(){
if (playerChoice === computerChoice){
  finalResult = ' It\'s a draw';
  } 
  
 if ((playerChoice === 'Paper' && computerChoice === 'Rock' )
  ||(playerChoice === 'Rock' && computerChoice === 'Scissors')
  || (playerChoice === 'Scissors' && computerChoice === 'Paper')
 ){
   finalResult = 'You win!';
   playerScore++;
 }

 if ((playerChoice === 'Paper' && computerChoice === 'Scissors')
 ||(playerChoice === 'Scissors' && computerChoice === 'Rock')
 ||(playerChoice === 'Rock' && computerChoice === 'Paper')

  ){
    finalResult = 'You lost!'
    computerScore++;
  }
   


console.log(`Computer score ${computerScore}`);
console.log(`Player score ${playerScore}`);
result.innerHTML= finalResult

}

 let roundNumber = 0;

 function roundsCount(){
  roundNumber++;
  alert(`Round  ${roundNumber}`)
  if (roundNumber === 5)
  alert("Time\'s up!")
}

possibleChoices.forEach((possibleChoice) =>
possibleChoice.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  console.log(playerChoice);
  playerSelection.innerHTML = playerChoice;
  computerPlay()
  oneRound()
  roundsCount()
})
);


