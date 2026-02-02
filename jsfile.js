function getComputerChoice() {
    let computerChoice = ""
    let randomChoice = Math.random()
    if (randomChoice < 1/3) {
        computerChoice = "rock"

    } else if (randomChoice < 2/3){
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function getHumanChoice() {
    let answer = prompt("rock, paper, scissors?")
    return answer
}



function playGame() {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()

    let humanScore = 0
    let computerScore = 0

        
    function playRound(computerChoice, humanChoice) {

        function choiceNumber(choice) {
            let choiceNum = 0
            if (choice == "scissors") {
                choiceNum = 1
            } else if (choice == "rock") {
                choiceNum = 2
            } else {
                choiceNum = 3
            }
            return choiceNum
        }

        let computerChoiceNumber = choiceNumber(computerChoice)
        let humanChoiceNumber = choiceNumber(humanChoice)

        if (computerChoiceNumber > humanChoiceNumber) {
            computerScore ++
            console.log(`you lose! ${computerChoice} beats ${humanChoice}!`)
        } else if (humanChoiceNumber > computerChoiceNumber) {
            humanScore ++
            console.log(`you win! ${humanChoice} beats ${computerChoice}`)
        } else {
            console.log("draw")
        }

        }

    for (let i = 0; i < 5; i++) {
        playRound(computerSelection, humanSelection)
        humanSelection = getHumanChoice()
        computerSelection = getComputerChoice()
    }

    if (computerScore > humanScore) {
        console.log("you lose!")
    } else if (humanScore > computerScore) {
        console.log("you win!")
    } else {
        console.log("draw")
    }

}

playGame()

    

    



