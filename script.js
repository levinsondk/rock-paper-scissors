// The game is played with text input in the browser's console.
// Set the initial score for the computer and the user to 0.
// Define choices to play.
// Start the game with a predefined winning score.
// 	Play a round.
// 		Prompt the user to choose from Rock, Paper, or Scissors.
// 			Include a default random option as a placeholder.
// 			Capitalize the user's input.
// 	The computer chooses a random option.
// 	Compare the user's choice to the computer's.
// 		Rock beats Scissors, Paper beats Rock, Scissors beat Paper.
// 	Define the round winner or a tie.
//	Declare and add a score to the round's winner.
// Check if the game's winning condition is met.
// 	If not, continue to the next round.
// 	If yes, declare the game winner and reset the score.

const options = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;

function chooseRandomOption() {
  const index = Math.floor(Math.random() * options.length);
  const choice = options[index];
  return choice;
}

function getUserChoice() {
  let choice;
  choice = prompt("Choose: Rock, Paper or Scissors", chooseRandomOption())
    .trim()
    .toLowerCase();
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function defineRoundWinner(userChoice, computerChoice) {
  let winner = "";
  if (userChoice === computerChoice) {
    winner = "tie";
  } else if (userChoice === "Rock" && computerChoice === "Scissors") {
    winner = "user";
  } else if (userChoice === "Paper" && computerChoice === "Rock") {
    winner = "user";
  } else if (userChoice === "Scissors" && computerChoice === "Paper") {
    winner = "user";
  } else {
    winner = "computer";
  }
  return winner;
}

function playRound() {
  const userChoice = getUserChoice();
  const computerChoice = chooseRandomOption();
  console.log(`You chose ${userChoice}`);
  console.log(`Computer chose ${computerChoice}`);

  const winner = defineRoundWinner(userChoice, computerChoice);
  if (winner === "user") {
    console.log(`${userChoice} beats ${computerChoice}`);
    userScore++;
    console.log("You won the round! 🎉");
  } else if (winner === "computer") {
    console.log(`${computerChoice} beats ${userChoice}`);
    computerScore++;
    console.log("You lose the round! 🥲");
  } else if (winner === "tie") {
    console.log("it's a tie! 🤝");
  } else {
    console.log("Something went wrong…");
  }
  console.log(`--- ${userScore} : ${computerScore} ---`);
}

function playGame() {
  const winnerScore = 3;
  while (userScore < winnerScore && computerScore < winnerScore) {
    playRound();
    if (userScore === winnerScore) {
      console.log("You won the game! 🎊");
    } else if (computerScore === winnerScore) {
      console.log("You lose the game! 😭");
    }
  }
  computerScore = 0;
  userScore = 0;
}
