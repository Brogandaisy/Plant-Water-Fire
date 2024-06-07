let modal = document.getElementById("myModal");        
let btn = document.getElementById("myInstructions");
let span = document.getElementsByClassName("close")[0];

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
    
    playersDisplay.textContent = `You Chose: ${playersChoice}`;
    computersDisplay.textContent = `Computer Chose: ${computersChoice}`;
    if (result === "You WIN!") {
        playerScore++;
        updatePlayerScore();
    }
    if (result === "You LOSE!") {
        computerScore++;
        updateComputerScore();
    }

    resultDisplay.textContent = result;
    checkWinner(); // Check for a winner after updating the scores

}

/**
 * Checks if either player or computer has reached a score of 10 and displays the winning message.
 */
function checkWinner() {
    if (playerScore === 10) {
        resultDisplay.textContent = "You win the game!";
        resetGame();

    } else if (computerScore === 10) {
        resultDisplay.textContent = "Computer wins the game!";
        resetGame();
    }
}

/**
 * Resets the game scores.
 */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updatePlayerScore();
    updateComputerScore();
}

/**
 *  Updates the players score when they see 'You WIN!'.
 */
function updatePlayerScore() {
    playersScoreDisplay.innerText = playerScore.toString();
}
/**
 *  Updates the computers score when they see 'You LOSE!'.
 */
function updateComputerScore() {
    computersScoreDisplay.innerText = computerScore.toString();
}

/**
 * When the 'Intructions' button is clicked, a pop-up/modal is created displaying the instructions for the player.
 */
btn.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
