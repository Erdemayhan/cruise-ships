const Ship = require('../cruise-ships/ship');

describe("Ship", () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object)
    })

    it('it has a starting Port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover')
    })
})