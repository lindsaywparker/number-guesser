var lastGuess;
var newGuessInput = document.getElementById('guess');
var newGuess = Number.parseInt(newGuessInput.value, 10);
var ranges = document.querySelectorAll('.userRange');
var inputMin = Number.parseInt(document.getElementById('userMin').value, 10);
var inputMax = Number.parseInt(document.getElementById('userMax').value, 10);
var answer = Math.floor(Math.random() * (Math.floor(inputMax) - Math.ceil(inputMin) + 1)) + inputMin;
  console.log("inputMin = " + inputMin);
  console.log("inputMax = " + inputMax);
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

// Enable all buttons on guess input
newGuessInput.addEventListener('keyup', function () {
  document.getElementById('clearGuess').disabled = false;
  document.getElementById('buttonGuess').disabled = false;
  document.getElementById('buttonReset').disabled = false;
});

// On Min/Max input, enable reset button and recalculate answer
for (i = 0; i < ranges.length; i++) {
  ranges[i].addEventListener('keyup', function() {
    document.getElementById('buttonReset').disabled = false;
    inputMin = Number.parseInt(document.getElementById('userMin').value, 10);
    inputMax = Number.parseInt(document.getElementById('userMax').value, 10);
    answer = Math.floor(Math.random() * (Math.floor(inputMax) - Math.ceil(inputMin) + 1)) + inputMin;
    console.log("inputMin = " + inputMin);
    console.log("inputMax = " + inputMax);
    console.log("answer = " + answer);
  });
}

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
  document.getElementById('buttonReset').disabled = true;
  inputMin = "1";
  document.getElementById('userMin').value = inputMin;
  inputMax = "100";
  document.getElementById('userMax').value = inputMax;
  answer = Math.floor(Math.random() * inputMax + 1);
  console.log("answer = " + answer);
});
