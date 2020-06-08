var zigZag = document.querySelector("#message");
var images = document.querySelectorAll("img");
var isOn = document.querySelector("#reset");
var winLose = document.querySelector(".bottom");
var pandaIcon1 = document.querySelector("#panda1");
var pandaIcon2 = document.querySelector("#panda2");
var stopGame = document.querySelector(".SG");
var score1 = document.querySelector(".score1");


var intervalId;

var score = 0;


//pick a "red" from 0 - 255
var randomGen = Math.floor(Math.random() * 2 + 1);
var colorChange = false;

isOn.addEventListener("click", function () {
  score = 0;
  score1.textContent = "Score: 0"
  clearInterval(intervalId);
  isOn.textContent = "Play Again?";
  winLose.textContent = "Game is On";
  pandaIcon1.style.borderColor = "black";
  pandaIcon2.style.borderColor = "black";
  zigZag.textContent = "Game is Loading!"
  startGame();
});


stopGame.addEventListener("click", function () {
  score = 0;
  score1.textContent = "Score: 0"
  clearInterval(intervalId);
  winLose.textContent = "Game is Off";
  pandaIcon1.style.borderColor = "black";
  pandaIcon2.style.borderColor = "black";
  zigZag.textContent = "Game is OFF!"

});


function startGame() {

  intervalId = setInterval(function () {
    if (randomGen === 1) {
      score++;
      zigZag.textContent = "FEED"
    }
    else if (randomGen === 2) {
      score++;
      zigZag.textContent = "SLEEP"
    }

    resetColor();
    choiceSelection();

    randomGen = Math.floor(Math.random() * 2 + 1);
  }, 1000);
}


function resetColor() {
  if (colorChange) {
    zigZag.style.backgroundColor = "steelblue";
    colorChange = false;
  }
  else {
    zigZag.style.backgroundColor = "yellow";
    colorChange = true;
  }
}

function choiceSelection() {
  images[0].addEventListener("click", function () {
    if (zigZag.textContent !== "FEED") {
      lostGame();
    }
  });

  images[1].addEventListener("click", function () {
    if (zigZag.textContent !== "SLEEP") {
      lostGame();
    }
  });
}


pandaIcon1.addEventListener("click", function () {
  if (this.style.borderColor !== "yellow") {
    this.style.borderColor = "yellow";
  }
  else {
    this.style.borderColor = "pink";
  }
});

pandaIcon2.addEventListener("click", function () {
  if (this.style.borderColor !== "yellow") {
    this.style.borderColor = "yellow";
  }
  else {
    this.style.borderColor = "pink";
  }
});


function lostGame() {
  clearInterval(intervalId);
  winLose.textContent = "Wrong Choice";
  score1.textContent = "Score: " + (score - 1);
}