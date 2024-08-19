// Just examples of functionality
const SECRET: string = '123321';
const PI: number = 3.14;

const getPass = (name: string, age: number): string => `${name}${age}`;

const isEmpty = <T>(data: T): boolean => !data;

// ES5 Module
(function () {
    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): Boolean => !data;

}());

// Define namespace
namespace Utils {
    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;

};

// Call namespace method
namespace Utils {
    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;

};

// Try to call method outside namespace
const myPass = Utils.getPass('Andrii', 33);   // Property 'getPass' does not exist on type 'typeof Utils'

// Export data from Namespace
namespace Utils {
    export const SECRET: string = '123321';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;

};

// Calling exported from namespace methods
const myPass = Utils.getPass('Andrii', 33);    // "Andrii33"
const isSecret = Utils.isEmpty(Utils.SECRET);  // "false"

// Constant with the same name outside namespace
const PI = 3;                                      // No Errors


// File "Utils.ts"
// Export
namespace Utils {
    export const SECRET: string = '123321';

    export const getPass = (name: string, age: number): string => `${name}${age}`;

};

// File "Customers.ts"
// Import
/// <reference path="Utils.ts" />                                // <--- Import

// Calling "Utils" namespace method
const myPass = Utils.getPass('Andrii', 33);    // "Andrii33"

// Import/Export (ES6 Modiles)

// File "Utils.ts"
export const SECRET: string = '123321';

export const getPass = (name: string, age: number): string => `${name}${age}`;

// File "Customers.ts"
import { getPass, SECRET } from "./Utils";

const myPass = getPass(SECRET, 33); // "Aandrii33"
