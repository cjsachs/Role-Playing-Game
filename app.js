import characterData from "./data.js";
import Character from "./Character.js";

let ioniaChampionsArr = ["irelia", "masterYi", "yasuo", "jhin", "karma"]
let noxusChampionsArr = ["darius", "talon", "katarina", "draven", "rell"]

const getNewIoniaChampion = () => {
  const nextChampionData = characterData.ioniaChampions[ioniaChampionsArr.shift()]
  return nextChampionData ? new Character(nextChampionData) : {}
}

const getNewNoxusChampion = () => {
  const nextChampionData = characterData.noxusChampions[noxusChampionsArr.shift()]
  return nextChampionData ? new Character(nextChampionData) : {}  
}

const attack = () => {
  ioniaHtml.setDiceHtml();
  noxusHtml.setDiceHtml();
  ioniaHtml.takeDamage(noxusHtml.currentDiceScore);
  noxusHtml.takeDamage(ioniaHtml.currentDiceScore);
  render();

  if (ioniaHtml.isDead) {
    battleBtn.disabled = true;
    if (ioniaChampionsArr.length > 0) {
      ioniaHtml = getNewIoniaChampion()
      setTimeout(() => {
        battleBtn.disabled = false;
        render()
      }, 1000)
    } else {
      endGame()
    }
  }

  if (noxusHtml.isDead) {
    battleBtn.disabled = true;
    if (noxusChampionsArr.length > 0) {
      noxusHtml = getNewNoxusChampion()
      setTimeout(() => {
        battleBtn.disabled = false;
        render()
      }, 1000)
    } else {
      endGame()
    }
  }
  
  if (ioniaHtml.isDead && noxusHtml.isDead) {
    endGame()
  }
}

const endGame = () => {
  const endMessage = ioniaHtml.health === 0 && noxusHtml.health === 0 ?
    `Both champions dead` :
    ioniaHtml.health === 0 ?
    `Noxus Wins` :
    `Ionia Wins`
  
  const endImage = ioniaHtml.health === 0 && noxusHtml.health === 0 ?
  './images/Tie-Game-Logo.png' :
  ioniaHtml.health === 0 ?
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
  document.querySelector("#ionia").innerHTML = ioniaHtml.getCharacterHtml();
  document.querySelector("#noxus").innerHTML = noxusHtml.getCharacterHtml();
};

const battleBtn = document.querySelector('.btn')
battleBtn.addEventListener("click", attack);

let ioniaHtml = getNewIoniaChampion();
let noxusHtml = getNewNoxusChampion();

render();
