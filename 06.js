//Пример работы с юзерами....мы не созадем новый объект..я создаем только новый вызов...констурктор.

//var Friend = function(name, password, interests, job){
//   this.fullName = name;
//   this.password = password;
//   this.interests = interests;
//   this.job = job;
//   return this
// };
// let user1 = new Friend("sergey", 121212, "drrr", "ckloun")
// console.log(user1)
// let user2 = new Friend("sergey2323", 333121212, "sdsddrrr", "cwewekloun")
// console.log(user2)

//Прототипное наследование

// Мы хотели бы повторно использовать то, что есть у объекта user, не копировать/переопределять его методы, а просто создать новый объект на его основе.

// Прототипное наследование — это возможность языка, которая помогает в этом.
// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };
// rabbit.__proto__ = animal;
// rabbit.eats = false //изменили свойсво унаследуемое в animal
// console.log(rabbit.eats)
// console.log(animal.eats) // но оно не тзменилось в animal
// console.log(rabbit) //объект обладает своим свойством
// console.log(animal)
// console.log(animal.jumps)
//Значение __proto__ может быть объектом или null. Другие типы игнорируются.

// let animal = {
//   eats: true,
//   walk() {
//     /* этот метод не будет использоваться в rabbit */
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.walk = function() {
//   console.log("Rabbit! Bounce-bounce!");
// };

// rabbit.walk();

// Прототип используется только для чтения свойств.

// // Операции записи/удаления работают напрямую с объектом.
// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");

//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// console.log(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.name); // Alice
// console.log(admin.surname); // Cooper

// let sas = "Alice Cooper".split(" ")
// console.log(sas)

// let user = {
//   fullName() {
//     [this.name, this.surname] = ["Alice", "Cooper"];
//   },
// };
// user.fullName();
// console.log(user.name);
// let ser = {

// };
// ser.__proto__= user;
// ser.fullName() //устанавливает значения  fullName для ser

// ser.name = 'sergey'
// console.log(ser.name);
// console.log(user.name);
// Если бы у нас были другие объекты, такие как bird, snake и т.д., унаследованные от animal, они также получили бы доступ к методам animal. Но this при вызове каждого метода будет соответствовать объекту (перед точкой), на котором происходит вызов, а не animal
// В результате методы являются общими, а состояние объекта — нет.

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
// //   __proto__: animal
// };
// rabbit.__proto__= animal;
// console.log(rabbit)
// console.log(animal)
// // Object.keys возвращает только собственные ключи
// console.log(Object.keys(rabbit)); // jumps

// // for..in проходит и по своим, и по унаследованным ключам
// for(let prop in rabbit) console.log(prop);

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
// //   __proto__: animal
// };
// console.log(Object.keys(rabbit))

// for(let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);
// console.log(isOwn)
// }
//   if (isOwn) {
//     console.log(`Our: ${prop}`); // Our: jumps
//   } else {
//     console.log(`Inherited: ${prop}`); // Inherited: eats
//   }
// }

// let an = {
//     name: "sergey",
//     age: 15
// };
// let sas = {

// };

// console.log(Object.keys(sas));
// console.log(Object.keys(an));
// for (key in an){
//     console.log(key)
// };
// for (key in an){
//     let set = an.hasOwnProperty(key)
// console.log(set)

// };
// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key): он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.

// Заметим ещё одну деталь. Откуда взялся метод rabbit.hasOwnProperty? Мы его явно не определяли. Если посмотреть на цепочку прототипов, то видно, что он берётся из Object.prototype.hasOwnProperty. То есть, он унаследован.

// …Но почему hasOwnProperty не появляется в цикле for..in в отличие от eats и jumps? Он ведь перечисляет все унаследованные свойства.

// Ответ простой: оно не перечислимо. То есть, у него внутренний флаг enumerable стоит false, как и у других свойств Object.prototype. Поэтому оно и не появляется в цикле.

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// console.log( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// console.log( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// console.log( rabbit.jumps );
// console.log( animal );
// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed
// };

// // pockets → bed → table → head
// console.log( pockets.glasses)
// console.log(bed.glasses)

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };
// console.log( hamster.stomach )
// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple
// console.log( hamster.stomach )
// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log( lazy.stomach ); // apple
// console.log(Object.keys(speedy))

// let s = {
//     name : {
//         age: 25
//     }
// };
// let d = {
//  __proto__: s 
// };
// d.name.age = 15;
// s.name.ser = 1;
// console.log(d.name.age )
// console.log(s.name.age )



// let b = 23;
// let a = "`${b}`"
// console.log(b)
