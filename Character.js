import {getDiceRollArray} from "./utils.js"

function Character(data) {
    Object.assign(this, data)

    this.getDiceHtml = (diceCount) => {
        return getDiceRollArray(diceCount).map(function(num) {
            return `<p class="dice">${num}</p>`
        }).join('')
    }

    this.getCharacterHtml = () => {
        const {name, icon, alt, health, attack, diceCount} = this;
        const diceHtml = this.getDiceHtml(diceCount)

        return `
            <h2>${name}</h4>
            <img src="${icon}" alt="${alt}">
            <p class="health-bar">-</p>
            <p class="subtext">Health: <span class="health-color">${health}</span></p>
            <p class="subtext">Attack: <span class="attack-color">${attack}</span></p>
            <section class="dice-section">
                ${diceHtml}
            </section>`;
    }
}

export default Character;