/*
  -> Design Patterns are general reusable solutions to common problems in software design.
  They are like templates that can be applied to different situations to solve certain 
  types of problems, making it easier for 
  developers to write maintainable and efficient code.
 
  ->Why We Use Design Patterns?
    We use design patterns for several reasons:

    1.Reusability
       Design patterns provide tried-and-tested solutions to common problems, 
       reducing the time and effort needed to solve them from scratch. 
       They promote reusability and modularity in software systems.

    2.Improved communication
       Design patterns provide a shared vocabulary and understanding among developers, 
       enabling more efficient communication about design decisions and solutions.

    3.Best practices
      Design patterns encapsulate the best practices of experienced software developers, 
      allowing novices to learn from their expertise.

    4.Maintainability
      Implementing design patterns often results in more maintainable code, 
      making it easier to update, debug, and extend in the future.

    5.Easier problem-solving
      Design patterns provide a structured approach to problem-solving,
      which can help developers break down complex problems into smaller, 
      more manageable components.

    ->Types of Design Patterns:

     1.Creational Patterns
        With creational design patterns, we are trying to solve problems related to creation of an object.
        Creational design patterns are focused on the process of object creation.
        They abstract the instantiation process and help make the system independent of how its 
        objects are created, composed, and represented. These patterns provide a way to create objects while hiding the creation logic,
        rather than instantiating objects directly using new operator. This allows for more flexibility when deciding which objects need to 
        be created for a given scenario/use case.

        Examples of creational design patterns include:
        - Singleton
        - Abstract Factory
        - Factory Method
        - Builder
        - Prototype

    2.Structural Patterns

     With structural design patterns, we are trying to solve problems related to the 
     structuring of objects itself also the structure of classes and code in some of cases.

     Structural design patterns are concerned with the composition of classes and objects. 
     They help in forming large structures using classes and objects, 
     while also ensuring that the structures are scalable, efficient, and maintainable. 
     These patterns focus on simplifying the design by identifying the relationships
     between entities and organizing them to form a cohesive structure. 
     Structural design patterns facilitate the design of software by enabling the 
     composition of interfaces or implementations. 
     Some common structural design patterns are:
      Adapter, Bridge, Composite, Decorator, Facade, Flyweight, and Proxy.

    3.Behavioral Patterns

      With behavioral design patterns, we are trying to solve problems related 
      to communication between two objects or behaviors of objects when they 
      try to communicate with each other.

      Behavioral design patterns are responsible for efficient communication and 
      the assignment of responsibilities among objects. 
      They focus on how objects interact and communicate with each other, 
      as well as how the flow of control is organized within a system. 
      These patterns define the protocols for communication between objects and
      help in distributing responsibilities to ensure that the system is efficient,
      maintainable, and scalable. 
      By promoting loose coupling and separation of concerns, 
      behavioral design patterns increase the flexibility and adaptability 
      of a software system. 
      Some widely used behavioral design patterns include:
        Chain of Responsibility, Command, Interpreter, Iterator, Mediator,
        Memento, Observer, State, Strategy, Template Method, and Visitor.

    -> UML Diagrams:
      UML (Unified Modeling Language) is a standardized modeling language used to 
      visualize the design of a system. You must know how to read and create UML diagrams.
       + is used to represent public members
       - is used to represent private members
       # is used to represent protected members
*/