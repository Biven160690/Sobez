// const data = [
//   { id: 1, universe: "marvel", name: "Spider Man" },
//   { id: 2, universe: "marvel", name: "Iron Man" },
//   { id: 3, universe: "dc", name: "Aqua Man" },
//   { id: 4, universe: "dc", name: "Bat Man" },
//   { id: 5, universe: "marvel", name: "Hulk" },
// ];

// const allArgsValid = function (fn) {
//   return function (array, key) {
//     if (!key) {
//       throw new Error("Key is not provided");
//     }

//     if (!(Array.isArray(array) && array.length)) {
//       throw new Error("Array is not provided");
//     }

//     return fn(array, key);
//   };
// };

// let groupBy = function (array, key) {
//   const newObject = array.reduce(function (accum, curr) {
//     if (!curr[key]) return {};

//     accum[curr[key]] = accum[curr[key]] || [];
//     accum[curr[key]].push(curr);
//     return accum;
//   }, {});
//   return newObject;
// };

// groupBy = allArgsValid(groupBy);
// console.log(groupBy(data, "universe"));

// const  decorator = function (fun) {
//   return function (...arguments){
//     console.log(fun.length);
//     if(arguments.length > 1) return fun(arguments)
//     return fun = (arg1 = arguments) => (arg2 = arguments) => (arg3 = arguments) => (arg4 = arguments) => (arg5 = arguments) =>  fun(arg1, arg2, arg3, arg4, arg5)
//     // return fun()
//   }
// }

// let doCalc = function (arguments) {
//   return arguments.reduce((acc, curr) => acc + curr, 0)
// }

// doCalc = decorator(doCalc)
// // console.log(doCalc(1, 2, 3, 4, 5))
// console.log(doCalc(1)(2)(3)(4)(5))

// let doCalc = function (num1, num2, num3, num4, num5) {
//   return num1 + num2 + num3 + num4 + num5;
// };

// function curry(fn) {
//   const N = fn.length;
//   function innerFn(n, args) {
//     return function actualInnerFn(a) {
//       if(arguments.length > 1) return fn(...arguments);
//       if (n <= 1) {
//         return fn(...args, a);
//       }
//       return innerFn(n - 1, [...args, a]);
//     };
//   }
//   return innerFn(N, []);
// }
// doCalc = curry(doCalc);

// // console.log(doCalc(1)(2)(3)(4)(5))
// console.log(doCalc(1, 2, 3, 4, 5))

// function Person (name) {
//   this.name = name;
// }

// Person.prototype = {
//   age: 12,
//   mouth: 1,
//   sleep: function (){
//     return 'zzz'
//   }
// }
//  const user = new Person ('Sergey')
//  user.name

//  function Emploer (name, salary){
//    this.name = name;
//    this.salary = salary;
//  }

//  Emploer.prototype = Object.create(Person.prototype)
//  Emploer.prototype.constructor  = Emploer

//  const emy = new Emploer('Sasha', 1500)
// console.log(emy.age);

// class Person {
//   // #age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sleep() {
//     return this;
//   }
// }

// const user = new Person();
// const data = user.sleep;
// console.log(data());
// class Emploer extends Person {
//   constructor(name) {
//     super(name, name);
//   }
//   sleep() {
//     super.sleep();
//     console.log(11);
//   }
// }
// // class Emploer extends Person {}

// // const emy = new Emploer("Sergey", 1500);
// // console.log(emy.sleep());
// class DesignerDeveloper {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }

// Object.assign(Object.prototype, {
//   code() { return this.firstName },
//   design() { return this.lastName }
// })

// const developer = new DesignerDeveloper('Sergey', 'Nata')
// developer.code()
// function data (fn){
//   let number = 10
//   return function () {
//      fn(number)
//   }
// }

// let fn = function (num){
//   console.log(num)
// }

// fn = data(fn)
// fn()
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   say() {
//     console.log(`This is ${this.name}`);
//   }
// }

// class Sergey extends Human {}
// const sergey = new Sergey("Segey", 31);
// console.log(sergey.say());

// class Natasha extends Human {
//   say() {
//     console.log(`This is ${this.name} and ${this.age}`);
//   }
// }
// const natasha = new Natasha("Natasha", 31);
// console.log(natasha.say());

// class Whell {
//   constructor(whell) {
//     this.count = whell;
//   }
// }
// class Engine {
//   constructor(engine) {
//     this.power = engine;
//   }
// }
// class Car {
//   constructor(engine, whell ) {
//     this.engine = new Engine(engine);
//     this.whell = new Whell(whell);
//   }
// }

// const car = new Car(500, 6)
// console.log(car.engine.power);
// let name = "Pete";

//     function makeWorker() {
//       return function () {
//         console.log(name);
//       };
//     }

//     function makeWorker() {
//       let name = '45'
//       return function (num) {
//         console.log(num + name);
//       };
//     }

// let work1 = makeWorker();
// let work2 = makeWorker();

// name = "Serhgey";
// // call it
// work1();
// work2();

// // const sum = a => b => a + b
// let instance = 10;

// class Counter {
//   constructor() {
//     if (!instance) instance = this;
//     instance.count = 0
//     return instance;
//   }
//   getCount(){
//     return instance.count
//   }
//   incrementCount(){
//     return instance.count++
//   }

// }
// const data = new Counter();

// console.log(data.instance);

// class BMW {
//   constructor(model, price, maxSpeed){
//     this.model = model;
//     this.price = price;
//     this.maxSpeed = maxSpeed
//   }
// }

// class BMWFactory {
//   create(type, price, maxSpeed) {
//     if(type === 'X5') return new BMW(type, price, maxSpeed)
//     if(type === 'X6') return new BMW(type, price, maxSpeed)
//   }
// }

// const result = new BMWFactory()
// // console.log(result.create('X5', 1500, 250))
// // console.log(result.create('X6'))

// function bmwProducer(kind) {
//   return kind === 'sport' ? sportCarFactory : familyCarFactory;
// }

// function sportCarFactory() {
// 	return new Z4();
// }

// function familyCarFactory() {
// 	return new I3();
// }

// class Z4 {
// 	info() {
// 		return "Z4 is a Sport car!";
// 	}
// }

// class I3 {
// 	info() {
// 		return "i3 is a Family car!";
// 	}
// }

// class TeslaCar {

// 	constructor(model, price, interior, autopilot) {
// 		this.model = model;
// 		this.price = price;
// 		this.interior = interior;
// 		this.autopilot = autopilot;
// 	}

// 	produce() {
// 		return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
// 	}
// }
// const data  = new TeslaCar('4585', 1500, 'black', false )
// const car1 = data.produce()
// const car2 = data.produce()
// const car3 = data.produce()
// console.log(car1);
// class Data {
//   #age;
//   #name;
//    static constructor(age, name){
//     this.#age = age;
//     this.#name = name
//    }
//     info (){
//      return this.#age
//    }
// }
// const data = new Data(12, 'drrer')
// console.log(data)

// let doCalc = function (num1, num2, num3, num4, num5) {
//   return num1 + num2 + num3 + num4 + num5;
// };

// function curry(fn) {
//   const N = fn.length;
//   function innerFn(n, args) {
//     return function actualInnerFn(a) {
//       if (arguments.length > 1) return fn(...arguments);

//       if (n <= 1) {
//         return fn(...args, a);
//       }
//       return innerFn(n - 1, [...args, a]);
//     };
//   }
//   return innerFn(N, []);
// }
// doCalc = curry(doCalc);

// console.log(doCalc(1)(2)(3)(4)(5));
// console.log(doCalc(1, 2, 3, 4, 5));

// class Human {
//   #firstName
//   constructor(firstName, lastName) {
//     this.#firstName = firstName
//     this.lastName = lastName
//   }
//   get firstName (){
//     return this.#firstName
//   }
// }

// const person = new Human('Sergey', 'Mamonko')
// person.firstName = '45'
// console.log(person.firstName)
// class Eyes {
//   constructor(color) {
//     this.color = color;
//   }
// }
// class Lips {
//   constructor(size) {
//     this.size = size;
//   }
// }

// class Body {
//   constructor(size, color) {
//     this.lips = new Lips(size);
//     this.eyes = new Eyes(color);
//   }
// }

// // class Person extends Human {
// //   constructor(firstName, lastName, age) {
// //     super(firstName, lastName);
// //     this.age = age;
// //   }
// // }

// const person = new Body('10px', 'red');
// console.log(person.eyes);
// class Whell {
//   constructor(whell) {
//     this.count = whell;
//   }
//   say() {
//     console.log(this.count);
//   }
// }
// class Car extends Whell {
//   constructor(whell, engine) {
//     super(whell);
//     this.power = engine;
//   }
//   say() {
//     console.log(this.count + this.power);
//   }
// }
// class Car {
//   constructor(engine, whell) {
//     this.engine = new Engine(engine);
//     this.whell = new Whell(whell);
//   }
// }

// const data = new Car(200, 10)
// console.log(data.say());
// var array = ["Arnold", "Code", "Academy"];
// // for (const [index, elem] of array.entries()) {
// //   console.log(`index = ${index}, elem = ${elem}`);
// // }
// // array.forEach((elem, index) => console.log('index = ' + index + ', elem = ' + elem))
// // Object.assign(Whell.prototype, say)
// // const data = new Whell(10)
// // console.log(data.getCount());

// // console.log(eArr);
// // let total = 0
// // const arr = [1, 2, 3, 4, 5, 6, 7];
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] % 2) {
// //     total += arr[i];
// //   }
// // }
// // console.log(total);
// // function digPow(n, p) {
// //   let str = n.toString().split("");
// //   let total = 0;
// //   let count = 0;

// //   for (let i = 0; i < str.length; i++) {
// //     total += str[i] ** (p + count);
// //     ++count;
// //   }

// //   return Number.isInteger(total / n) ? total / n : -1;
// // }
// // console.log(digPow(695, 2));

// let num = 1233345566;

// function result(num) {
//   let arr = [...String(num)];
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]]++;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }

//   let luckyNumber;
//   let maxNumber = 0;

//   for (let key in obj) {
//     maxNumber = Math.max(obj[key], maxNumber);
//     if (obj[key] === maxNumber) luckyNumber = key;
//   }

//   return luckyNumber;
// }
// console.log(result(num));
// function getCount(str) {
//   let vowelsCount = 0;
//   let consider = ["a", "e", "i", "o", "u"];

//   for (let i = 0; i < str.length; i++) {
//     if (consider.includes(str[i])) {
//       vowelsCount++;
//     }
//   }

//   return vowelsCount;
// }
// console.log(getCount("natasha"));

// function digitize(n) {
//   let arrayNum = [...String(n)].reverse()
//   return arrayNum
// }
// console.log(digitize(123456))

// function digitize(n) {
//   let arrayNum = [...String(n)]
//   let newArray = []
//   for (let i = arrayNum.length - 1; i >= 0; i--) {
//     newArray.push(+arrayNum[i])
// }
//   return newArray
// }
// console.log(digitize(123456))

// function solution(string) {
// return string.replace(/([A-Z])/g, " $1");
//   let arr = [...string];
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toUpperCase()) {
//       if (count !== 0) {
//         arr.splice(count + i, 0, " ");
//         count++;
//       } else {
//         arr.splice(i, 0, " ");
//         count++;
//       }
//     }
//   }
//   return arr.join("");
// }

// console.log(solution("camelCasingTestRedHot"));

// поменять местами имя и фамилию

//
class Props {
  constructor(...rest) {
    for (let key of rest) {
      this[key] = null;
    }
  }
  addItemsKey(...rest) {
    let count = 0;
    for (let items in this) {
      this[items] = rest[count++];
    }
  }
}

let props = new Props("data", "sergey", "null");
props.addKeysData(10, 15, 18);
console.log(a);
