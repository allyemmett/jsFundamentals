/*

- falsy values: A falsy value is a value that is considered false when encountered in a Boolean context (data type that can only be T / F)

    - there are six cases of falsy values in JavaScript
    1. false
    2. 0
    3. "string" w/ "", '', or ``
    4. null
    5. undefined
    6. NaN (not a number)

    - This means when JavaScript is expecting a boolean and is given one of these values, it will always evaluate to "falsy"
*/

let isOn = true;

if (isOn == true) {
        // this is the body of the if statement
    console.log("The light is on!");
}
// if (conditional) {if true, will run what is in this (then statement)}

// Read as: if "isOn" is true, run the body
if (isOn) {
    console.log('The light is still on');
}

let isOff = false;

// Read as: if "isOFf" is EQUAL to false, run the body
if (isOff == false) {
    console.log("The light is off now");
}

let weather = 65;

if (weather < 70) {
    console.log("Wear a jacket")
}
