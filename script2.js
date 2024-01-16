// console.log("Script 2");

//Array & Objects
// Arrays - Arrays are a special type of 'object'and a data structure in Javascript that stores multiple values.
// arrays zero based

//let x;

// const numbers = [21, 42, 84, 168]; //array literals
// const fruits = new Array("mango", "orange", "apple"); //array constructor

// x = numbers[1];
// x = `I really love eating ${fruits[2]}s`;
// x = numbers.length;

// fruits[fruits.length] = "pear";
// x = fruits;
// console.log(x);

//Basic Array Methods
let y;
const arr = [21, 42, 84, 168];
// arr.push(100); //adds an element to the end of an array
// arr.pop(); //removes an element from the end of an array
// arr.unshift(99); //adds an element to the beginning of an array
// arr.shift(); //removes an element from the beginning of an array
// arr.reverse(); //reverses an array

y = arr.includes(42);
y = arr.indexOf(4);
y = arr.slice(2); //doesn't create a new array
// y = arr.splice(2); //creates a new array

//chaining methods
// y = arr.splice(1, 2).reverse().toString().charAt(1);
// console.log(y, arr);

//Array Nesting, Concat & Spread
//Nesting - Having array as an index inside another array
let z;

const fruits = ["mango", "oranges", "lemon"];
const berries = ["strawberry", "rasberry", "blueberry"];

// fruits.push(berries);
const allFruits = [fruits, berries];

//concat
z = fruits.concat(berries);

//spread operator(...)
z = [...fruits, ...berries];

//flatten arrays
const arr1 = [1, 2, [3, 4], 5, 6];
z = arr1.flat();

//static methods on array object
z = Array.isArray(fruits); //checks for array
z = Array.from("12345"); //forms an array
const a = 1,
  b = 2,
  c = 3;
z = Array.of(a, b, c); //forms an array

// console.log(z);

//Object Literals - A common data structure that holds key/value pairs
let x;

const person = {
  fname: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Uyo",
    state: "AKS",
  },
};

x = person.fname;
x = person["age"];
x = person.address.street;
person.age = 31;

delete person.address; //deletes a property
person.hasChildren = true; //adding a property

//assigning a function to a person property
person.greet = function () {
  console.log(`Hello, my name is ${this.fname}`);
};
// person.greet();
// x = person;

//object spread and methods
const todo = {}; //object literal
// const todo = new Object(); //object costruct
todo.id = 2;
todo.name = "buy milk";
todo.completed = false;

//nesting
const person1 = {
  fname: "Adam",
  address: {
    state: {
      city: "Uyo",
    },
  },
};

//using spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };

//arrays of objects
const todos = [
  { id: 1, task: "Exercise" },
  { id: 2, task: "clean up" },
  { id: 3, task: "Empty tarsh" },
];
x = todos[1].task;
x = Object.keys(todo);
x = Object.values(todo);
x = Object.entries(todo);
x = todo.hasOwnProperty("go");

//Destructuring & Naming
const todo1 = {
  id: 1,
  task: "Clean up",
  user: { name: "Udeme" },
};
const {
  id: todoId, //renaming
  task,
  user: { name }, //destructuring
} = todo1;

// console.log(todoId, task, name);

//Destructuring Arrays
const number1 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = number1;
// console.log(second, rest);

//JSON introduction
//JSON - JavaScript Object Notation
//Github API: api.github.com/users
// [
//   {
//     "name":"Joe",
//     "country":"Canada"
//   }
// ]

//converting a javascipt object to a JSON using JSON.Stringify
const info = {
  fname: "John",
  country: "USA",
  sex: "male",
};
const str = JSON.stringify(info);
console.log(str);

//converting a JSON to a javascipt object using JSON.parse
const obj = JSON.parse(str);
console.log(obj);
