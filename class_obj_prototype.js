// function User(name){
//     //this -> {} - не явно
//     this.name = name;
//     //return this - не явно
// }
// User.prototype.say = function (){
//     console.log(this.name);
// }
// //User.prototype ---> {constructor: User}.__proto__ --> Object.prototype.__proto__ --> null
// //Создаем инстанс
// const user = new User('Nik');//{name: 'Nik'}[[Prototype]] --> {constructor: User} <-- User.prototype
// console.log(user)
// user.say()


//class - это функция / - синтаксический сахар - синтаксис под капотом ==============================
// BASE SYNTAX ======================================================================
// class User {
//     //св-в пишутся выше конструктора, заносятся в каждый экземпляр
//     age= 31;
//     someFn =()=>{}
//     someFn2 = function (){}
//
//     constructor(name) {
//         //По симантике это то же самое что Пишется
//         // function User(name){
//         //     this.name = name;
//         // }
//         this.name = name;
//     }
// //Методы заносятся в prototype
//     say() {//Эта запись аналагична -->User.prototype.say = function (){log}
//         console.log(this.name);
//     }
// }
//
// // User.prototype.say = function (){//Теперь это пишется в клаасе по другому, просто пишется метод внутри класса
// //     console.log(this.name);
// // }
// const user = new User('Nik');
// console.log(user)
// user.say()


// JS помещает этот метод constructor(name){} в специальное св-в =========================================
// 1 [[isClassConstructor]] ---> и мы не можем вызвать без ключевого слова new
// class Test{}
// c class не получится сделать вызов Test()
//
// 2 строковое представление string repr
// class Test{}
// function User(){}
// console.log(Test);
// console.log(User);
//
// 3 то что пишем в классе ---> use strict у класса по дефолту стоит
//
// 4 все методы класса являются не перечисляемыми


// //STATIC статические методы и св-в ======================================================================
// class User {
//     // static defaultName = 'Nik';//то же самое что написать так User.defaultName = 'Nik';
//     //Статические св-в принято писать ...
//     static DEFAULT_NAME = 'Nik';
//     static MAX_NAME_LENGTH = 20;
//     static validateUserName = (name) => {
//         if (name.length > /*User-можно написать в статик методах*/ this.MAX_NAME_LENGTH) {//Потому что метод будет 100%
//             // вызван в контексте класса
//             throw new Error('Слишком большое имя')
//         }
//     }
//     constructor(name) {
//         //Теперь для чего static
//         // if (name.length > User.MAX_NAME_LENGTH){//можно делать проверки
//         //     throw new Error('Слишком большое имя')
//         // }
//         User.validateUserName(name);
//         this.name = name;
//     }
//     //static metod ------------
//     // static hi =function (){};
// //static записывает свойство или(и) метод непосредственно не в экземпляр, а в сам класс USer
// }
// --------------------------------------------------------------------------------
// function User() {
// }
// User.defaultName = 'Nik';//Эти свойства defaultName hi лежат не внутри obj prototype, а лежат непосредственно в
// // самом constructore
// User.hi = function () {
// };
// console.log(User.defaultName);
// console.log(User)
// const user = new User();
// user.defaultName //Ничего не выйдет, статические методы не доступны экземплярам, так как не попали в прототайп
// const nik = new User('Nik');//{name: 'Nik'}
// // ЕЩе одна польза static ----
// const todoApi = {
//     getTodos() {
//     }
// }
// todoApi.getTodos()
// //В виде class---------------------------------------------------------------------
// class TodoApi{
//     // getTodos(){}//Допустим экземпляр(const todoApi = new TodoApi()) будет один этой апишки
//     //Можно экземпляр не создавать а сделать метод статическим
//     static getTodos(){}
//     static deleteTodos(id){}
// }
// const todoApi = new TodoApi();
// todoApi.getTodos();
// // и в коде со статик методами будем уже работать не через new
// TodoApi.getTodos();
// TodoApi.deleteTodos();


// ПРИВАТНОЕ ПОЛЕ (PRIVATE FIELD) =========
// class User{
//     //МОжно определить св-в через #
//     #name;//Это св-в может быть использовно только внутри самого класса, то есть к нему можно обращаться только внутри
//     //скобок User{тут}
//     constructor(name) {
//         this.#name = name;
//     }
//     //Что бы получить name нужно сделать метод
//     getName(){
//         console.log(this.#name);
//         //или
//         return this.#name;
//     }
// }
// const nik = new User('Nik');
// //К приватному св-в мы не обратимся напрямую
// // console.log(nik.#name);//Ошибка (короче файл приватный)
// //Получаем name через метод
// nik.getName();
// console.log(nik.getName())


// GET, SET (ГЕТЕРЫ И СЕТОРЫ) =====================================================
// class User{
//     #name;
//     //Что бы name нужно метод
//     constructor(name) {
//         this.#name = name;
//     }
//     getName(){
//         return this.#name;
//     }
//     setName(value){
//         return this.#name = value;
//     }
//     //теперь перепишем на гетеры и сеторы --- как бы позволяет более красиво инкапсулировать реализацию класса
//     get name(){
//         return this.#name;
//     }
//     set name(value){
//         return this.#name = value;
//     }
// }
// const nik = new User('Nik');
// nik.getName()
// nik.setName('Vita')
// // гетеры и сеторы
// // get гетер-----------
// console.log(nik.name);
// // set сетер-----------
// console.log(nik.name = 'Vita');
// // Работаем теперь как будто с обычными свойствами, но на самом деле эта функция
// -------------------------------------------------------------
// class User{
//     #firstName;
//     #lastName;
//     get name(){
//         return `${this.#firstName} ${this.#lastName}`;
//     }
// }
// ------------------------------------------------------
// class User {
//     static LENGTH = 10;
//
//     #name;
// // get name & set name - можно называть одинаково, так как движок поймет что мы вызываем когда мы ими пользуемся
// // nik.name - хоти получить, значит get
// // nik.name = 'Vita'- хоти переопределить, значит set
//     get name() {
//         return this.#name;
//     }
//     set name(value) {
//         if (value.length > User.LENGTH) throw  new Error('error length name')
//         return this.#name = value;
//     }
// }
// const user = new User();
// console.log(user.name = 'Nik')

// __PROTO__ ==================================================================
// // get __proto__: f __proto__() - это функция
// const a ={}//Obj.prototype
// const b ={}//[[Prototype]] --> null
// b.__proto__ = null;
// b.__proto__ = a;//поскольку мы ссылку на obj.prototype занулили null b.__proto__ просто создаст св-в :а{__proto__: a}
// //вместо этого рекомендуется исп. две другие функции
// ------------------------------
// const a ={}
// const b ={}
// b.__proto__ === Object.getPrototypeOf(b);//getPrototypeOf - Покажи мне прототип обьекта b
// b.__proto__ === Object.setPrototypeOf(b,a);//Установи прототип обьекту-b, obj-a
// //короче реокмендуется эти два метода Object.getPrototypeOf(b) & Object.setPrototypeOf(b,a)
// // то есть ..
// b.__proto__ = null;//будет хана
// Object.setPrototypeOf(b,null);
// Object.setPrototypeOf(b,a);//будет работать


//НАСЛЕДОВАНИЕ (EXTENDS)==================================================================
// function Car() {
// }
// Car.prototype.run = function () {
//     console.log(`${this.model} запущена`)
// }
// function Ford(model) {
//     this.model = model;
// }
// Ford.prototype.fordRun = function () {
//     console.log('Ford запущен!')
// }
// const mondeo = new Ford('Mondeo');
// Car.prototype.run.call(mondeo);
// // mondeo.__proto__ = Car.prototype; - так плохо сделать, не подходит этот способ
// // Object.setPrototypeOf(mondeo, Car.prototype) - так же как и выше, не катит
// //На самом деле нужно связать протатипы
// Ford.prototype.__proto__ = Car.prototype;//Сначала он смотрит в обекте Ford, если не находит этого метода идет по ссылке
// // __proto__ и ищет в Car
// mondeo.fordRun();
// mondeo.run();


//СLASS ==============================================================================
// class Car {
//     static WHEELS_COUNT = 4;
//     run(){
//         console.log(`CAr запущена`)
//     }
// }
//
// class Ford extends Car{ // 1. Ford.prototype.__proto__ = Car.prototype / FOrd extends-наследует от Cara
//                         // 2. FOrd.__proto__ = Car (теперь у ford будет все что есть у car)
//                         // extends делает две вот эти штуки 1,2
//     fordRun(){
//         console.log('Ford запущен!')
//     }
// }
// const mondeo = new Ford();
// mondeo.fordRun();
// mondeo.run();
// console.log(Ford.WHEELS_COUNT);
//--------------------------------------------
// class Car {
//     static WHEELS_COUNT = 4;
//     run(){
//         console.log(`CAr запущена`)
//     }
// }
// class Ford extends Car{}
// const ford = new Ford();
// ford.run();


//CLASS SUPER =============================================================================
// class Car{
//     name = 'Car'
// }
// class Ford extends Car{}
// const ford = new Ford();
// console.log(ford.name);
//Пример 1 ----------------------
// class Car {
//     constructor() {
//         //this - {} - создается this неявно и возвращается
//         //return this
//         //Очередь вызова - 2
//         this.name = 'Car'
//     }
// }
//
// class Ford extends Car {
//     constructor(model) {
//         //Очередь вызова - 1
//         //this - {} - не создается потому что extends
//         // return this  - если наследуемся extends, то в наследуемом классе this не создается
//         super()//Если extends то нужно обязательно вызвать родительский конструктор словом super() - Очередь вызова - 2
//         // constructor(model)
//         // this.model = model - но если у форда есть свое имя, то у родителя уже брать не будем
// //В этой строчке в this = Car
//         this.model = model// - к this теперь имеем доступ после вызова родительского конструктора
//         //После этой строчки this = model(Mondeo)
//         //Очередь вызова - 3
//     }
// }
// const ford = new Ford('Mondeo')
// console.log(ford);
//Пример 2 ----------------------
// class Car {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Ford extends Car {
//     constructor(model, name) {
//         super(name)
//         console.log(this);//Что б передать имя к родителю, нужно в супер передать св-в
//         // this.name = name;//Можно не писать, это умеет делать  родитель
//         this.model = model
//     }
// }
// const ford = new Ford('Mondeo', 'Rawno')
// console.log(ford)
//Приве 3 -------------------------
// class Car {
//     model = 'Default'
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Ford extends Car {
//     constructor(name) {
//         super(name)
//         console.log(this);//В this окажутся два св-в model и name
//     }
// }
//
// const ford = new Ford('Mondeo')
// console.log(ford)
//Пример 4 ----------------
// class Car {
//     model = 'Default'//Если сделать приватным, то метод который позволит достать это св-в, нужно писать в родителе,
//     // то есть здесь
//     constructor(model) {
//         if (model) {//Можно сделать дефолтное состояние, а в контсрукторе в случаи чего подставлять то что нужно
//             this.model = model; //Перезапишет св-в, главное что происходит в конструкторе
//         }
//     }
// }
// class Ford extends Car {
//     constructor(model) {
//         super(model)
//         console.log(this);
//     }
// }
// const ford = new Ford('Mondeo')
// ford

//МНОЖЕСТВЕННОЕ НАСЛЕДОВАНИЕ ------
// class Car {
//     model = 'Default'
//
//     constructor(model) {
//         if (model) {
//             this.model = model;
//         }
//     }
//     show() {
//         console.log(this.model);
//     }
// }
// class Ford extends Car {
//     constructor(model) {
//         super(model)
//         console.log(this);
//     }
//     show() {//А если здесь создасца свой метод, без super, то Mondeo дойдет до сюда и дальше вверх по цепочке не пойдет
//         // super.show()
//         // console.log('привет')
//     }
// }
// class Mondeo extends Ford {
//     constructor(model) {
//         super(model);
//     }
//
//     show() {
//         super.show();//super.super(model) - нельзя попросить метод родителя моего родителя, всегда только
//         // на один уровень вложенности
//     }
// }
// const result = new Mondeo('hui');
// result.show()

//CLASS МОЖЕТ БЫТЬ ВЫРАЖЕНИЕМ ИЛИ В МАССИВ ЗАСУНУТЬ; ИЗ ФУНКЦИИ ВЕРНУТЬ=================================================
// const arr = [
//     class {constructor(n) {this.name = n}},
//     class {constructor(n) {this.name = n}}
// ];
// arr.forEach(c=>{
//     const e = new c('hi')
//     console.log(e);
// })
// function get(){
//     return class {
//         constructor(name) {
//             this.name = name;
//         }
//     }
// }
// const user = new (get())('Nik')
// console.log(user)