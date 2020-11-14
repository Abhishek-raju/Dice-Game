"use strict";

//Selceting Elements
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting Conditions
score0.textContent = "0";
score1.textContent = "1";
diceEl.classList.add("hidden");

//Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  //Generation a random number between 1-6
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  //display the random number
  diceEl.classList.remove("hidden");

  //Check the number is one if true,switch to next player
});
