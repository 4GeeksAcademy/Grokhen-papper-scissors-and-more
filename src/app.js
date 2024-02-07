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
  const options = ["piedra", "papel", "tijeras", "lagarto", "spock"];

  let gamePick = options[Math.floor(Math.random() * options.length)];
  console.log(`Tijeratron ha elegido: ${gamePick}`);

  if (playerPick === gamePick) {
    console.log("Empate");
  } else if (
    (playerPick === "tijeras" &&
      (gamePick === "papel" || gamePick === "lagarto")) ||
    (playerPick === "papel" &&
      (gamePick === "piedra" || gamePick === "spock")) ||
    (playerPick === "piedra" &&
      (gamePick === "lagarto" || gamePick === "tijeras")) ||
    (playerPick === "lagarto" &&
      (gamePick === "spock" || gamePick === "papel")) ||
    (playerPick === "spock" &&
      (gamePick === "tijeras" || gamePick === "piedra"))
  ) {
    console.log("Has ganado.");
  } else console.log("Has perdido");
};

playGame();
