console.log("Printing")
let choices = ["rock", "paper", "scissors"];
humanScore = 0;
botScore = 0;


//prompt user to input how many rounds
function playRound() {
}

//returns random rock paper scissors
function randomBot() {
    let randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}
//returns rock paper scissors from user input
function humanChoice () {

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
//show individual scores
function showScore() {

}
function finalScore() {

}


function playGame(playRound) {

}
