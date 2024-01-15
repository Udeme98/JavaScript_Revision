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
let x;
x = 5 + "5";
x = 5 + Number("5");
x = 5 * "5";
x = 5 + null;
x = Number(null);
x = Number(true);
x = Number(false);
x = 5 + true;

console.log(x, typeof x);
