/*
 Abstract class can't be instantiated. It serves as a base class to 
 the extended classes or subclasses. 

 Relative Questions:
 1.Can an abstract class have a constructor?
   Answer: Yes, an abstract class can have a constructor.It is always
   called when the subclass is instantiated.
 2. Can an abstract class have abstract methods?
        Answer: Yes, an abstract class can have abstract methods.
 3. What is abstract method in TypeScript?
        Answer: An abstract method is a method that is declared in an abstract class.
        It doesn't have a body. It is implemented in the subclass.
 4. Is it possible to add instance properties in an abstract class?
        Answer: Yes, it is possible to add instance properties in an abstract class.
        Example:
        abstract class Shape {
            width: number;
            height: number;
            constructor(width: number, height: number) {
                this.width = width;
                this.height = height;
            }
        }
        But using instance members , we need a subclass instance.
        We can also add static properties in an abstract class.
*/
abstract class Shape {
    // constructor(protected width: number, protected height: number) {
    //     console.log('Shape constructor');
    // }
    static color: string = 'Red';
    constructor() {
        console.log('Shape constructor');
    }
    abstract getArea(): number;
}
//let shape = new Shape(10, 20); // Error
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    getArea(): number {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea());
console.log(Shape.color);