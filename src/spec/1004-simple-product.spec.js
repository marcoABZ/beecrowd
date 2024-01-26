const { simpleProduct } = require('../main/1004-simple-product');

describe('Given simpleProduct module is imported', () => {
    describe.each([
        {a: 3, b: 9, result: 27}, 
        {a: -10, b: 30, result: -300}, 
        {a: 0, b: 7, result: 0}
    ])('When simpleProduct function is called with two integers', ({a, b, result}) => {
        let product;

        beforeEach(() => {
            product = simpleProduct(a, b)
        })

        it('Then it should return the product of values', () => {
            expect(product).toBe(result)
        })
    })
})