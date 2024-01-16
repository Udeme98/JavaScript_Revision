// console.log("Challenges section");

//Challenge 1: Strings
// Capitalize the first word of 'developer', so only the first letter is capitaized
const myString = "developer";
const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// console.log(myNewString);

//Challenge 2: Numbers
//create a variable 'x' thats a random number between 1 - 100.
//'y' is between 1 - 50
//create a variable for sum, difference, product, quotient/remainder
let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

let sumOutput = `${x} + ${y} = ${x + y}`;
let differenceOutput = `${x} - ${y} = ${x - y}`;
let productOutput = `${x} * ${y} = ${x * y}`;
let quotientOutput = `${x} / ${y} = ${x / y}`;
let rmOutput = `${x} % ${y} = ${x % y}`;

// console.log(sumOutput);
// console.log(differenceOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);

//Challenge 3a: Arrays
//Mutate the given array to shown a specified result: [6,5,4,3,2,1,0]
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();
// console.log(arr);

//Challenge 3b: Arrays
//combine both arrays and display it without repeating the 5
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
arr3.splice(5, 1);
// console.log(arr3);

//Challenge: Objects

//step 1
const library = [
  {
    title: "Happiness",
    author: "Jane",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Living",
    author: "Joe",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Food",
    author: "John",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

//step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//step 3
const { title: firstBook } = library[0];

//step 4 - turning the library object into a JSON string
const strFy = JSON.stringify(library);

console.log(strFy);
