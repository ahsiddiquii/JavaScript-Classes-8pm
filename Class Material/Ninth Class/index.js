// OBJECTS:

//Creating Objects:
// 1- {}
// 2- new Object()

// Example :
// 1
// let student = {
//     name: "Mudasir",
//     age: 8,
//     isStudent: true,
//     subjects: ["English", "Maths"]
// };
// console.log(student);


// 2
//Objects with nested Objects:

// const company = {
//     name: "Tech Company",
//     address: {
//         street: "rrwerwere",
//         city: "Karachi",
//         country: "Pakistan"
//     }
// };
// console.log(company.name);
// console.log(company.address.city);

// 3
//Object with Special Property Name:

// const user = {
//     name: "Danial",
//     "full name": "Mudasir",
//     age: 30,
//     "height": "5.7"
// };
// console.log(user.name);
// console.log(user["full name"]);
// console.log(user.height);


// 2nd Wayfor creating Objects:

// let car = new Object();
// car.model = "Corolla";
// car.year = "2010";
// car.make = "Toyota"
// console.log(car);
// console.log(car.make);

//Object with Methods/ Functions
// Examples:
//1 
// const user = new Object();
// user.name = "Danial";
// user.greetings = function() {console.log("Hello");}
// console.log(user);
// user.greetings();

// 2
// let obj = {
//     name : "Ali",
//     age: 9,
//     greetings : function(){
//         console.log("Hi");
//     }
// }
// obj.greetings()


// Dynamic Property Names:
// Examples:
// 1
// let prpertyName = prompt("Enter Some Property Name");
// let name = prompt("Enter Name");
// let score = prompt("Enter Score");
// console.log(prpertyName);
// console.log(typeof prpertyName);
// const obj = new Object();
// obj.name = "Ali"
// obj[prpertyName] = name;
// obj.score = score
// console.log(obj);
// console.log(obj[prpertyName]);

// 2
// let properName = prompt("Enter Property Name");
// let properpertyValue = prompt("Enter Property Value");
// let obj2 = {
//     name : "Mudasir",
//     score,

// };
// console.log(obj2);
// obj2.name = "Danial"
// obj2.age = "23"
// // obj2.score = "100"
// obj2[properName] = properpertyValue
// obj2.greetings = function(){console.log("hello")};

// console.log(obj2);


// Deleting a Property From Object:
// Examples:

// const car = {
//     name: "Alto",
//     year: 2010,
//     make: "Toyota",
//     color: "Red"
// };

// console.log(car);

// delete car.color;
// console.log(car);



// Adding New Properties to Existing Objects:
// console.log(this);
// let name  = "Ali";
// const student ={
//     name :"Mudasir",
//     grade : "A"
// };
// student.getName = function(){console.log(`Name is: ${this.name}`)};
// student.getName();


// Updating Properties Based on Condition:

const pcSettings = {
    theme: "light",
    fontSize: 16
};
console.log(pcSettings);

if (pcSettings.theme === "light") {
    pcSettings.theme = "Dark"
};
console.log(pcSettings);







