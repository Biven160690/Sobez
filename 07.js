// Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа.

// Обратите внимание, что F.prototype означает обычное свойство с именем "prototype" для F. Это ещё не «прототип объекта», а обычное свойство F с таким именем.
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// let car = {
//   nomer: false,
// }; 
// Rabbit.prototype = car;

// let cars = new Rabbit("Sergey"); //  rabbit.__proto__ == animal

// console.log( rabbit.name );
// // console.log( rabbit.eats = 12 );
// console.log(cars.name)

// По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор. У каждой функции по умолчанию уже есть свойство "prototype"
// function Rabbit() {}

/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/
// Пример применения:
// function Rabbit(name) {
//   this.name = name;
//   console.log(name);
// }

// let rabbit = new Rabbit("White Rabbit");

// let rabbit2 = new rabbit.constructor("Black Rabbit");

// Это удобно, когда у нас есть объект, но мы не знаем, какой конструктор использовался для его создания (например, он мог быть взят из сторонней библиотеки), а нам необходимо создать ещё один такой объект.
// В частности, если мы заменим прототип по умолчанию на другой объект, то свойства "constructor" в нём не будет.
// function Rabbit() {}
// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit
// };

// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit); // false

// Свойство F.prototype (не путать с [[Prototype]]) устанавливает[[Prototype]] для новых объектов при вызове new F().
// Значение F.prototype должно быть либо объектом, либо null. Другие значения не будут работать.
// Свойство "prototype" является особым, только когда оно назначено функции-конструктору, которая вызывается оператором new.
// Чтоб можно было брать  работоать с объектом конструктором млнжно проверить его name.constructor===name если true то  можно работать// Но если кто-то перезапишет User.prototype и забудет заново назначить свойство "constructor", чтобы оно указывало на User, то ничего не выйдет
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд
// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   alert("Hello!");
// }

// f.defer(1000);


let animal = {
  eats: true
};
let rabbit = {
    name:"Sergey"
};
// создаём новый объект с прототипом animal
rabbit = Object.create(animal);

//  animal.__proto__ = rabbit;
console.log(rabbit.eats); // true
console.log(rabbit.name); // true
// console.log(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit
// console.log(animal.name); // true
// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}