/*
    - Loops offer us a quick and easy way to do something repeatedly or loop over something. 

    - There are many different kinds of loops, but they all do roughly the same thing:
        - The Loop will repeat until a specified condition evaluates to false

        -for Loop
            - takes in 3 parameters
                1. initial expression
                2. condition
                3. increment expression

                *** separated by semicolon

        -do while Loop
        -while Loop
        -for in
        -for of


*/

//  1. set var    2. condition to be met     4.increment
for (let i = 0;         i < 10;                  i++) { // i++ is same as i += i + 1
    // 3. for Loop body: code to be ran when condition is true
console.log(i);
}   

//CHALLENGE: use for Loop to count to 20 by 2

for (let x = 0; x <= 20; x += 2) {
    console.log(x);
}

//CHALLENGE: use for Loop to count from 10 to 0 by 1s

for (let y = 10; y >= 0; y--) {
    console.log(y)
}


//CHALLENGE: using a for Loop, count from 0, going down by 2, to -24

for (let i = 0; i >= -24; i -= 2) {
    console.log(i)
}

//CHALLENGE: using a for Loop, go through a name and display each letter individually

let name = "Ally"
//console.log(name.length);

//         0      <        4
for (num = 0; num < name.length; num++) {
    // or use console.log(name.charAt(num));
    console.log(name[num]);
}

// CHALLENGE: for Loop that adds all numbers from 1 to 50 (end with 1275)

let sum = 0;

for (let i = 1; i <= 50; i ++) {
    sum += i;
    console.log(sum);
}

