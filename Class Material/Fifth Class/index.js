// 1- Write a program that:
// Declares two variables x and y, and assigns them any numbers.
// Swaps the values of x and y without using a third variable.
// Display the values of x and y after swapping using console.log().
// Solution :

// let a = 12;
// let b = 38;
// console.log(`Before Swaping: x: ${a}, y: ${b}`);
// // a = b - a * a;
// // a = b + (b - a);
// a = a + b;
// console.log(`After Swaping: x: ${a}, y: ${b}`);

// 2- Calculate the are of a Circle? Log the area to the console.

// Solution: Formula : pi * radius**2

// const pi = 3.14;
// let radius = 5;

// function calculateArea () {
// const area = pi * (radius**2);
// console.log(`Area of Circle: ${area}`);
// };
// calculateArea();


// 3- Write a program that:
// Declares a variable count inside a block {} using let.
// Try accessing count both inside and outside the block.
// Do the same thing using var and explain the difference in scope.

// Solution: 

// {
//     let count = 5;
//     console.log('Let Inside Block:', count);
// }
// console.log('Let Outside Block:', count);
// {
//     var count2 = 5;
//     console.log('Var Inside Block:', count2);
// }
// console.log('Var Outside Block:', count2);



// 4- Write a program where a variable name is defined globally. Then, declare the same name inside a block {} and a function. Display the values of the name in the global, block, and function scopes using console.log().

// Solution:

// let name = 'Global';
// console.log(`Global ${name}`);

// { 
//     let name = 'Block';
//     console.log(`Block ${name}`);
// };

// function displayScope() {
//     let name = 'Function';
//     console.log(`Function ${name}`);
// };
// displayScope();

// 5- Write a program that:
// Defines a function multiply() which multiplies two numbers.
// Inside this function, declare a variable using var and try to use it before its declaration.
// Log the result to the console before and after the variable declaration inside the function.

// 6- Write a program that:
// Declare a string " Hello JavaScript! "
// Trim the extra spaces
// Convert the string into uppercase, then into lowercase.
// Check if the string includes the word "JavaScript".
// If the word exists Find the index of the letter "JavaScript"
// Then replace it with "JS".

// Solution:

// let string = " Hello JavaScript! ";
// // console.log("Original String:", string);
// // string = string.trim().toUpperCase().toLowerCase()
// string = string.trim();
// let check = string.includes("JavaScript");
// console.log(check);

// let index = string.indexOf("JavaScript");
// string = string.replace("JavaScript", "Js");
// console.log(string);


// 10- Write a program that:
// Takes two strings, combines them using template literals (without using concatenation with +).
// Use string methods to convert the combined string into uppercase, remove any spaces at the start or end, and check the length of the resulting string.

// Solutuion:

// let str1 = "  Hello";
// let str2 = " World ";

// let combinedStr = `${str1} ${str2}`
// console.log(`Combined string: ${combinedStr}`);
// combinedStr = combinedStr.trim().toUpperCase();
// console.log(combinedStr);
// console.log(combinedStr.length);


// ------------------------------------------------

// MATHS IN JS:

// 1 = Math.PI

// const pi = Math.PI;
// console.log(pi); // Output: 3.141592653589793

// Example : 1 -  Calculate the Circumstance of a circle:
// 2 * PI * radius;

// const radius = 5;
// const sircumstance = 2 * Math.PI * radius;
// console.log(sircumstance.toFixed(2) ); // Output: 31.41592653589793

// 2 - Math.round();

// Examples: 

// 1 - Rounding a Positive Decimal:
// const num = 5.5;
// const rounded = Math.round(num);
// console.log(rounde)


// 2 - Rounding a Positive Decimal:
// const num = -5.4;
// const rounded = Math.round(num);
// console.log(rounded)

// 3 - Rounding Aftger Arthmetic Operation:

// const price = 10.43;
// const discount = 2.4;
// const finalAmount = Math.round(price-discount);
// console.log(finalAmount);

// 3 - Math.ceil().

// Examples:

// 1 - Ceiling a Positive Decimal:

// const num = 4.1;
// const ceiledValue  = Math.ceil(num);
// console.log(ceiledValue);

// 1 - Ceiling a Negative Decimal:

// const num = -4.8;
// const ceiledValue  = Math.ceil(num);
// console.log(ceiledValue);


// 4 - Math.floor()

// Examples: 

// // 1 - Rounding Down a Positive Decimal:
// const num = 4.7;
// const rounded =  Math.floor(num)
// console.log(rounded);

// 5 - Math.min();

// Examples: 

// 1- Finding minimum:

// console.log(Math.min(99,323,12,10));

// 6 -  Math.max();
// console.log(Math.max(99,323,12,10));

// 7- Math.random().

// examples: 
// 1 .
// const randomNumber = Math.random();
// console.log(randomNumber);

//  2 - Random Number Between 1 and 10;

// const randomNumBtw110 = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumBtw110);
