/*
   This object contains the current context.
   The this object can have different values depending on where it is used/placed.

*/
let a1 = 10;
console.log(this);//{}

// function showThis() {
//     console.log(this);// global object
// }
// showThis();

const ob = {
    a: 10,
    showThis() {
        console.log(this);//{a: 10, showThis: [Function: showThis]}
    },
    showThisArrow: () => {
        console.log(this);//{}
    }
}
//ob.showThis();
ob.showThisArrow();