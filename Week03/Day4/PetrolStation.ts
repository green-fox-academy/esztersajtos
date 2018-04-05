// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

'use strict'

class Station {
    gasAmount: number;

    constructor() {
        this.gasAmount = 100000;
    }

    refill(car){
        let emptyTank = car.capacity - car.gasAmount;
        this.gasAmount -= car.emptyTank;
        car.gasAmount = car.capacity;
        return car;
    }
}

class Car {
    gasAmount: number;
    capacity: number;

    constructor() {
        this.capacity = 100;
        this.gasAmount = 0;
    }

}
let infinity = new Car;
let station = new Station;
console.log(station.refill(infinity));