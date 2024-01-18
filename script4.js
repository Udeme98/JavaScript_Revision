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
    console.log("It is May");
    break;
  default:
    console.log("It's not the above month");
}

//using conditionals
switch (true) {
  case hours < 12:
    console.log("Good Morning");
    break;
  case hours < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Evening");
    break;
}

//Truthy & Falsy
