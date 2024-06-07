/*
any is a type that represents any kind of value. 
It is a powerful way to work with existing JavaScript, 
allowing you to gradually opt-in and opt-out of type-checking during compilation.
if you don't know the type of a variable in advance, 
you can use any to opt-out of type-checking.
if you don't specify a type, it will be considered as any by default.

Relative Question:
1. What is the use of any in TypeScript?
   any is often use when you don't know the type of a variable in advance.Eg.
   When you are working with a third-party APIs, you may not know the type of the data that is coming back.
   In that case, you can use any to avoid type-checking for compilation errors.
*/
let z: any;
console.log(z);//undefined
//a = 10;