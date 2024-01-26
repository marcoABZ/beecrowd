const areaOfACircle = require('../main/1002-area-of-a-circle');

describe.each([
    { radius: 2.00, area: 12.5664 }, 
    { radius: 100.64, area: 31819.3103 },
    { radius: 150.00, area: 70685.7750 }
])('Given a circle', ({ radius, area }) => {
    describe('When areaOfACircle is called', () => {
        let actualArea;

        beforeEach(() => {
            actualArea = areaOfACircle.areaOfACircle(radius)
        });

        it('Then it should return the area of the circle with 4 digit precision', () => {
            expect(actualArea).toBeCloseTo(area, 4)
        })
    })
})