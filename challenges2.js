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
calculator(2, 2, "+");
