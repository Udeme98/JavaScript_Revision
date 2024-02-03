//Input Events
const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  //   console.log(e.target.value);
  heading.innerText = e.target.value;
}

function onChecked(e) {
  //   console.log(e.target.value);
  const isChecked = e.target.checked;
  heading.innerText = isChecked ? "checked" : "Not Checked";
}

// itemInput.addEventListener("keydown", onInput);
itemInput.addEventListener("input", onInput); //using input is more recommended
priorityInput.addEventListener("input", onInput); //select input
priorityInput.addEventListener("change", onInput); //select input
checkbox.addEventListener("input", onChecked); //checkboxes

//focus and blur
//focus - clicking in and activating the input
//blur - clicking out and deactivating the input
function onFocus() {
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "green";
}
function onBlur() {
  itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
