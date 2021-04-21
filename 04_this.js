//==================Проверяем являеться ли число неопределено ============================
// var sum ;
// var text = 3;
// if ( sum !== undefined){
//     console.log(`sum1 = ${sum}`)
//  } else {
//     console.log(`sum2 = ${sum}`)
//  }
//  if (typeof sum !== undefined){
//     console.log(`sum1 = ${sum}`)
//  }

//=================================================Есть ли у объекта свойства ===================
//   var object= {name:'Sergey'};

//   for ( var prop in object ) {
//     console.log( "Object1: " + prop );
// }

// if (Object.keys(obj).length > 0){
//   console.log(Object.keys(obj).length)
// }
//   if ( obj.hasOwnProperty(obj) )
//   {
//     console.log( "Object1: " + obj );
// }
//============================================= Это у наследуемых объектов =================
// Object.prototype.bar = 1
// var foo = { goo: undefined }

// foo.bar // 1
// 'bar' in foo // true

// foo.hasOwnProperty('bar') // false
// foo.hasOwnProperty('goo') // true

//======================================== Являеться ли чило целым ================
// function numb(sum) {
//   return sum % 1 == 0;
// }
// console.log(numb(4));

//======================Oстанавливаем setInterval ================
// let interval = setInterval(() => {
//     console.log('clik')
// },1000);
// setTimeout(() => {clearInterval(interval )
//     console.log('stop')
// }, 5000);
//========================== Примитивные типы (все кроме Объекта) ======================
// 1. Number
// 2. String.
// 3. Null.
// 4. undefined.
// 5. Bigint.
// 6. Symbol.
// 7. Bolleon.
// 8. Object.

// =======================Стрелочная функция ===================
// нет this  берет его снаружи, более корокий синтаксис, для короткого кода, нет переменой аргумент, Отсутствие this естественным образом ведёт к другому ограничению: стрелочные функции не могут быть использованы как конструкторы. Они не могут быть вызваны с new.Стрелка => ничего не привязывает. У функции просто нет this. При получении значения this – оно, как обычная переменная, берётся из внешнего лексического окружения.
//   let c =  (a, b)=>  a + b || { return a + b}

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     func("Guest"); // использует func, чтобы снова вызвать себя же
//   }
// };
// sayHi()

//===============================берет this  снаружи ====================
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList ()  {
//     this.students.forEach(function(student) {
//       // Error: Cannot read property 'title' of undefined
//       console.log(this.title + ': ' + student)
//     });
//   }
// };

// group.showList()

//==================================  This ===============================
//  This — это ключевое слово, используемое в JavaScript, которое имеет особое значение, зависящее от контекста в котором оно применяется. Итак, когда мы пользуемся ключевым словом this, мы, на самом деле, обращаемся с его помощью к некоему объекту
// console.log(this) == выведет в браузере объекь window
// При использовании функций, которые имеются в глобальном контексте (это отличает их от методов объектов) ключевое слово this в них будет указывать на объект window
// function myFunction() {
//   console.log(this);
// }
// myFunction() // выведет в браузере объекь window

// var dog = {
//   name: 'Chester',
//   breed: 'beagle',
//   intro: function(){
//     console.log(this);
//   }
// };

// dog.intro();
//============================== Что будет в консоли ==============

// var obj1 = {
//   hello: function() {
//     console.log('Hello world');
//     return this;
//   },
//   obj2: {
//       breed: 'dog',
//       speak: function(){
//             console.log('woof!');
//             return this;
//         }
//     }
// };

// console.log(obj1);
// console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
// console.log(obj1.obj2);
// console.log(obj1.obj2.speak());

// var objReg = {
//   hello: function() {
//     return this;
//   }
// };
// console.log(objReg)
// console.log(objReg.hello())

// var objArrow = {
//     hello: () => this
// };
// // this.name = 12 // что будет используя эту строчку и без ее
// console.log(objArrow.hello())

// let fun = ()=> {
//   console.log(this)
// }
//  fun ()

// function test() {
//   console.log('hello world'); //Когда обычная функция находится в глобальной области видимости, то ключевое слово this, использованное в ней, будет привязано к объекту window. Ниже приведён пример, в котором функцию test можно рассматривать в виде метода объекта window.
//   console.log(this);
// }
// test();

// Однако если функция выполняется в строгом режиме, то в this будет записано undefined, так как в этом режиме запрещены привязки по умолчанию. Попробуйте запустить следующий пример в консоли браузера.

// function test() {
//   'use strict';
//   return this;
// }
// console.log( test() );

// =========В объект мы добавили новое свойство, которое имеет метод chase ================

// var dog = {
//   breed: "Beagles",
//   lovesToChase: "rabbits",
// };

// function chase() {
//   console.log(this.breed + " loves chasing " + this.lovesToChase + ".");
// }
// dog.foo = chase;
// dog.foo();

//=======================================================================

    //Ключевое слово this находит применение в функциях-конструкторах, используемых для создания объектов, так как оно позволяет, универсальным образом, работать со множеством объектов, создаваемых с помощью такой функции.


// function Dog(breed, name, friends){
//     this.breed = breed;
//     this.name = name;
//     this.friends = friends;
//     this.intro = function() {
//       console.log(`Hi, my name is ${this.name}and I’m a ${this.friends}`);
//         return this;
//     };
// }
// var chester = new Dog('beagle', 'Chester', ['Gracie', 'Josey', 'Barkley']);
// chester.intro();        // выводит Hi, my name is Chester and I'm a beagle
// console.log(chester);


// var City = function (city, state) {
//   this.city = city || "Phoenix";
//   this.state = state || "AZ";
//   this.sentence = function() {
//     console.log(`I live in ${this.city}, ${this.state}.`);
//   };
// };


// var phoenix = new City("Minsk", "BY"); // используем параметры по умолчанию
// console.log(phoenix); // выводит в консоль строковое представление объекта
// phoenix.sentence(); // выводит I live in Phoenix, AZ.

// var spokane = new City('Spokane', 'WA');
// console.log(spokane); // выводит сам объект
// spokane.sentence(); // выводит I live in Spokane, WA.

// При вызове функции-конструктора с использованием ключевого слова new ключевое слово this указывает на новый объект, который, после некоторой работы над ним, будет возвращён из этой функции. Ключевое слово this в данной ситуации весьма важно. Почему? Всё дело в том, что с его помощью можно, используя единственную функцию-конструктор, создавать множество однотипных объектов.

// Это позволяет нам масштабировать приложение и сокращать дублирование кода. Для того чтобы понять важность этого механизма, подумайте о том, как устроены учётные записи в социальных сетях. Каждая учётная запись может представлять собой экземпляр объекта, создаваемый с помощью функции-конструктора Friend. Каждый такой объект можно заполнять уникальными данными о пользователе. Рассмотрим следующий код.

// Функция-конструктор

// var Friend = function(name, password, interests, job){
//   this.fullName = name;
//   this.password = password;
//   this.interests = interests;
//   this.job = job;
// };

// function sayHello(){
//    // раскомментируйте следующую строчку, чтобы узнать, на что указывает this
// //    console.log(this);
//   return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`;
// }
// // Мы можем создать один или несколько экземпляров объекта типа Friend, используя ключевое слово new
// var john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher');

// // console.log(john);

// // // Назначим функцию ключу greeting объекта john
// john.greeting = sayHello;

// // // Вызовем новый метод объекта
// console.log( john.greeting() );

// // Помните о том, что sayHello() не стоит вызывать как обычную функцию
// console.log( sayHello() ) ;
// const person = {
//     surname: "Старк",
//     kniws: function (what, name) {
//         console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//     }
// }
// const jons = { surname: 'Берн'}
// person.kniws('все', 'Бран')
// person.kniws.call(jons, 'ничего не', 'Джон' )// первым параметром передаем контекст этого объекта а дальше уже используем аргументы индивидуальные
// person.kniws.apply(jons, ['ничего', '<bdtym'] ) // отличие от  call() у его два параметра и второй это массив
// const bount = person.kniws.bind(jons, ['ничего', '<bdtym'] ) // все тоже принимет что и остальные методы .... но он возращает новую функицю
// bount()
//////////

// function Person(name, age) {
//     this.name = name
//     this.age = age
//     console.log(this) //обращаемся к самому  Person

// }
// const elens = new Person('Sasha', 25)//работа с классами...this равно все что лежит в переменной elens...передача контекста..

//=======================Явная передача контекста===================
// function name() {
//     console.log(this)
// }
// const obj = {name:'Sergey'}
// name.apply(obj)
// name.call(obj)
// name.bind(obj)()
//Работа в контексте стрелочных функции
// function Cat(color) {
//     this.color = color
//     console.log("This", this)
//     ;( ()=> console.log('gghghh', this) )()
// }
// new Cat ('red')
//======================Неяная передача контекста=======================

// const animal = {
//   leg: 4,
//   more: function () { ///к этой функии привязался контекст объекта
//     console.log(this);
//   },
// };
// animal.more()