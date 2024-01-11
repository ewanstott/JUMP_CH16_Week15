// Homework:
// 1.	Create an object which contains a function which console.logs this.something, where something is any name you like.

const obj = {
  firstName: "Ewan",
  lastName: "Stott",
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

obj.getFullName();

// 2.	Create an object which contains a variable which has the same name as you used above.

const obj2 = [
  {
    fisrtName: "Ewan2",
  },
  { firstName: "Ewan3" },
];

// 3.	Use call to send the object to the function, forcing the function to use the this you sent it (think call/apply)

console.log(obj.getFullName.call({ firstName: "Ewan2", lastName: "Stott2" }));
console.log(obj.getFullName.call({ firstName: "Ewan3", lastName: "Stott3" }));

// 4.     Create a closure that allows you to update your name
// 5.     Create a constructor function
// 6.     Create an instance of the constructor function
