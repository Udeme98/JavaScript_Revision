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
