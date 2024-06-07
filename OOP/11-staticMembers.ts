/*
Static Members
Static members are the members that belong to the class itself, not the instances of the class.
Static members are accessed using the class name.
Static members are defined using the static keyword.

Relative Questions:
1. How do you make any member static in TypeScript?
2. Explain the purpose of static members in TypeScript?

*/

class StaticMembers {
    static count: number = 0;
    static display() {
        console.log('Count is ' + StaticMembers.count);
    }
}
console.log(StaticMembers.count);
StaticMembers.display();