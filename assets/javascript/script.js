const choices = ["Plant", "Water", "Fire"];
const playersChoice = document.getElementById("playersChoice");
const computersChoice = document.getElementById("computersChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playersScoreDisplay = document.getElementById("playersScoreDisplay");
const computersScoreDisplay = document.getElementById("computersScoreDisplay");
let playerScore = 0;
let computerScore = 0;

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
    if (result === "You WIN!") {
        playerScore++;
        updatePlayerScore();
    }
    if (result === "You LOSE!") {
        computerScore++;
        updateComputerScore();
    }
    resultDisplay.textContent = result;
}

/**
 *  docstring..
 */
function updatePlayerScore() {
    playersScoreDisplay.innerText = playerScore.toString();
}
/**
 *  docstring..
 */
function updateComputerScore() {
    computersScoreDisplay.innerText = computerScore.toString();
}
