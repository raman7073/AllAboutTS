/*
  Prototype Design Pattern

  
*/

interface UserDetails {
    name: string;
    age: number;
    email: string;
}

interface Prototype {
    clone(): Prototype;
    getUserDetails(): UserDetails;
}

//class impl

class ConcretePrototype implements Prototype {
    constructor(private user: UserDetails) {

    }
    public clone(): Prototype {
        const clone = Object.create(this);
        clone.user = { ...this.user };
        return clone;
    }
    public getUserDetails(): UserDetails {
        return this.user;
    }
}

//client code

let user = new ConcretePrototype({
    name: "Raman",
    age: 23,
    email: "rmnrck@gmail.com"
});

let user1 = user.clone();
if (user1 === user) {
    console.log("Same instances");
} else {
    console.log("Different Instances");
}


// when to use
// real world impl
interface ShapeProperties {
    color: string;
    x: number;
    y: number;
}
abstract class Shape {
    // properties: ShapeProperties;
    constructor(public properties: ShapeProperties) {
    }
    abstract clone(): Shape;
}


class Rectangle extends Shape {
    constructor(
        public properties: ShapeProperties,
        public width: number,
        public height: number
    ) {
        super(properties);
    }
    public clone(): Shape {
        let cloneProperties: ShapeProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y
        };
        return new Rectangle(cloneProperties, this.width, this.height);
    }
}
class Circle extends Shape {
    constructor(
        public properties: ShapeProperties,
        public radius: number
    ) {
        super(properties);
    }
    public clone(): Shape {
        let cloneProperties: ShapeProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y
        };
        return new Circle(cloneProperties, this.radius);
    }
}


let redRectangle: Shape = new Rectangle({
    color: "red",
    x: 12,//x coordinate
    y: 10 //y coordinate
}, 10, 20);
let anotherRectangle = redRectangle.clone();
anotherRectangle.properties.color = "blue";

//advantages
//caveats
//use cases