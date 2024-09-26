// console.log("Helo");

// Alert Box
// if (a == 3) {
//     alert("Success")
// }

// Prompt Box:

// 1:
// let name = prompt("Write your name!");
// console.log(name);
// console.log(typeof name);

// 2:
// let age = parseInt(prompt("Write your age!"));
// console.log(age);
// console.log(typeof age);

// let age = +prompt("Write your age!");
// console.log(age);
// console.log(typeof age);

// 3 
// let name = prompt("Write your name!", "MR");
// console.log(name);
// console.log(typeof name);


// Confirm Box

// let confirmation = confirm("Are you sure to delete this?");
// console.log(confirmation);
// console.log(typeof confirmation);

// if(confirmation === true){
// alert("Item Deleted Successfully!")
// }else{
//     alert("Item")
// }


// ------------------------------------------------------------------


// ARRAYS IN JAVASCRIPT:

// let array = [1,2,3,4,5, "HAseeb", true, {name: "Danial"}, null, undefined];
// console.log(array[0]);
// array[0] = 0;
// console.log(array);

// Another way to create an Array:

// let array = new Array(1,2,3,4,5);
// console.log(array);

// Array Destructuring:

// let students = ["Mudasir", "Danial", "Syed"];

// let [std1, std2, std3] = students;
// console.log(std1,std2,std3);

// ARRAY METHODS / FUNCTIONS:

// 1 - Concat

// let marvelHeros = ['thor', "ironman", "Spiderman"];
// let dcHeros = ['superman', "batman", "wonderwoman"];

// let allHeros = marvelHeros.concat(dcHeros);
// console.log(typeof allHeros);

// console.log(allHeros);

// 2 - Spread Operator: (...) ES6 2015

// let allHeros = [...marvelHeros, ...dcHeros];
// console.log(allHeros);

// 2- Array.flat():

// let array = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12], 13, [14, 15]];
// let anotherArray = array.flat();
// console.log(anotherArray);
// console.log(array);

// 3- Array.isArray():

// let name = "Mudasir";
// let name2 = ["Mudasir"];

// console.log(Array.isArray(name2));

// 4 - length:

// let array = [1, 2, 3, 4, 5, "HAseeb", true, { name: "Danial" }, null, undefined];
// console.log(array.length);

// let array2 = [];
// let array3 = "Haseeb"

// console.log(array2.length);

// if (Array.isArray(array3)) {
//     if (array3.length > 0) {
//         console.log("Data received");
//     }
// }

// Array.from();

// let name = "Danial";
// let array = Array.from(name);
// console.log(name);
// console.log(array);

// Array.of():

// let score_1 = 100;
// let score_2 = 200;
// let score_3 = 300;

// let scores = Array.of(score_1, score_2, score_3);
// console.log(scores);











