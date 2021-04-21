//====================Типы данных====================

//null, undefaind, string, number, object, boolein, symbol, bigint

// console.log( typeof "hi");
// console.log( typeof `hi`);
// console.log( typeof 15);
// console.log( typeof true);
// console.log( typeof null);
// console.log( typeof undefined);
// console.log( typeof Math);
// console.log( typeof Symbol("JS"));
// console.log( typeof NaN);
// console.log( typeof 10n);
// console.log( typeof Infinity);
// console.log( typeof function(){})

// let lenguage = "null"
// if (lenguage) {
//     console.log("The best lenguage:", lenguage) 
    // в if значение булион если тру то выведет если нет то нет 

// console.log(Boolean(""))
// console.log(Boolean(" "))
// console.log(Boolean("0"))
// console.log(Boolean(""))
// console.log(Boolean("we12"))
// console.log(null / 2) 
console.log(false == '') 
console.log(false == [])
console.log(false == {}) 
console.log('' == []) 
console.log(''== {}) 
console.log(''== 0) 
console.log(0 == []) 
console.log(0 == {}) 
// console.log(Boolean({})) 
// console.log(Boolean([])) 
// console.log(Boolean(function(){})) 


// console.log(0 == null) 
// console.log(undefined == null) 



//===============================Приведение типов===================
// undefined  переменная была объявлена но нет значения + функции если ничего не возращают то они возращают undefined
//  null  Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».

// console.log( 1 + 1 + "2" ) //здесь "+" учитываеться как конкатинация так как здесь есть трока (у чисел и у строк есть +)
// console.log(typeof("" + 1 + 1 - 1)) // 10 для строки не определе "-"  тип будет number
// console.log(typeof("" + 1 + 0)) //  10 конкатинация тип будет string
// console.log("" - 1 + 0)//-1
// console.log("" + 1 + 1 / 2) // 10 для строки не определе "-"  тип будет number
// console.log(typeof("" + 1 + 1 / 2)) // 10 для строки не определе "-"  тип будет number
// console.log(4 + 10 + "px")
// console.log(null + 2)
// console.log(undefined * 2)

//===================Все приобразовывает в к числу===============

//console.log('2' > true)
 //console.log('' > true)
 //======================= Сравнение строк ==========================

 //Сравниваются по «алфавитный» или «лексикографический» порядок (Используется кодировка Unicode, а не настоящий алфавит)
//  Например, в JavaScript имеет значение регистр символов. Заглавная буква "A" не равна строчной "a". Какая же из них больше? Строчная "a". Почему? Потому что строчные буквы имеют больший код во внутренней таблице кодирования, которую использует JavaScript (Unicode).



// console.log( 'Я' > 'А' ); // true
// console.log( 'Коты' > 'Кода' ); // true
// console.log( 'Сонный' > 'Сон' ); // true

//=========================== ( ==/=== ) =====================
// При сравнени когда двойное равно JS сравнивает значения приведя их к одному типу
// При сравнении когда тройное равно значение и тпы должны быть равны(два объекта должны быть идентичны)


// "" + 1 + 0 = 10
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = 9px
// "$" + 4 + 5 = $45
// "4" - 2 = 2
// "4px" - 2 = nan
// 7 / 0 = Infinity
// "  -9  " + 5 = "-95"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = nan 
// " \t \n" - 2 = -2

