// function expressions are stored inside of a variable

let hello = function () { // this is an unnamed function, which is an anonymous function. Since it is stored within a function, a name is not needed.
    console.log("hi");
}

hello(); // use variable + parens to call function expression & run

/* 
    DIFFERENCES BETWEEN FUNCTION DECLARATIONS AND FUNCTION EXPRESSIONS
        - function declarations are hoisted
        - function expressions are NOT hoisted
*/

// declaration - CAN be hoisted
decTest();

function decTest() {
    console.log("It worked and I was hoisted");

}

// expression - CANNOT be hoisted
expTest();

let expTest = function (){
    console.log("didn't work and I was not hoisted.");
}

expTest(); // this will work, however
