"use strict";
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "please select a Number ";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "You Won 🏆 ";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "rgb(40, 173, 58)";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Go lower ↘️ ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game 🤷‍♀️";
      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor =
        "rgba(187, 15, 15, 1)";
      document.querySelector(".number").style.width = "30rem";
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "go heigher ↗️ ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game 🤷‍♂️";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor =
        "rgba(187, 15, 15, 1)";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  const guess = Number((document.querySelector(".guess").value = ""));
  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
