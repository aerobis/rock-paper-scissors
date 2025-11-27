let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 1;

const losesTo = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock"
};

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playGame() {
    const rockBtn = document.querySelector("#rockButton");
    const paperBtn = document.querySelector("#paperButton");
    const scissorsBtn = document.querySelector("#scissorsButton");

    rockBtn.addEventListener("click", () => playRound("rock"));
    paperBtn.addEventListener("click", () => playRound("paper"));
    scissorsBtn.addEventListener("click", () => playRound("scissors"));
}

function playRound(humanChoice) {
    if (round > 5) return; // stops after 5 rounds

    const computerChoice = getComputerChoice();

    const humanCell = document.querySelector(`#humanRound${round}`);
    const computerCell = document.querySelector(`#computerRound${round}`);
    const resultCell = document.querySelector(`#roundResult${round}`);

    humanCell.textContent = humanChoice;
    computerCell.textContent = computerChoice;

    if (humanChoice === computerChoice) {
        resultCell.textContent = "Tie";
    } else if (losesTo[humanChoice] === computerChoice) {
        computerScore++;
        resultCell.textContent = "Computer";
    } else {
        humanScore++;
        resultCell.textContent = "Human";
    }

    // updates scoreboard
    document.querySelector("#humanScoreboard").textContent = humanScore;
    document.querySelector("#computerScoreboard").textContent = computerScore;

    round++;

    if (round > 5) declareWinner();
}

function declareWinner() {
    const winner = document.querySelector("#winnerText");
    if (humanScore > computerScore) {
        winner.value = "HUMAN WINS!";
    } else if (computerScore > humanScore) {
        winner.value = "COMPUTER WINS!";
    } else {
        winner.value = "IT'S A DRAW!";
    }
}

playGame();
