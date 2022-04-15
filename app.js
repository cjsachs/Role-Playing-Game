// import characterData from "./data"

const irelia = {
    elementId: '#redSide',
    name: 'Irelia',
    icon: 'images/irelia.jpg',
    alt: 'Irelia-Picture',
    health: 40,
    attack: 3,
    diceCount: 3,
    currentDiceScore: []
}

const yasuo = {
    elementId: '#blueSide',
    name:'Yasuo',
    icon: './images/yasuo.webp',
    alt: 'Yasuo-Picture',
    health: 30,
    attack: 4,
    diceCount: 4,
    currentDiceScore: []
}

const renderCharacter = (data) => {
    document.querySelector(`${data.elementId}`).innerHTML = `
    <h2>${data.name}</h4>
    <img src="${data.icon}" alt="${data.alt}">
    <p class="health-bar">-</p>
    <p class="subtext">Health: <span class="health-color">${data.health}</span></p>
    <p class="subtext">Attack: <span class="attack-color">${data.attack}</span></p>
    <section class="dice-section">
        <p class="dice">${data.diceCount}</p>
    </section>
    `
}

renderCharacter(irelia)
renderCharacter(yasuo)