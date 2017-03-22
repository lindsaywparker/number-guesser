// limit input range?

var lastGuess;
var newGuessInput = document.getElementById('guess');
var newGuess = Number.parseInt(newGuessInput.value, 10);
var inputMin = 1;
var inputMax = 100;
var answer = Math.floor(Math.random() * inputMax + 1);
  console.log("answer = " + answer);

function clearField() {
  newGuessInput.value = "";
  document.getElementById('clearGuess').disabled = true;
  document.getElementById('buttonGuess').disabled = true;
  if (lastGuess==NaN) {
    document.getElementById('buttonReset').disabled = true;
  }
  document.getElementById('guess').focus();
}

function errOutOfRange() {
  alert("You've entered a number outside the specified range.  Check yo'self.");
}

function errNotNumber() {
  alert("That's just not even a number.  Come on...");
}

// Enable all buttons
newGuessInput.addEventListener('keyup', function () {
  document.getElementById('clearGuess').disabled = false;
  document.getElementById('buttonGuess').disabled = false;
  document.getElementById('buttonReset').disabled = false;
});

// Guess Button Functionality
document.getElementById('buttonGuess').addEventListener('click', function() {
  newGuess = Number.parseInt(newGuessInput.value, 10);
  console.log("new guess = " + newGuess);
  if (isNaN(newGuess) == true) {
    errNotNumber();
  } else if (newGuess > inputMax || newGuess < inputMin) {
    errOutOfRange();
  } else {
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
  }
  clearField();
});

// Clear Button Functionality
document.getElementById('clearGuess').addEventListener('click', function() {
  clearField();
});

// Reset Button Functionality
document.getElementById('buttonReset').addEventListener('click', function() {
  clearField();
  document.getElementById('displayLastGuess').innerText = "--";
  answer = Math.floor(Math.random() * inputMax + 1);
    console.log("answer = " + answer);
  document.getElementById('buttonReset').disabled = true;
});
