// Enabling

var answer = Math.floor(Math.random() * 10 + 1);
var lastGuess = "--";
var newGuessInput = document.getElementById('guess');
document.getElementById('displayLastGuess').innerText = lastGuess;

var newGuess = Number.parseInt(newGuessInput.value, 10);
console.log("answer = " + answer);

// Check Guess ---- refresh issue???
document.getElementById('buttonGuess').addEventListener('click',function() {
  newGuess = newGuessInput.value;
  console.log("new guess = " + newGuess);
  if (newGuess === answer) {
    var msgOutput = "BOOM!";
  } else if (newGuess > answer) {
    var msgOutput = "That is too high";
  } else {
    var msgOutput = "That is too low";
  }
  document.getElementById('msg').innerText = msgOutput;
});

// Clear Guess Input
document.getElementById('clearGuess').addEventListener('click', function() {
  document.getElementById('guess').innerText = "";
});

// Update Last Guess, executed every time.
