// Q5 - Hoisting Lab: The Sequence Trap
"use strict";

// Original code would log undefined, then "Game started", then throw a
// ReferenceError because status is accessed before its let initialization.
const score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow functions are not hoisted like function declarations. They must be
// initialized before being called.
const announceArrow = () => console.log("Game started (arrow function)");
const startGameArrow = () => console.log(status);

announceArrow();
startGameArrow();

// Debugging note: place breakpoints on the calls and inspect the Scope panel.
// Function declarations are available before their textual position; let/const
// bindings are in the temporal dead zone until initialized.
