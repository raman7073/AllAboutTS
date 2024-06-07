/*
 Builder Pattern
 The Builder pattern is a creational design pattern that lets you 
 construct complex objects step by step.
*/

interface Builder {
    setPartA(): void;
    setPartB(): void;
    setPartC(): void;
}

class Product {
    private parts: string[] = [];
    public add(part: string): void {
        this.parts.push(part);
    }

    public listParts(): void {
        console.log(`Product Parts: ${this.parts.join(',')}`);
    }
}

class ConcreteBuilder implements Builder {
    private product!: Product;
    constructor() {
        this.reset();
    }
    public reset(): void {
        this.product = new Product();
    }
    public setPartA(): void {
        this.product.add("Part A");
    }
    public setPartB(): void {
        this.product.add("Part B");
    }
    public setPartC(): void {
        this.product.add("Part C");
    }

    public getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}


class Director {
    private builder!: Builder;
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimumProduct(): void {
        this.builder.setPartA();
    }
    public buildFullProduct(): void {
        this.builder.setPartA();
        this.builder.setPartB();
        this.builder.setPartC();
    }

}

//client code

const builder = new ConcreteBuilder();
const director = new Director();

director.setBuilder(builder);
director.buildMinimumProduct();
let minProduct = builder.getProduct();
director.buildFullProduct();
let fullProduct = builder.getProduct();

//when to use

//real world impl
interface ICustomer {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

class Customer implements ICustomer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string
    ) { }
}

interface ICustomerBuilder {
    setFirstName(firstName: string): ICustomerBuilder;
    setFirstName(firstName: string): ICustomerBuilder;
    setFirstName(firstName: string): ICustomerBuilder;
    setFirstName(firstName: string): ICustomerBuilder;
}
