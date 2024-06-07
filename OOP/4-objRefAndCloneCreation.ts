/*
Object Reference and Clone Creation
1. What will be the output of the following code?
2. How can we create a clone or separate copy of an object ?
   
*/
//1
let object1 = {
    a: 'First',
}
let object2 = object;
object1.a = 'Second';
console.log(object.a);// Second
console.log(object1.a);// Second , both have same reference

//2
let object3 = Object.assign({}, object);//The first argument is the target object and the second argument is the source object.
object2.a = 'Third';
console.log(object.a);// Second
console.log(object2.a);// Third , both have different reference