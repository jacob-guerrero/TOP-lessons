function evaluateGuess(magicNumber, guess) {
  if (guess > magicNumber) {
    return "YOUR GUESS IS TOO BIG";
  } else if (guess < magicNumber) {
    return "YOUR GUESS IS TOO SMALL";
  } else if (guess == magicNumber) {
    return "YOU DID IT! 🎉";
  }
}

function guessingGame() {
  const magicNumber = 22;
  const guess = prompt("guess a number between 1 and 100!");
  const message = evaluateGuess(magicNumber, guess);
  alert(message);
}

guessingGame();
