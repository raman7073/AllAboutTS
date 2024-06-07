/*
  Liskov Substitution Principle (LSP):
  
  If S is a subtype of T, then objects of type T may be replaced with objects of type S
  without altering any of the desirable properties of the program.


  In simple words, derived classes must be substitutable for their base classes. That is,
  a program that uses a base class must be able to substitute a subclass without 
  affecting the correctness of the program.
*/


abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super(); //we can use it to help construct an object from a subclass.
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  public calculateArea(): number {
    return this.side * this.side;
  }
}

// ====== Client Code
function area(shape: Shape) {
  return shape.calculateArea();
}

let rectangle = new Rectangle(10, 12);
let square = new Square(8);

area(rectangle); // 120
area(square); // 64

/*
  In this example, Square and Rectangle are both subtypes of Shape.
  They each implement the calculateArea method differently,
  according to their specific geometric properties.
  The function area is designed to work with any Shape.
  It uses the calculateArea method and specific setters to
  modify the shape's dimensions.

  This design adheres to LSP because a Square can be substituted
  for a Rectangle
  (or any other Shape) in the area function without altering
  the correctness of the program.
  Each subclass correctly implements the calculateArea method,
  ensuring that the area function behaves as expected
  regardless of the specific Shape subtype
  it is working with.


*/

// Real World Example
// Payment Processor
// Debit Card
// Credit Card
// Paypal
// Definetely we can use Interface here but there are 2 reasons to use of class
// 1. LSP is about parent and child relationship and we are using abstract class here
// 2. In future we can have static methods in PaymentProcessor class that can be used directly from PaymentProcessor class
abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
  static validatePayment(amount: number): boolean {
    if (amount > 0) {
      return true;
    }
    return false;
  }
}

class DebitCard extends PaymentProcessor {
  public processPayment(amount: number): void {
    PaymentProcessor.validatePayment(amount);
    console.log('Processing payment using Debit Card');
  }
}

class CreditCard extends PaymentProcessor {
  public processPayment(amount: number): void {
    console.log('Processing payment using Credit Card');
  }
}

class Paypal extends PaymentProcessor {
  public processPayment(amount: number): void {
    console.log('Processing payment using Paypal');
  }
}

// ====== Client Code
function processPayment(paymentProcessor: PaymentProcessor, amount: number) {
  paymentProcessor.processPayment(amount);
}

let debitCard = new DebitCard();
let creditCard = new CreditCard();
let paypal = new Paypal();

processPayment(debitCard, 199); // Processing payment using Debit Card
processPayment(creditCard, 2); // Processing payment using Credit Card
processPayment(paypal, 345); // Processing payment using Paypal


// Interface
interface PaymentProcessorInterface {
  processPayment(amount: number): void;
}

//let paymentProcessorInterface = new PaymentProcessorInterface(); // Cannot create an instance of an interface
/*
1.What is the main idea behind the Liskov Substitution Principle?
Ans-Subtypes must be substitutable for their base types.

2. Violating the Liskov Substitution Principle can result in which of the following?
Ans- Fragile Base Class Problem
     Explanation: The Fragile Base Class Problem is a common issue that arises when a base class is modified in a way that breaks
     existing functionality in derived classes.

3. According to the Liskov Substitution Principle, what should you be cautious about when overriding methods in derived classes?
Ans- Ensuring that the derived method does not throw new exceptions.
      Explanation: When overriding methods in derived classes, you should avoid throwing new exceptions that are not part of the base class method signature. 
      This can lead to unexpected behavior when substituting derived objects for base objects.
      Example:
      class Base {
        public void method() throws IOException {
          // ...
        }
      }
      class Derived extends Base {
        @Override
        public void method() throws FileNotFoundException {
          // ...
        }
      }
      In this example, the Derived class overrides the method from the Base class and throws a more specific exception (FileNotFoundException)
      that is not part of the base class method signature (IOException). This violates the Liskov Substitution Principle and can lead to
      unexpected behavior when substituting Derived objects for Base objects.

*/








