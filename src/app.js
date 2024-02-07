/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let playGame = () => {
  const options = ["piedra", "papel", "tijeras", "lagarto", "spock"];

  let playerPick;
  // adding while loop in case player choose wrong option
  while (true) {
    playerPick = prompt(
      "Esto empieza, elige: Piedra, papel, tijeras, lagarto, Spock"
    ).toLowerCase();
    if (!options.includes(playerPick)) {
      alert("Elige algo de la lista");
    } else {
      break;
    }
  }
  // changing variable name to make it more clear
  let computerPick = options[Math.floor(Math.random() * options.length)];
  // changing console.log for alerts to make it more user friendly
  alert(`Tijeratron ha elegido: ${computerPick}`);
  // adding the tie comparation first to prevent it from going all the way throught the loop
  if (playerPick === computerPick) {
    document.write(`<h1>Empate</h1>`);
    /* alert("Empate") */
  } else {
    // Creating a win condition variable
    let playerWins =
      (playerPick === "piedra" &&
        (computerPick === "tijeras" || computerPick === "lagarto")) ||
      (playerPick === "papel" &&
        (computerPick === "piedra" || computerPick === "spock")) ||
      (playerPick === "tijeras" &&
        (computerPick === "papel" || computerPick === "lagarto")) ||
      (playerPick === "lagarto" &&
        (computerPick === "spock" || computerPick === "papel")) ||
      (playerPick === "spock" &&
        (computerPick === "piedra" || computerPick === "tijeras"));
    let result = playerWins ? "Has ganado" : "Has perdido";
    document.write(`<h1>${result}</h1>`);
  }

  // using the ternary conditional(comparador ternario) to reduce if else conditionals
  /* alert(result); */

  // version without the ternary coinditional
  /* else if (
    (playerPick === "piedra" &&
      (computerPick === "tijeras" || computerPick === "lagarto")) ||
    (playerPick === "paper" &&
      (computerPick === "piedra" || computerPick === "spock")) ||
    (playerPick === "tijeras" &&
      (computerPick === "paper" || computerPick === "lagarto")) ||
    (playerPick === "lagarto" &&
      (computerPick === "spock" || computerPick === "paper")) ||
    (playerPick === "spock" &&
      (computerPick === "piedra" || computerPick === "tijeras"))
  ) {
    alert("Has ganado");
  } else {
    alert("Has perdido");
  } */
};

playGame();
