// Template Literals (${}) in JavaScript
// ===================================

// This is the modern feature of JS introduced in EcmaScript-2015 or ES-6.

// =========================================================================================================

const name = "Shubham Singh";
const age = 25;
const greet = "Hello Satyam, how are you?";

console.log(name, age, greet); // Output: Shubham Singh 25 Hello Satyam, how are you?

// =========================================================================================================

// Now our task is to concat all these 3 variables using older way of J.S and out must be
// output: My Name is Shubham Singh. I am 25 years old. My message to satyam is Hello Satyam, how are you?.
// =========================================================================================================

console.log(
  "My Name is " +
    name +
    ". I am " +
    age +
    " years old. My message to satyam is " +
    greet +
    "."

  // output: My Name is Shubham Singh. I am 25 years old. My message to satyam is Hello Satyam, how are you?.

  // This is very difficult because may be we miss + sign and spaces.
);

// ==============================================================================================================

// Doing the same task using Template Literals

console.log(
  `My Name is ${name}. I am ${age} years old. My message to satyam is ${greet}.`
);

// Output: My Name is Shubham Singh. I am 25 years old. My message to satyam is Hello Satyam, how are you?.
// This is very simple now by using template literals (${})
// =========================================================================================================

// We can also perform some basic operations using template literal like,
// ======================================================================

let num1 = 100;
let num2 = 200;

console.log(`${num1 + num2}`); // Output: 300

console.log(`${100 + 524 - (89 / 748) * 457 + (65 % 10) / 100 + 98}`); // Output: 667.6743315508021

console.log(`Today's date and time is ${new Date()}`);
// Output: Today's date and time is Fri Sep 03 2021 15:19:52 GMT+0530 (India Standard Time)

// ======================================== THE END =================================================================
