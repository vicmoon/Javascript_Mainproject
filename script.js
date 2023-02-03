function computerPlay(){
    const sides = [
        "Rock",
        "Paper",
        "Scissors"
    ];

     const index= Math.floor(Math.random() * sides.length)
     console.log(sides[index]); 
     
   
}

computerPlay();


function oneRound(playerSelection, computerSelection){
    let choice = window.prompt("Enter your choice");
    playerSelection=choice;

    if (choice == "Rock" && computerSelection ==  "Paper") {
        return prompt("You lose, Rock beats Paper");    
    } if (choice == "Paper" && computerSelection == "Scissors"){
        return prompt("You lose, Scissors beats Paper");
    } if (choice =="Scissors" && computerSelection  == "Rock"){
        return prompt("You lose, Rock beats Scissors");
    }
    
    else {
        return ("Game over!");
    }
    

    
}
oneRound();