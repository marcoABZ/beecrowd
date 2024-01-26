const weightedAverage = require('../main/1006-average-2');

describe('Given weightedAverage module is imported', () => {
    describe.each([
        {'inputs': [{number: 5.0, weight: 2}, {number: 6.0, weight: 3}, {number: 7.0, weight: 5}], 'result': 6.3},
        {'inputs': [{number: 5.0, weight: 2}, {number: 10.0, weight: 3}, {number: 10.0, weight: 5}], 'result': 9.0},
        {'inputs': [{number: 10.0, weight: 2}, {number: 10.0, weight: 3}, {number: 5.0, weight: 5}], 'result': 7.5},
        {'inputs': [{number: 5.0, weight: 0}, {number: 2.0, weight: 1}, {number: -2.0, weight: 4}], 'result': -1.2}]
    )('When weighted average method is called with integers as params', ({inputs, result}) => {
        let calculatedAverage;

        beforeEach(() => {
            calculatedAverage = weightedAverage.weightedAverage(...inputs)
        })

        it('Then it should return the correct weighted average value', () => {
            expect(calculatedAverage).toBeCloseTo(result, 5)
        })
    })
})
