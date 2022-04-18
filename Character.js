import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"

class Character {
    constructor(data){
        Object.assign(this, data)
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
        this.maxHealth = this.health;
    }

    takeDamage = (attackScoreArray) => {
        const totalDamage = attackScoreArray.reduce(function(total, currentNum) {
            return total + currentNum;
        })
        this.health -= totalDamage

        if (this.health <= 0) {
            this.health = 0;
            this.isDead = true;
        }
    }

    getHealthBarHtml = () => {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""}"
                style="width: ${percent}%">
            </div>
        </div>
        `
    }

    setDiceHtml = () => {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    getCharacterHtml = () => {
        const {name, icon, alt, health, attack, diceHtml} = this;
        const healthBar = this.getHealthBarHtml()

        return `
            <h2>${name}</h4>
            <img src="${icon}" alt="${alt}">
            ${healthBar}
            <p class="subtext">Health: <span class="health-color">${health}</span></p>
            <p class="subtext">Attack: <span class="attack-color">${attack}</span></p>
            <section class="dice-section">
                ${diceHtml}
            </section>`;
    }
}



export default Character;