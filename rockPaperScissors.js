const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Invalid choice");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }
  if (userChoice === "bomb") {
    return "User won";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won";
    } else {
      return "User won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won";
    } else {
      return "User won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won";
    } else {
      return "User won";
    }
  }
};

/* console.log(determineWinner(getUserChoice('rock'), getComputerChoice())) */
function playGame() {
  const userChoice = getUserChoice("bomb");
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
