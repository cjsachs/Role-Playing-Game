import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

const getPercentage = (remainingHealth, maxHealth) => (100 * remainingHealth) / maxHealth

function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    this.maxHealth = this.health;

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

    this.getHealthBarHtml = () => {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""}"
                style="width: ${percent}%">
            </div>
        </div>
        `
    }

    this.getDiceHtml = () => {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map((num) => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = () => {
        const {name, icon, alt, health, attack, diceCount, diceArray} = this;
        const healthBar = this.getHealthBarHtml()

        return `
            <h2>${name}</h4>
            <img src="${icon}" alt="${alt}">
            ${healthBar}
            <p class="subtext">Health: <span class="health-color">${health}</span></p>
            <p class="subtext">Attack: <span class="attack-color">${attack}</span></p>
            <section class="dice-section">
                ${diceArray}
            </section>`;
    }
}



export default Character;