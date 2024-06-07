/*
Type Annotation and Type Inference
Type Annotation-> we add : after variable name to tell TypeScript what type of
value a variable will refer to.This is explicit declaration of the type.

When we declare a variable and assign a value to it in the same statement, 
TypeScript infers (assumes) the type of the variable based on the type of 
the value assigned to it.

Relative Question:
1. When does TypeScript infer the type of a variable?
   There are 3 situations when TypeScript infers the type of a variable:
    A-> When a variable is declared and initialized in the same statement.
       Ex: let a = 10; a is inferred as number.
    B-> When we give default values to the function parameters.
         Ex: function add(a = 10, b = 20) { return a + b; }
              Here, a and b are inferred as number.
    C-> When a variable is assigned to a function that returns a value of a particular type.
            Ex: let add = function(a: number, b: number):number { return a + b; }
                Here, add is inferred as number.
                
*/