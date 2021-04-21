class Animal {
  static type = "ANIMAL";
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // this.hasTail = options.hasTail;
  }
  voise() {
    console.log("I am cat");
  }
}
const animal = new Animal(
  "Animal", 5
);
console.log(animal.color)

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age) 
    this.color = color
  }
}
const cat = new Cat(
   "red","Animal", 5
);
// console.log(cat.name);
// console.log(cat.age);
// console.log(cat.color);

