/*
   There are many ways to create an object in JavaScript.
   There is also a class Object which can allow you to create an object.

   In any cases of object creation, the basic idea is that we are creating 
   a container to bundle data pieces.

   Different data pieces which you may want to pass to a function or may be
   to a server then you bundle data pieces in an object and pass it.

   Object allows you to create a container where you can store multiple data pieces 
   and functions.

   Object literal syntax:
    let objectName = {
         key1: value1,
         key2: value2,
         key3: value3
    };
    it is simply a key-value pair data structure.
    

*/
let person = {
    name: 'John',
    age: 25,
    getData: function () {
        return this.name + ' is ' + this.age + ' years old.';
    }
    //in ES6, we can write function as:
    // getData() {
    //     return this.name + ' is ' + this.age + ' years old.';
    // }
};
console.log(person);