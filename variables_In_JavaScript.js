// console.log("Hello World");
// =======================================================

// Variables in JavaScript
// ========================

// var is old but let and const are the modern feature of JS introduced in EcmaScript-2015 or ES-6.


// 01. var = variables created using var keyword can be redeclared with same name, can be
// reassigned value also and be hoisted also. JavaScript engine moves the declaration to the top
// of that variables which are created using var keyword.
// Scope of var variables is within the function i.e function scope

// 02. let = variables created using let keyword cannot be redeclared with same name, but can be
// reassigned also and cannot be hoisted. JavaScript engine cannot moves the declaration to
// the top of that variables which are created using let keyword.
// Scope of let variables is within the block {} i.e block scope

// 03. const = variables created using const keyword cannot be redeclared with same name, cannot be
// reassigned and cannot be hoisted. JavaScript engine cannot moves the declaration to the top
// of that variables which are created using var keyword. Value of const variables are fixed, we cannot update its value.
// Scope of const variables is within the block {} i.e block scope
// It is compulsory to initialize const variables at the time of its declaration.

// Const is predictible also because its value cannot be changed within the code
// but let and var is not predictible because its value may be changed within the program in between.

// ------------------------------------------------------------------------------------

var name = "Shubham";
console.log(name); // Output: Shubham

var name = "Sachin"; // Redeclared with same name and reassigned also
console.log(name); // Output: Sachin

city = "Dehradun";
console.log(city); // Hoisted also, JS engine move the declaration i.e var city to the top. // Output: Dehradun
var city;

// ------------------------------------------------------------------------------------

let age = 20;
console.log(age); // Output: 20

//let age = 30; // Cannot redeclared with same name (Output: Uncaught SyntaxError: Identifier 'age' has already been declared)

age = 40;
console.log(age); // Can be reassigned also // Output: 40

// console.log(mobile); // Cannot Hoisted, JS engine cannot move the declaration i.e let mobile to the top.
let mobile = "Samsung";
// Output: Error: Uncaught ReferenceError: Cannot access 'mobile' before initialization
// at app.js:41
// (anonymous) @ app.js:41

// ------------------------------------------------------------------------------------

const fatherName = "Mr. Lalit Singh";
console.log(fatherName); // Output: Mr. Lalit Singh

// fatherName = "Ram Kapoor"; // Cannot redeclared with same name and Cannot be reassigned also
// Output: Error: Uncaught TypeError: Assignment to constant variable.
// at variables_In_JavaScript.js:51

// console.log(hobby); // Cannot Hoisted, JS engine cannot move the declaration i.e const hobby to the top.
const hobby = "Dancing";

// Output: Error: Uncaught ReferenceError: Cannot access 'hobby' before initialization
// at variables_In_JavaScript.js:56

// =======================================================================================================================================================

// var scope in JavaScript (i.e function scope)

function varScope() {
  var name = "Ravi Verma";
  console.log(name);
  var mothername = "Rekha Verma";
  console.log(mothername); // Output: Rekha Verma
}
varScope(); // Output: Ravi Verma

console.log(name); // Output: Sachin because name is already declared in global scope in top so name is available within the function as well as
// outside the function but we can change the value of that name within function or outside function.

// console.log(mothername); // Output: Uncaught ReferenceError: mothername is not defined
// at variables_In_JavaScript.js:79 because mothername scope is within the function only but if we declared in global scope than we can access also outside
// the function.

// =======================================================================================================================================================

// let and const scope in JavaScript (Same for both i.e block scope)

function letScope() {
  let mobileNumber = 7088983522;
  console.log(mobileNumber);
  if (true) {
    let length = mobileNumber.toString().length;
    console.log(length);
    let color = "red";
    console.log(color);
  }
  console.log(length); // Output: 0
  //   console.log(color); // Output: variables_In_JavaScript.js:98 Uncaught ReferenceError: color is not defined
  //   at letScope (variables_In_JavaScript.js:98)
  //   at variables_In_JavaScript.js:100
  //   We can only access color variable within that scope. This is undefined outside its scope.
}
letScope(); // Output: 7088983522
// console.log(mobileNumber); // Output: Uncaught ReferenceError: mobileNumber is not defined
// at variables_In_JavaScript.js:104
// We can only access mobileNumber variable within that scope. This is undefined outside its scope.
// ============================================================================================================

// It is compulsory to initialize const variables at the time of its declaration.

const day; // Only declare not initialize
day = "FRIDAY"; // Now initialize
console.log(day); // Getting Error, i.e,
// Output: Uncaught SyntaxError: Missing initializer in const declaration

// ==================================================== THE END ========================================================================================
