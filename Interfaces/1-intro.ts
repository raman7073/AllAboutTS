/*
  In TypeScript, interfaces are used to define the structure of an object.
  In newer TypeScript,interface is also referred to as the object types.
   
  Relative Questions:
   1. Difference between interface and type in TypeScript?
    Example:
    interface Person {
        name: string;
        age: number;
    }
    type Person = {
        name: string;
        age: number;
    }

    With custom types, we can define union,primitive, intersection,tuple and mapped types.
    Example:
     Union Type:
        type ID = string | number;
     Primitive Type:
        type Name = string;
     Intersection Type:
        type Admin = {
            name: string;
            age: number;
        }
    Tuple Type:
        type Person = [string, number];
    Mapped Type:
        type Person = {
            [key: string]: string;
        }

     Interface deals with Object or classes.
      For classes, the interface acts as a contract - class has 
      to strictly follow the structure defined in the interface
      with the help of implements keyword.  
     So interface can be used with extends and implements keywords
     which is not possible with type. 
*/

interface Address {
    city: string;
    state: string;
    country: string;
    showAddress(): string; //method
}

let address: Address = {
    city: 'New York',
    state: 'New York',
    country: 'USA',
    showAddress() {
        return this.city + ', ' + this.state + ', ' + this.country;
    }
}
console.log(address.showAddress());