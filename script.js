console.log("Printing")
let choices = ["rock", "paper", "scissors"];
humanScore = 0;
botScore = 0;


//prompt user to input how many rounds
function playRound() {
    let playRound = parseInt(prompt("Enter how many rounds to play"))
    return playRound
}

//returns random rock paper scissors
function randomBot() {
    let randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}
//returns rock paper scissors from user input
function humanChoice () {
    try {
        let humanChoice = parseInt(prompt("Enter 1 for rock, 2 for paper, 3 for scissors"))
        return choices[humanChoice-1]
    }
    catch(err){
        console.log(err.message)
    }

}

function logic (humanChoice, randomBot) {
    if(humanChoice == randomBot) {
        console.log("It's a tie!")
    }
    else if (humanChoice == "rock" && randomBot == "scissors") {
        console.log("Rock beats Scissors! +1 for player")
        humanScore++
        }
    else if (humanChoice == "paper" && randomBot == "rock") {
        console.log("paper beats rock! +1 for player")
        humanScore++
    }
    else if (humanChoice == "scissors" && randomBot == "paper") {
        console.log("Scissors beats paper! +1 for player")
        humanScore++
    }
    else if (randomBot == "rock" && humanChoice == "scissors") {
        console.log("Rock beats Scissors! +1 for bot")
        botScore++
        }
    else if (randomBot == "paper" && humanChoice == "rock") {
        console.log("paper beats rock! +1 for bot")
        botScore++
    }
    else if (randomBot == "scissors" && humanChoice == "paper") {
        console.log("Scissors beats paper! +1 for bot")
        botScore++
    }
}
function showScore() {
    console.log(`Player: ${humanScore}, Bot: ${botScore}`)
}
function finalScore() {
    if(humanScore == botScore) {
        console.log("It's a tie!")
        showScore()
    }
    else if (humanScore > botScore) {
        console.log(`Winner! Player: ${humanScore}, Loser! Bot: ${botScore}`)
}
    else if (humanScore < botScore) {
        console.log(`Winner! Bot: ${botScore}, Loser! Player: ${humanScore}`)
}
}

function playGame(playRound) {
    for (let num = 0; num < playRound; num++) {
    logic(humanChoice(),randomBot())
}
}

playGame(playRound())
finalScore()