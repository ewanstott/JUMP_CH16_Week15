// Homework:
// Create a class that represents a shop.

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

console.log(`Product name: ${product1.shopName()}`);
console.log(`Product name: ${product1.productName}`);
console.log(`Product category: ${product1.category}`);
console.log(`Product price: ${product1.price}`);

//  4.   Add a function called productName that returns the product name and the shops name

// const shopAndProductName1 = new
console.log(product1.shopAndProductName());

// You can use any topic you like if my shop example does not appeal :+1:
// Tip: You will need to make instances of each class to call the functions.
