// Q1 - Dynamic Product List Manager
"use strict";

document.body.innerHTML = `
<main><h2>Product List Manager</h2>
<input id="productInput" placeholder="Enter product name">
<button id="addProduct">Add Product</button>
<ul id="productList"></ul><p id="message"></p></main>`;

const style = document.createElement("style");
style.textContent = `body{font-family:Arial;margin:30px} main{max-width:550px;margin:auto}
li{display:flex;gap:8px;align-items:center;margin:12px 0}
.product-name{flex:1} input,button{padding:8px} `;
document.head.appendChild(style);

const input = document.getElementById("productInput");
const list = document.getElementById("productList");
const message = document.getElementById("message");
let editingItem = null;
let originalText = "";

function addProduct(name) {
    if (!name.trim()) { message.textContent = "Enter a product name."; return; }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "product-name";
    span.textContent = name.trim();
    const edit = document.createElement("button");
    edit.textContent = "Edit"; edit.dataset.action = "edit";
    const remove = document.createElement("button");
    remove.textContent = "Delete"; remove.dataset.action = "delete";
    li.append(span, edit, remove);
    list.appendChild(li);
    message.textContent = "";
}
document.getElementById("addProduct").addEventListener("click", () => {
    addProduct(input.value); input.value = ""; input.focus();
});

// One parent listener handles Edit/Delete for all current and future list items.
list.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const li = button.closest("li");
    if (button.dataset.action === "delete") {
        if (editingItem === li) saveEdit();
        li.remove();
    } else {
        if (editingItem && editingItem !== li) saveEdit();
        if (editingItem === li) return;
        editingItem = li;
        const span = li.querySelector(".product-name");
        originalText = span.textContent;
        const editInput = document.createElement("input");
        editInput.className = "edit-input";
        editInput.value = originalText;
        span.replaceWith(editInput);
        editInput.focus(); editInput.select();
    }
});
function saveEdit() {
    if (!editingItem) return;
    const editInput = editingItem.querySelector(".edit-input");
    if (editInput) {
        const span = document.createElement("span");
        span.className = "product-name";
        span.textContent = editInput.value.trim() || originalText;
        editInput.replaceWith(span);
    }
    editingItem = null; originalText = "";
}
// Clicking outside the item being edited automatically saves it.
document.addEventListener("click", event => {
    if (editingItem && !editingItem.contains(event.target)) saveEdit();
});
list.addEventListener("keydown", event => {
    if (!event.target.matches(".edit-input")) return;
    if (event.key === "Enter") saveEdit();
    if (event.key === "Escape") { event.target.value = originalText; saveEdit(); }
});
addProduct("Wireless Mouse");
addProduct("Keyboard");
