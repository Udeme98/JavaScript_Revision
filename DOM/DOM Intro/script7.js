// Document Object Model(DOM) - What is the DOM?
// - Programming interface for web/HTML elements
// - Structure that we can interact with via JavaScript
// - Includes tags, attributes, text node, etc
// - Represented as a tree structure

// console.dir(window.document);
// console.dir(document);
// HTMLCollection - similar to an array!

//DoM methods
// document.write("Hello Udeme");
// console.log(document.getElementById("main"));
const main = document.getElementById("main");
// main.innerHTML = 'Hello';
// document.querySelector("#main h1").innerText = "Udeme";

// DOM Properties
let output;

output = document.all[11];
output = document.all.length;
output = document.documentElement;

output = document.head;
output = document.body;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.characterSet;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;

output = document.link;
output = document.images;

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);

//selectors used for single elements
// document.querySelector()
let select;
select = document.querySelector("h1"); //select a single element
select = document.querySelector("#app-title"); // selects a single id
select = document.querySelector(".container"); //selects a single class
select = document.querySelector("input[type='text']"); //selects an attribute
select = document.querySelector("li:nth-child(2)"); //using a pseudo selector

//console.log(select);

//usimg this methods on other elements
const list = document.querySelector("ul");
const firstItem = list.querySelector("li");
// console.log(firstItem);

//selectors used for multiple elements
// document.querySelectorAll()
const listItems = document.querySelectorAll(".items"); // returns a nodelist
listItems[0].style.color = "red";

console.log(listItems[0]);

//Old Methods
// - document.getElementsByClassName()
// - document.getElementsByTagName()
