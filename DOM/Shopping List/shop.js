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
