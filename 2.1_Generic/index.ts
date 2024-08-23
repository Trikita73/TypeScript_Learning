// Example of using 'any'
const getter = (data: any): any => data;

getter(10);     // 10
getter('test')  // "test"

// Issue we have
const getter = (data: any): any => data;

getter(10).length;    // undefined
getter('test').length // 4

// Using of generic type
const getter = <T>(data: T): T => data;

finction getter<T>(data: T): T {
    return data;
}

// Defining issue immediately
const getter = <T>(data: T): T => data;

getter(10).length;      // Property 'length' does not exist on type '10'
getter('test').length;  // 4

// Generic behavior explanation
// For a number
const getter = (data: number): number => data;
getter(10).length;       // Property 'length' does not exist on type '10'

// For a string
const getter = (data: string): string => data;
getter('test').length; // 4

// Function arguments type
const getter = <T>(data: T): T => data;

// Define type in function calling 
getter<number>(10).length;       // Property 'length' does not exist on type '10'
getter<string>('test').length;   // 4

// Array generic type
let list: Array<number> = [1, 2, 3];

// Simple class example
class User {
    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Generic class
class User<T> {
    constructor(public name: T, public age: T) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

const andrii = new User('Andrii ', 33);
const max = new User(123, 321);

andrii.getPass();     // "Andrii33"
max.getPass();        // "123321"


// Multiple generic types
class User<T, K> {
    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

const andrii = new User('Andrii', '33');     // string, string
const max = new User(123, 321);              // number, number
const leo = new User('Leo', 22)              // string, number

andrii.getPass();    // "Andrii33"
max.getPass();       // "123321"
leo.getPass();       // "Leo22"

// New class method 'getSecret'
class User<T, K>  {
    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this}${this.age}`;
    }

    public getSecret(): number {
        return this.age**2;
    }
}

const andrii = new User('Andrii', 33);
const leo = new User(123, 321);

/* 
    Error:
    Argument of type '"22"' is not assignable to parameter of type 'number'
*/

const max = new User('Max', '22');