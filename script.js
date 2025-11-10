const playerChoiceText = document.getElementById('playerChoice')
const computerChoiceText = document.getElementById('computerChoice')
const result = document.getElementById('result')
const playerScoreText = document.getElementById('playerScore')
const computerScoreText = document.getElementById('computerScore')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const reset = document.getElementById('resetBtn')
let playerScore = 0
let computerScore = 0
let playerChoice

rock.onclick = function(){playerChoice = "rock"; game(playerChoice)}
paper.onclick = function(){playerChoice = "paper"; game(playerChoice)}
scissors.onclick = function(){playerChoice = "scissors"; game(playerChoice)}

function game(playerChoice){
    let computerChoice = Math.floor(Math.random()*3)+1
    switch(computerChoice){
        case 1: computerChoice = "rock"; break
        case 2: computerChoice = "paper"; break
        case 3: computerChoice = "scissors"; break
    }

    playerChoiceText.textContent = playerChoice
    computerChoiceText.textContent = computerChoice

    if (playerChoice === computerChoice){
        result.textContent = "IT'S A TIE!"
    }
    else {
        switch(playerChoice){
            case "rock":
                result.textContent = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
                break
            case "paper":
                result.textContent = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
                break
            case "scissors":
            result.textContent = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
                break
        }
    }
    switch(result.textContent){
        case "YOU WIN!":
            result.style.color = "hsl(125 100% 60%)"
            playerScore += 1
            break
        case "YOU LOSE!":
            result.style.color = "hsl(0 100% 60%)"
            computerScore += 1
            break
        case "IT'S A TIE!":
            result.style.color = "hsl(40 100% 60%)"
            break
    }
    updateScore()
}

reset.onclick = function(){
    playerScore = 0
    computerScore = 0
    result.textContent = ""
    updateScore()
}

function updateScore(){
    playerScoreText.textContent = playerScore
    computerScoreText.textContent = computerScore

}
