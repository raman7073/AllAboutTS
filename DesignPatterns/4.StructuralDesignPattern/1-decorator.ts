/*
  Decorator Pattern:

  It is a structural design pattern that allows 
  you to dynamically add or override behaviour in an
  existing object without changing its implementation.
  This Pattern is particularly useful when you want to 
  modify the behavior of an object without affecting other objects 
  of the same class.
  it solves the problem of class explosion.
  let say you have base class and there are combination of n features
  you can add. So if we rely on extending class,
  then we have to make another n! factorial class.It will be
  harder to manage these much classes.

  This pattern follows both is-a and has-a relationship because it will
  have a base object and it is of same kind.
  Ex: Magrita is itself a pizza and has a base pizza in it.


*/

//interface Component
interface Coffee {
    cost(): number;
    description(): string;
}
//Concrete Componenet

class SimpleCoffee implements Coffee {
    public cost(): number {
        return 10;
    }
    public description(): string {
        return "Simple Coffee";
    }
}

//abstract or Interface Decorator
abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) { }
    abstract cost(): number;
    abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }
    public cost(): number {
        return this.coffee.cost() + 2;
    }
    public description(): string {
        return `${this.coffee.description()}, with milk`
    }

}

//client code
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
