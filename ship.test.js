const Ship = require('../cruise-ships/ship');
const Port = require('../cruise-ships/Port');
const Itinerary = require('../cruise-ships/Itinerary');


describe("Ship", () => {
    it('can be instantiated', () => {
        const port = new Port ('Dover');
        const itinerary = new Itinerary([[port]])
        const ship = new Ship(itinerary)
        expect(ship).toBeInstanceOf(Object)
    })
    //even if you pass a single port make sure its an array since itineray is a list of ports

    it('it has a starting Port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        //even if you pass a single port make sure its an array since itineray is a list of ports
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port);
        //why are we passing in port instead of ship, which has the itinerary, which has the port list
    })

    it('it can set sail', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary)
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);
    })

    it('can dock at different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover,calais])
        const ship = new Ship(itinerary)
        ship.setSail()
        ship.dock()
        expect(ship.currentPort).toBe(dover)
        //Here we create a Port: dover, and pass it to a new Ship as part of the setup process.
        //Then - as part of the exercise process - we create a new Port: calais, and we call ship.dock passing in calais.
        //Finally - as party of the verify process - we expect the Ship's currentPort to be calais.
    })
})

//Now we have a Port object, it makes no sense to pass a string of 'Dover' to each Ship we instantiate in our tests. Instead, we can instantiate a new Port passing in 'Dover' as its name, and we can pass the new instance into Ship

//Look for places where have ship have been instanstiated and pass the ports instance instead of a string

//This is called dependency inversion - the premise that an object (in this case Ship) can depend on other objects, but it shouldn't know what they are. All Ship knows is that it's receiving an argument passed into it's constructor, and its assigning it as a property. It doesn't know it's a Port object. This is good as it means a Port is substitutable and as such our code is more modular.
