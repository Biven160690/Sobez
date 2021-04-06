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
// console.log(a.city);
// console.log(a.age)

