// Functions /  Methods in JS

// Function Declaration

//  1ST WAY TO DECLARE A FUNCTION IN JS

// function add (num1, num2, num3) {
// // console.log("Hello");
// // console.log("Mudasir");
// // console.log("Danial");
// // const a = 3, b = 5
// // console.log(a + b);
// // console.log(num1, num2, num3);
// const sum = num1 + num2 + num3
// console.log(sum);
// }

// add(23,101,303);

// Default parameters:

// function add (a = 10, b = 20 ){ 
// console.log(a);
// console.log(b);
// }
// add(23,56);

// Example: Parameters

// function checkAdultAge (age) {
// if (age >= 18 ) {
//     console.log("Age is Adult");

// } else {
//     console.log("You are not Adult!");
// }
// }
// checkAdultAge(45)

// Example: 02 : Calculating Area with Default parameter:

// function calculateArea (width , height = width) {
// const area = width * height;
// console.log(area)
// };
// calculateArea(5,34);


// Example: 03: Combiming Parameters And Arguments

// function introduce(firstName, lastName) {
// // const intro = `My name is ${firstName} ${lastName}`;
// // console.log(intro);
// };
// introduce("Abdul","Haseeb")


// Example: 04: Rest Parameters:
// function values(a,b,c,...d){
// console.log(a,b,c);
// console.log(d);
// };
// values(1,2,3,4,5,6,7,8,9,10)

// Example: Concatenating Strings:

// function concatinate(seperator, ...strings){
// const results = strings.join(seperator)
// console.log(results);
// };

// concatinate(" ", "Hello","World", "Mudasir");


// Example: 

// function trimvalue(value) {
//     console.log(value);
//     const finalValue = value.trim();
//     console.log(finalValue);
// };
// trimvalue("    Danial     ");


// Return Values in Function in JS;
function trimvalue(value) {
    // console.log(value);
    const finalValue = value.trim();
    return finalValue;
};
let result = trimvalue("    Danial     "); // ===> // finalValue

// console.log(result);


// Temperature Convertor
//  = 32°F

// function converttemp (celcius) {
// const fTemp = celcius * 9/5 + 32;
// return fTemp;
// };
// let results = converttemp(45);
// console.log(results);


// Example: Early Return on Condition:

// function findSquareRootOf(number) {
//     if (number < 0) {
//         return "Connot compute square root of negative number"
//     } else {
//         return Math.sqrt(number)
//     }
// };
// console.log(findSquareRootOf(-9));


// "Today's Assignment: BMI Calculator"






