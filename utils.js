const getDiceRollArray = (diceCount) => {
    return new Array(diceCount).fill(0).map(() => 
        Math.floor(Math.random() * 6) + 1)
}

const getDicePlaceholderHtml = (diceCount) => {
    return new Array(diceCount).fill(0).map(() => 
    `<div class="placeholder-dice">-</div>`).join('')
}

export {getDiceRollArray, getDicePlaceholderHtml}