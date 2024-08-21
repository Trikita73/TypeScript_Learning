// Simple interface example
interface User {
    name: string,
    age: number,
}

// Interface & Type 
interface User {
    name: string,
    age: number,
}

type User {
    name: string,
    age: number,
}

// Create object based on Interface
interface User {
    name: string,
    age: number,
}

const andrii: User = {
    name: "Andrii",
    age: 33,
}

// Interface optional property
interface User {
    name: string,
    age?: number,    // <--- Optional
}

// Creation with a required property
const andrii: User = {
    name: 'Andrii',
}

// Creation with missing a required property
/*
    Error:
    Property 'name' is missing in type '{ age: number; }' but required in type 'User'
*/
const max: User = {
    age: 22,
}

// Interface 'readonly' mdifier
interface User {
    readonly name: string,
    age: number,
}

const andrii: User = {
    name: 'Andrii',
    age: 33,
}

andrii.age = 33;
andrii.name = 'Max';  // Cannot assign to 'name' because it is a read-only property

// Compare interface type and object
interface User {
    name: string,
    age: number,
}

const andrii: User = {
    name: 'Andrii',
    age: 33,
    /*
    Error:
    Object literal may only specify known properties, and 'nickName' does not exist in type 'User'
    */
   nickName: 'Aka',    // <--- Didn't described in interface "User"
}

// Interface extension 
interface User {
    name: string,
    age: number,
    [propName: string]: any;
}

const andrii: User = {
    name: 'Andrii',
    age: 33,
    nickName: 'Aka',
    justTest: 'test',
}

// Class Interface
interface User {
    name: string,
    age: number,
    getPass(): string,
}

class Andrii implements User {
    name: string = 'Andrii';
    age: number = 33;
    nickName: string = 'Aka';

    getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Create Class based on multiple interfaces
interface User {
    name: string,
    age: number,
}

// Separate interface with one method
interface Pass {
    getPass(): string,
}

class Andrii implements User, Pass {
    name: string = 'Andrii';
    age: number = 33;

    getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Interface extendes
interface User {
    name: string,
    age: number,
}

// Interface extends
interface Admin extends User {
    getPass(): string,
}

class Andrii implements Admin {
    name: string = 'Andrii';
    age: number = 33;

    getPass() {
        return `${this.name}${this.age}`;
    }
}