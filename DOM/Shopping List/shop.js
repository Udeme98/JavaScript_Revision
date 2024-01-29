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
