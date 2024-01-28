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
