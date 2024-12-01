const choices = ["rock", "paper", "scissors"];
const playerDisplayElem = document.getElementById("playerDisplay");
const computerDisplayElem = document.getElementById("computerDisplay");
const resultDisplayElem = document.getElementById("resultDisplay");

const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");
const resetBtn = document.getElementById("reset-btn");
let playerScore = 0;
let computerScore = 0;

const playGame = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (computerChoice === playerChoice) {
    result = "مساوی!";
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors" ? "شما برنده شدی!" : "شما بازنده شدی!";
        break;
      case "paper":
        result =
          computerChoice === "rock" ? "شما برنده شدی!" : "شما بازنده شدی!";
        break;
      case "scissors":
        result =
          computerChoice === "paper" ? "شما برنده شدی!" : "شما بازنده شدی!";
        break;
    }
  }

  playerDisplayElem.textContent = `شما : ${
    playerChoice === "rock"
      ? "سنگ"
      : playerChoice === "scissors"
      ? "قیچی"
      : playerChoice === "paper"
      ? "کاغذ"
      : ""
  }`;
  computerDisplayElem.textContent = `کامپیوتر : ${
    computerChoice === "rock"
      ? "سنگ"
      : computerChoice === "scissors"
      ? "قیچی"
      : computerChoice === "paper"
      ? "کاغذ"
      : ""
  }`;
  resultDisplayElem.textContent = result;

  resultDisplayElem.classList.remove("greenText", "redText", "tieText");

  switch (result) {
    case "شما برنده شدی!":
      resultDisplayElem.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "شما بازنده شدی!":
      resultDisplayElem.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
    case "مساوی!":
      resultDisplayElem.classList.add("tieText");
      break;
  }
};

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
});
