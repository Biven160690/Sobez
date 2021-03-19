// Инициализация — это создание в памяти браузера JS-объекта, соответствующего экземпляру блока или элеменconst
//Класс очень уден для полноценного наследования

// const animal = {
//     name: "Animal",
//     age: 5,
//     hasTail: true
// }

// class Animal {
//   static type = "ANIMAL"; //статические методы или переменны спомощью слова "static" которы будут доступны только у класса
//   constructor(options) {
//     // constructor нужен для инициализация  объекта

//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }
//   voise() {
//     console.log("I am cat");
//   }
// }
// const animal = new Animal({
//   // данный объект являеться наследником класса Animal и так же наследником объекта, мы так же можем в классе Animal нашем создать метод который попадет в прототип нашего объекта animal
//   name: "Animal",
//   age: 5,
//   hasTail: true,
// });

// // метод  voise доступен для объекта animal его нет в объекте он есть в прототипе
// //классы очень удобны так как мы можем создавать полноценное наследование

// class Cat extends Animal {
//   //для того чтоб наследоваться от класса Animal нужно воспользоваться ключевым словом extends
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }
//   //мы так же можем переписывать методы из родительского класса он будет перетирать  метод в родительском классе
//   voise() {
//     //но бывает что нам нужно вызывать метод с родительского класса...мы прописывае слово super и добовляем тот метод который хотим
//     super.voise();
//     console.log("Hi");
//   }
//   // мы так же можем использовать get and set
//   get ageInfo() {
//     //это не метод а простое поле так это get
//     return this.age * 7;
//   }
//   set ageInfo(newAge) {
//     this.age = newAge; // в консоли мы пропишем cat.ageInfo = 8 и мы изменим this.age и у нас измениться get ageInfo будет другое выражение
//   }
// }
// const cat = new Cat({
//   name: "Cat",
//   age: 7,
//   hasTail: true,
//   color: "black", // если мы хотим для класса Cat передавать еще дополнительные параеметры и  хотим присваивать только для класса Cat, мы создаем в дочернем классе конструктор но мы до начала должны вызвать конструктор из родительского класса при помощи super(options)
// });

// // class Component {
//   constructor(selector) {
//     //создаем приватное поле через $
//     this.$el = document.querySelector(selector); // document.querySelector ищет  по всему документу selector и первый найденный выводит
//   }
//   hide() {
//     this.$el.style.display = "none";
//   }
//   show() {
//     this.$el.style.display = "block";
//   }
// }

// class Box extends Component {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = this.$el.style.height = options.size + "px";
//     this.$el.style.background = options.color;
//   }
// }
// const box1 = new Box({
//   selector: "#box1",
//   size: 100,
//   color: "red",
// });
// const box2 = new Box({
//   selector: "#box2",
//   size: 200,
//   color: "yellow",
// });
// В JavaScript класс – это разновидность функции.
// При этом автоматически вызывается метод constructor(), в нём мы можем инициализировать объект.
// Когда вызывается new User("Иван"):

// Создаётся новый объект.
// constructor запускается с заданным аргументом и сохраняет его в this.name.

// Пример для объяснения
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// доказательство: User - это функция
// Вот что на самом деле делает конструкция class User {...}:

// Создаёт функцию с именем User, которая становится результатом объявления класса. Код функции берётся из метода constructor (она будет пустой, если такого метода нет).
// Сохраняет все методы, такие как sayHi, в User.prototype.
// При вызове метода объекта new User он будет взят из прототипа, как описано в главе F.prototype. Таким образом, объекты new User имеют доступ к методам класса. У каждой функции по умолчанию уже есть свойство "prototype".

// По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор
class Dog {
  static type = "ANIMALS";
  constructor(options) {
    this.name = options.name;
        this.color = options.color;
        this.age = options.age;
  }
  slep(){
    console.log("I slep at 9 o`clock")
  }
  static run (){
    console.log("I go to walk")
  }
}
const dog = new Dog({// создание объекта из класса который являеться наследником класса 
  name: "Sergey",
  color: "black",
  age: 25
});

class Park extends Dog {
  constructor(options) {
    super(options); // если мы хотим для класса  передавать еще дополнительные параеметры , мы создаем в дочернем классе конструктор но мы до начала должны вызвать конструктор из родительского класса при помощи super(аргумент) Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
    this.speed = options.speed;
  }
  car (){
    console.log("I like BMW") 
  }
}

const park = new Park({
  name: "Natasha",
  color:'red',
  speed: 250
})