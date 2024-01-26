let output;

//getting child element
let parent = document.querySelector(".parent");
output = parent.children;
output = parent.children[2];
output = parent.children[2].innerText;
output = parent.children[2].className;

parent.children[1].innerText = "child two"; //changing a text
parent.children[1].style.color = "red"; //adding a style

parent.firstElementChild.innerText = "child one"; //changes the content of the first child element
parent.lastElementChild.innerText = "child three"; //changes the content of the last child element

//Get parent element from child
const child = document.querySelector(".child");
output = child.parentElement;

child.parentElement.style.border = "1px solid red";
child.parentElement.style.padding = "10px";

//siblings elements
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "orange";

console.log(output);
