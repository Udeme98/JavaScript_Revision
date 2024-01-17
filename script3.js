// Functions;
//creating a function
function sayHello() {
  console.log("Hello World");
}
// sayHello();

//passing parameters
function add(a, b) {
  console.log(a + b);
}
// add(1, 2);

//returning a value from a function
function sub(a, b) {
  return a - b;
}
const result = sub(10, 8);
// console.log(result);

//Parameter & arguments
//'user' is the parameter, 'Anonymous' is default argument
function registeredUser(user = "Anonymous") {
  return user + " is registered";
}
// console.log(registeredUser()); //'Udeme' is the argument

//Rest params- gives us an array of elements
function num(...nums) {
  return nums;
}
// console.log(num(1, 2, 3));

// objects as argments
function userObj(user) {
  return `The user ${user.name} with id ${user.id} is registered.`;
}
const user1 = {
  name: "King",
  id: 1,
};
// console.log(userObj(user1));

//Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}
// getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Global & Function Scope
// Scope - The current area or context of a specific piece of code

//Global variables - accessibe from anywhere
// const x = 100;
// console.log(x, "in global");

//function scope
function fscope() {
  const y = 50;
  console.log(y);
}
// fscope();

// variable shadowing - when a function scoped value of a variable overshadows it's global scope value

//Block Scope
const x = 10;

if (true) {
  // console.log(x); //global scope can be accessed any where
  const y = 200; //local scope
}

//Your variables should be blocked scoped, so avoid using var to declare variables
//'var' is a function scope, while 'let' and 'const' is block scope

//Nested Scope
function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();
}
// first();

//Function Declaration vs Expression
//Function Declaration
function addDollarSign(value) {
  return "$" + value;
}
// console.log(addDollarSign(100));

//Function Expression
const addPlusSign = function (value) {
  return "+" + value;
};
// console.log(addPlusSign(200));

//Arrow functions
const ad = (a, b) => {
  return a + b;
};

const st = (a, b) => a - b; //explicit return
const db = (a) => a * 2; //explicit return

//returning an object
const reObj = () => ({
  name: "Ud",
});

// console.log(ad(19, 9));
// console.log(st(19, 9));
// console.log(db(19, 9));
// console.log(reObj());

//Immediately Invoked Function Expression(IIFE)
//a way in JS that let's us create a function and invoke it at the same time
(function () {
  const user = "John";
  // console.log(user);
})();

//passing params
((name) => {
  // console.log("This is " + name);
})("John");

//named iife
(function hello() {
  // console.log("Hello");
})();

//Execution Context
// When you run JavaScript, a special environment is created to handle the transformation & execution of code.
//This is called execution context. It contains the currently running code and everything that aids its execution
// -Memory (Stores all your variables and functions as key/value pairs in memory)
// -Execution (Each line of code is executed line by line)

// Call Stack
//Stacks of functions to be executed
//Manages execution contexts
//Stacks are LIFO (last in, first out)
const first1 = () => {
  console.log("first...");
  second1();
};
const second1 = () => {
  console.log("second...");
  third1();
};
const third1 = () => {
  console.log("third...");
};
first1();
