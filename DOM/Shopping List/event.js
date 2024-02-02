// alert("DOM elements");

const clearBtn = document.querySelector("#clear");
const lis = document.querySelectorAll("li");

function clear() {
  // lis.forEach((li) => li.remove());
}

//JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert("Clear Button");
// };

//modern way - addEventLIstener
clearBtn.addEventListener("click", function () {
  //   alert("Hello World");
});

//using a named function
clearBtn.addEventListener("click", clear);

//removing an event listener using setTimeout
setTimeout(() => clearBtn.removeEventListener("click", clear), 5000);

//triggering an event listener automatically using setTimeout
setTimeout(() => clearBtn.click(), 5000);

//clearing the list items
clearBtn.addEventListener("click", clear);

// mouse events
const head = document.querySelector("#app-title");

function onEvent() {
  console.log("click event");
}
