//Input Events
const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  //   console.log(e.target.value);
  //heading.innerText = e.target.value;
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

//Form submision and form data object
const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();

  //getting the values submitted to the form
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;

  //form validation
  if (item === "" || priority === "0") {
    alert("Please fill in the inputs");
    return;
  }
  console.log(item, priority);
}
//form.addEventListener("submit", onSubmit);

//form data object
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // const item = formData.get("item");
  // const priority = formData.get("priority");

  const entries = formData.entries();

  //console.log(item, priority);
  //console.log(entries); // returns an ierator

  for (let entry of entries) {
    console.log(entry); //returns an array, containing the name and value
    console.log(entry[0]); //returns the name
    console.log(entry[1]); //returns the value
  }
}
form.addEventListener("submit", onSubmit2);
