// Q5 - Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    // The system is secure only when every required condition is true.
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Use ! to display the opposite state when the conditions are not satisfied.
    if (isSecure && !(!isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside)) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

// Test a secure configuration
checkSecurity();

// Change one condition and test an unsafe configuration
isWindowClosed = false;
checkSecurity();

// Restore the window and test with the alarm off
isWindowClosed = true;
isAlarmOn = false;
checkSecurity();
