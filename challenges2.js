// console.log("challenges pt.2");

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
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

console.log("Hello World");
