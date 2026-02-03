function getComputerChoice() {
    let computerChoice 
    let randomChoice = Math.random()
    if (randomChoice < 1/3) {
        computerChoice = "rock"

    } else if (randomChoice < 2/3) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function updateScore() {
  scoreContainer.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
}


let humanScore = 0
let computerScore = 0
let i = 0

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const results = document.querySelector("#results")
const scoreContainer = document.querySelector("#score");
scoreContainer.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

btnRock.addEventListener("click", () => playRound("rock"));
btnPaper.addEventListener("click", () => playRound("paper"));
btnScissors.addEventListener("click", () => playRound("scissors"));


function playRound(humanChoice) {

    if (i >= 5) return;

    results.innerHTML = ""

    const computerChoice = getComputerChoice()


    if (humanChoice == computerChoice){
        const result = "draw. Try again."
        results.textContent = result                                                                           
    } else if (
           (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore ++
        const result = `you win! ${humanChoice} beats ${computerChoice}. Go again?`
        results.textContent = result

    } else {
        computerScore ++
        const result = `you lose! ${computerChoice} beats ${humanChoice}! Try again.`
        results.textContent = result

    }

    updateScore()
    i ++

    if (i == 5) {
        gameOver()
    }

    }


function gameOver () {

    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;


    let text = "" 

    if (computerScore > humanScore) {
        text = "computer wins"
    } else if (humanScore > computerScore) {
        text = "you win"
    } else {
        text = "draw"
    }

  
    results.textContent = text

    }






    

    



