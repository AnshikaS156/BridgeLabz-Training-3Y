// Q3 - Multi-Step Form with Next/Back and Validation
"use strict";

document.body.innerHTML = `
<main><h2>Student Registration</h2><form id="registrationForm" novalidate>
<section class="step"><label>Name</label><input id="studentName" type="text"><p class="error"></p></section>
<section class="step" hidden><label>Email</label><input id="studentEmail" type="email"><p class="error"></p></section>
<section class="step" hidden><label>Password</label><input id="studentPassword" type="password"><p class="error"></p></section>
<button type="button" id="back" disabled>Back</button>
<button type="button" id="next">Next</button></form><div id="summary"></div></main>`;
const style = document.createElement("style");
style.textContent = `body{font-family:Arial;margin:30px}main{max-width:420px;margin:auto}
label{display:block;margin:12px 0 5px}input{box-sizing:border-box;width:100%;padding:9px}
.error{color:red;min-height:18px}button{padding:8px 16px;margin-top:12px}`;
document.head.appendChild(style);

const steps = [...document.querySelectorAll(".step")];
const back = document.getElementById("back");
const next = document.getElementById("next");
let currentStep = 0;

function validateStep() {
    const input = steps[currentStep].querySelector("input");
    const error = steps[currentStep].querySelector(".error");
    const value = input.value.trim();
    let message = "";
    if (currentStep === 0 && !value) message = "Name is required.";
    if (currentStep === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        message = "Enter a valid email address.";
    if (currentStep === 2 && value.length < 6)
        message = "Password must contain at least 6 characters.";
    error.textContent = message;
    input.style.border = message ? "2px solid red" : "2px solid green";
    return !message;
}
function showStep(index) {
    steps.forEach((step, i) => step.hidden = i !== index);
    currentStep = index;
    back.disabled = index === 0;
    next.textContent = index === 2 ? "Submit" : "Next";
}
next.addEventListener("click", () => {
    if (!validateStep()) return;
    if (currentStep < 2) showStep(currentStep + 1);
    else {
        const name = document.getElementById("studentName").value.trim();
        const email = document.getElementById("studentEmail").value.trim();
        const safeName = name.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
        const safeEmail = email.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
        document.getElementById("summary").innerHTML =
            `<h3>Registration Complete</h3><p>Name: ${safeName}</p><p>Email: ${safeEmail}</p><p>Password: Submitted</p>`;
        document.getElementById("registrationForm").hidden = true;
    }
});
back.addEventListener("click", () => { if (currentStep > 0) showStep(currentStep - 1); });
showStep(0);
