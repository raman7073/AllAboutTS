interface FilterStrategy {
    apply(image: string): void;
}

//concrete strategy
class GrayScaleFilter implements FilterStrategy {
    apply(image: string): void {
        console.log('Applying GrayScale filter to ' + image);
    }
}

//concrete strategy
class SepiaFilter implements FilterStrategy {
    apply(image: string): void {
        console.log('Applying Sepia filter to ' + image);
    }
}
//concrete strategy
class NegativeFilter implements FilterStrategy {
    apply(image: string): void {
        console.log('Applying Negative filter to ' + image);
    }
}

//context class that uses the strategy object
class ImageProcessor {
    constructor(private filterStrategy: FilterStrategy) { }
    public setFilterStrategy(filterStrategy: FilterStrategy): void {
        this.filterStrategy = filterStrategy;
    }
    public applyFilter(image: string): void {
        this.filterStrategy.apply(image);
    }
}


//client code
let imageProcessor = new ImageProcessor(new GrayScaleFilter());//default strategy
imageProcessor.applyFilter('image1.jpg');
imageProcessor.applyFilter('image2.jpg');
imageProcessor.setFilterStrategy(new SepiaFilter());//changing strategy at runtime
imageProcessor.applyFilter('image3.jpg');

// Advantages of Strategy Pattern:
/*
  1. Open/closed principle.
   Easily extendable with new strategies without modifying existing code.
  2. Run-time flexibility.
   Ability to change the behaviour at run-time by swapping the strategy object.
  3. Code Organization.
   Seperation of behaviour into separate classes makes the code more organized and easier to maintain.
  4. Avoids conditional statements.
    Eliminates the need for complex conditional logic.
*/
/*
 Disadvantages/Caveats/Criticism of Strategy Pattern:
  1. Increased complexity.
     It involves additional abstractions and more classes.
  2. Inconsistent Strategy Implementation.
    Strategies should be implemented consistently to avoid confusion.
    It may happen that the developer may forget to set the strategy object or 
    set the wrong strategy object.
    There are no checks in place to ensure that the correct strategy object is set.
    In large applications, 
    it may be difficult to manage.
  3. Dependency Management.
    Each strategy object may have its own dependencies, 
    which can make the code more complex.
  4. Discoverability.
    Harder for new developers to understand the code flow.

*/

/* 
 Strategy Pattern use cases:
 1. Sorting algorithms.
  Selecting the appropriate sorting algorithm based on the size and type of the data set.  
 2. Payment processing.
  Prcocessing payments using different payment methods like credit card, PayPal, etc.
 3. Compression algorithms.
  Use different file compression algorithms based on the type of data.
 4. Image processing.
    Apply different filters to images like grayscale, sepia, etc.
 5. Image Rendering.
    Use different rendering algorithms like SVG strategy, WebGL strategy, etc.
*/

/* Relative Questions:
1. What does the Strategy Pattern allow you to do?
-> It lets you define a family of algorithms, put each of them into a separate classes,
 and make their objects interchangeable.
2. What is the primary role of the 'Context' class in the Strategy Pattern?
-> To store concrete strategy and delegate the tasks to it.
3. What is a 'ConcreteStrategy' in the Strategy Pattern?
-> A class that implements a specific algorithm.
*/