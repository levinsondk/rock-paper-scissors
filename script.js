const playerChoise = document.querySelector("#player-choise");
const cpuChoise = document.querySelector("#cpu-choise");
const playerChoiseIcon = document.querySelector("#player-choise .choise-icon");
const cpuChoiseIcon = document.querySelector("#cpu-choise .choise-icon");
const playerScoreText = document.querySelector("#player-score");
const cpuScoreText = document.querySelector("#cpu-score");
const divScoreInfo = document.querySelector(".score-info");
const divGameResult = document.querySelector(".game-result");
const choisesBtnGroup = document.querySelectorAll(".choise-buttons button");
const restartBtn = document.querySelector("#restart");

const choises = Array.from(choisesBtnGroup).map((button) => button.id);

let playerScore = 0;
let cpuScore = 0;

function chooseRandom(choises) {
  const index = Math.floor(Math.random() * choises.length);
  const choise = choises[index];
  return choise;
}

function assignScore(playerChoise, cpuChoise) {
  if (playerChoise === cpuChoise) {
    return;
  } else if (
    (playerChoise === "R" && cpuChoise === "S") ||
    (playerChoise === "P" && cpuChoise === "R") ||
    (playerChoise === "S" && cpuChoise === "P")
  ) {
    playerScore++;
  } else {
    cpuScore++;
  }
}

function updateChoisesDOM(player, cpu) {
  playerChoiseIcon.remove();
  cpuChoiseIcon.remove();

  // Get the icon element from the button and set it to the choise icon
  playerChoiseIcon.textContent = document.querySelector(`#${player}`).textContent;
  cpuChoiseIcon.textContent = document.querySelector(`#${cpu}`).textContent;

  playerChoise.appendChild(playerChoiseIcon);
  cpuChoise.appendChild(cpuChoiseIcon);
}

function updateScoreDOM(player, cpu) {
  playerScoreText.textContent = player;
  cpuScoreText.textContent = cpu;
}

function takeTurn(playerChoice) {
  const cpuChoice = chooseRandom(choises);
  assignScore(playerChoice, cpuChoice);
  updateChoisesDOM(playerChoice, cpuChoice);
  updateScoreDOM(playerScore, cpuScore);

  if (playerScore === 5 || cpuScore === 5) {
    endGame();
  }
}

function endGame() {
  choisesBtnGroup.forEach(button => button.style.display = "none");
  restartBtn.style.display = "block";
  divScoreInfo.style.display = "none";
  divGameResult.textContent = playerScore === 5 ? "You win! 🎉" : "You lose! 🥲";
  restartBtn.addEventListener("click", resetGame);
}

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  updateScoreDOM(playerScore, cpuScore);
  divGameResult.textContent = "";
  playerChoiseIcon.textContent = "-";
  cpuChoiseIcon.textContent = "-";
  restartBtn.style.display = "none";
  choisesBtnGroup.forEach(button => {
    button.style.display = "block";
  });
  divScoreInfo.style.display = "block";
}

function initGame() {
  choisesBtnGroup.forEach(button => {
    button.addEventListener("click", () => {
      takeTurn(button.id);
    });
  });
}

resetGame();
initGame();
