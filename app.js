import characterData from "./data.js"
import Character from "./Character.js"
import {getDiceRollArray} from "./utils.js"


const attack = () => {
    render()
}



const render = () => {
    document.querySelector('#ionia').innerHTML = ireliaHtml.getCharacterHtml()
    document.querySelector('#noxus').innerHTML = yasuoHtml.getCharacterHtml()
}

document.querySelector('.btn').addEventListener('click', attack)

const ireliaHtml = new Character(characterData.ioniaChampions.irelia)
const yasuoHtml = new Character(characterData.noxusChampions.yasuo)
render()