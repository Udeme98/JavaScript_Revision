// Challenges pt.2

//challenges: Logic and control flow
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

// Challenges 1a: Array Methods
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
    };
  });
console.log(youngPeople);
