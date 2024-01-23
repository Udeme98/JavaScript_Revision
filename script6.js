// Higher Order Array Methods;

// forEach
const socials = ["Twitter", "LinkedIn", "Instagram"];
// socials.forEach((social) => console.log(social));
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

//using named functions
function listSocials(social) {
  console.log(social);
}
socials.forEach(listSocials);

//using array of objects
const socialObjs = [
  { name: "James", social: "Twitter" },
  { name: "John", social: "Facebook" },
  { name: "Joe", social: "LinkedIn" },
  { name: "Jane", social: "Instagram" },
];
