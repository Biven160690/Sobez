//запрос данных нужно сделать через html

// (async () => {
// let url = await fetch ('https://jsonplaceholder.typicode.com/users');
// // let response = await fetch(url);
//  let commits = []
//   commits = await url.json();
//   // читаем ответ в формате JSON
// })()
// console.log(commits)

// пишем проверку если будут ошибки

"use strict";
      globalThis.__codeBoxId = "2dn2yk1cbz";

      (async () => {
        let url = await fetch("https://jsonplaceholder.typicode.com/users");
        let commits = [];
        if (url.ok) {
          // если HTTP-статус в диапазоне 200-299
          // получаем тело ответа (см. про этот метод ниже)
          commits = await url.json();
          console.log(commits);
        } else {
          console.log("Ошибка HTTP: " + url.status);
        }
      })();

console.log(2*52)

//можем получать заголовки ответов используя методы объекта MAP (там их много есть set . get)
        console.log(url.headers.get("Content-Type"));

        for (let [key, value] of url.headers) {
          console.log(`${key} = ${value}`)
        }
// Для установки заголовка запроса в fetch мы можем использовать опцию headers
let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});