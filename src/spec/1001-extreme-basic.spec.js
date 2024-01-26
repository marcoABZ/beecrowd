const extremelyBasic = require('../main/1001-extremely-basic');

describe('Given extremelyBasic module is imported', () => {
    describe.each([[10, 9, 19], [-10, 4, -6], [15, -7, 8]])('When extremelyBasic function is called with two integers', (a, b, result) => {
        let spyConsoleLog;

        beforeEach(() => {
            spyConsoleLog = jest.spyOn(global.console, 'log')
            extremelyBasic.extremelyBasic(a, b)
        })

        it('Then it should print sum of values on console', () => {
            expect(spyConsoleLog).toHaveBeenCalledWith(`X = ${result}`)
        })
    })
})