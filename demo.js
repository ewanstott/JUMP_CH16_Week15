// const obj = {name: "Ewan", age: 32}

//Example 1
// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     sayHi: function () {
//       console.log("Hi");
//     },
//   };
// }

// const person1 = createPerson("Ewan", 32);
// const person2 = createPerson("Taylor", 32);

// console.log(person1, person2);

//Example 2
// const obj = {
//   firstName: "Ewan",
//   lastName: "Stott",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(obj.getFullName());

//Example 3

// const obj = {
//   firstName: "Ewan",
//   lastName: "Stott",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName; //contect of execution affects what THIS is
//   },
// };

// const copy = obj.getFullName;

// console.log(obj.getFullName()); //invoked inside the object so pulls full name

// console.log(copy()); //invoking a function is different if done outside of the object

// const getFullName = function () {
//     console.log(this);
// }

//Example 4

// console.log("FIRST THIS: ", this);

// setTimeout(function () {
//   console.log("SECOND THIS: ", this);
// }, 5000);

//Example 5 - CALL (allows you to inject a different value for this when executing)

// const obj = {
//   firstName: "Ewan",
//   lastName: "Stott",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const people = [
//   { firstName: "Tim", lastName: "Stranks" },
//   { firstName: "Tim2", lastName: "Stranks" },
//   { firstName: "Tim3", lastName: "Stranks" },
// ];

// console.log(obj.getFullName.call({ firstName: "Tim", lastName: "Stranks" }));
// console.log(obj.getFullName.call({ firstName: "Tim2", lastName: "Stranks" }));
// console.log(obj.getFullName.call({ firstName: "Tim3", lastName: "Stranks" }));

//Example 6 - BIND (creates a new function with the value of this locked to a particular value)

// const obj = {
//   firstName: "Ewan",
//   lastName: "Stott",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const myBoundFunction = obj.getFullName.bind({
//   firstName: "Andy",
//   lastName: "Peters",
// });

// console.log(myBoundFunction());

//Example 7 - FAT ARROW fixes this (means you dont have to use call / bind)
// const getFullName = () => {
//   console.log("Hello");
// };
// getFullName();

// setTimeout(() => {
//   console.log(this); //same scope
// }, 5000);

// console.log(this); //same scope

//writing code with => means we don't have to think about context !

//Constructors

// function Person(name) {
//   this.name = name;
// }

// const person1 = new Person("Ewan");
// const person2 = new Person("Taylor");
// const person3 = new Person("Tim");

// // console.log(person1, person2, person3);

// //inheritance -> can expand on program even after person objects have been created
// Person.prototype.getName = function () {
//   return this.name;
// };

// console.log(person1.getName());
// console.log(person1 instanceof Person);

//Closure - occurs when a function references something in the upper scope.
// It can be very useful for privacy

// function demo() {
//   let count = 0;

//   return {
//     getSecret() {
//       return count;
//     },
//     setSecret(value) {
//       count = value;
//     },
//   };
// }
// const _demo = demo();
// console.log(_demo.getSecret());
// _demo.setSecret(1000);
// console.log(_demo.getSecret());

//ForIn Loop

// const obj = { name: Ewan, age: 32 };
// for (const item in obj) console.log(item);

//Symbol - UNIQUE, allows to 'Ewans'

// const scores = {
//   [Symbol("Ewan")]: 100,
//   Taylor: 200,
//   Will: 99,
//   [Symbol("Ewan")]: 500,
// };

// console.log(scores);

// Proxy (A function mapping objects of one domain onto objects of another)

// //one part
// const target = { firstName: "James", lastName: "Sackett" };

// //bit that messes
// const handler = {
//   get: function (target) {
//     return target.firstName + " " + target.lastName;
//   },
// };

// //other part
// const proxy = new Proxy(target, handler);
// console.log(proxy.firstName);

//SET METHODS (arrays) - The set() method is used to transform any iterable to a sequence of iterable items with separate elements, often known as a Set.

// const mySet = new Set();

// mySet.add("Ewan");
// mySet.add("Taylor");

// console.log(mySet);
// console.log(mySet.has("Ewan"));
// console.log(mySet.delete("Ewan"));
// console.log(mySet.has("Ewan"));

//WeakSet - A WeakSet is a collection of garbage-collectable values, including objects and non-registered symbols.
// const weakSet = new WeakSet();

// const obj = { name: "Russel" };

// weakSet.add(obj);

// obj = null;

//MAPS (objects) - The Map object holds key-value pairs and remembers the original insertion order of the keys.

// const myMap = new Map();

// myMap.set({ name: "Ewan", age: 32 }, true);

// console.log(myMap);

//ITERATOR (uses a * to iterate)

// const func = function* () {
//   yield "Hello";
//   yield "Bye";
//   yield "Cya";
// };
// const iterable = func();
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());

// for (const item of iterable) {
//   console.log(item);
// }

// Instance Classes:
// Instances of these classes are created, allowing for multiple objects with unique states.

// Static Classes:
// These classes cannot be instantiated and have shared members, often used for utility functions or global state.

const arr = ["Hello", "World"];

Array.prototype.sayHi = function () {
  console.log("Hello from the array");
};

[].sayHi();
