// (async () => {
//   let a = await fetch("https://jsonplaceholder.typicode.com/users");
//   let b = a.json();
//   console.log(b);
// })();

// async function f () {
//     return 1
// }
// f().then(console.log)

// function d (){
//     return Promise.resolve(1)
// }
// d().then(console.log)

// let a = {name: "Sergey"}
// let b = [1, 2]
// b.__proto__ = a
// let c = 2
// c.__proto__ = a
// console.log(b.name)

//   let a = 2;
//   let b = 3

// a = 2
// console.log(a)
// var a;

// function a(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// const b = a(1)
// console.log(b(12))

// function sayHelloTo(name) {
//   const message = "Hello " + name;
//   return function (n) {
//     console.log(message + n);
//   };
// }

// const helloy = sayHelloTo("Elena"); //  sayHelloTo()  возращает функцию замыкаем  message с 'Elena'
// helloy(12);

// const a = logPerson(person1)

// class Person {
//   constructor(options) {
//     (this.name = options.name), (this.age = options.age);
//   }
// }
//  class Sergey extends Person {
//      constructor(options){
//      super(options);
//      this.city = options.city
//      }

//  }

//  let a = new Sergey({
//      name: "Nata",
//      age: 30,
//      city: "Minsk"
//  })
// console.log(typeof  a);
// console.log(a.age)

// function Product(name, price) {
//   this.name = name;
//   this.price = price;

//   if (price < 0) {
//     throw RangeError('Нельзя создать продукт ' +
//                       this.name + ' с отрицательной ценой');
//   }
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'еда';
// }

// Food.prototype = Object.create(Product.prototype);

// function Toy(name, price) {
//   Product.call(this, name, price);
//   this.category = 'игрушка';
// }

// Toy.prototype = Object.create(Product.prototype);

// var cheese = new Food('фета', 5);
// var fun = new Toy('робот', 40);
// var ses = new Product()
// console.log(cheese )

// const Person = {
//   firstName: 'firstName',
//   lastName: '1lastName',
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// // Теперь мы можем использовать объект Person таким образом:
// let person = Object.create(Person)

// person.getFullName() //> "firstName lastName"

// // Присваиваем значения переменным внутреннего состояния
// person.firstName = 'Dan'
// person.lastName = 'Abramov'

// // Получаем к ним доступ
// person.getFullName() //> "Dan Abramov"

// // Создадим объект User, склонировав объект Person, и добавим туда дополнительные данные и функции:

// const User = Object.create(Person)
// User.email = ''
// User.password = ''
// User.age = 12
// User.getEmail = function() {
//   return this.email
// }
// // Затем мы можем создать экземпляр User с помощью Object.create():

// let user = Object.create(User)
// user.firstName = 'Dan'
// user.lastName = 'Abramov'
// user.email = 'dan@abramov.com'
// user.password = 'iLuvES6'
// user.age = 15

// console.log(user.age)
// console.log(User.age)
class Car {
  constructor(option) {
    this.model = option.model;
    this.color = option.color;
  }
  say() {
    console.log(this.color + this.model);
  }
}

let Detal = new Car({
  model: "BMW1",
  color: "Red",
});
Detal.say();

let a = Detal;
a.say();
