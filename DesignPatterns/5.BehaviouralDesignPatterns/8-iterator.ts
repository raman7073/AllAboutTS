/*
  The iterator pattern is a design pattern that allows sequential
  access to elements in a collections, without exposing its underlying 
  representation.
*/

class ArrayIterator<T> {
    private position: number = 0;
    constructor(private collection: T[]) {

    }
    public next(): T {
        //get the next element in collection
        const result: T = this.collection[this.position];
        this.position += 1;
        return result;
    }
    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

//client code
const array: number[] = [1, 3, 7, 2, 4, 5, 3, 5, 4];
const iterator = new ArrayIterator<number>(array);
while (iterator.hasNext()) {
    console.log(iterator.next());
}

const stringArray = ["Hello", "Heinn"];
const it = new ArrayIterator<string>(stringArray);
while (it.hasNext()) {
    console.log(it.next());
}
//real world impl------------------------------------------------------------------------>
class User {
    constructor(public name: string) { }
}
interface MyIteratorResult<T> {
    value: T | null;
    done: boolean;
}

interface MyIterator<T> {
    next(): MyIteratorResult<T>;
    hasNext(): boolean;
}

interface Collection<T> {
    createIterator(): MyIterator<T>;
}

class UserCollection implements Collection<User> {
    constructor(private users: User[]) { }
    public createIterator(): MyIterator<User> {
        return new UserIterator(this);
    }
    public getItems(): User[] {
        return this.users;
    }
}

class UserIterator implements MyIterator<User> {
    private collection: UserCollection;
    private position: number = 0;
    constructor(collection: UserCollection) {
        this.collection = collection;
    }
    public hasNext(): boolean {
        return this.position < this.collection.getItems().length;
    }
    public next(): MyIteratorResult<User> {
        if (this.hasNext()) {
            return {
                value: this.collection.getItems()[this.position++],
                done: false
            }
        } else {
            return {
                value: null,
                done: true
            }
        }
    }
}
//client code


const users = [new User("Alice"), new User("Bob"), new User('Charlie')];
//convert array of users into a collection
const userCollection = new UserCollection(users);
//create an iterator
const itr = userCollection.createIterator();

while (itr.hasNext()) {
    console.log(itr.next());
}

//adv
//caveats