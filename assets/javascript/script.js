let choices = ["plant", "water", "fire"];
let playersChoice = document.getElementById("playersChoice");
let computersChoice = document.getElementById("computersChoice");
let resultDisplay = document.getElementById("resultDisplay");

function playGame(playersChoice) {

    let computersChoice = choices[Math.floor(Math.random() * 3];

    console.log(computersChoice);

}