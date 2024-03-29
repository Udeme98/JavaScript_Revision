// Higher Order Array Methods;

// forEach
const socials = ["Twitter", "LinkedIn", "Instagram"];
// socials.forEach((social) => console.log(social));
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

//using named functions
function listSocials(social) {
  console.log(social);
}
// socials.forEach(listSocials);

//using array of objects
const socialObjs = [
  { name: "James", social: "Twitter" },
  { name: "John", social: "Facebook" },
  { name: "Joe", social: "LinkedIn" },
  { name: "Jane", social: "Instagram" },
];
// socialObjs.forEach((socialObj) =>
// console.log(`${socialObj.name} - ${socialObj.social}`)
//);

//filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter((even) => {
  return even % 2 === 0;
});
// console.log(even);

const odd = numbers.filter((odd) => {
  return !(odd % 2 === 0);
});
// console.log(odd);

//using objects
const companies = [
  { name: "Company-1", category: "Finance", start: 2001 },
  { name: "Company-2", category: "Retail", start: 2002 },
  { name: "Company-3", category: "Auto", start: 2003 },
  { name: "Company-4", category: "Technology", start: 2004 },
  { name: "Company-5", category: "Finance", start: 2005 },
  { name: "Company-6", category: "Retail", start: 2006 },
  { name: "Company-7", category: "Auto", start: 2007 },
  { name: "Company-8", category: "Technology", start: 2008 },
  { name: "Company-9", category: "Finance", start: 2009 },
  { name: "Company-10", category: "Finance", start: 2010 },
];
//getting only retail company
const retailCoy = companies.filter((company) => company.category === "Retail");
// console.log(retailCoy);

//map
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNums = nums.map((num) => {
  return num * 2;
});
// console.log(doubleNums);

//using map to get just the company names
const coyNames = companies.map((coyName) => {
  return coyName.name;
});
// console.log(coyNames);

// array with just company and category
const nameCats = companies.map((nameCat) => {
  return [nameCat.name, nameCat.category];
});
// console.log(nameCats);

//chaining map methods
const sqrAndDoub = nums.map((num) => num ** 2).map((num) => num * 2);
// console.log(sqrAndDoub);

//chaining different array methods
const evenN_double = numbers
  .filter((even) => {
    return even % 2 === 0;
  })
  .map((evenD) => {
    return evenD * 2;
  });
// console.log(evenN_double);

//reduce - reduces array down to a single value
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// console.log(sum);

// using reduce method to find the total price
const cart = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
];
const totalPrice = cart.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);
console.log(totalPrice);
