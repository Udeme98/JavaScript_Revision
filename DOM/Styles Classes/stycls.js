const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  //className
  console.log(itemList.className);
  text.className = "dark card";
}

document.querySelector(".button").onclick = run;
