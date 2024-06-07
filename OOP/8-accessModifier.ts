/*
    Other concepts of OOP

    When you declare a method or property in a class, you have 
    a provision to decide the scope of it i.e., the accessibility
   
    TypeScript provides 3 access modifiers:
    1. Public
    2. Private
    3. Protected
    By default, all the properties and methods are public in TypeScript.
    Public: When a property or method is declared as public, it can be accessed
    from anywhere in the application.
    Private: When a property or method is declared as private, it can be accessed
    only within the class.
    Protected: When a property or method is declared as protected, it can be accessed
    within the class and its subclasses.So, it is similar to private but with a difference
    that it can be accessed in the subclasses as well.

    Relative Questions:
    1. What are the access modifiers in TypeScript?
    2. What is the default access modifier in TypeScript?
    3. Can we declare a class as private in TypeScript?
       A class cannot be declared as private in TypeScript.
    4. Can we have protected members without inheritance in TypeScript?
        Yes , but it won't make any sense. Protected members are meant to be accessed
        in the subclasses. If there is no inheritance, then there is no point in having
        protected members.
    */

class Vehicle {
    color: string;
    seats: number;

    build() {
        console.log('Building a vehicle');
        console.log(this.color);
        console.log(this.seats);
    }
}

let vehicle = new Vehicle();
vehicle.color = 'Red';
vehicle.seats = 4;
//So when the user is allowed to access the properties outside the class, it 
//is breaking the chain of validation.
vehicle.build();

class Vehicle1 {
    private color: string;
    private seats: number;

    build() {
        console.log('Building a vehicle');
        console.log(this.color);
        console.log(this.seats);
    }
}

