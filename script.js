//components
const btnRock = document.getElementById('rock-button');
const btnPaper = document.getElementById('paper-button');
const btnScissor = document.getElementById('scissors-button');
const playAgain = document.getElementById('modal-button-end');
const start = document.getElementById('modal-button-start');
const playerIconText = document.getElementById('icon-text-player');
const botIconText = document.getElementById('icon-text-bot');
const startModal = document.getElementById('start-modal');
const endModal = document.getElementById('end-modal');
const endResult = document.getElementById('modal-end-result');

//text
const result = document.getElementById('result-text');
const roundSummary = document.getElementById('round-summary');
const playerScore = document.getElementById('player-score');
const botScore = document.getElementById('bot-score');
const form = document.getElementById('forms');
const inputNumber = document.getElementById('maxScore');

// game variables
let playerScoreCount = 0;
let botScoreCount = 0;
let playerChoice;
let botChoice;
let maxScore;

let options = ["rock", "paper", "scissors"];
let botChoiceIcon = ["✊", "✋", "✌️"];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputValue = inputNumber.value.trim();

    if (!inputValue || isNaN(inputValue) || inputValue <= 0) {
        console.log("Please enter a valid positive number!");
        return;
    }
    maxScore = parseInt(inputValue, 10);
    console.log("Max Score Set:", maxScore);
    startModal.style.display = "none";
    enableGameButtons(); // enable game buttons after form submit
});

//bot decision
function botDecision() {
    let randNum = Math.floor(Math.random() * 3);
    botIconText.textContent = botChoiceIcon[randNum];
    botChoice = options[randNum];
    return botChoice;
}

//player decision
function playerDecision(choice) {
    playerChoice = choice;
    return playerChoice;
}

//increment scores
function playerScores() {
    playerScoreCount++;
    playerScore.textContent = playerScoreCount;
    result.textContent = "Player scores!";
}

function botScores() {
    botScoreCount++;
    botScore.textContent = botScoreCount;
    result.textContent = "Bot scores!";
}

//game logic
function game(playerDecision, botDecision) {
    if (playerDecision === botDecision) {
        result.textContent = "It's a tie!";
        roundSummary.textContent = `${playerDecision} ties with ${botDecision}`;
    } else if (
        (playerDecision === "rock" && botDecision === "scissors") ||
        (playerDecision === "paper" && botDecision === "rock") ||
        (playerDecision === "scissors" && botDecision === "paper")
    ) {
        result.textContent = "Player wins this round!";
        playerScores();
        roundSummary.textContent = `${playerDecision} beats ${botDecision}`;
    } else {
        botScores();
        result.textContent = "Bot wins this round!";
        roundSummary.textContent = `${botDecision} beats ${playerDecision}`;
    }

    winner(playerScoreCount, botScoreCount);
    console.log(maxScore);
}

//clicking button
btnRock.addEventListener("click", () => {
    playerDecision("rock");
    playerIconText.textContent = "✊";
    botDecision();
    game(playerChoice, botChoice);
});

btnPaper.addEventListener("click", () => {
    playerDecision("paper");
    playerIconText.textContent = "✋";
    botDecision();
    game(playerChoice, botChoice);
});

btnScissor.addEventListener("click", () => {
    playerDecision("scissors");
    playerIconText.textContent = "✌️";
    botDecision();
    game(playerChoice, botChoice);
});

//end modal
playAgain.addEventListener("click", (e) => {
    botScoreCount = 0;
    playerScoreCount = 0;
    playerScore.textContent = "0";
    botScore.textContent = "0";
    playerIconText.textContent = "";
    botIconText.textContent = "";
    result.textContent = "New Game";
    roundSummary.textContent = "";
    e.preventDefault();
    endModal.style.display = "none";
    startModal.style.display = "flex";
});

//winner
function winner(playerScoreCount, botScoreCount) {
    if (maxScore > 0){ //check if maxscore has a value
        if (playerScoreCount >= maxScore) {
            endModal.style.display = "flex";
            endResult.textContent = "Player wins!";
        } else if (botScoreCount >= maxScore) {
            endModal.style.display = "flex";
            endResult.textContent = "Bot wins!";
        }
    }
}

//Function to Disable Game Buttons
function disableGameButtons() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissor.disabled = true;
}

//Function to Enable Game Buttons
function enableGameButtons() {
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissor.disabled = false;
}

disableGameButtons(); // Disable Buttons on page load.