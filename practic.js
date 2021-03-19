
//Проверяем являеться ли число неопределено
// var sum = 10;
// var text = 3;
// if ( sum !== undefined){
//     console.log(`sum1 = ${sum}`)
//  } else {
//     console.log(`sum2 = ${sum}`)
//  }
 //if (typeoff sum !== undefined){
//     console.log(`sum1 = ${sum}`)
//  } 
// 
// 
 //Есть ли у объекта свойства
//   var object= {name:'Sergey'};

//   for ( var prop in object ) {
//     console.log( "Object1: " + prop );
//}

// if (Object.keys(obj).length > 0){
//   console.log(Object.keys(obj).length) 
// }
//   if ( obj.hasOwnProperty(obj) ) 
//   {
//     console.log( "Object1: " + obj );
// }
// Это у наследуемых объектов
// Object.prototype.bar = 1
// var foo = { goo: undefined }

// foo.bar // 1
// 'bar' in foo // true

// foo.hasOwnProperty('bar') // false
// foo.hasOwnProperty('goo') // true

// Являеться ли чило целым 
// function numb (sum) {
//     return sum % 1 == 0
// }
// console.log(numb(3.5))
//Щстанавливаем setInterval
// let interval = setInterval(() => {
//     console.log('clik')
// },1000);
// setTimeout(() => {clearInterval(interval )
//     console.log('stop')
// }, 5000);
// Примитивные типы (все кроме 8 Примитивные)
// 1. Number
// 2. String.
// 3. Null.
// 4. undefined.
// 5. Bigint.
// 6. Symbol.
// 7. Bolleon.
// 8. Object.

// Стпелочная функция - нет this  берет его снаружи, более корокий синтаксис, для короткого кода, нет переменой аргумент, Отсутствие this естественным образом ведёт к другому ограничению: стрелочные функции не могут быть использованы как конструкторы. Они не могут быть вызваны с new.Стрелка => ничего не привязывает. У функции просто нет this. При получении значения this – оно, как обычная переменная, берётся из внешнего лексического окружения.
let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // использует func, чтобы снова вызвать себя же
  }
};

//берет this  снаружи
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined
      alert(this.title + ': ' + student)
    });
  }
};

group.showList()
sayHi("sdsdsds");

let ses = (a,b) => a*b;
console.log(ses(2,5))
