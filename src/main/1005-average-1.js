const average = (...numbers) => {
    return numbers.reduce((prev, curr) => { return prev + curr }, 0) / numbers.length
}

const fixedWeightedAverage = (first, second) => {
    const FIRST_NUMBER_WEIGHT = 3.5
    const SECOND_NUMBER_WEIGHT = 7.5
    return (first * FIRST_NUMBER_WEIGHT + second * SECOND_NUMBER_WEIGHT) / (FIRST_NUMBER_WEIGHT + SECOND_NUMBER_WEIGHT)
}

module.exports = { average, fixedWeightedAverage }