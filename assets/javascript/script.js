let modal = document.getElementById("myModal");        
let btn = document.getElementById("myInstructions");
let span = document.getElementsByClassName("close")[0];
const choices = ["Plant", "Water", "Fire"];
const playersDisplay = document.getElementById("playersDisplay");
const computersDisplay = document.getElementById("computersDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playersScoreDisplay = document.getElementById("playersScoreDisplay");
const computersScoreDisplay = document.getElementById("computersScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playersChoice) {
    const computersChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playersChoice === computersChoice) {
        result = "It's a tie!";
    } else {
        switch(playersChoice) {
            case "Plant":
                result = (computersChoice === "Water") ? "You WIN!" : "You LOSE!";
                break;
            case "Fire":
                result = (computersChoice === "Plant") ? "You WIN!" : "You LOSE!";
                break;
            case "Water":
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
function checkWinner() {
    if (playerScore === 10) {
        resultDisplay.textContent = "You win the game!";
        resetGame();
    } else if (computerScore === 10) {
        resultDisplay.textContent = "Computer wins the game!";
        resetGame();
    }
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updatePlayerScore();
    updateComputerScore();
}
function updatePlayerScore() {
    playersScoreDisplay.innerText = playerScore.toString();
}
function updateComputerScore() {
    computersScoreDisplay.innerText = computerScore.toString();
}
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Create choice buttons dynamically using a forEach loop
const choicesContainer = document.querySelector('.choices');
choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = `<img src="assets/images/${choice.toLowerCase()}.png" alt="${choice.toLowerCase()}">`;
    button.onclick = () => playGame(choice);
    choicesContainer.appendChild(button);
});