/*

Single Responsibility Principle (SRP)
 A class should have only one reason to change.

 This means that a class should have only one job or responsibility.
 If a class has more than one responsibility, it has more than one reason to change,
 which can make it more complex and harder to maintain.
  


*/

class User {
    public name: string;
    public email: string;
    constructor(name: string, email: string) { }

}
//Both class User and UserAuthenticator have different responsibilities.They may be related but they have different reasons to change.
class UserAuthenticator {

    constructor(user: User) { }
    public login(user: User): void {
        console.log('Logging in ' + user.name);
    }
    public logout(user: User): void {
        console.log('Logging out ' + user.name);
    }
}

// real world example
// not following SRP
class BlogPost {
    public title: string;
    public content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    createPost(): void {
        console.log('Creating post with title ' + this.title);
    }
    deletePost(): void {
        console.log('Deleting post with title ' + this.title);
    }
    updatePost(): void {
        console.log('Updating post with title ' + this.title);
    }
    displayPostInHtml(): void {
        console.log('Displaying post with title ' + this.title);
    }
}

// Following SRP - refactored code

// responsible for managing the blog post
class BlogPost1 {
    public title: string;
    public content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    createPost(): void {
        console.log('Creating post with title ' + this.title);
    }
    deletePost(): void {
        console.log('Deleting post with title ' + this.title);
    }
    updatePost(): void {
        console.log('Updating post with title ' + this.title);
    }
}
// responsible for how the blog post are displayed
// changes in the display of the post will not affect how the post is managed and vice versa.
class BlogPostDisplay {
    constructor(public blogPost: BlogPost1) { }
    displayPostInHtml(): void {
        console.log('Displaying post with title ' + this.blogPost.title);
    }

}

// Advantages of SRP
/*
  1. Easier Maintenance
     A class with a single responsibility is easier to maintain and update.
     And you know exactly where to look when you need to make changes.
  2. Improved Understandability
     The purpose of a class with a single responsibility is clear to developers.
  3. Easier Testing
     Focused tests can be written for a class with a single responsibility.
  4. Reduced Coupling
     By minimizing the impact of changes in one class, the SRP reduces the risks of creating bugs.
  5. Increased Reusability
     Classes following the SRP are more likely to be reusable in different contexts, incrasing efficiency.
     
*/
// reusing the BlogPost class
class BlogPostJson {
    constructor(public blogPost: BlogPost1) { }
    toJson(): { content: string; tittle: string; } {
        return {
            content: this.blogPost.content,
            tittle: this.blogPost.title
        }
    }
}