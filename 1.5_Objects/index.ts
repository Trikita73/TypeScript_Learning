// Simple objects example 
let user = {
    name: 'Andrii',
    age: 33,
};

// Object type using any
let user: any = {
    name: 'Andrii',
    age: 33,
};

user = 'test'; // Now type of user is string


// Array Type
let list: Array<nymber> = [1, 2, 3];

// Define object type
let user: { name: string, age: number } = {
    name: 'Andrii'
    age: 33,
};

// Try to change property
let user: { name: string, age: numberc } = {
    name: 'Andrii',
        /*
        Error:
            The expected type comes from property 'age'
            which is declared here on type '{ name: string; age: number; }'
        */
       age: 'test',       //<-- Must be a number
};

// Try to change variable type
user = 'test';  // Type '"test"' is not assignable to type '{ name: string; age: number; }'

// Additional property
let user: { name: string, age: number } = {
    name: 'Andrii',
    age: 33,
    nickName: 'Aka', // Object literal may only specify know properties, and 'nickName' does not exist in type '{ name: string; age: number; }'
};

// Updating object type
let user: { name: string, age: number, nickName: string } = {
    name: 'Andrii',
    age: 33,
    nickName: 'Aka',
};

// Base object structure
let user: { name: string, age: number } = {
    name: 'Andrii'
    age: 33,
};

// Dynamically try to add 'nickName' property
user.nickName = 'Aka'; // Property 'nickName' does not exist on type '{name: string; age: number;}'

// Updating object type
let user: { name: string, age: number, nickName: string } ={
    name: 'Andrii',
    age: 33,
    nickName: 'Aka', // Now  everything correct
};

// New admin object
let admin: { name: string, age: number, nickName: string } = {
    name: 'Max',
    age: 22,
    nickName: 'Mad',
};

// 2 object with the same types
let user: { name: string, age: number, nickName: string } = {
    name: 'Andrii',
    age: 33,
    nickName: 'Aka',
};

let admin: { name: string, age: number, nickName: string } = {
    name: 'Max',
    age: 22,
    nickName: 'Mad',
};

// Using Type for objects structure
type Person = { name: string, age: number, nickName: string };

// Apply Person type for objects with the same structure
let user: Person = {
    name: 'Andrii',
    age: 33,
    nickName: 'Aka',
};

let admin: person = {
    name: 'Max',
    age: 22,
    nickName: 'Mad',
};

// 2 object with almost the same structure
let user: Person = {
    name: 'Andrii',
    age: 33,
    nickName: 'Aka',      //<--- property
};

let admin: Person = {
    name: 'Max',
    age: 22,
    getPass(): string {   //<--- new method
        return `${this.name}${this.age}`;
    },
};

// Updating type with optional properties
type Person = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string, 
}; 





