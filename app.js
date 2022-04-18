import characterData from "./data.js";
import Character from "./Character.js";
import { getDiceRollArray } from "./utils.js";

const attack = () => {
  ireliaHtml.getDiceHtml();
  yasuoHtml.getDiceHtml();
  ireliaHtml.takeDamage(yasuoHtml.currentDiceScore);
  yasuoHtml.takeDamage(ireliaHtml.currentDiceScore);
  render();

  if (ireliaHtml.isDead || yasuoHtml.isDead) {
    endGame()
  }
};

const endGame = () => {
  const endMessage = ireliaHtml.health === 0 && yasuoHtml.health === 0 ?
    `Both champions dead` :
    ireliaHtml.health === 0 ?
    `Noxus Wins` :
    `Ionia Wins`
  
  const endImage = ireliaHtml.health === 0 && yasuoHtml.health === 0 ?
  './images/Tie-Game-Logo.png' :
  ireliaHtml.health === 0 ?
  './images/Noxus-Logo.webp' :
  './images/Ionia-Logo.webp'

  document.querySelector('.container').innerHTML = `
    <div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <img src=${endImage}>
    </div>
  `
}

const render = () => {
  document.querySelector("#ionia").innerHTML = ireliaHtml.getCharacterHtml();
  document.querySelector("#noxus").innerHTML = yasuoHtml.getCharacterHtml();
};

document.querySelector(".btn").addEventListener("click", attack);

const ireliaHtml = new Character(characterData.ioniaChampions.irelia);
const yasuoHtml = new Character(characterData.noxusChampions.yasuo);
render();
