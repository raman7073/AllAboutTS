/*
   TypeScript does allow various object oriented programming concepts
   to be implemented. One of the most important concepts is inheritance.
   ES5 had many ways to implement inheritance with constructor functions.
    Example:
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getData = function () {
        return this.name + ' is ' + this.age + ' years old.';
    }
    function Employee(name, age, salary) {
        Person.call(this, name, age);
        this.salary = salary;
    }
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.getSalary = function () {
        return this.name + ' earns ' + this.salary + ' per month.';
    }
    let emp = new Employee('John', 25, 50000);
    console.log(emp.getData());
    console.log(emp.getSalary());
    ES6 introduced the extends keyword to implement inheritance.
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
    class Employee extends Person {
        constructor(name, age, salary) {
            super(name, age);
            this.salary = salary;
        }
        getSalary() {
            return this.name + ' earns ' + this.salary + ' per month.';
        }
    }

    1. How can we implement inheritance in TypeScript?
    2. What is the use of the super keyword in TypeScript?
      whenever we have constructor in parent class and child class , we have call that parent's class
      constructor in child class using super keyword.
*/
class Aobj {
    constructor() {
        console.log('Parent Constructor Called');
    }
    pMethod() {
        console.log('Parent Method Called');
    }
}

class Bobj extends A {
    constructor() {
        super();// super() is used to call the constructor of the parent class 
        //and it should be the first statement in the constructor.
        //It is mandatory to call the constructor of the parent class.
        console.log('Child Constructor Called');
    }
    cMethod() {
        console.log('Child Method Called');
    }
}
//method can be overridden in the child class.
let obj1B = new Bobj();
obj1B.pMethod();
obj1B.cMethod();