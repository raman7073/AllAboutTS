/*
  JavaScript has var and let to declare a variable and const to declare a constant.
  It is the same in TypeScript as well. But in JavaScript you don't have a choice to explicity
  decide the data type.
  We will be using the let keyword to declare variables.With modern JavaScript (ES6 and beyond) or TypeScript,
  we should use that only because var and let have significant difference in terms of scope due to hoisting.


*/
var a = 10;
var b = 'Hello';
var c = true;
var d = 10;
var e = [1, 2, 3];
var f = [1, 'Hello', true];
var g;
g = 10;
g = 'Hello';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
