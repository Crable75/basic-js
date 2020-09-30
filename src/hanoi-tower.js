module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let moves = Math.pow(2, disksNumber) - 1
    let seconds = Math.floor(moves / (turnsSpeed/3600))

    return {turns: moves, seconds: seconds}
}
