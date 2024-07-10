let humanScore, computerScore = 0;

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

console.log(getHumanChoice());