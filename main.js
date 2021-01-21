// Variable types - String, Number, Boolean, Null, Undefined, Symbols

const name = 'Adrian';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

 console.log(typeof name);
 console.log(typeof age);
 console.log(typeof rating);
 console.log(typeof isCool);
 console.log(typeof x);
 console.log(typeof y);
 console.log(typeof z);

 // Concatenation use `+`

console.log('My name is ' + name + ' and I am ' + age + ' years old.');

// Template String

const greeting = `Hello! My name is ${name} and I am ${age} years old!`;
console.log(greeting);

// **************************************************************************************************************** //

// Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5); - long method
// JS arrays can hold multiple types of values in a single array

const numbers = [1,2,3,4,5];

// add a value to an array
numbers.push(6);

// add a value in the beginning of an array
numbers.unshift(0);

// access a value from an array
console.log(numbers[1]);

console.log(numbers);

// **************************************************************************************************************** //

// Objects - basically a key value pair

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main St.',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person); // to access a single value, use dot syntax

// extracting a key value pair in an object and making it a variable

const { firstName, lastName, address: {city} } = person;

console.log(firstName, lastName, city);

// Array of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with clients',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
]

console.log(todos);

// convert an array to json object
const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

// **************************************************************************************************************** //

// OTHER loops

// for of loop

for(let todo of todos){
    console.log(todo.id);
}

// useful array function for filtering, mapping and iteration

todos.forEach(function(todo){
    console.log(todo.text);
})

const completedTasks = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(completedTasks);

// **************************************************************************************************************** //

// FUNCTIONS

function addNums(num1, num2){
    console.log(num1 + num2);
}

// arrow syntax example

const addNumsArrow = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}

addNums(5,4);
console.log(addNumsArrow());

// event shorter arrow syntax

todos.forEach((todo) => console.log(todo));

// **************************************************************************************************************** //

// OOP

// Constructor function

// default format, but you can always see the functions inside when you console log it, to avoid this, use prototypes
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//
//     this.getBirthYear = function (){
//         return this.dob.getFullYear();
//     }
//
//     this.getFullName = function (){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}


// Prototypes

Person.prototype.getFullName = function (){
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getBirthYear = function (){
    return this.dob.getFullYear();
}


// instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Now, ES6 Added classes in js

// CLASSES

class PersonClass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// instantiate class
const person2 = new PersonClass('Mary', 'Doe', '2-17-1996');

console.log(person2);
console.log(person2.getBirthYear());
console.log(person2.getFullName());





