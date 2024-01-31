// Document Object Model(DOM) - What is the DOM?
// - Programming interface for web/HTML elements
// - Structure that we can interact with via JavaScript
// - Includes tags, attributes, text node, etc
// - Represented as a tree structure

// console.dir(window.document);
// console.dir(document);
// HTMLCollection - similar to an array!

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
