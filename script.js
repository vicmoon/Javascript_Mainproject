function computerPlay(){
    let computerDisplay =document.querySelector("#computer");
    const sides = [
        "Rock",
        "Paper",
        "Scissors"
    ];

     const index= Math.floor(Math.random() * sides.length)
     console.log(sides[index]); 

     
   computerDisplay.innerHTML= sides[index];
}

computerPlay();




function playerPlay(){

    let choice = window.prompt("Enter your choice");
    let playerDisplay = document.querySelector("#player");
    playerDisplay.innerHTML=choice;
    
    if (computerDisplay === playerDisplay){
       alert("Same");}
    
    if (computerDisplay === "Rock" && playerDisplay === "Paper"){
       alert('You win!');}

}

playerPlay()

 function oneRound(){
    let computerDisplay =document.querySelector("#computer");
    let playerDisplay = document.querySelector("#player");

    if (computerDisplay === playerDisplay){
       alert("Same");}
    
    if (computerDisplay === "Rock" && playerDisplay === "Paper"){
       alert('You win!');
    }

 }


oneRound()
