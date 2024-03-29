// =================splice==================

 //Умеет всё: добавлять, удалять и заменять элементы.//Это нормально, потому что всё, что делает delete obj.key – это удаляет значение с данным ключом key. Это нормально для объектов, но для массивов мы обычно хотим, чтобы оставшиеся элементы сдвинулись и заняли освободившееся место. Мы ждём, что массив станет короче. Меняет старый!!!!

// var a = ["ser", "aer", "rtrtt", "gggg", "sergey"]
//  a.splice(0,2,"0","0")
// console.log(a)
//  a.splice(2,2,"0","0")
// console.log(a)
//  a.splice(0,2)
// console.log(a)
//=================slice=====================

//Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end....Не изменяя старый!!!!!!

// var b = [1, 2, 3, 4, 5, 6]
// var a = b.slice(2,4)
// console.log(a)

// ==============================сoncat============================


// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения

// var a = [1, 3]
// var b = a.concat(1,2)
// var b = a.concat([4,1,2])
// console.log(b)

//================================forEach===========================

// Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
// Итак, forEach ничего не возвращает. Он просто вызывает функцию для каждого элемента массива, а затем ее выполняет. Поэтому все, что вы возвращаете внутри этой вызываемой функции, просто отбрасывается.Метод forEach() выполняет функцию callback один раз для каждого элемента массива; в отличие от методов every() и some(), он всегда возвращает значение undefined.  Не существует способа остановить или прервать цикл forEach() кроме как выбрасыванием исключения.
// const items = ['item1', 'item2', 'item3']
// const copy = []

// items.forEach(function(item){
//   copy.push(item)
// })
// console.table(copy)
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert)

// ============================Поиск значений в объекте===========================
// let a = [12, 34, 35, 45]
// let b = a.includes(35,0)
// console.log(b)


// arr.indexOf(item, from) 
// // ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
// arr.lastIndexOf(item, from) 
// //  то же самое, но ищет справа налево.
// arr.includes(item, from) 
// – ищет item, начиная с индекса from, и возвращает true, если поиск успешен

//================================ find и findIndex ====================

// find и findIndex Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined. Метод arr.findIndex – по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено.
// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// var user = users.find(item => item.name == "Вася")
// console.log(user)


// Метод find ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт true.


// ============================================filter==========================================

// На тот случай, если найденных элементов может быть много, предусмотрен метод arr.filter(fn).

// Синтаксис этого метода схож с find, но filter возвращает массив из всех подходящих элементов:

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// var user = users.filter(item => item.id < 3)
// console.log(user)


// =============================map================================


//Новый массив, где каждый элемент является результатом callback функции.
//Функция, вызываемая для каждого элемента массива arr. Каждый раз, когда callback выполняется, возвращаемое значение добавляется в new_array. Метод map не изменяет массив, для которого он был вызван (хотя функция callback может это делать).Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
 
// let a = [12, 23, 34, 45]
// let b = a.map(item => item % 2)
// console.log(b)


// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//     // Возвращает элемент для new_array..... currentValue  Текущий обрабатываемый элемент массива.
// }[, thisArg])


// var a = [1, 3, 4, 5, 6];
// var ses = 0;
// var b = a.map(function(sum) {
//  return   ses += sum 
// });
// console.log(b)

// var a = [1, 3, 4, 5, 6];
// var ses = 0;
// var b = a.map(items => items < 4 ? items * 2 : items + 1
// );

// console.log(b)
// // console.log(a)


// var array1 = [true, false, 0, 0, 1];
// const s = []
// array1.forEach(element => s.push(element == true))
// console.log(s)

//=================================sort================================

// Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов.

// Он возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам arr. Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента arr.sort(). Меняет массив.


// var a = [1, 34, 23, 2];
// var b = a.sort()
// console.log(a)

// arr.sort( (a, b) => a - b );

// =======================reversу===============================

// Метод arr.reverse меняет порядок элементов в arr на обратный.
// var a = [1, 23, 34, 34, 54];
// a.reverse()
// console.log(a)

//=============================split==============================

// Метод str.split(delim) именно это и делает. Он разбивает строку на массив по заданному разделителю delim.У метода split есть необязательный второй числовой аргумент – ограничение на количество элементов в массиве. Если их больше, чем указано, то остаток массива будет отброшен. На практике это редко используется; Если разделитель separator найден, он удаляется из строки, а подстроки возвращаются в массиве.

// let names = 'Вася! Петя! Маша! Маша! Саша';

// let arr = names.split('! ');
// console.log(arr)

//=================================join====================


// Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.

// let arr = ['Вася', 'Петя', 'Маша'];
// let a = arr.join("!")
// console.log(a)

//=========================reduce====================

// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение. Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.Если itialValue не задан то accumulator принимает значение первого элемента массива а currentValue второго ...если у нас будет пустой массив то будет ошибка ...лучше задавать initialValue что ее  небыло.... Метод arr.reduceRight работает аналогично, но проходит по массиву справа налево.
// let value = arr.reduce(function(accumulator, currentValue) {
//   // ...тело функции 
// }, [initialValue]);

// const arr = ['Вася', 'Петя', 'Маша']

// var reducer = arr.reduce((sum, current) => sum + current, 0);
// var a = reducer.split(" ")
// console.log(a)

// var initialValue = 0;
// var sum = [{x: 1, y: 10}, {x:2, y: 25}, {x:3, y: 2}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.y;
// }, initialValue)

// console.log(sum)

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 0));
// expected output: 15

// friends - список из объектов(друзей)
// где поле "books" - список любимых книг друга
// var friends = [
// { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
// { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
// { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
// ]

// allbooks - список, который будет содержать все книги друзей +
// дополнительный список указанный в initialValue
// var allbooks = friends.reduce(function(prev, curr) {
//   return [...prev,...curr.books];
// }, ["Alphabet"]);
// console.log(allbooks)
// allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace",
// "Romeo and Juliet", "The Lord of the Rings", "The Shining"]

// ==============================spread=========================

// Синтаксис оператора spread ... Оператор spread позволяет расширять выражения в тех местах, где предусмотрено использование нескольких аргументов.

// var mid = [3, 4];
// var arr = [1, 2, mid, 5, 6];
// console.log(arr); // [1, 2, [3, 4], 5, 6]

// var mid = [3, 4];
// var arr = [1, 2, ...mid, 5, 6];
// console.log([{...mid}]); // [1, 2, 3, 4, 5, 6] 


// var arr = [2, 4, 8, 6, 0];
// var max = Math.max(...arr);
// console.log(max); // выведет максимальное число 8

// var arr = ['a', 'b', 'c'];
// var arr2 = [...arr];
// arr2.push('d'); // мы знаем что при выполнении строчки 182 без ... будет присвоена сслыка массива и при воздейтсвии  на массив к которому мы присвоили то все отобразиться в родительском массиве, оператор ... все решил .выполнение этого кода приведет что родительский массив небудет еняться
// console.log(arr);