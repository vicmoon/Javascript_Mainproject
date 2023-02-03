function computerPlay(){
    var sides = [
        "Rock",
        "Paper",
        "Scissors"
    ];

     var index= Math.floor(Math.random() * sides.length)
     console.log(sides[index]); 
     
   
}


computerPlay();