/*
 1. Can we have dynamic key/method names and how to implement it?

    Yes, we can have dynamic key/method names in TypeScript. 
    We can use square brackets to define dynamic key names.
    We can also use square brackets to define dynamic method names.
    
    let obj = {
        [key: string]: any;
    }
    
    let obj = {
        [key: string]: function() {};
    }
    
    Relative Question:
    1. How can we define dynamic key names in an object in TypeScript?
       We can define dynamic key names in an object using square brackets.
       let obj = {
           [key: string]: any;
       }
    2. How can we define dynamic method names in an object in TypeScript?
       We can define dynamic method names in an object using square brackets.
       let obj = {
           [key: string]: function() {};
       }

*/

let tv = 'pCode';
let obj = {
    [tv]: 'Hello',
    ['Hello']: 'World',
    [10]: 'Number',
    getData() {
        return obj.pCode;
    },
    [tv + 'World']() {
        return 'Hello World';
    }

}
console.log(obj);
console.log(obj.getData());
console.log(obj.pCodeWorld());