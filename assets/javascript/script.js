const choices = ["Plant", "Water", "Fire"];
const playersChoice = document.getElementById("playersChoice");
const computersChoice = document.getElementById("computersChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playersScoreTally = document.getElementById("playersScoreTally");
const computersScoreTally = document.getElementById("computersScoreTally");
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

    resultDisplay.classList.remove();

    switch(result){
        case "You WIN!":
            resultDisplay.classList.add();
            playersScore++;
            playersScoreTally.textContent = "playersScore";
            break;
            case "You LOSE!":
                resultDisplay.classList.add();
                computersScore++;
                computersScoreTally.textContent = "computersScore";
                break;
    }
}