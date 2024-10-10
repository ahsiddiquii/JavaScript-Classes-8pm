// console.log("Running")

// Object Methods:

// Object.assign();

// Examples:
// 1
// const obj1 = {
//     name: "Abdul",
//     age: 30,
// };
// const obj2 = {
//     grades: "A+"
// };
// const obj3 = {
//     city: "New York"
// }

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// // Another way
// Object.assign(obj1, obj2, obj3);
// // console.log(obj1);
// console.log(obj4);

// 2 
// const deafultSettings = {
//     theme: "light",
//     fontSize: 16,
//     fontFamily: "Arial",
//     fontWeight: "normal",
//     lineHeight: 1.6,
// }
// const userSettings = {
//     theme: "dark",
//     fontSize: 18
// };

// const setting = Object.assign({}, deafultSettings, userSettings);
// console.log(setting);


// const obj1 = {
//     name: 'Abdul',
//     gender: "Male"
// };
// const obj2 = {
//     age: 20
// };
// const obj3 = {
//     name: "Aisha",
//     gender: "Female"
// };

// const stdData = Object.assign({}, obj3, obj2, obj1);
// console.log(stdData);


// Object.freeze();

// const settings = {
//     theme: "Light",
//     notifications: "true"
// }

// Object.freeze(settings);

// settings.notifications = "false";

// console.log(settings); // { theme: 'Light', notifications: 'true' }

// hasOwnProperty():

// const person = {
//     name: "Ali",
//     age : 25
// };

// const results = person.hasOwnProperty("city");
// const results2 = person.hasOwnProperty("name");
// console.log(results);
// console.log(results2);

// Spread Operator in Objects

// const obj1= {
//     x: 1
// };
// const obj2 = {
//     y: 1
// };
// const obj3 = {
//     z: 1
// };


// // const finalObj = {...obj1, ...obj2, ...obj3};
// // console.log(finalObj); 
// const finalObj2 = {obj1,obj2,obj3};
// console.log(finalObj2); 


// 2
// const deafultSettings  = {
//     theme: "light",
//     fontSize: 16,
//     fontFamily: "Arial",
//     fontWeight: "normal",
//     lineHeight: 1.6,
// };

// const userSettings = {
//     theme: "dark",
//     fontSize: 18,
// }

// const settings = {...deafultSettings, ...userSettings};
// console.log(settings);

// ----------------------------------------------------------------


// FUNCTIONS IN JS:

// There are 2 ways to make a function in JS
// Traditional way (function Keyword)
// Arraw function (Not necessary to use function keyword!);

// 1 

// function add (a, b, c,d){
// // function statement / code to be executed 
// console.log(a, b, c,d);
// };
// add(10,20,30);


// String Practice Program :
// let url = "http://res.cloudinary.com/dnpv5wew4/image/upload/v1715259721/cbpb41pwab39351qjb7r.png";

// cbpb41pwab39351qjb7r

// App ko is URL main say ye value nikalkar aik alag variable main store krna hay "cbpb41pwab39351qjb7r"






