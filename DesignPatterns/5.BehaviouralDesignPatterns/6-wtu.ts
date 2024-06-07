/*
   When to use Chain of Responsibility Pattern?

   The chain of resposibility pattern is generally 
   applicable when you have multiple objects that can handle a request and
   exact handler isn't predetermined but is determined at runtime.
    

    1.Let say there's a situation where high coupling between sender and 
      reciever of requests.
      When you want to decouple the sender and receiver of a request.
    2. Multiple conditionals to determine processing logic.
      if we use multiple conditionals to determine processing logic,the 
      class will become bloated and it does not
      also lead to clean architecture.
   3. Varying Processing logic
     frequent changes in the processing logic or we need extra processing logic.
     let say we need to add a new handler D in the chain.
   4. Uncertain processing path
       Processing path determined at runtime.

*/

//1. Example of high coupling between sender and receiver of requests.
class Client {
    public sendRequest(request: string): void {
        let handler = new Handler1();
        handler.handleRequest(request);
    }
}
class Handler1 {
    public handleRequest(request: string): void {
        if (request === 'A') {
            console.log('Handler A is handling the request');
        } else if (request === 'B') {
            console.log('Handler B is handling the request');
        } else if (request === 'C') {
            console.log('Handler C is handling the request');
        } else {
            console.log('No handler is available');
        }
    }
}
//solution using chain of responsibility pattern
//Handler interface
interface Handler2 {
    setNextHandler(handler2: Handler2): Handler2;
    handleRequest(request: string): string | null;
}

//abstract handler class
abstract class AbstractHandler2 implements Handler2 {
    private nextHandler: Handler2 | null = null;
    public setNextHandler(handler2: Handler2): Handler2 {
        this.nextHandler = handler2;
        // Returning a handler from here will let us link handlers in a convenient way like this:
        return handler2;
    }
    public handleRequest(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handleRequest(request);
        }
        return null;
    }
}

//concrete handler->HandlerA
class HandlerA extends AbstractHandler2 {
    public handleRequest(request: string): string | null {
        if (request === 'A') {
            return 'Handler A is handling the request';
        } else {
            return super.handleRequest(request);
        }
    }
}

//concrete handler->HandlerB
class HandlerB extends AbstractHandler2 {
    public handleRequest(request: string): string | null {
        if (request === 'B') {
            return 'Handler B is handling the request';
        } else {
            return super.handleRequest(request);
        }
    }
}

//concrete handler->HandlerC
class HandlerC extends AbstractHandler2 {
    public handleRequest(request: string): string | null {
        if (request === 'C') {
            return 'Handler C is handling the request';
        } else {
            return super.handleRequest(request);
        }
    }
}

//client code
class Client2 {
    private handlerA: HandlerA = new HandlerA();
    private handlerB: HandlerB = new HandlerB();
    private handlerC: HandlerC = new HandlerC();
    constructor() {
        this.handlerA.setNextHandler(this.handlerB).setNextHandler(this.handlerC);
    }
    public sendRequest(request: string): void {
        console.log(this.handlerA.handleRequest(request));
    }
}
let client = new Client2();
//this list can be too long
for (let request of ['A', 'B', 'C', 'D']) {
    client.sendRequest(request);
}
//client.sendRequest('A');
