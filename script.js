function computerPlay(){
    let computerSelection=document.querySelector("#computer");
    const sides = [
        "Rock",
        "Paper",
        "Scissors"
    ];

     const index= Math.floor(Math.random() * sides.length)
     console.log(sides[index]); 

     
   computerSelection.innerHTML= sides[index];
}



function playerPlay(){
    let choice = window.prompt("Enter your choice");
    let playerSelection= document.querySelector("#player");
    playerSelection.innerHTML=choice;
    
}



 function oneRound(playerSelection, computerSelection){
    computerSelection =computerPlay()
    playerSelection = playerPlay()
    
    
    if (computerSelection === "Rock" && playerSelection === "Paper"){
       alert('You win!');
    }
    if (computerSelection ==="Rock" && playerSelection  === "Scissors"){
      alert ('You lost!')
    }
    if (computerSelection === "Paper" && playerSelection === "Scissors"){
    alert('You win')
     }
    if (computerSelection === "Paper" && playerSelection === "Rock"){
    alert ('You lost!')
    }
    if (computerSelection === "Scissors" && playerSelection === "Rock"){
    alert ('You won!')
    }
    if (computerSelection === "Scissors" && playerSelection === "Paper"){
    alert ('You lost!')}

   


 }


oneRound()
