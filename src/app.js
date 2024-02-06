/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let playGame = () => {
  let playerPick = prompt(
    "Esto empieza, elige: Piedra, papel, tijeras, lagarto, Spock"
  ).toLowerCase();
  const options = ["piedra", "papel", "tijeras", "lagarto", "Spock"];

  let gamePick = options[Math.floor(Math.random() * options.length)];
  console.log(`Tijeratron ha elegido: ${gamePick}`);

  if (
    playerPick === "tijeras" &&
    (gamePick === "papel" || gamePick === "lagarto")
  ) {
    console.log("Has ganado.");
  } else if (
    playerPick === "papel" &&
    (gamePick === "piedra" || gamePick === "spock")
  ) {
    console.log("Has ganado.");
  } else if (
    playerPick === "piedra" &&
    (gamePick === "lagarto" || gamePick === "tijeras")
  ) {
    console.log("Has ganado.");
  } else if (
    playerPick === "lagarto" &&
    (gamePick === "spock" || gamePick === "papel")
  ) {
    console.log("Has ganado.");
  } else if (
    playerPick === "spock" &&
    (gamePick === "tijeras" || gamePick === "piedra")
  ) {
    console.log("Has ganado.");
  } else if (playerPick === gamePick) {
    console.log("Empate");
  } else console.log("Has perdido");
};

playGame();
