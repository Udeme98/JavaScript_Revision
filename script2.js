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

console.log(z);
