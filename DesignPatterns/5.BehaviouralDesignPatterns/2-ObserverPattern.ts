/*
  Introduction to Observer Design Patterns:
    The Observer pattern is a behavioural design pattern that allows you to define or 
    create a subscription mechanism to send the notifications to multiple objects 
    about new events that happen to the object they’re observing.
    The object that is being watched is often called the subject.
    The objects that are watching the state changes are called observers or listeners.

    Two Most Significant Element:
     1- Subject:  This is the object which is being observed.
      It maintains a list of observers and provides methods to modify that list.
     2- Observer: The objects which are watching the state changes are known as observers or listeners. 
      They provide a method to update that is used by Subject.
*/
interface Observer {
    update(subject: Subject): void;
}
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObserver(): void;
    getState(): number;
    setState(state: number): void;
}

class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: number = 0;
    public addObserver(observer: Observer): void {
        const ifExists = this.observers.includes(observer);
        if (ifExists) {
            console.log("Already Exists");
            return;
        }
        this.observers.push(observer);
        console.log("Added Successfully");
    }
    public removeObserver(observer: Observer): void {
        const idx = this.observers.indexOf(observer);
        if (idx === -1) {
            console.log("Not Exist");
        }
        this.observers.splice(idx, 1);
        console.log("Removed Successfully");
    }
    public notifyObserver(): void {
        this.observers.forEach((observer) => observer.update(this));
    }
    public getState(): number {
        return this.state;
    }
    public setState(state: number): void {
        this.state = state;
        this.notifyObserver();
    }

}

class ConcreteObserver implements Observer {
    constructor(private id: number) { }
    public update(subject: Subject): void {
        console.log(`Observer ${this.id} updated`);
    }

}

//client code

const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver(1);
subject.addObserver(observer1);

const observer2 = new ConcreteObserver(2);
subject.addObserver(observer2);

subject.setState(123);


//when to use
/*
  1.Polling
*/

//real world impl