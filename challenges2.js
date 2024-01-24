// Challenges pt.2

//challenge: Logic and control flow
const calculator = (num1, num2, operator) => {
  let res;
  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    default:
      res = "Please enter only +,-,*,/";
  }
  console.log(res);
  return res;
};
// calculator(2, 2, "+");

//challenge: conditionals/loop
//FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    // console.log("Buzz");
  } else if (i % 3 === 0) {
    // console.log("Fizz");
  } else {
    // console.log(i);
  }
}

// Challenge 1: Array Methods
// create an array containing the name and email of people 25 and younger
const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Boe",
    email: "bob@gmail.com",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "john@gmail.com",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    age: 23,
  },
];
// solution: using filter method
const youngPeople = people
  .filter((young) => {
    return young.age <= 25;
  })
  .map((young) => {
    return {
      name: `${young.firstName} ${young.lastName}`,
      age: `${young.age}`,
      email: young.email,
    };
  });
// console.log(youngPeople);

// Challenge 2: Array Methods
// Add all the positive numbers in the array:
const numbs = [2, -30, 50, 20, -12, -9, 7];

//solution: using filter & map
const sumPosN = numbs
  .filter((numb) => numb > 0)
  .reduce((acc, cur) => {
    return acc + cur;
  });
// console.log(sumPosN);

// challenge 3: array methods
// Capitalize the first letter in each word in the array
const words = ["coder", "programmer", "developer"];
const capsWord = words.map((word) => {
  return word[0].toUpperCase() + word.substring(1);
});
console.log(capsWord);
