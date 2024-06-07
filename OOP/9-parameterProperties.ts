/*
  Property Initialization Short-hands:
  It is an easier way to declare or initialize in a shorter way.
*/
//common way
class Test {
    // Properties
    // brand: string;
    // model: string;
    // year: number;
    // Constructor
    constructor(public brand: string, public model: string, public year: number) {
        // this.brand = brand;
        // this.model = model;
        // this.year = year;
    }
}
//short-hand way
class Test1 {
    constructor(public brand: string, public model: string, public year: number) {//creating properties and initializing them together
    }
}
let car0 = new Test('Toyota', 'Camry', 2020);
let car1 = new Test1('Toyota', 'Camry', 2020);
console.log(car0);
console.log(car1);