function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "scissors";
    } else {
        return "paper";
    }
}
console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = prompt("What's your choice? Rock or Scissors or Paper?");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowercase();

    if (humanChoice === "rock" && computerChoice === "scissors" ) {
        console.log("Winner!!!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock" ){
        console.log("Winner!!!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper" ){
        console.log("Winner!!!");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's tie!");
    } else {
        console.log("Loser!!!")
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);


if (humanScore > computerScore) {
        console.log(`You win the game! ${humanScore} - ${computerScore}`);
    }

    else if (computerScore > humanScore) {
        console.log(`You lose the game! ${computerScore} - ${humanScore}`);
    }

    else {
        console.log(`The game is a tie! ${humanScore} - ${computerScore}`);
    }

playGame();