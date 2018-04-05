class Garden {
	plants: Plants[] = [];

	addPlant(p: Plants[]) {
		this.plants = p;
	}

	watering(amount: number) {
		for (let i = 0; i < plants.length; i++){
			if (plants.thirst[i] < 5) {
				console.log()
			}
		}
	}

	listPlants() {
		for (let i = 0; i < this.plants.length; i++) {
			let str = 'The ' + this.plants[i].getColor() + ' ' + this.plants[i].getType();
			if (this.plants[i].isThirsty()) {
				console.log(str + ' needs water');
			} else {
				console.log(str + ' doesnt need water');
			}
		}
	}
}

class Plants {
	currentWaterAmount: number;
	color: string;
	type: string;

  constructor(cwa: number, color: string, type: string) {
		this.currentWaterAmount = cwa;
		this.color = color;
		this.type = type;
	}

	isThirsty(): boolean {
		return this.currentWaterAmount < 5;
	}

	getColor(): string {
		return this.color;
	}

	getType(): string {
		return this.type;
	}
}
	
class Flower extends Plants {
	isThirsty(): boolean {
		return this.currentWaterAmount < 5;
	}
}

class Tree extends Plants {
	isThirsty(): boolean {
		return this.currentWaterAmount < 10;
	}
}

let garden = new Garden();
garden.addPlant([
	new Flower(10, 'yellow', 'Flower'),
	new Flower(2, 'blue', 'Flower'), 
	new Tree(23, 'purple', 'Tree'), 
	new Tree(6, 'orange', 'Tree'),
]);

garden.listPlants();