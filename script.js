// limit input range?

var lastGuess;
var newGuessInput = document.getElementById('guess');
var newGuess = Number.parseInt(newGuessInput.value, 10);
var inputMin = 1;
var inputMax = 10;
var answer = Math.floor(Math.random() * inputMax + 1);
  console.log("answer = " + answer);

// Enable Check & Guess
newGuessInput.addEventListener('keyup', function () {
  newGuess = Number.parseInt(newGuessInput.value, 10);
  if (newGuess <= inputMax && newGuess >= inputMin) {
    document.getElementById('clearGuess').disabled = false;
    document.getElementById('buttonGuess').disabled = false;
  }
});

// Check Guess
document.getElementById('buttonGuess').addEventListener('click', function() {
  newGuess = Number.parseInt(newGuessInput.value, 10);
  console.log("new guess = " + newGuess);
  if (newGuess === answer) {
    var msgOutput = "BOOM!";
  } else if (newGuess > answer) {
    var msgOutput = "That is too high";
  } else {
    var msgOutput = "That is too low";
  }
  lastGuess = newGuess;
  document.getElementById('msg').innerText = msgOutput;
  document.getElementById('displayLastGuess').innerText = lastGuess;
  newGuessInput.value = "";
  document.getElementById('guess').focus();
  document.getElementById('clearGuess').disabled = true;
  document.getElementById('buttonGuess').disabled = true;
});

// Clear Guess Input
document.getElementById('clearGuess').addEventListener('click', function() {
  document.getElementById('guess').innerText = "";
});
