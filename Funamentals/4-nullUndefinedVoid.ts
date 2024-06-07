/*
    Null, Undefined, Void
    
    undefined: A variable that has not been assigned a value is undefined.
    null: null is an assignment value. It can be assigned to a variable as a representation of no value.
    void: void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value.

    in JavaScript, if a function does not return any value, it is returning undefined by default.
    Relative Question:
    1. What is the difference between null and undefined in TypeScript?
     null is assignable value to a variable.
     undefined is a placeholder value for a variable that has not been assigned a value.

     In javascript, undefined +5 = NaN, null +5 = 5, null is treated as 0 in javascript for primitive operations.
     2. What is the use of void in TypeScript?
        void is used to specify that a function does not return any value.
    */
let u: undefined = undefined;
let n: null = null;
let v: void = undefined;
console.log(u);
console.log(n);
console.log(v);
console.log(typeof u);
console.log(typeof n);
console.log(typeof v);

function log(message: string): void {
    console.log(message);
}

console.log(log('Hello'));
