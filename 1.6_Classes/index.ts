// Simple class example
class User {

}

// Class types
class User {
    name: string;
    age: number;
    nickName: string;
}

// Class type, including constructor
class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}

const andrii = new User('Andrii', 33, 'Aka');

andrii; // { name: "Andrii", age: 33, nickName: "Aka" }

// Class types modificators
class User {

    public name: string;
    private nickName: string;
    protected age: number;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}

const andrii = new User('Andrii', 33, 'Aka', 123);

andrii.name;        // "Andrii"
andrii.nickName;    // Prop 'nickName' is private and only accessible within class 'User'
andrii.age;         // Pror 'age' is protected and only accessible within class 'User' and its subclasses
andrii.pass = 42;   // Cannot assign to 'pass' because it is a read-only property 


// Class default properties
class User {
    name: string;
    age: number = 33;
    nickName: string = 'Aka';

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User('Andrii');

user;  // { name: "Andrii", age: 33, nickName: "Aka" }

// Class default properties (example)
class User {
    name: string;
    age: number = 33;
    nickName: string = 'Aka';

    constructor(name: string) {
        this.name = name;
    }

    getPass(): string {
        return `${this.nickName}${this.age}`;
    }
}

const user = new User('Andrii');

user.getPass();  // "Aka"

// Minimization of Class properties
class User {
    constructor{
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    } {}
}

// Try to change private property
class User {
    private age: number = 20;

    constructor(public name: string) {}
}

const andrii = new User('Andrii');

andrii.age = 32;    // Property 'age' is private and only accessible within class 'User'

// Get access to private property
class User {
    private age: number = 20;

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age;
    }
}

const andrii = new User('Andrii');

andrii.setAge(32);   // 32
andrii.myAge = 31;   // 31