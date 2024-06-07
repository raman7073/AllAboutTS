/*
  No client should be forced to depend on interfaces they does not use.

  In layman terms, don't add additional functionality to an existing interface
  by adding new methods. Instead, create a new interface and let the client
  implement it.
*/
// ISP Violation
interface Machine {
    print(document: Document): void;

    scan(document: Document): void;

    fax(document: Document): void;
}

class MultiFunctionPrinter implements Machine {
    print(document: Document): void {
        // actual implementation
    }

    scan(document: Document): void {
        // actual implementation
    }

    fax(document: Document): void {
        // actual implementation
    }
}
/*
   Now, what if you want to introduce a simple printer that
   only supports printing? In the above scenario, you would
   be forced to implement scan and fax methods as well,
   even though you don't need them. This is clearly a violation
   of the Interface Segregation Principle.

*/

// ISP Solution
interface Printer {
    print(document: Document): void;
}

interface Scanner {
    scan(document: Document): void;
}

interface FaxMachine {
    fax(document: Document): void;
}

class SimplePrinter implements Printer {
    print(document: Document): void {
        // actual implementation
    }
}

class MultiFunctionMachine implements Printer, Scanner, FaxMachine {
    print(document: Document): void {
        // actual implementation
    }

    scan(document: Document): void {
        // actual implementation
    }

    fax(document: Document): void {
        // actual implementation
    }
}
/*
In this way, a SimplePrinter is not forced to depend on scan or 
fax methods it does not use. This is the crux of the Interface 
Segregation Principle.

*/
/*
  1. What is the primary goal of the Interface Segregation Principle?
    -> To make sure that clients are not forced to depend on interfaces they do not use.
  2. When does violating Interface Segregation Principle become noticeable?
    -> When classes have to implement methods they do not need.
  3. What problem can be caused by not adhering to the Interface Segregation Principle?
    -> Code becomes less reusable.
  4. In the context of the Interface Segregation Principle, what does the term "segregation" imply?
    -> Breaking a large interface into smaller, more specific ones.
*/