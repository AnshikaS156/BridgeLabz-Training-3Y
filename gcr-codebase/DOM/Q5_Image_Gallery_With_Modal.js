// Q5 - Image Gallery with Modal Preview
"use strict";

document.body.innerHTML = `<main><h2>Image Gallery</h2><div id="gallery" class="grid"></div>
<div id="modal" class="modal" hidden><div class="modal-content">
<button id="close">×</button><img id="largeImage" alt="Selected image"></div></div></main>`;
const style = document.createElement("style");
style.textContent = `body{font-family:Arial;margin:25px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.grid img{width:100%;height:160px;object-fit:cover;cursor:pointer;border-radius:6px}
.modal{position:fixed;inset:0;background:#000c;display:flex;align-items:center;justify-content:center;z-index:999}
.modal[hidden]{display:none}.modal-content{position:relative}.modal-content img{max-width:85vw;max-height:80vh}
#close{position:absolute;right:-30px;top:-30px;font-size:26px}`;
document.head.appendChild(style);

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const largeImage = document.getElementById("largeImage");
for (let i = 1; i <= 6; i++) {
    const image = document.createElement("img");
    image.src = `https://picsum.photos/id/${20 + i}/500/350`;
    image.alt = `Gallery image ${i}`;
    gallery.appendChild(image);
}
gallery.addEventListener("click", event => {
    if (event.target.tagName !== "IMG") return;
    largeImage.src = event.target.src.replace("/500/350", "/1000/700");
    largeImage.alt = event.target.alt;
    modal.hidden = false;
});
function closeModal() { modal.hidden = true; largeImage.removeAttribute("src"); }
modal.addEventListener("click", closeModal);
document.querySelector(".modal-content").addEventListener("click", event => {
    // Prevent a click inside the modal from bubbling to the overlay.
    event.stopPropagation();
});
document.getElementById("close").addEventListener("click", closeModal);
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
});
