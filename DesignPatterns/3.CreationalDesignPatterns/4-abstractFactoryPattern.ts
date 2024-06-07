/*
  Client Code mean:
    Very generally it can mean "any code which calls 'our' code / the code we're currently talking about".
    So "decouple the client code from the logic being executed" can be interpreted as 
    "the code which calls our code doesn't need to know about its internal logic".
  Abstract  Factory Pattern:
    Abstract Factory is a creational design pattern that provides an interface for 
    creating families of related or dependent objects without specifying their concrete 
    classes.


*/


//interfaces

interface IProductA {
    operationA(): string;
}

interface IProductB {
    operationB(): string;
    combinedOperation(collavorator: IProductA): string;
}

interface IFactory {
    createProductA(): IProductA;
    createProductB(): IProductB;
}

//class impl

class ProductA implements IProductA {
    public operationA(): string {
        return "Product A created"
    }
}

class ProductB implements IProductB {
    public operationB(): string {
        return "Product B created"
    }
    public combinedOperation(collaborator: IProductA): string {
        const res = collaborator.operationA();
        return `B with ${res}`;
    }
}

class Factory implements IFactory {
    public createProductA(): IProductA {
        return new ProductA();
    }
    public createProductB(): IProductB {
        return new ProductB();
    }
}


// client code 
// we are just using factory class for our operations
// we do not need access to class A or B.
const factory = new Factory();
const productA = factory.createProductA();
const operationA = productA.operationA();
const productB = factory.createProductB();
const combinedOperation = productB.combinedOperation(productA);
//before creating product B , a combined operation is performed.
const operationB = productB.operationB();
console.log(productA);
console.log(productB);
console.log(combinedOperation);

// why use

//real world

//interfaces 

interface Button {
    render(): void;
    onClick(f: Function): void;
}

interface CheckBox {
    render(): void;
    toggle(): void;
}

interface GUIFactory {
    createButton(): Button;
    createCheckBox(button: Button): CheckBox;
}


// class impl
class WindowsButton implements Button {
    public render(): void {
        console.log(" Render a button in windows style");
    }
    public onClick(f: Function): void {
        console.log("Windows Button was clicked");
        f();
    }
}

class WindowsCheckBox implements CheckBox {
    // this needs to have an instance of Button
    constructor(private button: Button) { }
    public render(): void {
        console.log(" Render a check box in windows style");
    }
    public toggle(): void {
        this.button.onClick(() => {
            console.log("Windows Checkbox toggled");
        });
    }
}

class MacOSButton implements Button {
    public render(): void {
        console.log(" Render a button in MacOS style");
    }
    public onClick(f: Function): void {
        console.log("MacOS Button was clicked");
        f();
    }
}


class MacOSCheckBox implements CheckBox {
    constructor(private button: Button) { }
    public render(): void {
        console.log(" Render a check box in MacOS style");
    }
    public toggle(): void {
        this.button.onClick(() => {
            console.log("MacOS Checkbox toggled");
        });
    }
}



class WindowsFactory implements GUIFactory {
    public createButton(): Button {
        return new WindowsButton();
    }
    public createCheckBox(button: Button): CheckBox {
        return new WindowsCheckBox(button);
    }
}

class MacOSFactory implements GUIFactory {
    public createButton(): Button {
        return new MacOSButton();
    }
    public createCheckBox(button: Button): CheckBox {
        return new MacOSCheckBox(button);
    }
}

//client code 


function renderUI(factory: GUIFactory) {
    const button = factory.createButton();
    const checkBox = factory.createCheckBox(button);
    button.render();
    checkBox.render();

    button.onClick(() => {
        console.log("Passing f to button on click");
    })
    checkBox.toggle();
}


renderUI(new WindowsFactory());
renderUI(new MacOSFactory());


// advantages

//caveats