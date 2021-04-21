//Сравнение=====================================================

// Инкремент ++ a  и a ++
// let a = 10
// let b = a ++

// b ++
// // console.log("b:", a)
// console.log("b:", b)

// let a = [1, 2, 3]; // скопировали ссылку а не массив...
// let b = a // .concat() чтоб не было задваивания.
// b.push(4)
// let c = [1, 2, 3];
// console.log(b)
// console.log(a)
// console.log(a === b) // здесь ссылка поэтому они равны
// console.log(a === c) // здесь два разных объекта

//scope=============================================================
// доступность переенных бывает глобальный и локальный
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

//holstring ===========================================================

// Поднятие или hoisting — это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен.Как следствие, это означает то, что совершенно неважно где были объявлены функция или переменные, все они передвигаются вверх своей области видимости, вне зависимости от того локальная она или же глобальная
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


//IIFE ===============================================================
// В прошлом в JavaScript не было лексического окружения на уровне блоков кода.
// Так что программистам пришлось что-то придумать. И то, что они сделали, называется «immediately-invoked function expressions» (аббревиатура IIFE), что означает функцию, запускаемую сразу после объявления.
// Пути создания IIFE

// (function() {
//   alert("Скобки вокруг функции");
// })();

// (function() {
//   alert("Скобки вокруг всего");
// }());

// !function() {
//   alert("Выражение начинается с логического оператора NOT");
// }();

// +function() {
//   alert("Выражение начинается с унарного плюса");
// }();


//Замыкание ===================================================


// Замыкание  -  эта функция запоминает и имеет доступ к  переменным вышестоящего скоупа(функция внутри функции) мы создаем и возращаем функию 
// Если мы хотим изолировать наш код,чтоб он не был доступен то хорошо использовать следующий пример\
// {
//   // сделать какую-нибудь работу с локальными переменными, которые не должны быть видны снаружи

//   let message = "Hello";

//   console.log(message); // Hello
// }

// console.log(message); // Ошибка: переменная message не определена

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




