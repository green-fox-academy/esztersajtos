'use strict'

export class Summing {
  list: any [];
  constructor(array: any []) {
    this.list = array;
  } 
  sum(): number {
    let total = 0;
    for (let i = 0; i < this.list.length; i++) {
      if (typeof this.list[i] === 'string') {
        return 0;
      }
      total += this.list[i]; 
    }
    return total;
  }
}