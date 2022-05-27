const body = document.getElementById("game");
const scoreAndDice = document.querySelector(".scoreAndDice");
const diceArea = document.querySelector(".diceArea");

const playerScore = document.getElementById("playerScore");
const diceRoll = document.getElementById("diceRoll");
const playAgain = document.getElementById("playAgain");

let playerTotal = 0;

diceRoll.addEventListener("click", () => {
  let currentRoll = Math.ceil(Math.random() * 6);
    diceArea.style.display = "block";
    diceSide.src = `images/${currentRoll}.jpg`;


playerTotal += currentRoll;
playerScore.textContent = playerTotal;

if (playerTotal >= 30) {
    playerScore.textContent = `${playerTotal} - YAY...YOU WON!`;
    playerScore.style.fontWeight = "bold";
    body.style.backgroundColor = "#C724B1";

    player1Total = 0;

    diceRoll.style.display = "none";
    playAgain.style.display = "block";
    playAgain.style.backgroundColor = "#00885f";
} else {
    if (currentRoll == 1) {
    playerScore.textContent = `${playerTotal} - Better Luck Next Time!`;
    playerScore.style.fontWeight = "bold";
    body.style.backgroundColor = "#4D4DFF";

    player1Total = 0;

    diceRoll.style.display = "none";
    playAgain.style.display = "block";
    playAgain.style.backgroundColor = "#770028";
    }
}
});

playAgain.addEventListener("click", () => {
window.location.reload();
});

