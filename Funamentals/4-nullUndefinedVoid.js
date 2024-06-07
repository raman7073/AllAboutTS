/*
    Null, Undefined, Void
    
    undefined: A variable that has not been assigned a value is undefined.
    null: null is an assignment value. It can be assigned to a variable as a representation of no value.
    void: void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value.

    in JavaScript, if a function does not return any value, it is returning undefined by default.
*/
var u = undefined;
var n = null;
var v = undefined;
console.log(u);
console.log(n);
console.log(v);
console.log(typeof u);
console.log(typeof n);
console.log(typeof v);
function log(message) {
    console.log(message);
}
console.log(log('Hello'));
