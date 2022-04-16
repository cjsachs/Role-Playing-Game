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
    `${ireliaHtml.name} is dead` :
    `${yasuoHtml.name} is dead`
  console.log(endMessage)
}

const render = () => {
  document.querySelector("#ionia").innerHTML = ireliaHtml.getCharacterHtml();
  document.querySelector("#noxus").innerHTML = yasuoHtml.getCharacterHtml();
};

document.querySelector(".btn").addEventListener("click", attack);

const ireliaHtml = new Character(characterData.ioniaChampions.irelia);
const yasuoHtml = new Character(characterData.noxusChampions.yasuo);
render();
