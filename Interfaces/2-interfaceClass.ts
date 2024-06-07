/*

    Interface can be implemented by a class in TypeScript.
    The class that implements an interface must define all the properties and methods of the interface.
    A class can implement multiple interfaces in TypeScript.
*/


interface User {
    name: string;
    age: number;
    address: string;
    d?: string;//optional property
    getDetails(): string;
}

class Person implements User {
    name: string;
    age: number;
    address: string;
    dob: string;
    constructor(name: string, age: number, address: string, dob: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.dob = dob;
    }
    getDetails() {
        return this.name + ' is ' + this.age + ' years old and lives in ' + this.address;
    }
}

let person1: User = new Person('John', 25, 'New York', '01-01-1995');
let person2: Person = new Person('John', 25, 'New York', '01-01-1995');
console.log(person1);
console.log(person1.getDetails());
console.log(person2.getDetails());