/*
  The chain of responsibility pattern is a behavioral design pattern that lets
  you pass requests along a chain of handlers.Upon receiving a request, 
  each handler decides either to process 
  the request or to pass it to the next handler in the chain.

*/

//Handler interface
interface Handler {
    setNextHandler(handler: Handler): Handler;
    handle(request: string): string | null;
}

//abstract handler class
abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;
    public setNextHandler(handler: Handler): Handler {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a convenient way like this:
        return handler;
    }
    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

//concrete handler->MonkeyHandler
class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Banana') {
            //console.log('Monkey: I\'ll eat the Banana');
            return `Monkey: I'll eat the ${request}`;
        } else {
            return super.handle(request);
        }
    }
}

//concrete handler->SquirrelHandler
class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Nut') {
            //console.log('Squirrel: I\'ll eat the Nut');
            return `Squirrel: I'll eat the ${request}`;
        } else {
            return super.handle(request);
        }
    }
}

//concrete handler->DogHandler
class DogHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'MeatBall') {
            //  console.log('Dog: I\'ll eat the MeatBall');
            return `Dog: I'll eat the ${request}`;
        } else {
            return super.handle(request);
        }
    }
}

//client code
function clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee', 'MeatBall'];
    //for each food, the handler will decide whether to process the request or pass it to the next handler
    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);
        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
};

//creating handlers
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();


//linking handlers
monkey.setNextHandler(squirrel).setNextHandler(dog);

clientCode(monkey);//passing the first handler to the client code