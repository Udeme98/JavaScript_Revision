const body = document.querySelector("body");

function eKey(e) {
  const items = document.querySelectorAll(".key");

  items.forEach((tem, index) => {
    if (index === 0) {
      tem.textContent = e.key;
    } else if (index === 1) {
      tem.textContent = e.keyCode;
    } else {
      tem.textContent = e.code;
    }
  });
}
body.addEventListener("keypress", eKey);
