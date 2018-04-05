'use strict'
import {Bird} from './Zoo'
export interface Flyable {
  land();
  fly();
  takeOff();
}

abstract class Veichle {
	speed: number;
	modelYear: number;
	wings: number;

	constructor(speed: number, modelYear: number, wings: number){
		this.speed = speed;
		this.modelYear = modelYear;
		this.wings = wings;
	}
}

class Helicopter extends Veichle implements Flyable {
	getName() {
		return 'Mi-28NE - Night Hunter:'
	}
	land() {
		return 'Can land on different objects.';
  }
  fly() {
		return 'Can fly forward, backward, and laterally.'
  }
  takeOff() {
		return 'Can take off vertically.'
  }
}
let helicopter = new Helicopter(300, 2012, 0);
console.log(helicopter.getName())
console.log(helicopter.land());
console.log(helicopter.fly());
console.log(helicopter.takeOff());
let bird = new Bird(117, 2017);
console.log(bird.getName())
console.log(bird.land());
console.log(bird.fly());
console.log(bird.takeOff());

