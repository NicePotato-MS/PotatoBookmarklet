function makeId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
elmnt.onmousedown = dragMouseDown;
function dragMouseDown(e) {

  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  // set the element's new position:
  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
  // stop moving when mouse button is released:
  document.onmouseup = null;
  document.onmousemove = null;
}
}

// Make the script's UUID
var pUUID = makeId(8);
var body = document.querySelector('body');


// Create main body
var pTools = document.createElement("div");
pTools.style.position = "fixed";
pTools.style.width = "100px";
pTools.style.height = "100px";
pTools.style.background = "#17202A";
pTools.style.color = "white";
pTools.style.cursor = "move";
pTools.id = "potatoTools";

body.appendChild(pTools);

dragElement(pTools);