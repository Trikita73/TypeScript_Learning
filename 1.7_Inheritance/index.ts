// Simple Class example
class User {
    constructor(public name: string, public age: number) {}
}

const andrii = new User('Andrii', 33);

andrii; // { name: 'Andrii', age: 33}

// Class with static property
class User {
    static secret = 12345; // static property

    constructor(public name: string, public age: number) {}
}

// Example of call static property
User.secret

// Call static property in class method
class User {
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
    }
}

const andrii = new User('Andrii', 33);

andrii.getPass();    // "Andrii12345"

// Complied code
"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return this.name + User.secret;
    }
}

User.secret = 12345;

// Class example
class User {
    private nickName: string = 'Aka';
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
    }
}

// Inheritance example
class Andrii extends User {
    name: string = 'Andrii';
}

// Created instances based on 'User' and 'Andrii' classes
const max = new User('Max', 22);
const andrii = new Andrii(33);   // Expected 2 arguments, but got 1

// Realization of constructor in the inherited class
class Andrii extends User {
    name: string = 'Andrii';

    constructor(age: number) {
        super(name, age);
    }
}

// No error 
// Create instances based on 'User' and 'Andrii' classes
const max = new User('Max', 22);
const andrii = new Andrii(33);

//Personal method in inherited(унаследование) class
class Andrii extends User {
    name: string = 'Andrii';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${User.secret}`;
    }
}

const andrii = new Andrii(33);

andrii.getPass(); // "33Andrii12345"

// Abstract class example 
abstract class User {
    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string;  // Abstract method
}

const max = new User('Max', 22); // Cannot create an instance of an abstract class

// Create class using Abstraction
class Andrii extends User { // Non-abstract class 'Andrii' does not inherited abstract member 'getPass' from class 'User'
    name: string = "Andrii";

    constructor(age: number) {
        super(name, age);
    }
}

// Realization of 'getPass' method
class Andrii extends User {
    name: string = 'Andrii';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}`;
    }
}

// Call prototype method

andrii.greet();  // "Andrii"

// Call personal method
andrii.getPass(); // "33Andrii"
