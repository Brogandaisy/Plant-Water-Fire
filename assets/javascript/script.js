const choices = ["plant", "water", "fire"];
const playersChoice = document.getElementById("playersChoice");
const computersChoice = document.getElementById("computersChoice");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playersChoice) {

    const computersChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computersChoice);

}