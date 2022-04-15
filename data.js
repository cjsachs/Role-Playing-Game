const characterData = {
    blueSide: {
        irelia: {
            elementId: '#redSide',
            name: 'Irelia',
            icon: 'images/irelia.jpg',
            alt: 'Irelia-Picture',
            health: 40,
            attack: 3,
            diceCount: 3,
            currentDiceScore: []
        }
    },

    redSide: {
        yasuo: {
            elementId: '#blueSide',
            name:'Yasuo',
            icon: './images/yasuo.webp',
            alt: 'Yasuo-Picture',
            health: 30,
            attack: 4,
            diceCount: 4,
            currentDiceScore: []
        }
    }
}

export default characterData;