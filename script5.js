// Loops and higher array methods

// For loops
//syntax:
// for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
//   statement;
// }
// initial expression - Initializes a variable
// condition expression -conndition that a loop will continue to run as long as it is met or until the condition is false
// increment expression- Expression that will be executed after each iteration of the loop. usually increments the variable
// Statement - Code that will be executed, each time the loop is ran. To execute a 'block' of code, use '{}' syntax
// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log("I am seven");
//   } else {
//     console.log(i);
//   }
// }

//nested loops
for (let i = 0; i <= 5; i++) {
  console.log(i);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
