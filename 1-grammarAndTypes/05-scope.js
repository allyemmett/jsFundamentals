/* 
    SCOPES
*/

let x = 12; 

function scope() { //creating local scope will allow to reuse variable name (x)
    let x = 33;
    console.log(x); // 33

}

scope(); // global scope, calling the function by its name, followed by parens, 'invokes' or calls the function - telling it to run 
console.log(x); // 12

//--------------------------------

let y = 12;

function newScope() {
    y = 33; // Here y is reinitializaed. without using "let," not declaring a new variable. Just referencing something in global document
    console.log(y) // 33
}

newScope();
console.log(y); // 33 because keeps reinitialization from in the function

/*
    VAR vs LET
        - while var and let seem to operate the same, they have a lot of the same functionality (both allow us to declare and initialize variable) - they also behave differently from one another
            - var is scoped to the nearest function body {}, and let is scoped to the nearest encolosing body {}
*/

//var testOne = "this is a test";
//var testTwo = "this is another test";

//console.log(testOne, testTwo);

// VAR
var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45; // scopes to nearest function so reinitializes x
        console.log(x); // 45 because scopes to FUNCTION w/ var
    }
    console.log(x); // 45
}

varTest();
console.log(x); // 12

// LET

let y = 12; 

function letTest() {
    var y = 33;
    if (true) {
        let y = 45; // LET scopes to nearest enclosed body
        console.log(y); // 45
    }
    console.log(y); // 33, NOT reinitialized with let
}

letTest();
console.log(y); // 12

