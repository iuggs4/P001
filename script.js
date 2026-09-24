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

function result() {
    if (humanScore > computerScore) {
    resultEL.textContent = "你赢了！";
  } else if (computerScore > humanScore) {
    resultEL.textContent = "你输了!";
  } else {
    resultEL.textContent = "平局。。。";
  }
}


let humanScore = 0;
let computerScore = 0;
const resultEL = document.getElementById('result');
const scoreHumanEL = document.getElementById('humanScore');
const scoreComputerEL = document.getElementById('computerScore');

let number = 1;

const roundResultEL = document.getElementById('roundResult');

document.querySelectorAll('.choiceH').forEach((btn) => {
  btn.addEventListener("click", () => {
    const humanSelection = btn.dataset.choice;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    number++;
  });
});

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    roundResultEL.textContent = "获胜！";
    humanScore++;
    scoreHumanEL.textContent = `${humanScore}`;
    scoreComputerEL.textContent = `${computerScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    roundResultEL.textContent = "获胜！";
    humanScore++;
    scoreHumanEL.textContent = `${humanScore}`;
    scoreComputerEL.textContent = `${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    roundResultEL.textContent = "获胜！";
    humanScore++;
    scoreHumanEL.textContent = `${humanScore}`;
    scoreComputerEL.textContent = `${computerScore}`;
  } else if (humanChoice === computerChoice) {
    roundResultEL.textContent = "平了！";
    scoreHumanEL.textContent = `${humanScore}`;
    scoreComputerEL.textContent = `${computerScore}`;
  } else {
    roundResultEL.textContent = "失败！";
    computerScore++;
    scoreHumanEL.textContent = `${humanScore}`;
    scoreComputerEL.textContent = `${computerScore}`;
  }

  document.querySelectorAll('.choiceC').forEach(h => h.classList.remove('active'));
  const chosen = document.querySelector(`.choiceC[data-choice="${computerChoice}"]`);
  if (chosen) chosen.classList.add('active');

  if (number === 3) {
    result();
    humanScore = 0;
    computerScore = 0;
    number = 1;
    scoreHumanEL.textContent = 0;
    scoreComputerEL.textContent = 0;
  }
}






