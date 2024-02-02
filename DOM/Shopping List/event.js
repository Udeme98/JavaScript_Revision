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

const onClick = () => console.log("click event");

const onDoubleClick = () => {
  document.body.style.backgroundColor = "purple";
  document.body.style.color = "white";
};
const onRightClick = () => console.log("right click event");
const onMouseDown = () => console.log("mouse down event");
const onMouseUp = () => console.log("mouse up event");
const onMouseWheel = () => console.log("mouse wheel event");
const onMouseOver = () => console.log("mouse over event");
const onMouseOut = () => console.log("mouse out event");
const onDragStart = () => console.log("drag start event");
const onDrag = () => console.log("drag event");
const onDragEnd = () => console.log("drag end event");

//event listeners
head.addEventListener("click", onClick); //single click
head.addEventListener("dblclick", onDoubleClick); //double click
head.addEventListener("contextmenu", onRightClick); //right click event
head.addEventListener("mousedown", onMouseDown); //mouse down event
head.addEventListener("mouseup", onMouseUp); //mouse up event
head.addEventListener("wheel", onMouseWheel); //mouse wheel event
// head.addEventListener("mouseover", onMouseOver); //mouse over event
// head.addEventListener("mouseout", onMouseOut); //mouse out event
head.addEventListener("dragstart", onDragStart); //drag start event
head.addEventListener("drag", onDrag); //drag event
head.addEventListener("dragend", onDragEnd); //drag end event
// The Event Object(e)
function onClick2(e) {
  // consoSle.log(e);
  // console.log(e.target);
  console.log(e.type);
}

const firstItem = document.querySelector("li");

firstItem.addEventListener("click", onClick2);
//target - the element that triggerd the event
//currentTraget - The element that the event listener is attached to
//type- type of event that was triggered
//timeStamp - The time the event was triggered
//clientX - The x position of the mouse click relative to the window
//clientY - The y position of the mouse click relative to the window
//offsetX - The x position of the mouse click relative to the element
//offsetY - The y position of the mouse click relative to the element
//pageX - The x position of the mouse click relative to the page
//pageY - The y position of the mouse click relative to the page
//screenX - The x position of the mouse click relative to the screen
//screenY - The y position of the mouse click relative to the screen
