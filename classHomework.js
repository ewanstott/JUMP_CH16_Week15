// Homework:
// Create a class that represents a shop.

//Example 1 Shop
class Shop {
  constructor(name, location, categories) {
    this.name = name;
    this.location = location;
    this.categories = categories;
  }
  shopName() {
    return this.name;
  }
}

const shop1 = new Shop(
  "Tesco",
  "Clifton",
  ["Fresh Produce", "Alcohol", "Bakery"],
  1
);

//  2.   Add a function called shopName that returns the shops name.
// console.log(`Shop name: ${shop1.shopName()}`);
// console.log(`Shop location: ${shop1.location}`);
// console.log(`Shop categories: ${shop1.categories}`);

//  3.   Create a new class that represents a product and extends shop.

//Super = used to call constructor of parent class.

//Inheritance allows reuse of the properties and methods of the base class (Shop)
class Product extends Shop {
  constructor(shopName, productName, category, price) {
    super(shopName); // super() inside the Product constructor calls the constructor of the base class (Shop) and inherits
    this.productName = productName;
    this.category = category;
    this.price = price;
  }
  shopAndProductName() {
    return `Product name: ${
      this.productName
    } from Shop name: ${super.shopName()}`;
  }
}
const product1 = new Product("Tesco", "Pepperoni Pizza", "Pizza", 9.99);

// console.log(`Product name: ${product1.shopName()}`);
// console.log(`Product name: ${product1.productName}`);
// console.log(`Product category: ${product1.category}`);
// console.log(`Product price: ${product1.price}`);

//  4.   Add a function called productName that returns the product name and the shops name

// console.log(product1.shopAndProductName());

// You can use any topic you like if my shop example does not appeal :+1:
// Tip: You will need to make instances of each class to call the functions.

//Example/Practice 2 - Person
class Person {
  constructor(name, age, sex, favouriteColour) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.favouriteColour = favouriteColour;
  }
  personName() {
    return this.name;
  }
}

const person1 = new Person("Ewan", 32, "Male", "Orange");

// console.log(person1);
// console.log(
//   `Person name: ${person1.personName()} & Person age: ${person1.age}`
// );

class personDetails extends Person {
  constructor(name, age, sex, eyeColour, height, favouriteFood) {
    super(name, age, sex); // Call the constructor of the parent class (Person)
    this.eyeColour = eyeColour;
    this.height = height;
    this.favouriteFood = favouriteFood;
  }
  personNamewithFavFood() {
    return `Person name: ${this.name}, loves to eat ${this.favouriteFood}`;
  }
}

const person2 = new personDetails(
  "Taylor",
  32,
  "female",
  "hazel",
  156,
  "sushi"
);

// console.log(person2.favouriteFood);
console.log(person2.personNamewithFavFood());
