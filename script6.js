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
console.log(retailCoy);
