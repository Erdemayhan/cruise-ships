class Ship{
    constructor(itinerary){
        this.itinerary = itinerary;
        //assign itinerary within the class
        this.currentPort = itinerary.ports[0];
        //then assign the currentport to the first item in the itinerary, which will be the first port
        this.previousPort = null
        
    }

    setSail(){
        this.startingPort = false;
        this.previousPort = this.currentPort;
        this.currentPort = null;
        //why not just currentPort
        //how did my code work when I switched the order of this.currentport and null, null was first
    }

    dock(itinerary){
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1]
        //wtf??
    }


}








//TEST FOR THE  Edge Case That The Ship Can't Set Sail Further Than The Last Port In The Itinerary. You Should Be Testing That The SetSail Method Throws An Error When You Try And Sail Past The Last Port In The Itinerary.




module.exports = Ship;