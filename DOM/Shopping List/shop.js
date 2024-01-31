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

//Create and Append Elements
//document.createElement
const div = document.createElement("div"); //creates an element
div.className = "new-class"; //adds a new class
div.id = "new-id"; //adds a new id
div.setAttribute("title", "Shopping"); //adds an attribute

//appending an innerText using appendChild()
const text = document.createTextNode("Hello World"); //creates an innerText
div.appendChild(text);
// document.body.appendChild(div);

// document.querySelector("ul").appendChild(div);

// console.log(div);

//innerHTML & CreateElement
// not too concise method
const addListItem = (item) => {
  const li = document.createElement("li");
  li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
  document.querySelector("ul").appendChild(li);
};
// addListItem("Mango");

//new and more concise method
const newItem = (item) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const icon = createIcon("fa-solid fa-xmark");
  const button = createButton("remove-item btn-link text-red");

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector("ul").appendChild(li);
};
newItem("Mango");

// Refactoring to Multiple Functions
//button function
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}
//icon function
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

// Insert Elements, Text & HTML
// insert adjacent element
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.innerText = "insert adjacent element";

  filter.insertAdjacentElement("afterend", h1);
}
// insertElement();

// insert Adjacent text
function insertText() {
  const item = document.querySelector("li:nth-child(2)");
  item.insertAdjacentText("afterbegin", "insert Adjacent text");
}
// insertText();

// insert Adjacent HTML
function insertHTML() {
  const clBtn = document.querySelector("#clear");
  clBtn.insertAdjacentHTML("beforebegin", "<p>Clear me</p>");
}
// insertHTML();

// insert before
function insertItemBefore() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.textContent = "insertBefore";

  const thirdItem = document.querySelector("li:nth-child(3)");

  ul.insertBefore(li, thirdItem);
}
// insertItemBefore();

//challenges: DOM
// Custom insertAfter() challenge - create an insertAfter() function
function insertAfter(newEl, oldItem) {
  const ul = document.querySelector("ul");

  newEl = document.createElement("li");
  newEl.textContent = "Inserts After";

  oldItem = document.querySelector("li:nth-child(3)");
  oldItem.insertAdjacentElement("afterend", newEl);
}
// insertAfter();

//Brad's solution
function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}
const li = document.createElement("li"); //new element to insert
li.textContent = "insert me after";

const oldItem = document.querySelector("li:nth-child(3)"); // existing element to insert after

insertAfter(li, oldItem);

// Replacing elements
function firstElement() {
  const first = document.querySelector("li");

  const newItem = document.createElement("li");
  newItem.innerText = "Replaced First";

  first.replaceWith(newItem);
}
// firstElement();

//replacing second item using outerHTML
function secondElement() {
  const second = document.querySelector("li:nth-child(2)");
  second.outerHTML = "<li>Replaced</li>";
}
// secondElement();

//replacing all the items
function replaceAll() {
  const lis = document.querySelectorAll("li");
  lis.forEach((item, index) =>
    index === 1
      ? (item.outerHTML = "<li>Second</li>")
      : (item.outerHTML = "<li>Replaced</li>")
  );
}
// replaceAll();

//replacing child
function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.innerText = "Shopping List";
  h2.id = "title";

  header.replaceChild(h2, h1);
}
// replaceChildHeading();

//removing items/elements
// remove() - called on the element we want to remove
// removeChild() - called on the parent element, then you pass in the element we want to remove
function removeElement() {
  const fltBtn = document.querySelector(".filter");
  fltBtn.remove();
}
// removeElement();

// removeChild()
function remChild() {
  const ul = document.querySelector("ul");
  const firstItem = document.querySelector("li:first-child");

  ul.removeChild(firstItem);
}
// remChild();

function removeItem(item) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${item}`);

  ul.removeChild(li);
}
// removeItem(3);

function removeItem2(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNumber - 1];

  ul.removeChild(li);
}
// removeItem2(3);

function removeItem3(itemNumber) {
  const li = document.querySelectorAll("li");
  li[itemNumber - 1].remove();
}
// removeItem3(1);

//refacturing removeItem3 to arrow fxn
const removeItem4 = (item) =>
  document.querySelectorAll("li")[item - 1].remove();
removeItem4(1);
