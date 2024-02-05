/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let playGame = () => {
  let gameStart = prompt(
    "Esto empieza, elige: Piedra, papel, tijeras, lagarto, Spock"
  ).toLowerCase();
  const options = ["piedra", "papel", "tijeras", "lagarto", "Spock"];

  let gamePick = options[Math.floor(Math.random() * options.length)];

  if (
    gameStart === "tijeras" &&
    (gamePick === "papel" || gamePick === "lagarto")
  ) {
    console.log("Has ganado.");
  } else if (
    gameStart === "papel" &&
    (gamePick === "piedra" || gamePick === "spock")
  ) {
    console.log("Has ganado.");
  } else if (
    gameStart === "piedra" &&
    (gamePick === "lagarto" || gamePick === "tijeras")
  ) {
    console.log("Has ganado.");
  } else if (
    gameStart === "lagarto" &&
    (gamePick === "spock" || gamePick === "papel")
  ) {
    console.log("Has ganado.");
  } else if (
    gameStart === "spock" &&
    (gamePick === "tijeras" || gamePick === "piedra")
  ) {
    console.log("Has ganado.");
  } else if (gameStart === gamePick) {
    console.log("Empate");
  } else console.log("Has perdido");
};

playGame();
