// console.log("Logic and Control Flow");
//if statement
if (true) {
  //   console.log("This is true");
}
//using equality
const x = 24;
const y = 25;
if (x < y) {
  // console.log("true");
}

// if-else
if (x > y) {
  console.log("true");
} else {
  //   console.log("false");
}

//else..if
const d = new Date();
const hour = d.getHours();

let t;
if (hour < 12) {
  t = "Good Morning";
} else if (hour < 18) {
  t = "Good Afternoon";
} else {
  t = "Good Evening";
}
// console.log(t);

//Nested if
if (hour < 12) {
  t = "Good Morning";
  if (hour === 6) {
    console.log("wake up");
  }
} else if (hour < 18) {
  t = "Good Afternoon";
} else {
  t = "Good Evening";
  if (hour >= 20) {
    // console.log("zzzz");
  }
}
// console.log(t);

//using multiple conditions
if (hour >= 20 && hour < 22) {
  //   console.log("It's time to study");
}

//Switch statement
const m = new Date(2022, 5, 10, 7, 0, 0);
const month = m.getMonth();
const hours = m.getHours();

switch (month) {
  case 1:
    console.log("It is January");
    break;
  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
  case 4:
    console.log("It is April");
    break;
  case 5:
    // console.log("It is May");
    break;
  default:
    console.log("It's not the above month");
}

//using conditionals
switch (true) {
  case hours < 12:
    // console.log("Good Morning");
    break;
  case hours < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Evening");
    break;
}

//Truthy & Falsy

// Falsy values
//- false
//- 0;
// '' or "" (Empty strings)
// null
// NaN
// undefined

//Truthy values
// Everything else that's not falsy
// true
// '0'- zero in a String
// ' ' - space in a string
// 'false' - false in a string
// [] - empty Array
// {} - empty Object
// function(){} - empty function

const z = true;
if (z) {
  // console.log("Truthy value");
} else {
  console.log("Falsy value");
}
// console.log(Boolean(z));

//caveats
let children = 0;

if (!isNaN(children)) {
  // console.log(`You have ${children} children`);
} else {
  console.log("Enter number of children");
}

//checking for empty array
let arr = ["post"];
if (arr.length > 0) {
  console
    .log
    // `you've got ${arr.length} ${arr.length === 1 ? "post" : "posts"} available`
    ();
} else {
  console.log("You have no post");
}

//checking for empty objects
let user = {};

if (Object.keys(user).length > 0) {
  console.log("List user");
} else {
  // console.log("No user");
}

//loose equality
//It's most prefarable to use double equals in your code

//Logical Operator

//Logical AND Operator
// console.log(10 > 6 && 8 > 10);

//Logical OR Operator
// console.log(10 > 6 || 8 > 10);

// &&- returns a first falsy value or the last value
let a;
a = 10 && 20;
a = "" && 0 && 20;
// console.log(a);

const arr1 = ["post"];
// arr1.length > 0 && console.log(arr1[0]);

// ||- returns a first truthy value or the last value
let b;
b = 10 || 20;
b = 0 || 20;
// console.log(b);

// ?? - returns the right side operand when the left is 'null' or 'undefined' only
let c;
c = 10 ?? 20;
c = null ?? 20;
// console.log(c);

//Logical Assignment
// ||= - assigns the right side value only if the left is a falsy value
let e = false;
// if (!e) {
//   e = 20;
// }

// e = e || 20;
e ||= 20; // using logical OR assignment
// console.log(e);

// &&= - assigns the right side value only if the left is a truthy value
// ??= - assigns the right side value only if the left is a 'null' or 'undefined' value

//Ternary Operator

const age = 20;
//using normal if statement
// if (age >= 18) {
//   // console.log("You can vote!");
// } else {
//   console.log("You cannot vote!");
// }

//using ternary operator
age >= 18 ? console.log("You can vote!") : console.log("You cannot vote yet");

//Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote);

// Multilple statement
const auth = true;

// let redirect = auth
//   ? (alert("Welcome"), "/dashboard")
//   : (alert("Please Login"), "/login");

// console.log(redirect);

// shorthand using &&
auth && console.log("Welcome to the dashboard");
