//The Console
// console.log("Hello World");
// console.warn("This is a warning");
// console.error("This is an error warning");

//Adding styles to your console
// const style = "padding:12px; background-Color:green; color:white;";
// console.log("%cUdeme", style);

// Comments - Comments are used for documenting your code, explaing what a code does and also to disable codes

//Variables - Containers for pieces of data (var, let & const)
// let age = 25;
// console.log(age);

// let arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);

//Data Types (Primitive)
// String, Number, Boolean, Null, Undefined, Symbol, BigInt;
// Data Types (Reference Types)
// -Function
// -Object literals
// -Arrays

// const names = "Udeme";
// console.log(names + " datatype is a " + typeof names);

//Type conversion
// let amount = "hello";

//convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

//convert number string
// amount = amount.toString();
// amount = String(amount);

//convert string to decimal
// amount = amount.parseFloat()

//converting to boolean
// amount = Boolean(amount);

//Not a Number (NaN)
// console.log(Math.sqrt(-1));
// console.log(undefined + undefined);
// console.log(1 + undefined);
// console.log(1 / "hello");

// console.log(amount, typeof amount);

//Operators - Operators are symbols we can use in expresssion to do certain things/operations
// - Arithmetic operators (+,-,*,/,%,++,--)
// - Assignment operators (=, +=, -=, etc)
// - Comparison operators (==, ===, !=, <, >, <=, >=)

//type coersion - coersion happens when you apply operations to values that have different types
// let x;
// x = 5 + "5";
// x = 5 + Number("5");
// x = 5 * "5";
// x = 5 + null;
// x = Number(null);
// x = Number(true);
// x = Number(false);
// x = 5 + true;

// console.log(x, typeof x);

//String: Methods & Properties
// .length
// .toUpperCase()
// .toLowerCase()
// .charAt()
// indexOf()
// subString()
// slice()
// trim()
// replace('old','new')
// includes()
// valueOf()
// split()

//Number: Methods & Properties
// toString();
// toFixed(2);
// toPrecision(2);
// toExponential();
// toLocaleString("en-US");
// Number.MAX_VALUE;
// Number.MIN_VALUE;

//Math object
// let x;
// x = Math.sqrt(9);
// x = Math.abs(5);
// x = Math.round(3.5);
// x = Math.ceil(4.5);
// x = Math.floor(4.5);
// x = Math.pow(2, 3);
// x = Math.max(2, 3, 6);
// x = Math.min(2, 3, 6);
// x = Math.random();
// x = Math.floor(Math.random() * 10 + 1);

// console.log(x);

//Date & Time
let x;
d = new Date();
// d = d.getTime();
x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getSeconds();
x = d.getMilliseconds();
x = `Today's date is ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

//getting your actual time/date at any location of your choice
x = Intl.DateTimeFormat("default").format(d);
x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

x = d.toLocaleString("default", { month: "short" });
// x = d.toLocaleString("default", {
//   weekend: "long",
//   month: "short",
//   day: "numeric",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
//   timeZone: "West_African_Time",
// });

console.log(x);
