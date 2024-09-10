function getComputerChoice() {
    const rnd = 3 * Math.random();

    if (rnd < 1) {
        return "rock";
    } else if (rnd < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let message = "";
    
    if (humanChoice === computerChoice) {
        message = "You tied!"
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        message = "You win! Rock beats Scissors";
        humanScore ++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        message = "You lose. Paper beats Rock";
        computerScore ++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        message = "You win! Paper beats Rock";
        humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        message = "You lose. Scissors beats Paper";
        computerScore ++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        message = "You win! Scissors beats Paper";
        humanScore ++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        message = "You lose. Rock beats Scissors";
        computerScore ++;
    } else {
        message = "improper inputs";
    }

    messageDisplay.textContent = message;
    scoreDisplay.textContent = humanScore + "-" + computerScore;
    
    if (humanScore == winScore) {
        messageDisplay.textContent = "Game Over, You Win!";
        doEndState();
    } else if (computerScore == winScore) {
        messageDisplay.textContent = "Game Over, You Lose";
        doEndState();
    }
}

function doEndState() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", () => {
        restartGame();
        restartButton.remove();
    });
    container.appendChild(restartButton);
}

function restartGame() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    humanScore = 0;
    computerScore = 0;
    messageDisplay.textContent = "";
    scoreDisplay.textContent = "";
}

const container = document.querySelector("#container");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const messageDisplay = document.querySelector("#message-display");
const scoreDisplay = document.querySelector("#score-display");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

let humanScore = 0;
let computerScore = 0;
const winScore = 5;