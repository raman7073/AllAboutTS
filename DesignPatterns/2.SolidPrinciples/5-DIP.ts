/*
DIP: Dependency Inversion Principle

High-level modules should not depend on low-level modules. 
Both should depend on abstractions. Abstractions should not depend on details.
Details should depend on abstractions.
This principle is primarily concerned with reducing dependencies 
among the code modules, which leads to more decoupled and easily maintainable systems.

Let's break it down a bit further:

1 . High-level modules should not depend on low-level modules. Both should depend on 
            abstractions: 
    This is suggesting that the high-level modules 1111111( modules that 
        implement business logic or use cases) 
    should not directly depend on or interact with the low-level modules 
   (modules that perform basic, low-level functions like writing to a 
    database or handling HTTP requests). Both should interact through abstractions 
    (like interfaces or abstract classes).

2 . Abstractions should not depend on details. Details should depend on abstractions: 
  This means the abstraction does not know about the underlying implementation.
 It's the responsibility of the underlying detail 
 (i.e., the classes implementing the interface) to adhere to the contract 
 defined by the abstraction.
*/

// without DIP
class MySQLDatabase {
    save(data: string): void {
        // logic to save data to a MySQL database
    }
}

class HighLevelModule {
    private database: MySQLDatabase;

    constructor() {
        this.database = new MySQLDatabase();
    }

    execute(data: string): void {
        // high-level logic
        this.database.save(data);
    }
}

/*

  In the above example, HighLevelModule is a high-level module, 
  and it's directly dependent on the low-level module MySQLDatabase. 
  This means if you decided to change your database from MySQL to MongoDB, 
  you would have to modify HighLevelModule, which is not good.
  */

// with DIP
interface IDatabase {
    save(data: string): void;
}

class MySQLDatabase1 implements IDatabase {
    save(data: string): void {
        // logic to save data to a MySQL database
    }
}

class MongoDBDatabase implements IDatabase {
    save(data: string): void {
        // logic to save data to a MongoDB database
    }
}

class HighLevelModule1 {
    private database: IDatabase;

    constructor(database: IDatabase) {
        this.database = database;
    }

    execute(data: string): void {
        // high-level logic
        this.database.save(data);
    }
}

// Instantiate the HighLevelModule with a MySQL database.
let mySQLDatabase: IDatabase = new MySQLDatabase1();
let highLevelModule1: HighLevelModule1 = new HighLevelModule1(mySQLDatabase);

// Now use the module to execute some high level function.
highLevelModule1.execute("Some Data for MySQL");

// Instantiate the HighLevelModule with a MongoDB database.
let mongoDBDatabase: IDatabase = new MongoDBDatabase();
let highLevelModule2: HighLevelModule1 = new HighLevelModule1(mongoDBDatabase);

// Now use the module to execute some high level function.
highLevelModule2.execute("Some Data for MongoDB");


/*

In this example, HighLevelModule is now depending on the abstraction IDatabase. 
Whether the underlying database is MySQL or MongoDB, it doesn't care. 
It just knows that it can call the save method on the database object. 
This design allows us to change the database without having to modify 
the HighLevelModule. This is the Dependency Inversion Principle in action.

*/