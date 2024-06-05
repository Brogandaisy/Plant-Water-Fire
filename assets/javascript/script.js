const choices = ["Plant", "Water", "Fire"];
const playersChoice = document.getElementById("playersChoice");
const computersChoice = document.getElementById("computersChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playersScoreDisplay = document.getElementById("playersScoreDisplay");
const computersScoreDisplay = document.getElementById("computersScoreDisplay");
let playersScore = 0;
let computersScore = 0;

function playGame(playersChoice) {

    const computersChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playersChoice === computersChoice){
        result = "It's a tie!";
    }
    else {
        switch(playersChoice){
            case "Plant" : 
            result = (computersChoice === "Water") ? "You WIN!" : "You LOSE!";
            break;
            case "Fire" : 
            result = (computersChoice === "Plant") ? "You WIN!" : "You LOSE!";
            break;
            case "Water" : 
            result = (computersChoice === "Fire") ? "You WIN!" : "You LOSE!";
            break;
        }
    }
    
    playersDisplay.textContent = `Players Choice: ${playersChoice}`;
    computersDisplay.textContent = `Computers Choice: ${computersChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        }
    }