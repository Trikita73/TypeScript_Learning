// Simple class example
class User {
    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Base structure of Decorator 
const logClass = () => ();

// Class Decorator
const logClass = (constructor: Function) => {
    console.log(constructor);  // Result of call: class User {}
};

@logClass     // <--- Apply decorator for class
class User {
    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Property Decorator
const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey); // Result of call: "secret"
};

