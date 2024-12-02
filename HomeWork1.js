// We will learn, or where applicable, review fundamental JavaScript (TypeScript) concepts used in current projects:

// 1.1. ES6 - Methods (examples, explanations).
// An arrow function is introduced in ES6. Arrow functions have a shorter syntax compared to traditional function expressions and are particularly useful for simplifying functions.
const greet = (name) => {
  console.log(`Hello, ${name}`);
};

greet("John");
// 1.2. Difference between var, let, and const.

//          Var is function-scoped (we can't access a variable outside of a function). Var can be redeclared and updated
function newFunction() {
  var hello = "hello";
}
// console.log(hello);    => hello is not defined

//          Let and const are block-scoped
let hi = "say Hi";
let times = 2;

if (times > 1) {
  let hello = "say Hello";
  console.log(hello); //
}
// console.log(hello); // error => hello is not defined    outside if scope

//          Let can be updated but can't be redeclared
let a = "a";
// let a = "b"; error => Identifier 'a' has already been declared

//          Const variable remains the same, cannot be updated.
const b = 5;
// b = 4; error TypeError: Assignment to constant variable.

// 1.3. Spread operator.
// Spread operator (...) is a feature that allows you to expand or unpack elements of arrays,objects, or iterable into individual elements
// ex: coppying arrays
let array1 = [1, 2, 3];
let array2 = [...array1];
console.log(array2);

// ex: merging objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let objUpdated = { ...obj1, ...obj2 };
console.log(objUpdated);

// 1.4. Objects: How to iterate over an object, deep copy.
const masina = { marca: "toyota", model: "corolla", an: 2020 };

for (key in masina) {
  console.log(`${key} : ${masina[key]}`);
}

// deep copy
const original = { nume: "Gabriel", detalii: { varsta: 25, sex: "F" } };
const copie = JSON.parse(JSON.stringify(original));
for (cheie in copie) {
  console.log(`${cheie} : ${copie[cheie]}`);
}
console.log(copie.detalii.sex);

// 1.5. Arrays - accessor, iteration, and mutator methods (which they are, how to use them).
// accessor methods are methods that return a new value
// length => return number of elements in the array
const arr1 = [1, 2, 3];
console.log("Array length : " + arr1.length);

// indexOf => return the index of first occurence, -1 if not found
const arr2 = [1, 2, 3];
console.log(arr2.indexOf(2));

// includes => check if the value exits in the array.
const arr3 = [1, 2, 3];
console.log(arr3.includes(3)); // true
console.log(arr3.includes(5)); // false

// join => joins all elements separated by a delimitor
const arr4 = [1, 2, 3];
console.log(arr4.join("-")); // 1-2-3

// slice(start,end) =>  returns a shallow copy of a portion of the array, without modifying it
const arr5 = [1, 2, 3, 4];
console.log(arr5.slice(1, 4)); // [2, 3, 4]

// Iteration methods are used to loop over or process elements in an array.
// forEach(callback) =>  executes a provided function once for each array element.
const arr6 = [1, 2, 3];
arr6.forEach((num) => {
  num *= 2;
  console.log(num);
});

// map(callback) =>creates a new array by applying a function to each element
const arr7 = [1, 2, 3];
const mapArr = arr7.map((num) => num * 2);
console.log(mapArr);

// Mutator methods modify the original array.
// push(value) => add one or more element at the end of the array.
const arr8 = [1, 2, 3];
arr8.push(5);
console.log(arr8); // [1,2,3,5]

//pop() - removes and returns the last element of the array.
const arr9 = [1, 2, 3];
arr9.pop(3);
console.log(arr9); // [1,2]

// 1.6. Promises. Callback.
// A callback is a function passed as an argument to another function.
setTimeout(myFunction, 3000);

function myFunction() {
  console.log("Hello");
}

// A Promise is an object representing a value that will be available in the future (resolved) or an error (rejected)
function myFunction2(some) {
  console.log(some);
}

let myPromise = new Promise((resolve, reject) => {
  let x = 0;
  if (x == 0) {
    resolve("OK");
  } else {
    reject("Error");
  }
});
myPromise.then(
  function (value) {
    myFunction2(value);
  },
  function (error) {
    myFunction2(error);
  }
);

// 1.7. Async. Await.
// async makes a function return a Promise and await makes a function wait for a Promise
// async
async function myFunction3() {
  return "Hello async";
}
myFunction3().then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
// await

async function myFunction4() {
  let myPromise = new Promise((resolve, reject) => {
    resolve("Hello await");
  });

  let result = await myPromise;
  return result;
}

myFunction4().then(function (value) {
  let myVariable = value;
  console.log(myVariable);
});

// 1.8. Closures.
// a closure is a function that remembers the variables from a lexical scope even after the outer function has been executed.
function outerFunction() {
  let outerVar = "I am from outer function"; // outer function variable
  function innerFunction() {
    console.log(outerVar); // inner function accessing outer function s variable
  }
  return innerFunction; // return the inner function (closure)
}
const closureExample = outerFunction(); // outerFunction returns innerFunction
closureExample(); // Calls the inner function (closure), and it still remembers outerVar
