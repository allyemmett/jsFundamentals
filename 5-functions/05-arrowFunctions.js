/*
    ARROW FUNCTIONS

    - arrow functions, aka fat arrow functions, are a more concise way to write a function expression - not a function declaration
        - Again, function expressions do NOT get hoisted 
*/

// BLOCK BODY ARROW FUNCTION
let hello = () => { // any parameters that your function may hold, will go inside of the set of parens.
    console.log("Hello World");
}
hello ();

// regular function expression
let hello = function () {

}

// CONCISE BODY ARROW FUNCTION
let hello = () => console.log("Hello World");

hello();

/*
    NOTE: concise body arrow functions return any value by default, whereas block body arrow functions do not - we need to implicitly specificy what value we want to return.
*/

let apples = (number) => console.log(`There are ${number} apples.`);
// when we have a single parameter, it is not necessary to include parens where the parameter would go
// parens ARE needed when no parameters or multiple are provided
apples(10);
apples(5);

// block body arrow function

let apples = (number) => {
    console.log(`There are ${number} apples`);
}

apples(10);
apples("ten");
appples(false);

//When your function needs to perform more complex tasks or multiple tasks, its preffered to use a block body arrow function. When your function needs to perform a singular  or a very simple task, a concise body arrow function is preferred.

