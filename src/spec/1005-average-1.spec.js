const average = require('../main/1005-average-1');

describe('Given average module is imported', () => {
    describe.each([
        {'inputs': [5.0, 7.1], 'result': 6.05},
        {'inputs': [0.0, 7.1], 'result': 3.55},
        {'inputs': [10.0], 'result': 10.0},
        {'inputs': [1.0, 5.0, 10.0, 4.0], 'result': 5.0}]
    )('When average method is called with integers as params', ({inputs, result}) => {
        let calculatedAverage;

        beforeEach(() => {
            calculatedAverage = average.average(...inputs)
        })

        it('Then it should return the correct average value', () => {
            expect(calculatedAverage).toBeCloseTo(result, 5)
        })
    })

    describe.each([
        {'inputs': [5.0, 7.1], 'result': 6.43182},
        {'inputs': [0.0, 7.1], 'result': 4.84091},
        {'inputs': [10.0, 10.0], 'result': 10.0}
    ])('When fixedPoundedAvarege is called with two integers', ({inputs, result}) => {
        let calculatedAverage;

        beforeEach(() => {
            calculatedAverage = average.fixedWeightedAverage(...inputs)
        })

        it('Then it should return the weighted average of the values', () => {
            expect(calculatedAverage).toBeCloseTo(result, 5)
        })
    })
})
