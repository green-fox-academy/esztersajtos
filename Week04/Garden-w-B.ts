'use strict'
class Plant {
  color: string;
  waterLevel: number;
  type: string;

  constructor(color:string) {
    this.color = color;
    this.waterLevel = 0;
  }

  get plantColor(): string {
    return this.color;
  }

  get plantType(): string {
    return this.type;
  }

  needsWater(): boolean {
    return this.waterLevel < 5;
  }
}

class Flower extends Plant {
  constructor(color:string) {
    super(color);
    this.type = 'flower';
  }

  waterIt(amount: number) {
    this.waterLevel += amount * 0.40;
  }  
}

class Tree extends Plant {
  constructor(color:string) {
    super(color);
    this.type = 'tree';
  }

  waterIt(amount: number) {
    this.waterLevel += amount *0.75;
  }  

  needsWater(): boolean {
    return this.waterLevel < 10;
  }
}  

class Garden {
  plants: Plant[];

  constructor() {
    this.plants = [];
  }

  addPlant(p: Plant) {
    this.plants.push(p);
  }

  listPlants() {
    for (let i = 0; i < this.plants.length; i++){
      console.log(this.plants[i].plantColor);
    }
  }

  waterPlants(amount: number) {
    let thirstyPlant = 0;
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].needsWater()) {
        thirstyPlant += 1;
      }
    }
    if (thirstyPlant !== 0) {
    const dose = amount / thirstyPlant;
      for (let i = 0; i < this.plants.length; i++) {
        if (this.plants[i].needsWater()) {
          this.plants[i].waterIt(dose);
        }
      }
    }
  }
}

let garden = new Garden();
console.log(garden);
garden.addPlant(new Flower('blue'));
garden.addPlant(new Flower('purple'));
garden.addPlant(new Tree('green'));
garden.addPlant(new Tree('orange'));
garden.waterPlants(40);
console.log(garden);

    