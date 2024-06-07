/*
 1. How can we make a property read-only in an object?


*/

const protoObj = Object.defineProperties({
    pCode: 'Hello'
}, {
    name: {
        value: 'John',
        writable: false,
        enumerable: true,
    }
});// the first argument is the object to which we want to add properties and the second argument is an object that defines the properties.
const perso = Object.create(protoObj);
perso.name = 'Doe';
console.log(perso);
console.log(protoObj);