const weightedAverage = (...details) => {
    let weightedSum = 0;
    let weightsSum = 0;

    for(let i = 0; i < details.length; i++) {
        weightedSum += details[i].number * details[i].weight;
        weightsSum += details[i].weight;
    }

    return weightedSum / weightsSum
}

module.exports = { weightedAverage }