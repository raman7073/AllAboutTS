/*
  JavaScript has var and let to declare a variable and const to declare a constant.
  It is the same in TypeScript as well. But in JavaScript you don't have a choice to explicity 
  decide the data type.
  We will be using the let keyword to declare variables.With modern JavaScript (ES6 and beyond) or TypeScript,
  we should use that only because var and let have significant difference in terms of scope due to hoisting.
  Advantage: Because we are compiling the code through TypeScript, it will not generate the JavaScript code if there are any errors.
    So, we can avoid the runtime errors.

  Syntax to declare a variable:
  let variableName: dataType = value;
  let variableName: dataType;

  var vaialbeName: dataType = value;
  var variableName: dataType;

  const variableName: dataType = value;
  Remember, if you are using const, you have to initialize the value at the time of declaration.Later
  it will not allow you to aasign/change the value.

  TypeScript offers various types :
   1. Primitive or built-in types
   2. User-defined types
   3. Generic types
   4. Decorator types

   Relative Question:
   1. Syntax to declare a variable in TypeScript?
   2. Rules to declare a variable in TypeScript?
*/

let a: number = 10;
let b: string = 'Hello';
let c: boolean = true;
let d: any = 10;
let e: number[] = [1, 2, 3];
let f: any[] = [1, 'Hello', true];
let g: number | string;
g = 10;
g = 'Hello';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

