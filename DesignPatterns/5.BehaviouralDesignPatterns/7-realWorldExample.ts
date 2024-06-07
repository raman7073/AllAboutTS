// order processing system
class Order { //Other class can have coupling with the handlers
    isValid(): boolean {
        return true;
    }
    applyDiscount(): void {
        console.log('Discount applied');
    }
    processPayment(): boolean {
        return true;
    }
    ship(): void {
        console.log('Order shipped');
    }
}
//handler interface
interface OrderHandler {

    setNextHandler(handler: OrderHandler): OrderHandler;
    handleOrder(order: Order): string | null;
}

//abstract handler class

abstract class AbstractOrderHandler implements OrderHandler {
    private nextHandler: OrderHandler | null = null;
    public setNextHandler(handler: OrderHandler): OrderHandler {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a convenient way like this:
        return handler;
    }
    public handleOrder(order: Order): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handleOrder(order);
        }
        return null;
    }
}

//concrete handler->ValidateOrderHandler
class ValidateOrderHandler extends AbstractOrderHandler {
    public handleOrder(order: Order): string | null {
        if (order.isValid()) {//there can be dependency on the order object
            return super.handleOrder(order);
        } else {
            return 'Order is invalid';
        }
    }
}
//concrete handler->DiscountOrderHandler
class DiscountOrderHandler extends AbstractOrderHandler {
    public handleOrder(order: Order): string | null {
        order.applyDiscount();
        return super.handleOrder(order);
    }
}
//concrete handler->PaymentOrderHandler
class PaymentOrderHandler extends AbstractOrderHandler {
    public handleOrder(order: Order): string | null {
        if (order.processPayment()) {
            return super.handleOrder(order);
        } else {
            return 'Order is not paid';
        }
    }
}
//concrete handler->ShipOrderHandler
class ShipOrderHandler extends AbstractOrderHandler {
    public handleOrder(order: Order): string | null {
        order.ship();
        return 'Order processed successfully';
    }
}

//client code
const order = new Order();
const validateOrderHandler = new ValidateOrderHandler();
const discountOrderHandler = new DiscountOrderHandler();
const paymentOrderHandler = new PaymentOrderHandler();
const shipOrderHandler = new ShipOrderHandler();
validateOrderHandler
    .setNextHandler(discountOrderHandler)
    .setNextHandler(paymentOrderHandler)
    .setNextHandler(shipOrderHandler);

console.log(validateOrderHandler.handleOrder(order));

// Advantages of Chain of Responsibility Pattern:
/*
  1. Decouples sender and receiver.
    The sender does not need to know who is handling the request.
    How the payment is processed is completely decoupled from the sender of above request.
  2. Allows multiple handlers.
    It allows multiple handlers to process the request.
  3. Allows dynamic addition/removal of handlers.
    Handlers can be added or removed at runtime.Let say we want to remove the discount handler.
    Same if we want to add a new handler.we can do that easily.Just add a new handler and link it to the chain.
  4. Sequential processing.
    It allows for sequential processing of a series of steps or events.
*/

/*
 Disadvantages/Caveats/Criticism of Chain of Responsibility Pattern:
  1. Overhead of handling requests.
    Extra time needed to pass the request through the chain.
  2. Debugging and maintenance can be tricky
    Difficulty to trace and diagnose issues due to dynamic runtime configuration.
  3. Improper or No handling.
    If not configured correctly,a request might not get handled at all.
  4. Adding Too many responsibilities
    High Complexity and potential violation of Single Responsibility Principle.
    In a single handler, we should not have too many responsibilities.But someone who is not aware of the codebase might add too many
    responsibilities in a single handler.
  4. Dependenncy on order of handlers.
    Incorrect order of handlers can lead to unexpected behaviour.
*/

/*
   Use Cases of Chain of Responsibility Pattern:
    1. Middleware in web frameworks.
       Allows for modular and flexible handling of HTTP requests.
    2. Event propagation in GUIs.
       Allows for flexible and dynamic handling of events.
    3. Logging Frameworks.
         Allows for flexible and configurable logging.
     4. Input/ Event Handling in Game Development.
           Allows different game objects to handle input or events as needed.
*/

//Loggers Example
