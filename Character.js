import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.takeDamage = (attackScoreArray) => {
        const totalDamage = attackScoreArray.reduce(function(total, currentNum) {
            return total + currentNum;
        })
        this.health -= totalDamage

        if (this.health <= 0) {
            this.health = 0;
            this.isDead = true;
        }
    }

    this.getDiceHtml = () => {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map((num) => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = () => {
        const {name, icon, alt, health, attack, diceCount, diceArray} = this;

        return `
            <h2>${name}</h4>
            <img src="${icon}" alt="${alt}">
            <p class="health-bar">-</p>
            <p class="subtext">Health: <span class="health-color">${health}</span></p>
            <p class="subtext">Attack: <span class="attack-color">${attack}</span></p>
            <section class="dice-section">
                ${diceArray}
            </section>`;
    }
}

export default Character;