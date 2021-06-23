//=======================  Сетевые запросы =================================



// В обязанности браузера входит отображение информации полученной с сервера и получение информации от пользователя для отправки ее обратно на сервер. HTTP–это протокол прикладного уровня для передачи данных от браузера к серверу и обратно.HTTP сообщение обычно передаются между сервером и  браузером через порт 80 или 443 при использовании Secure HTTP (HTTPS).
//запрос данных нужно сделать через html
// Есть несколько способов делать сетевые запросы и получать информацию с сервера.

// Метод fetch() — современный и очень мощный, поэтому начнём с него. Он не поддерживается старыми (можно использовать полифил), но поддерживается всеми современными браузерами.

// (async () => {
//   let url = await fetch("https://jsonplaceholder.typicode.com/users");
//   let commits = [];
//   commits = await url.json();
//   console.log(commits);
// })();


//=====================Request===================


// 1. Метод HTTP.
// 2. Версия протокола.
// 3. Запрашиваемая страница.
// 4. Доменное имя сайта.
// 5. Тело.
// 6. Заголовок 


//==========================Response===================


// 1. Статус.
// 2. Описание статуса. 
// 3. Версия протокола.
// 4. Заголовок 
// 5. Тело ответа.




// ======================= пишем проверку если будут ошибки ==========================


// "use strict";
//       globalThis.__codeBoxId = "2dn2yk1cbz";

      // (async () => {
      //   let url = await fetch("https://jsonplaceholder.typicode.com/users");
      //   let commits = [];
      //   if (url.ok) {
      //     // если HTTP-статус в диапазоне 200-299
      //     // получаем тело ответа (см. про этот метод ниже)
      //     commits = await url.json();
      //     console.log(commits);
      //   } else {
      //     console.log("Ошибка HTTP: " + url.status);
      //   }
      // })();


//=============================можем получать заголовки ответов=====================


// используя методы объекта MAP (там их много есть set . get)
//         console.log(url.headers.get("Content-Type"));

//         for (let [key, value] of url.headers) { 
//           console.log(`${key} = ${value}`)
//         }


// ======response предоставляет несколько методов, основанных на промисах, для доступа к телу ответа в различных форматах===


// Мы можем выбрать только один метод чтения ответа.
// response.text() – читает ответ и возвращает как обычный текст,
// response.json() – декодирует ответ в формате JSON,
// response.formData() – возвращает ответ как объект FormData (разберём его в следующей главе),
// response.blob() – возвращает объект как Blob (бинарные данные с типом),
// response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
// помимо этого, response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям. Мы рассмотрим и такой пример несколько позже.


// =========================отправка запроса====================================


// Для отправки POST-запроса или запроса с другим методом, нам необходимо использовать fetch параметры:

// method – HTTP метод, например POST,
// body – тело запроса, одно из списка:
// строка (например, в формате JSON),
// объект FormData для отправки данных как form/multipart,
// Blob/BufferSource для отправки бинарных данных,
// URLSearchParams для отправки данных в кодировке x-www-form-urlencoded, используется редко.

// let user = {
//   name: 'John',
//   surname: 'Smith'
// };

// let response = await fetch('/article/fetch/post/user', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(user)
// });

// let result = await response.json();
// alert(result.message);



// ==============================Promise=======================================

//Он был в замен колбэк!!!!! Объект Promise используется для отложенных и асинхронных вычислений
//Промис я использовал для асинхронных операций  к внешней среде...Так же можно использовать и неасинхронные операцы но они поппадут сразу в кол стек........Это объект в который мы можем задеклорировать что нужно сделать движку JS   когда он будет готов
// (по англ. promise, будем называть такой объект «промис») – это специальный объект в JavaScript, который связывает «создающий» и «потребляющий» коды вместе и  объект, представляющий результат успешного или неудачного завершения асинхронной операции.Создается с помощью конструктора new Promise(...),Resolve() — сообщает о том, что код выполнен «успешно», reject() – код выполнен с «ошибкой» (что считать «ошибкой» при выполнении вашего кода, решать вам. Это фсинхронные функции...

 
//============================= Синтаксис============================


let promise = new Promise(function(resolve, reject){
resolve("done!")
// функция-исполнитель
})
promise.then(
  result => console.log(result),
  error => console.log(error))


// Функция, переданная в конструкцию new Promise, называется исполнитель (executor). Когда Promise создаётся, она запускается автоматически.

// Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript. Наш код – только внутри исполнителя.
// resolve(value) — если работа завершилась успешно, с результатом value.
// reject(error) — если произошла ошибка, error – объект ошибки.

//======================Внутринние свойства=================

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
// state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
// result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).


////==============ИТОГО==================================


// Подведём промежуточные итоги: исполнитель выполняет задачу (что-то, что обычно требует времени), затем вызывает resolve или reject, чтобы изменить состояние соответствующего Promise.
// Исполнитель должен вызвать что-то одно: resolve или reject. Состояние промиса может быть изменено только один раз.
// Идея в том, что задача, выполняемая исполнителем, может иметь только один итог: результат или ошибку.


// ======================Функции-потребители могут быть зарегистрированы (подписаны) с помощью методов .then, .catch и .finally.=======


// Наиболее важный и фундаментальный метод – .then.

// Синтаксис:

// promise.then(
//   function(result) { /* обработает успешное выполнение */ },
//   function(error) { /* обработает ошибку */ }
// );
// Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.

// Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.
// Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction). Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое:

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Ошибка!")), 1000);
// });

// // // .catch(f) это тоже самое, что promise.then(null, f)
// promise.catch(console.log); // выведет "Error: Ошибка!" спустя одну секунду
// Вызов .catch(f) – это сокращённый, «укороченный» вариант .then(null, f).

// Вызов .finally(f) похож на .then(f, f), в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой.
// Обработчик, вызываемый из finally, не имеет аргументов. В finally мы не знаем, как был завершён промис. И это нормально, потому что обычно наша задача – выполнить «общие» завершающие процедуры.

// Обработчик finally «пропускает» результат или ошибку дальше, к последующим обработчикам.

// Например, здесь результат проходит через finally к then:
// Это очень удобно, потому что finally не предназначен для обработки результата промиса. Так что он просто пропускает его через себя дальше.


// ===========================async/await========================================
// для обработки ошибок используем try..catch вместо .finally/.catch(f)

// Существует специальный синтаксис для работы с промисами, который называется «async/await». Он удивительно прост для понимания и использования.
//  async/await это улучшение асинхронного програмирования;  позволяет писать код как синхронный но использовать для решения асинхронных задач и не блокировать поток(пишем асинхронный код в стиле синхронного);  версия более понятная....отлдака более более проще (отладчик дождеться волнения await-строки и пойдет дальше)
 
// Синхронный способ: Он ждет завершения каждой операции, после чего только выполняет следующую операцию. По вашему запросу: Команда console.log() не будет выполнена до &, если только запрос не закончит выполнение, чтобы получить весь результат из базы данных.

// Асинхронный способ: он никогда не ждет завершения каждой операции, а выполняет все операции только в первом GO. Результат каждой операции будет обработан, как только результат будет доступен.  То есть запрос будет обрабатываться в фоновом режиме, пока ваша программа делает другие вещи, и как только данные запроса будут готовы, вы будете делать с ними все, что захотите.

//ниже две функции одинаковы
// function f() {
//   return Promise.resolve(1);
// }
// f().then(console.log)


// async  function f() {
//   return 1;
// }

// f().then(console.log);

// У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.

// let promise = new Promise(function(resolve, reject){
//   return resolve(1)
// })
// promise.finally(console.log("yes"))

// Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится.

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 1000)
//   });

//   let result = await promise; // будет ждать, пока промис не выполнится (*)

//   console.log(result); // "готово!"
// }

// f()
// Обратите внимание, хотя await и заставляет JavaScript дожидаться выполнения промиса, это не отнимает ресурсов процессора. Пока промис не выполнится, JS-движок может заниматься другими задачами: выполнять прочие скрипты, обрабатывать события и т.п. Если мы попробуем использовать await внутри функции, объявленной без async, получим синтаксическую ошибку:

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     alert(resolve);
//     // выполнить resolve со значением this.num * 2 через 1000мс
//     setTimeout(() => resolve(this.num * 2), 1000); // (*)
//   }
// };

// async function f() {
//   // код будет ждать 1 секунду,
//   // после чего значение result станет равным 2
//   let result = await new Thenable(1);
//   console.log(result);
// }

// f();


//=========================try..catch=========================================
//используем вместо catch, finaly при выполнении async await!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// try..catch  работает только для ошибок, возникающих во время выполнения кода
// Чтобы try..catch работал, код должен быть выполнимым. Другими словами, это должен быть корректный JavaScript-код.
// try..catch работает синхронно

// Обычно скрипт в случае ошибки «падает» (сразу же останавливается), с выводом ошибки в консоль.

// Но есть синтаксическая конструкция try..catch, которая позволяет «ловить» ошибки и вместо падения делать что-то более осмысленное

// try {

//   // код...

// } catch (err) {

//   // обработка ошибки

// }
// Сначала выполняется код внутри блока try {...}.
// Если в нём нет ошибок, то блок catch(err) игнорируется: выполнение доходит до конца try и потом далее, полностью пропуская catch.
// Если же в нём возникает ошибка, то выполнение try прерывается, игнорируеться остаток кода в блоке try, и поток управления переходит в начало catch(err). Переменная err (можно использовать любое имя) содержит объект ошибки с подробной информацией о произошедшем.
// Когда возникает ошибка, JavaScript генерирует объект, содержащий её детали. Затем этот объект передаётся как аргумент в блок catch:


//=======================Фильтруем ошибки=================================

// name
// Имя ошибки. Например, для неопределённой переменной это "ReferenceError".
// message
// Текстовое сообщение о деталях ошибки.
// В большинстве окружений доступны и другие, нестандартные свойства. Одно из самых широко используемых и поддерживаемых – это:

// stack
// Текущий стек вызова: строка, содержащая информацию о последовательности вложенных вызовов, которые привели к ошибке. Используется в целях отладки.


//===========================Оператор throw=======================================


// Оператор throw генерирует собственных ошибки  throw <объект ошибки>
// В JavaScript есть множество встроенных конструкторов для стандартных ошибок: Error, SyntaxError, ReferenceError, TypeError и другие.

// let json = '{ "age": 30, "name": "sergey" }'; // данные неполны

// try {

//   let user = JSON.parse(json); // <-- выполнится без ошибок

//   if (!user.name) {
//     throw new SyntaxError("Данные неполны: нет имени"); // (*) Оператор throw генерирует ошибки. Выполнение блока try немедленно останавливается, и поток управления прыгает в catch
//   }

//   console.log( user.name);
// } catch(e) {
//   console.log( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
// }

// Блок catch должен обрабатывать только те ошибки, которые ему известны, и «пробрасывать» все остальные.

// Техника «проброс исключения» выглядит так:

// Блок catch получает все ошибки.
// В блоке catch(err) {...} мы анализируем объект ошибки err.
// Если мы не знаем как её обработать, тогда делаем throw err.

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 5000)
//   });

//   let result = await promise; // будет ждать, пока промис не выполнится (*)

//   console.log(result); // "готово!"
// }
// f()
