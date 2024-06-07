/*
           Factory Creational Design Pattern:

    Factory is a creational design pattern that provides an interface for creating objects in a superclass,
    but allows subclasses to alter the type of objects that will be created.


*/
/*
 why abstract class not interface?
  1. Constructor: An interface does not have a constructor. This means you can't control the construction of 
  the objects that implement it. On the other hand, abstract classes can have constructors, 
  allowing you to define and enforce a certain way of creating objects. In this case, 
  each Car must be created with a model and a productionYear, which can be enforced by the abstract Car class constructor.

  2.Implementation: An interface just defines a contract but doesn't provide any implementation. 
  Abstract classes can provide some default behavior that can be shared across multiple subclasses. 
  In this case, the Car class could potentially provide some default methods that are common to all cars.

*/

abstract class Car {
    //Property Initialization Short-hands, creating objects in super class
    constructor(public model: string, public productionYear: number) { }

    abstract displayCarInfo(): void;
}

class Sedan extends Car {
    displayCarInfo(): void {
        console.log(`Sedan: ${this.model} - ${this.productionYear}`);
    }
}

class SUV extends Car {
    displayCarInfo(): void {
        console.log(`SUV: ${this.model} - ${this.productionYear}`);
    }
}

class CarFactory {
    //this method can be non-static if we want to keep track of the created cars
    static createCar(type: string, model: string, productionYear: number): Car {
        switch (type) {
            case 'sedan':
                return new Sedan(model, productionYear);
            case 'suv':
                return new SUV(model, productionYear);
            default:
                throw new Error('Invalid car type');
        }
    }
}

const sedan = CarFactory.createCar('sedan', 'Toyota Camry', 2021);
sedan.displayCarInfo();
const suv = CarFactory.createCar('suv', 'Toyota Highlander', 2021);
suv.displayCarInfo();


// when to use factory pattern
/*
   The Factory Method pattern is often used in situations where a class cannot anticipate the type of 
   objects it needs to create.

   Here are some signs that might indicate that a Factory Method pattern could be appropriate:

   1.Uncertain Object Types: If your software is supposed to create different types of objects, 
   and you don't know what these objects will be until runtime, you may need a Factory Method.

   2.Similar Classes: If you're dealing with a large number of classes that share a common superclass
    and you often need to instantiate one of these classes, but you don't know ahead of time which one 
    you'll need to instantiate, a Factory Method can be useful.

   3.Pluggability and Flexibility: If you are developing a library and want to provide a way for users to
     extend your library with their own classes, a Factory Method can provide a standardized way for users
     to plug in their own classes.

   4.Replacing Direct Object Construction: If you see code that's directly constructing instances of a class,
    this might be a code smell suggesting that a Factory Method could be used. 
    Directly constructing objects can make code more brittle, harder to test, and less flexible.

  5.Complexity Hiding: When object creation is complex or involves a lot of logic 
    (for example, setting up and connecting several different objects), 
    a Factory Method can hide this complexity and provide a simpler interface for object creation.

  6.Conditional Object Creation: If your code involves conditional creation of objects based on certain 
  parameters or environmental conditions, a Factory Method can encapsulate this conditional logic 
  and make your code easier to read and maintain.

As with all design patterns, it's important to consider the trade-offs and make sure that the Factory Method pattern 
is a good fit for your specific problem. Overusing or misusing design patterns can lead to unnecessary complexity 
and can make code harder to understand and maintain.

*/

// real world example

abstract class PaymentProcessor {
    constructor(public amount: number) { }

    abstract processPayment(): void;
}

class CreditCardPaymentProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`Processing credit card payment for $${this.amount}`);
    }
}

class PayPalPaymentProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`Processing PayPal payment for $${this.amount}`);
    }
}

class StripePaymentProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`Processing Stripe payment for $${this.amount}`);
    }
}

class PaymentProcessorFactory {
    static createPaymentProcessor(type: string, amount: number): PaymentProcessor {
        switch (type) {
            case 'creditCard':
                return new CreditCardPaymentProcessor(amount);
            case 'paypal':
                return new PayPalPaymentProcessor(amount);
            case 'stripe':
                return new StripePaymentProcessor(amount);
            default:
                throw new Error('Invalid payment processor type');
        }
    }
}
// Advantages
// Caveats
//uses