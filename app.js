// import characterData from "./data"

const irelia = {
    elementId: '#redSide',
    name: 'Irelia',
    icon: 'images/irelia.jpg',
    alt: 'Irelia-Picture',
    health: 40,
    attack: 3,
    diceCount: 3,
}

const yasuo = {
    elementId: '#blueSide',
    name:'Yasuo',
    icon: './images/yasuo.webp',
    alt: 'Yasuo-Picture',
    health: 30,
    attack: 4,
    diceCount: 4,
}

const getDiceRollArray = (diceCount) => {
    return new Array(diceCount).fill(0).map(() => 
        Math.floor(Math.random() * 6) + 1)
}

const getDiceHtml = (diceCount) => {
    return getDiceRollArray(diceCount).map(function(num) {
        return `<p class="dice">${num}</p>`
    }).join('')
}

const renderCharacter = (data) => {
    const {elementId, name, icon, alt, health, attack, diceCount, diceRoll} = data
    const diceHtml = getDiceHtml(diceCount)
    document.querySelector(`${elementId}`).innerHTML = `
    <h2>${name}</h4>
    <img src="${icon}" alt="${alt}">
    <p class="health-bar">-</p>
    <p class="subtext">Health: <span class="health-color">${health}</span></p>
    <p class="subtext">Attack: <span class="attack-color">${attack}</span></p>
    <section class="dice-section">
        ${diceHtml}
    </section>
    `
}

renderCharacter(irelia)
renderCharacter(yasuo)