const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors:").toLowerCase();
    if (choices.includes(humanChoice)) {
        return humanChoice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}

function playGame(){
    function playRound(humanChoice, computerChoice){
    if(computerChoice == "rock" && humanChoice == "scissors"){
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    }else if (computerChoice == "paper" && humanChoice == "rock"){
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }else if(computerChoice == "scissors" && humanChoice == "paper"){
        console.log ("You lose! Scissors beat paper!");
        computerScore++;
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors!");
        humanScore++;
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock!");
        humanScore++;
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beat paper!");
        humanScore++;
    }else{
        console.log("Draw! Play again!");
    }

    console.log("Human Score: ", humanScore);
    console.log(`Computer Score: ${computerScore}`);
    }

    let roundNumber = 0;
    for(roundNumber; roundNumber < 5; roundNumber++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if(computerScore > humanScore){
        console.log("You lose! Better luck next time!");
    }else if (humanScore > computerScore){
        console.log("You won! Woohoo!");
    }else{
        console.log("It was a tie. You can't let a computer get the best of you!");
    }
}

playGame();
