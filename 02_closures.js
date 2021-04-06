/////////////Сравнение
// Инкремент ++ a  и a ++
// let a = 10
// let b = a ++

// // b ++
// console.log("b:", a)
// console.log("b:", b)

// let a = [1, 2, 3]; // скопировали ссылку а не массив...
// let b = a // .concat() чтоб не было задваивания.
// b.push(4)
// let c = [1, 2, 3];
// console.log(b)
// console.log(a)
// console.log(a === b) // здесь ссылка поэтому они равны
// console.log(a === c) // здесь два разных объекта

//////////scope
// function funA() {
//   let a = 1;
//   function funB() {
//     let b = 2;
//     function funC() {
//       let c = 3;

//       console.log("funC:", a, b, c);
//     }

//     funC(); // видит все переменные
//     console.log("funB:", a, b);
//   }
//   funB(); // только видит  а и б
//   console.log("funA:", a);
// }
// funA(); //только видит а

/////////////////////holstring Поднятие или hoisting — это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен.Как следствие, это означает то, что совершенно неважно где были объявлены функция или переменные, все они передвигаются вверх своей области видимости, вне зависимости от того локальная она или же глобальная
// let const не подверженны хостингу

// i = 42;
// b = 3
// console.log(i+b)
// var i;
// var b;
// console.log(i)
// console.log(i)
// let i = 42 // непроилицилизированна
// console.log(i)
// console.log(i)
// const i = 42
// console.log(i)

/////let + const
// let a = "1"
// let b = "2"
// {
//     a  = "3"// мы изменили значнеие переменной и она будет доступна и за пределами скобок
//     let b = "4" //переменная доступна только в этих скобках (скоуп)
//     var c = "5"
//     console.log(a)
//     console.log(c)
//     console.log(b)
// }
//     console.log(a)
//     console.log(b)
//     console.log(c)

// const port = 8080;
// port = 2000 // иы не можем приметивные типы изменять...массив и объекты можем ...

////===================
// Замыкание  -  имеет вложеную функцию и эта функция имеет доступ к  переменным вышестоящего скоупа(функция внутри функции)

// function sayHelloTo(name) {
//   const message = "Hello " + name;
//   return function (n) {
//     console.log(message + n);
//   };
// }

// const helloy = sayHelloTo("Elena"); //  sayHelloTo()  возращает функцию замыкаем  message с 'Elena'
// helloy(12);

// function a(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// const b = a(1)
// console.log(b(12))




//  function bind(context, fn) {
//   return function () {
//       fn.apply(context)
//  };
//  }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }
// const person1 = { name: "Sergey", age: 30, job: "IT" };
// const person2 = { name: "Nata", age: 28, job: "BY" };

// bind(person1, logPerson)()



// function cddc() {
//   const dd = ["Angulat", "Js"];
//   return {
//     ssd: function () {
//       console.log(dd);
//     },
//     wwd: function (rere) {
//       dd.push(rere);
//     },
//   };
// }
// const data = cddc();
// data.ssd();
// data.wwd("React");
// data.ssd();

//======================== Пример замыкания в цикле =================================
// const fib = [1, 2, 3, 5, 8, 13]
// for (var i = 0; i < fib.length; i ++) {
//     setTimeout(function(){
//         console.log(`fib [${i}] = ${fib[i]}`)
//     }, 1000) //цикл работает очень бысто. Так как у нас есть задержка setTimeout, то  будет следующее выражение fib [6] = undefined (заменить вар на лет, так лет существует внутри болчного скоупа  )
//  }// замыкание второй способ
// const fib = [1, 2, 3, 5, 8, 13]
// for (var i = 0; i < fib.length; i ++) {
//     (function(j) {
//       setTimeout(function(){
//         console.log(`fib [${j}] = ${fib[j]}`)
//     }, 1500)
//     })(i)

// }//j  берется из текущей итерации i

//=======================Контекст(это this) передача его =====================================

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
