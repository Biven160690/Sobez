/////////////Сравнение
// let a = 10
// let b = a
// b ++
// console.log("b:", a)
// //  ++ b
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
// function funA () {
//     let a = 1

//     function funB() {
//         let b = 2

//         function funC() {
//             let c = 3

//             console.log("funC:", a, b, c)
//         }

//         funC() // видит все переменные
//         console.log("funB:", a, b)
//     }
//     funB() // только видит  а и б
//      console.log("funA:", a)

// }
// funA () //только видит а 

/////////////////////holstring Поднятие или hoisting — это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен.Как следствие, это означает то, что совершенно неважно где были объявлены функция или переменные, все они передвигаются вверх своей области видимости, вне зависимости от того локальная она или же глобальная
 
// console.log(i)
// var i = 42
// console.log(i)
// console.log(i)
// let i = 42 // непроилицилизированна
// console.log(i)
// console.log(i)
// const i = 42
// console.log(i)

/////let + const
// let a = "fvfbggb"
// let b = "efverv"
// {
//     a  = "efevffffff"// мы изменили значнеие переменной и она будет доступна и за пределами скобок
//     let b = "ytrew" //переменная доступна только в этих скобках (скоуп)
//     console.log(a) 
//     console.log(b)
// }
//     console.log(a)
//     console.log(b)
// const port = 8080;
// port = 2000 // иы не можем приметивные типы изменять...массив и объекты можем ...

////Замыкание  -функция имеет доступ к  переменным вышестоящего скоупа(функция внутри функции)
// function sayHelloTo(name) {
//     const message = "Hello" + name
//     return function(){
//         console.log(message)
//     }
// }
// const helloy = sayHelloTo('Elena')
// console.log(helloy)
// helloy()
// function cddc(){
//     const dd =["Angulat" , "Js"]
//     return{
//         ssd: function(){
//             console.log(dd)
//         },
//         wwd: function(rere){
//             dd.push(rere)

//         }
//     }   
// }
// const data = cddc();
// data.ssd()
// data.wwd("React")
// data.ssd()
// const fib = [1, 2, 3, 5, 8, 13]
// for (var i = 0; i < fib.length; i ++) {
//     setTimeout(function(){
//         console.log(`fib [${i}] = ${fib[i]}`)
//     }, 1) //цикл работает очень бысто. Мы раз оздали переменную i дальше она изменяеться уже как ссылка,,,решение (заменить вар на лет, так лет существует внутри болчного скоупа  )
// // }// замыкание второй способ
// const fib = [1, 2, 3, 5, 8, 13]
// for (var i = 0; i < fib.length; i ++) {
//     (function(j) {
//       setTimeout(function(){
//         console.log(`fib [${j}] = ${fib[j]}`)
//     }, 1500) 
//     })(i)
   
// }//j  берется из текущей итерации i 
// const person = {
//     surname: "Старк",
//     kniws: function (what, name) {
//         console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//     }
// }
// const jons = { surname: 'Берн'}
// person.kniws('все', 'Бран')
// person.kniws.call(jons, 'ничего', '<bdtym' )
// person.kniws.apply(jons, ['ничего', '<bdtym'] )
// const bount = person.kniws.bind(jons, ['ничего', '<bdtym'] )
// bount()
//////////
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     console.log(this)
    
// }
// const elens = new Person('Sasha', 25)//работа с классами...this равно все что лежит в переменной elens...передача контекста..
// function name() {
//     console.log(this)
// }
// const obj = {name:'Sergey'}
// name.apply(obj)
// name.call(obj)
// name.bind(obj)()
//Работа в контексте стрелочных функции
function Cat(color) {
    this.color = color
    console.log("This", this)
    ;( ()=> console.log('gghghh', this) )()
}
new Cat ('red')