const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  //className
  // console.log(itemList.className);
  // text.className = "dark card";

  // classList
  console.log(itemList.classList); //gives a tokenList

  text.classList.add("dark"); //adding a class
  text.classList.remove("card"); //removing a class
  text.classList.toggle("hidden"); //toggles a class
  text.classList.replace("card", "dark"); //replaces a class

  //change style directly
  itemList.style.color = "red";
}

document.querySelector(".button").onclick = run;
