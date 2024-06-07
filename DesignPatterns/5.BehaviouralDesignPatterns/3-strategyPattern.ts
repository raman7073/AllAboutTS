/*
  Strategy Pattern: 
  The strategy pattern is a behavioural design pattern that lets 
  you define a family of algorithms, put each of them into a separate classes,and make 
  their objects interchangeable.In other words, it's a way to change 
  the behaviour of an object at run time without changing its implementation.

*/
//strategy pattern
interface PaymentStrategy {
    pay(amount: number): void;
}
//concrete strategy
class PayPal implements PaymentStrategy {
    pay(amount: number): void {
        console.log('Paying ' + amount + ' using PayPal');
    }
}
//concrete strategy
class CreditCard implements PaymentStrategy {
    pay(amount: number): void {
        console.log('Paying ' + amount + ' using Credit Card');
    }
}
//concrete strategy
class BitCoin implements PaymentStrategy {
    pay(amount: number): void {
        console.log('Paying ' + amount + ' using BitCoin');
    }
}
//context class that uses the strategy object,so it basically defines and
// maintains a reference to the strategy object.
// it can define the interface to let the strategy object access its data.
class ShoppingCart {
    private amount: number = 0;
    //constructor injection
    constructor(private paymentStrategy: PaymentStrategy) { }
    public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }
    public addToCart(amount: number): void {
        this.amount += amount;
    }
    public checkout(): void {
        this.paymentStrategy.pay(this.amount);
        this.amount = 0;
    }
}

//client code
let shoppingCart = new ShoppingCart(new PayPal());//default strategy
shoppingCart.addToCart(100);
shoppingCart.addToCart(200);
shoppingCart.setPaymentStrategy(new CreditCard());//changing strategy at runtime
shoppingCart.checkout();

// When to use the Strategy Pattern?
/*
  1. A class defines many behaviours and these appear as multiple conditional statements in its operations.
*/

//Example:
class Payment {
    public pay(amount: number, paymentMethod: string): void {
        if (paymentMethod === 'PayPal') {
            console.log('Paying ' + amount + ' using PayPal');
        } else if (paymentMethod === 'CreditCard') {
            console.log('Paying ' + amount + ' using Credit Card');
        } else if (paymentMethod === 'BitCoin') {
            console.log('Paying ' + amount + ' using BitCoin');
        }
    }
}
//change in payment method will require changes in the class.
//refactoring the code using strategy pattern.
class PaymentContext {
    private paymentStrategy: PaymentStrategy;
    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }
    public pay(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}
let paymentContext = new PaymentContext(new PayPal());
paymentContext.pay(100);
paymentContext.setPaymentStrategy(new CreditCard());
paymentContext.pay(200);

/*
2. Prepare for future changes in the behaviour of a class.
   In the future, if we want to add a new payment method, 
   we can easily add a new class that implements the PaymentStrategy 
   interface and use it in the PaymentContext class.
   Example:
*/
class BankTransfer implements PaymentStrategy {
    pay(amount: number): void {
        console.log('Paying ' + amount + ' using Bank Transfer');
    }
}
paymentContext.setPaymentStrategy(new BankTransfer());
paymentContext.pay(300);

/* 
3. Strategy pattern can isolate the complexity into a single class and
   making it easier to test and maintain.
   In the above example, the code required for PayPal, CreditCard, BitCoin, and 
   BankTransfer strategies are very different from each other.But all these 
   strategies are encapsulated in their own classes.
   So it's easy to maintain external libraries and encapsulate them into a single class.

*/

/*
 4. When you want to switch between different algorithms at runtime.
*/

