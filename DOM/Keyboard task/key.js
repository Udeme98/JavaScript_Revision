//my solution
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
// body.addEventListener("keypress", eKey);

//solutions:
// Method 1
// window.addEventListener("keypress", (e) => {
//const insert = document.getElementById("insert");

//insert.innerHTML = `
//    <div class="key">${e.key === " " ? "space" : e.key}<small>e.key</small></div>
//       <div class="key">${e.keyCode}<small>e.keyCode</small></div>
//       <div class="key">${e.code}<small>e.code</small></div>
//  `;
// });

//Method 2
function showKeyCodes(e) {
  const insert = document.getElementById("insert");
  insert.innerHTML = "";

  const keyCodes = {
    "e.key": e.key === " " ? "space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (const key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";
    const small = document.createElement("small");

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener("keypress", showKeyCodes);
