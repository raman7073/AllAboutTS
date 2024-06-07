/*

 TypeScript has readonly modifier, which can 
 be added with public, private, or protected 
    access modifiers. 

 In JavaScript, there is no such option, though in the object,
 to make a property read-only, we can use Object.defineProperty() method.

 Relative Questions:
 1. How will you make a property read-only in TypeScript?
 2. Can we have a read-only modifier with public , private, or protected access modifiers?
 3. Make a private property read-only with property parameter syntax.
    Answer:
    class Vehicle {
        constructor(private readonly color: string) {}
    }
 4. Difference between readonly and const in TypeScript?
    Answer:
    The const keyword is used to declare a constant variable, which means the value of the variable cannot be changed.
    The readonly keyword is used to declare a read-only property, which means the property can be changed only during the initialization of the object.
    The difference is about the terminology used at different places.
    You make a variable constant using const and a property read-only using readonly.
*/

class Vehicle2 {
    readonly color: string;//can be directly assigned
    readonly seats: number;

    constructor(color: string, seats: number) {
        this.color = color;
        this.seats = seats;
    }

    build() {
        console.log('Building a vehicle');
        console.log(this.color);
        console.log(this.seats);
    }
}
let vehicle2 = new Vehicle2('Red', 4);//valid using constructor
//vehicle2.color = 'Blue'; // Error
vehicle2.build();