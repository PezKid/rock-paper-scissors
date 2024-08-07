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

function getHumanChoice() {
    let inputting = true;
    let input = "n/a";
    while (inputting) {
        input = prompt("Enter input 'rock', 'paper', or 'scissors'").toLowerCase();
        if (input === "rock" || input === "paper" || input === "scissors")
            inputting = false;
    }
    return "" + input;
}

function playGame(numRounds) {
    let humanScore = 0;
    let computerScore = 0;

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

        console.log(message);
    }

    while (numRounds > 0) {
        playRound(getHumanChoice(), getComputerChoice());
        numRounds --;
    }

    let winMessage = "";
    if (humanScore > computerScore) {
        winMessage = `You won ${humanScore}-${computerScore}!`;
    } else if (humanScore < computerScore) {
        winMessage = `You lost ${humanScore}-${computerScore}.`;
    } else {
        winMessage = `You tied ${humanScore}-${computerScore}.`;
    }

    console.log("Game Over!\n" + winMessage);
}

playGame(5);