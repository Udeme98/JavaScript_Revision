// DOM Selectors - Single elements
// Methods to more easily select elements from the DOM
//document.getElementById()
// console.log(document.getElementById("app-title"));
// console.log(document.getElementById("app-title").id);

//get attributes
// console.log(document.getElementById("app-title").getAttribute("id"));

//set attributes
// document.getElementById("app-title").title = "shopping list";
document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");

//getting/changing the content of an element
title.textContent = "Shopping";
title.innerText = "List"; //changing the content of an element
title.innerHTML = "<strong>Shopping</strong>"; //using HTML tags of an element

//changing the element styles
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

console.log(title);
