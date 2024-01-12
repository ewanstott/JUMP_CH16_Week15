// Homework:
// 1.	Create an object which contains a function which console.logs this.something, where something is any name you like.

// const obj = {
//   firstName: "Ewan",
//   lastName: "Stott",
//   getFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// obj.getFullName();

// 2.	Create an object which contains a variable which has the same name as you used above.

// const obj2 = [
//   {
//     fisrtName: "Ewan2",
//   },
//   { firstName: "Ewan3" },
// ];

// 3.	Use call to send the object to the function, forcing the function to use the this you sent it (think call/apply)

// console.log(obj.getFullName.call({ firstName: "Ewan2", lastName: "Stott2" }));
// console.log(obj.getFullName.call({ firstName: "Ewan3", lastName: "Stott3" }));

// 4.     Create a closure that allows you to update your name

// function createNameUpdater(initialName) {
//   let name = initialName;
//   //Inner function (closure)
//   return function updateName(newName) {
//     name = newName;
//     console.log(name);
//   };
// }

// //Create closure
// const updateMyName = createNameUpdater("Ewan");

// updateMyName("Ewan2");

// 5.     Create a constructor function

function Person(name, age, eyeColour) {
  this.name = name;
  this.age = age;
  this.eyeColour = eyeColour;

  this.displayPerson = function () {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Eye Colour: ${this.eyeColour}`
    );
  };
}

// 6.     Create an instance of the constructor function

const person1 = new Person("Ewan", 32, "blue");
const person2 = new Person("Taylor", 32, "hazel");

// console.log(person1);
// console.log(person2);

person1.displayPerson();
person2.displayPerson();
