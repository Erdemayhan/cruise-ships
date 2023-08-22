const Itinerary = require('../cruise-ships/Itinerary')
const Port = require('../cruise-ships/Port');


describe('Itinerary', () => {
    it('can be instantiated', ()=> {
        expect(new Itinerary()).toBeInstanceOf(Object)
    })

    it('has Ports Property', () => {
       const dover = new Port('Dover')
       const calais = new Port('Dover')
       const itinerary = new Itinerary([dover,calais])
       expect(itinerary.ports).toEqual([dover,calais])
    })

})