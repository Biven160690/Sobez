//============================Ссылочные данные============================

// var myArray = [10, 20, 30, 40]; // создаем переменную ссылочного типа, а именно массив с именем myArray состоящий из четырех элементов

// var otherArray = myArray // присваиваем новой переменной с именем otherArray первую перменную, при этом, копирование значений из переменной с именем myArray не производится, мы разрешаем новой переменной работать со значениями из первой.

// otherArray[0] = 110; // так изменив якобы значения ново-созданной второй переменной, на самом деле мы производим операцию перезаписи значений из первой переменной.
// console.log(myArray); // отобразим значение 110,20,30,40
// console.log(otherArray); // отобразим значение 110,20,30,40

///=======================Оператор spread разворачивает наш массив и передает каждый элемент массива =


// var myArray = [10, 20, 30, 40]; // создаем переменную ссылочного типа, а именно массив с именем myArray состоящий из четырех элементов

// var otherArray = [...myArray] // присваиваем новой переменной с именем otherArray первую перменную, при этом, копирование значений из переменной с именем myArray не производится, мы разрешаем новой переменной работать со значениями из первой.

// otherArray[0] = 110; // так изменив якобы значения ново-созданной второй переменной, на самом деле мы производим операцию перезаписи значений из первой переменной.
// console.log(myArray); // отобразим значение 10,20,30,40
// console.log(otherArray); // отобразим значение 110,20,30,40

//===================================== Здесь два разных объекта =======================

//         var row1 = "hello";
 
//         var row2 = "Hello" ;

//         if (row1 == row2) {

            
// console.log("строки сравниваются по значению")

//         }

// ==================================ИНТЕРПОЛЯЦИЯ=================================================

// Интерполяция строк — это процесс замены заполнителей в строке значениями строковой переменной. В строке создаётся конструкция ${...}, внутри которой вы можете поместить любую переменную или выражение:

// var age = 25;
// console.log(`I am ${age} years old`); // I am 25 years old



// // Эквивалентно
// console.log('I am ' + age + 'years old'); // I am 25 years old

// const up = (str) => str.toUpperCase();
// let str = `this is ${ up('sting') } in uppercase`;
// console.log(str);

//============================================================ Вложенная интерполяция=================

// Скорее всего, будут возникать ситуации, когда одного уровня интерполяции будет недостаточно. В подобных случаях удобно пользоваться вложенностью (интерполяция внутри интерполяции). Следует помнить, что весь код, находящийся внутри ${...} интерпретируется, как отдельное выражение, то есть может содержать обратные кавычки, которые не будут восприняты, как конец строки:


// const up = (str) => str.toUpperCase();
// let user = 'user';
// let str = `these ${up(`${user}s`)} are great`;
// console.log(str);
// const up = (str) => str.toUpperCase();
// let str = `this is ${ up('sting') } in uppercase`;
// console.log(str); // this is STRING in uppercase


//=========================== Операнд, унарный и бинарный  оператор =================================

// Операнд – то, к чему применяется оператор. Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2. Иногда их называют «аргументами» вместо «операндов».

// Унарный  называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак числа на противоположный: 
// let x = 1;

// x = -x;
// alert( x ) Унарным 
// Бинарным называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:

// let x = 1, y = 3;
// alert( y - x ); 



