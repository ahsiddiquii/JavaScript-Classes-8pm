
// Object Destructuring:
//   - Destructuring is a way to unpack values from arrays or objects into distinct variables.


// Example:
// 1
// const employ = {
//     name: 'John Doe',
//     age: 30,
//     job: 'Software Engineer'
// };

// const {age, job, name} = employ;
// console.log(name);


// Destructuring With Default Values.

// const employ = {
//     name: "Abdul",
//     age: 20,
// };

// const {name, age, position = 'Software Engineer'} = employ;


// console.log(position);
// console.log(employ);


// Renaming Variables During Destructuring:

// const user = {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com"
// };

// const {id : userId, name : fullName, email = "abc"} = user 
// // console.log(id);
// console.log(userId);
// console.log(email);
// console.log(user);


// Nested Destructuring in Objects:

// const response = {
//     data: {
//         user: {
//             name: "Mudasir",
//             age: 30
//         }
//     }
// };

// const {data:{user:{name : studentName}}} = response
// console.log(studentName);


// Array of Objects:

// const studentsName = [
//     {
//         name: "John Doe",
//         age: 20,
//         grade: 95,
//     },
//     {
//         name: "Mudasir",
//         age: 20,
//         grade: 90,
//     },
//     {
//         name: "Danial",
//         age: 20,
//         grade: 80,
//     },
//     {
//         name: "Danial",
//         age: 20,
//         grade: 100,
//     },
// ];

// studentsName.map((value, index)=> document.write(value.name))
// const results = studentsName.filter((value, index)=> value.grade > 90);
// console.log(results);

// Accessing Elements:


// const studentsName = [
//     {
//         name: "John Doe",
//         age: 20,
//         grade: 95,
//     },
//     {
//         name: "Mudasir",
//         age: 20,
//         grade: 90,
//     },
//     {
//         name: "Danial",
//         age: 20,
//         grade: 80,
//     },
//     {
//         name: "Danial",
//         age: 20,
//         grade: 100,
//     },
// ];

// console.log(studentsName[1].name);


// Objects Methods/Functions:

// 1 - Object.assign()

// const user1 = {name: "John Doe", age: 20};
// const user1MoreInfor = {grade: "20"};

// const clone = Object.assign({}, user1, user1MoreInfor);
// console.log(clone);

// 2 - Object.keys()

// const obj = {
//     name: "Danial",
//     age: 20,
//     marks: 99,
//     phone: "000-000000"
// };

// const keys = Object.keys(obj);
// console.log(keys);

// keys.map((value, index)=> console.log(value));


// 3- Object.values()

// const obj = {
//     name: "Danial",
//     age: 20,
//     marks: 99,
//     phone: "000-000000"
// };

// const values = Object.values(obj);
// console.log(values);

// values.map((value, index)=> console.log(value));


// 4- Object.entries()

// const obj = {
//     name: "Danial",
//     age: 20,
//     marks: 99,
//     phone: "000-000000"
// };

// const entries = Object.entries(obj);
// console.log(entries);
// console.log(obj);

// keys.map((value, index)=> console.log(value));


// const array = [
//     [ 'name', 'Danial' ],    
//     [ 'age', 20 ],
//     [ 'marks', 99 ],
//     [ 'phone', '000-000000' ]
//   ];

//   const obj2 = Object.fromEntries(array);
//   console.log(obj2);


