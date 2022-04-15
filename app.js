import characterData from "./data.js"
import Character from "./Character.js"
import {getDiceRollArray} from "./utils.js"

const ireliaHtml = new Character(characterData.ioniaChampions.irelia)
const yasuoHtml = new Character(characterData.noxusChampions.yasuo)

const render = () => {
    document.querySelector(ireliaHtml.elementId).innerHTML = ireliaHtml.getCharacterHtml()
    document.querySelector(yasuoHtml.elementId).innerHTML = yasuoHtml.getCharacterHtml()
}

render()