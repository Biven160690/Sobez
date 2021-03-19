const person  = new Object ({
    name: "Максим",
    age: 25,
    greet: function () {
     console.log('GREET')        
    }
});

//к нам добавились скрытые свойсвта прототипа(нашего родителя объекта)

let ser  = new Object ({
    name: "tttt",
    age: 45,
    sw:"fgfgf"
    

})


Object.prototype.sayHello = function () {
    console.log('Hello')
}
//Благодаря  этой конструкции мы расширили базовый прототтип класса обжект и добавлилт новый метод....прпототим это объект который присутсвует у родительских элементов...

// все вышеуказанные объекты будут иметь фукцию sayHello()
const lens = Object.create(person)// имеет свойства  person
lens.name = "dddd";
lens.sayHello()

// прототип идет с разу ищет значение на самом врехнем уровне если его нет то поднимаеться на другой уровень(обращаясь к прототипу) в поисках этого значения

const str = new String("ec ececee e")
// Прототип Это объект с помощью которыйх мы расширяем свойство объектов или классов и может устраивать некоторе наследование внутри JS


// Когда вызывается new Object() (или создаётся объект с помощью литерала {...}), свойство [[Prototype]] этого объекта устанавливается на Object.prototype по правилам, которые мы обсуждали в предыдущей главе:
// [[Prototype]] - это  специальное скрытое свойство которое либо равно null, либо ссылается на другой объект 
// Прототип даёт нам немного «магии». Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа. В программировании такой механизм называется «прототипным наследованием»
// Свойство [[Prototype]] является внутренним и скрытым, но есть много способов задать его.

// Одним из них является использование __proto__
// "prototype"  означает обычное свойство, Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".

// ПРИ помощи свойства prototype мы записываем свойство объекта в скрытые свойтсва 
// У каждой функции по умолчанию уже есть свойство "prototype".

// По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.

