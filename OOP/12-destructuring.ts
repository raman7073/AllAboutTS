/*
  Desctructuring is a concept of braking data structure like array or object into data pieces or in other words, individual variables.


*/

// Array Destructuring
let arr = [1, 2, 3, 4, 5];
let [a11, b11, c11, d11, e11] = arr;
console.log(a11);
console.log(b11);
//Object Destructuring
let obje = {
    name1: 'John',
    age: 25,
    city: 'New York'
};
let { name1, age = 18, city } = obje;//default value
console.log(name1);
console.log(age);
console.log(city);

//const { a12 = 90, b12 } = {};
//console.log(a12);
//console.log(b12);