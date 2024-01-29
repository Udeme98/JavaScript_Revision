// Replacing elements
function firstElement() {
  const first = document.querySelector("li");

  const newItem = document.createElement("li");
  newItem.innerText = "Replaced First";

  first.replaceWith(newItem);
}
firstElement();

//replacing second item using outerHTML
function secondElement() {
  const second = document.querySelector("li:nth-child(2)");
  second.outerHTML = "<li>Replaced</li>";
}
secondElement();

//replacing all the items
function replaceAll() {
  const lis = document.querySelectorAll("li");
  lis.forEach((item, index) =>
    index === 1
      ? (item.outerHTML = "<li>Second</li>")
      : (item.outerHTML = "<li>Replaced</li>")
  );
}
replaceAll();

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
