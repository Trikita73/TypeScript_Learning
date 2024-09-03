// Readonly<T>
interface User {
    name: string;
}

const user: Readonly<User> = {
    name: 'Andrii',
};

user.name = 'Max';   // Error: cannot reassign a readonly property

// Required<T>
interface Props {
    a?: number;
    b?: string;
};

const obj: Props = { a: 5 };     // OK

const obj2: Required<Props> = { a: 5 };  // Error: property 'b' missing

// Record<K, T>
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};

// Compiled code 
"use strict";
const x = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home'},
};

// Pick<T, K>
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

// Omit<T, K>
interface Todo { 
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;


const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

// Exclude<T, U>
type T0 = Exclude<"a" | "b" | "c", "a">;                      // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;                // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number 

