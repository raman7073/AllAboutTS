/*
  When we talk about numbers in TypeScript, we have to be aware of the different types of numbers that we can use.
  Like :
    1. Decimal (base 10) (integers and floating point numbers)
    2. Hexadecimal (base 16)
    3. Binary (base 2)
    4. Octal (base 8)

    Relative Question:
     1.  what all values can be assigned to a number type variable in TypeScript?
        integer, floating point, hexadecimal, binary, octal  
     2. How you can assign a hexadecimal value to a number type variable in TypeScript?
        let hex: number = 0xf00d; 

*/

let decimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal); 