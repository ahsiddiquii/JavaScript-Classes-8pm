// STRINGS METHODS / FUNCTIONS:

// 1 length


// let message = "Hello Dear, How are you doing today?"

// let lengthOfString = message.length;
// console.log(lengthOfString); 

// let b = "     what's the dare today?       ";
// console.log(b.length);

// console.log("fghfhff jgggjgh jghjhggj".length);

// 2 uppercase:

// let danial = "ffffffkfjsfsk";
// console.log(danial.toUpperCase());

// 3 lowercase:

// let values = "AADDASTAFDS";
// console.log(values.toLowerCase());

//4 Trim:

// let message = " dadadasdfdsfsdsfsf               sfsdf fsdfd sdfsd "
// console.log(message.trim()); // remove spaces from the start and end of the string

// 5 CharAt;
// let message = "Hello, how are you doing today?"
// let charAt = message.charAt(9);
// console.log(charAt);

// 6 indexOf

// let message = "Hello, how are you doing today?"
// let index = message.indexOf("are");
// // console.log(index);

// let message2 = "Hello, how you doing are today?are"
// let index2 = message2.indexOf("a");
// console.log(index2);

// slice;

// let message = "Hello, how are you doing today?"
// let slicedValue = message.slice(7);
// console.log(slicedValue); 

// let sliceValue_2 = message.slice(7, 11);
// console.log(sliceValue_2);

// Split :

// let message = "Hello how are you doing today Are you enjoying it"
// let splitedValue = message.split("?");
//console.log(splitedValue); // split the string into an array of strings based on the specified.

// includes
// let message = "Hello how are you doing today Are you enjoying it";

// let includesValue = message.includes("what");
// console.log(includesValue);

// replace 

// let message = "Hello how are you doing today Are you enjoying it";

// let replacedValue = message.replace("what", "tomorrow");
// console.log(replacedValue);
// console.log(message);

// let name = "mudasir"

// let frstChartCapital = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(frstChartCapital);

// --------------------------------------------------------------------------

// NUMBERS 

// Methods:
// toFixed();
// parseInt();
// parseFloat();

// let numbr = 123.43353;
// let fixed = numbr.toFixed(2);
// console.log(fixed);

// parseInt:
// let numbr = "123.43353";
// let parsedFoat = parseFloat(numbr);
// let parsedInt = parseInt(numbr);
// console.log(parsedFoat);
// console.log(parsedInt);
// console.log(typeof parsedInt, typeof parsedFoat);

// Number();

// Numbers:
// int ==> 1231
// float ==> 123.43434;


let data = ["obaid", "umair"];
let editIndex = -1;
let isEdit = false
const container = document.querySelector(".container");
const todo = document.querySelector(".todo");

const deleteHandler = (index) => {
  console.log(index);
  data.splice(index, 1);
  renderData();};

const editHandler = (index) => {
  console.log(index);
  todo.value = data[index];
  editIndex = index;};

const renderData = () => {
  container.innerHTML = "";
  let i = 0;
  for (const element of data) {
    container.innerHTML += `<p>
    ${element} 
    <button onclick="deleteHandler(${i})">Delete</button>
    <button onclick="editHandler(${i})">Edit</button>
    </p>`;
    i = i + 1;
  }
};

const addHandler = () => {
  const value = todo.value;
  if (value === "") {
    alert("value is empty");
    return;
  }
  console.log(value);

  data.push(value);
  todo.value = "";
  console.log(data);
  renderData();
};

const submitHandler = () => {
  if (editIndex > -1) {
    console.log(editIndex, "editIndex");
    data[editIndex] = todo.value;
    console.log(data);
    editIndex = -1;
    todo.value = "";
    renderData();
    return;
  }
  addHandler();
};

renderData();