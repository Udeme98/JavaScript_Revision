// Functions;
//creating a function
function sayHello() {
  console.log("Hello World");
}
// sayHello();

//passing parameters
function add(a, b) {
  console.log(a + b);
}
// add(1, 2);

//returning a value from a function
function sub(a, b) {
  return a - b;
}
const result = sub(10, 8);
// console.log(result);

//Parameter & arguments
//'user' is the parameter, 'Anonymous' is default argument
function registeredUser(user = "Anonymous") {
  return user + " is registered";
}
// console.log(registeredUser()); //'Udeme' is the argument

//Rest params- gives us an array of elements
function num(...nums) {
  return nums;
}
// console.log(num(1, 2, 3));

// objects as argments
function userObj(user) {
  return `The user ${user.name} with id ${user.id} is registered.`;
}
const user1 = {
  name: "King",
  id: 1,
};
// console.log(userObj(user1));

//Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Global & Function scope
