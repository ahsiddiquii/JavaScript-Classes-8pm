// 8 - Math.trunc();

// Examples: 
// 1 -
// const num = -5.8;
// const truncatedValue = Math.trunc(num);
// console.log(truncatedValue);

// 9-  Math.abs()

// Example: 
// 1 -
// const num = -0.90;
// const absoluteValue = Math.abs(num);
// console.log(absoluteValue);

//  2 -
// const distance = Math.abs(-100 + 50);
// console.log(distance);


// --------------------------------------------------------------------------

// Date in JS:

// Initialize Date Object:

// const date = new Date();
// console.log(date);

// new Date(year, monthIndex, day, hours, minutes, seconds, miliseconds);

// const specificDate = new Date(2024, 08, 20, 14, 30) ;
// console.log(specificDate);

// Supported Formats:
// ISO 8601 Extended Format: "YYYY-MM-DDTHH:mm:SS:SSSZ"
// "RFC 2822 :" "Wed , 20 Sep 2024 14:30:00"


// Retrieving Date Components Once you have a date Object, you can extract various components using getter methods:

// const date = new Date();
// const fullYear = date.getFullYear();
// // console.log(fullYear);
// const getMonth = date.getMonth();
// // console.log(getMonth + 1);
// const getDate = date.getDate();
// // console.log(getDate);
// const getDay =  date.getDay();
// // console.log(getDay);
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const miliseconds = date.getMilliseconds();
// const time = date.getTime();
// console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}, Miliseconds: ${miliseconds}, Time: ${time}`);

// Months Starts from '0' ==> // Example: 0 ==> Jan
// Days Starts from '0' ==> // Example: 0 ==> Sunday


// Setting Date Components You can modify Parts of a Date Object using setter methods:

// const date = new Date("2024-09-21T14:30:00");
// console.log(date);
// const setYear = date.setFullYear(2025);
// console.log(date);

// const setMonth = date.setMonth(0);
// console.log(date);

// const setDate = date.setDate(29);
// console.log(date);

// const setHours = date.setHours(15);
// console.log(date);

// const setMinutes = date.setMinutes(45);
// console.log(date);

// const setSeconds = date.setSeconds(10);

// const setMilliSeconds = date.setMilliseconds(34);
// console.log(date);

// Setting Multiple Components at Once:

// date.setFullYear(2026, 0, 25);
// console.log(date);


// Date Formating:
// Displaying dates and times in a human-readable fromat is crucial. JD provides several methods for formating.

// const date = new Date("2024-09-21T14:30:00");

// toString()
// console.log(date.toString());
// // toDateString()
// console.log(date.toDateString());
// // toTimeString()
// console.log(date.toTimeString());
// // toLocaleDateString()
// console.log(date.toLocaleDateString());


// Custom Formating: 
// For more control over date formating, you can manually assemble the desired format using getter methods.

// const date =  new Date("2024-09-21T14:30:00");


// const year = date.getFullYear();

// const month = date.getMonth() + 1;

// const day = date.getDate();

// const hours = date.getHours();

// const minutes = date.getMinutes();

// const seconds = date.getSeconds();

// const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// console.log(formattedDate);


// Date Arithmetic:
// Performing calculations with dates, such as adding days or calculating the difference between two dates, is a common requirement.

// Example: 
// 1 -
// const date = new Date("2024-09-21T14:30:00");
// // const daysToAdd = 9;

// // date.setDate(date.getDate() + daysToAdd);
// console.log(date);

// 2- 
// const date = new Date("2024-09-21T14:30:00");
// const monthsToAdd = 2;

// date.setMonth(date.getMonth()+ monthsToAdd);
// console.log(date);


