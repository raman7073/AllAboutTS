/*
  https://cloudaffle.com/series/creational-design-patterns/singleton-design-patterns/
  Singleton Pattern:

  The Singleton pattern is a creational design pattern that
  lets you ensure that a class has only one instance,while 
  providing a global access point to this instance.


*/

class Singleton {
    private static instance: Singleton;
    private static _value: number;
    private constructor() { }//private constructor to prevent instantiation of the class from outside
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();  // that's why we have private constructor
        }
        return Singleton.instance;
    }



    // other methods
    set value(value: number) {
        Singleton._value = value;
    }
    get value() {
        return Singleton._value;
    }

}

let singleton1 = Singleton.getInstance();
let singleton2 = Singleton.getInstance();

singleton1.value = 10;
console.log(singleton1.value); // 10
console.log(singleton2.value); // 10

// when to use singleton pattern

// real world example
// Singleton logger class
// log method -> saving logs to a single file
// can have multiple methods for different type of logs

class Logger {
    private static instance: Logger;
    private constructor() { }
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
        const timestamp = new Date().toLocaleString();
        console.log(`[${timestamp}] - ${message}`);
    }
}

let logger1 = Logger.getInstance();

logger1.log('First log');

//in some other part of the code
let logger2 = Logger.getInstance();
logger2.log('Second log');

// Advantages of Singleton Pattern
/*
 1. File Access Issues

*/

//Caveats / Criticisms of Singleton Pattern
/*
 1. Global State
    Leads to shared state and increased coupling.
 2. Harder to Test
    Preserved state between tests can cause unexpected results.
 3.

*/

// use cases

/*

 1. Caching
  Prevents data duplication in cache.
 2. Service Proxies
  Manages efficient server communication.
 3. Shared Resources
  Ensures a single point of access for shared resources.
 4. Configuration Data
  Centralizes access to config.
 5. Logging
    Ensures consistent logging behavior.

*/