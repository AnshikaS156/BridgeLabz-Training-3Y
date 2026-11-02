// Q9 - Form Submit Blocker with preventDefault() and Live Errors
"use strict";

document.body.innerHTML = `<main><h2>Registration Form</h2><form id="userForm" novalidate>
<label>Name</label><input id="name" type="text"><small id="nameError" class="error"></small>
<label>Email</label><input id="email" type="text"><small id="emailError" class="error"></small>
<label>Password</label><input id="password" type="password"><small id="passwordError" class="error"></small>
<button type="submit">Submit</button></form><p id="success" aria-live="polite"></p></main>`;
const style = document.createElement("style");
style.textContent = `body{font-family:Arial;margin:25px}main{max-width:420px;margin:auto}
label{display:block;margin:12px 0 5px}input{box-sizing:border-box;width:100%;padding:9px}
.error{display:block;color:#c62828;min-height:18px}button{padding:9px 18px;margin-top:12px}#success{color:green;font-weight:bold}`;
document.head.appendChild(style);

const form = document.getElementById("userForm");
const fields = [
    { input: document.getElementById("name"), error: document.getElementById("nameError"),
      valid: value => value.trim() !== "", message: "Name is required." },
    { input: document.getElementById("email"), error: document.getElementById("emailError"),
      valid: value => value.trim() !== "" && value.includes("@"), message: "Email is required and must contain @." },
    { input: document.getElementById("password"), error: document.getElementById("passwordError"),
      valid: value => value.length >= 6, message: "Password must contain at least 6 characters." }
];
function validateField(field) {
    const isValid = field.valid(field.input.value);
    field.error.textContent = isValid ? "" : field.message;
    field.input.style.border = isValid ? "2px solid green" : "2px solid red";
    return isValid;
}
// As the user corrects a field, its error is removed immediately when valid.
fields.forEach(field => field.input.addEventListener("input", () => {
    validateField(field);
    document.getElementById("success").textContent = "";
}));
form.addEventListener("submit", event => {
    // Stop the browser from submitting/reloading before validation completes.
    event.preventDefault();
    const allValid = fields.map(validateField).every(Boolean);
    if (allValid) {
        document.getElementById("success").textContent = "Form Submitted Successfully";
        form.reset();
        fields.forEach(field => { field.input.style.border = ""; field.error.textContent = ""; });
    } else {
        document.getElementById("success").textContent = "";
    }
});
