// Q7 - Detect Mouse Path & Coordinates Logger
"use strict";

document.body.innerHTML = `<main><h2>Mouse Coordinates Logger</h2>
<p>Move inside the box; double-click to place a red dot.</p>
<p id="coordinates">clientX: --, clientY: --</p><div id="trackingBox"></div></main>`;
const style = document.createElement("style");
style.textContent = `body{font-family:Arial;margin:25px}#trackingBox{width:400px;height:400px;max-width:95%;
border:2px solid #333;background:#f2f2f2;position:relative;overflow:hidden}
.red-dot{width:10px;height:10px;border-radius:50%;background:red;position:absolute;transform:translate(-50%,-50%);pointer-events:none}`;
document.head.appendChild(style);

const box = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");
box.addEventListener("mousemove", event => {
    coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});
box.addEventListener("dblclick", event => {
    const rect = box.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "red-dot";
    // Convert viewport coordinates into coordinates relative to the box.
    dot.style.left = `${event.clientX - rect.left}px`;
    dot.style.top = `${event.clientY - rect.top}px`;
    box.appendChild(dot);
});
