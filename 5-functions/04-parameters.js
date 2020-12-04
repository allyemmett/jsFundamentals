/*
    PARAMETERS

        - place holders for data that we pass into the function when the function is called
                        (1)
        function hello(name) {
            console.log(`hello${name}`); 
        }                       (2)
                (3)
        hello("Ally"); 

        1. this is the parameter that the function is holding. This is just a placeholder.
        2. by calling the parammeter name, it will print the value given to "name" when the function was called
        3. this is the data that we're passing into the function, and that the parameter "name" will then hold.

        - parameters can be named anything, just like variables
*/

function hello(name) {
    console.log(`hello ${name}`); 
}                       
      
hello("Ally"); // parameter gets value from this string when calling function (basically let name = "Ally")

//--------------------------------------------------

function ally(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`)
}
ally("cheese pizza"); // if you have no parameter, then the function will not be able to accept any data

//--------------------------------------------------

function counter(number) {
    console.log("the console.log from the function ran", number)
}

for (let i = 0; i <= 10; i++) {
    //console.log(i);
    counter(i)
}

//CHALLENGE: write a function that holds 2 parameters. One parameter is for a first name, second is for last name. Inside of the function, reference both parameters in console.log statement that prints full name.
//              1       2
function name(first, last){
    // let myName = first + " " + last
    // or let myName = `${first} ${last}`; and could plug myName into console.log instead
    console.log(`${first}`)
    console.log(`${last}`)
}

//      1       2
name("Ally", "Emmett");
