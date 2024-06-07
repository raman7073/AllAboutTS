/*
  Classes are the base entity of Object Oriented Programming.
  In JavaScript ES5, we don't have the class keyword to create a class.
  We use constructor functions to create a class.
    Example:
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getData = function () {
        return this.name + ' is ' + this.age + ' years old.';
    }

    let person = new Person('John', 25);
    console.log(person.getData());
    InES6, we have the class keyword to create a class.
    Example:
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getData() {
            return this.name + ' is ' + this.age + ' years old.';
        }
    }

    relative questions:
    1. How can we create a class in TypeScript?
         We can create a class in TypeScript using the class keyword.
         class ClassName {
              // Properties
              // Constructor->optional
              // Methods
         }
    2. What is constructor in TypeScript?
            Constructor is a special type of method of a class which is executed 
            when the object of the class is created.It is called automatically.
            It is used to initialize the properties of the object.
            It is optional. If we don't define a constructor, 
            then the default constructor is called.
    3. Using dot notation, how can we access the properties and methods of a class in TypeScript?
            We can access the properties and methods of a class using the dot notation.
            objectName.propertyName;
            objectName.methodName();
    4. How do you access the properties within a class in TypeScript?
            We can access the properties within a class using the this keyword.
            this.propertyName;
    5. Member of a class ?
            The properties and methods of a class are called members of a class.
    6. There can be multiple constructors in a class in TypeScript?
            No, there can be only one constructor in a class in TypeScript.
*/
class Cari {
    // Properties
    brand: string;
    model: string;
    year: number;
    // Constructor
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // Methods
    getData() {
        return this.brand + ' ' + this.model + ' ' + this.year;
    }
}
let cari = new Cari('Toyota', 'Corolla', 2015);
console.log(cari.getData());