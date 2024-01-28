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
// not too good method
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

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector("ul").appendChild(li);
};
newItem("Mango");
