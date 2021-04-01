// Инициализация — это создание в памяти браузера JS-объекта, соответствующего экземпляру блока или элеменconst

//=======================Класс очень удобен для полноценного наследования========================

// В JavaScript класс – это разновидность функции.
//Классы очень удобны так как мы можем создавать полноценное наследование

//=====================================================№1============================

// Мы можем создать статические методы или переменны спомощью слова "static" которы будут доступны только у класса
//  в  constructor в аргумент я передаю объект (options) из объекта  стр. 45 const animal, мы так же можем передавать и просто данные бкз объекта.....
//  constructor нужен для инициализация  объекта

class Animal {
  static type = "ANIMAL";
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }
  voise() {
    console.log("I am cat");
  }
}
const animal = new Animal({
  name: "Animal",
  age: 5,
  hasTail: true,
});
// console.log(Animal.prototype)

// данный объект являеться наследником класса Animal.
//  на верхнем урове он берет все что иницилизировано через constructor, а остальные методы ему достумны  из Animal.prototype (в прототипе)

//===================Наследование от класса к классу==================

//для того чтоб наследоваться от класса Animal нужно воспользоваться ключевым словом extends

// class Cat extends Animal {}
// const cat = new Cat({
//   name: "Cat",
//   age: 7,
//   hasTail: true,
// });


// если мы хотим для класса Cat передавать еще дополнительные параеметры и  хотим присваивать только для класса Cat, мы создаем в дочернем классе конструктор но мы до начала должны вызвать конструктор из родительского класса при помощи super(options)

class Cat extends Animal {
  constructor(options) {
   super(options);
   this.color = options.color;
 }
}
const cat = new Cat({
  name: "Cat",
  age: 7,
  hasTail: true,
  color: "Red"
});
console.log(cat.color)


// мы можем использовать одинаковые методы с родителем....но передавать новые данные.....метод в дочеренем элементе будет перетирать родительский ....но бывает что нам нужно и тот и тот но мы выполним следующее:

class Cat extends Animal {
  constructor(options) {
   super(options);
   this.color = options.color;
 }
 voise(){
   super.voise() // так мы вызываем метод из родителя
   console.log("Hi") // метод дочерний
 }
}
 
//мы так же мы можем использовать  get and set

class Cat extends Animal {
  constructor(options) {
   super(options);
   this.color = options.color;
 }
 voise(){
   super.voise() // так мы вызываем метод из родителя
   console.log("Hi") // метод дочерний
 }
  get ageInfo() {   //это не метод а простое поле так это get, когда мы вызовем ageInfo у нас будет резудьтат
  return this.age * 7;
}
set ageInfo(newAge) {
   this.age = newAge; // в консоли мы пропишем cat.ageInfo = 8 и мы изменим this.age и у нас измениться get ageInfo будет другое выражение
 }


}



