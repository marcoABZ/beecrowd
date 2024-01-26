const simpleSum = require('../main/1003-simple-sum');

describe('Given simpleSum module is imported', () => {
    describe.each([
        {a: 10, b: 9, result: 19}, 
        {a: -10, b: 4, result: -6}, 
        {a: 15, b: -7, result: 8}
    ])('When simpleSum function is called with two integers', ({a, b, result}) => {
        let soma;

        beforeEach(() => {
            soma = simpleSum.simpleSum(a, b)
        })

        it('Then it should return the sum of values', () => {
            expect(soma).toBe(result)
        })
    })
})