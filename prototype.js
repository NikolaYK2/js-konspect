//proto and prototype - Это св-в обьекта и сами являются почти всегда обьектами
//class & fn есть prototype - всегда независимый обьект который никогда не будет равен другому типу обьекта
//prototype есть толкьо у fn обьявленных словом function либо у class у =()=> нет
// let a = {value: 18}
// let b = {age: a}
// let c = a
// //а - это только один обьект а b,c уже ссылки на этот обьект а
//     // Это означает что a === b.a and c
// ------------------------------------
// //__proto__ - есть у всех обьектов
// let man = {}//man.__proto__
// let man1 = []//man1.__proto__
// let man2 = 18//примитив, но если мы к нему обратимся как к обьекту, поставим точко, то у енго тоже будет __proto__,
// // так же и строка
// function sub() {}//sub.__proto__
// let like = function sub1() {}//sub.__proto__
// const sub2 = () => {}//sub.__proto__
// class You{}//You.__proto__
// let bol = true//Как и с примитивами
// ----------------------------------------------------
// let man = {}
// let man2 = {}
// let bol = true
// console.log(man.__proto__ === man2.__proto__)//Хоть и разные обьекты но proto у них будут равны, так же и массивы и
// // примитивы и fn
// //Случаи когда proto не равны, это когда разные по типу обьекты, например
// console.log(man.__proto__ === bol.__proto__)
//Любой обьект в js создается при помощи класов или функций конструктор ---------------------
// let promise = new Promise(()=>{})//new Promise
// let man ={}//new Object
// let man1 =[]//new Array
// let age = 19//не создается обьект, но если обратмся через точку ---> new Number и т.д.
// // function, class, expresion fn  //new Function
// class You{}//new Fn --> сам класс создаем через fn
// let chanel = new You()//new You ---> а уже chanel создается через new You


// const a = {
//     inner: {}
// }
// const b = a.inner
// //два обьекта a and a.inner
// //на a.inner две ссылки a.inner and b
// const b = {
//     inner: a.inner
// }
// //две ссылки на обьект это a.inner and b.inner
// --------------------------------------------
// const alex ={
//     name:'Alex',
//     age: 23,
//     show(){
//         console.log(this.name);
//     }
// }
// const hanna ={
//     name:'Hanna',
//     // '[{PROTOTYPE}]':alex
//     // show: alex.show,
// }
// alex.show.bind(hanna)();
// hanna.__proto__ = alex;//Эта строчка делает [{PROTOTYPE}] - скрытая ссылка:alex
// hanna.show();//Работает это так:
// // -сначала js ищет этот метод(св-в) в обьекте hanna и вызывает, если нет то движок
// // идет по ссылке [{PROTOTYPE}] - hanna.__proto__ = alex; - и пойдет посмотрит внутри обьекта alex
// ----------------------------------------------
// const baseUSer = {
//     baseName: 'Base'
// }
// const user = {//Этот обьект называется прототипом, потому что на него есть скрытая ссылка [{PROTOTYPE}]
//     show() {
//         console.log(this.name);
//     }
// }
// const alex = {
//     name: 'Alex',
// }
// const hanna = {
//     name: 'Hanna',
// }
// alex.__proto__ = user;
// hanna.__proto__ = user;
// alex.show();
// hanna.show();
// -------------------------------------------
// const baseUSer = {
//     baseName: 'Base'
// }
// const user = {//Этот обьект называется прототипом, потому что на него есть скрытая ссылка [{PROTOTYPE}]
//     show() {
//         console.log(this.name);
//     }
// }
// const superU = {//Этот обьект называется прототипом, потому что на него есть скрытая ссылка [{PROTOTYPE}]
//     name: 'Sup',
//     isSup: true
// }
// const hanna = {
//     name: 'Hanna',
// }
// user.__proto__ = baseUSer;//ссылка proto указывает на baseUSer и т. д.
// superU.__proto__ = user;
// hanna.__proto__ = superU;
// baseUSer.__proto__ = null;
// //Выглядит как будто все вложенно в друг друга, но это не так, связаны ссылкой
// console.log(hanna.baseName);//Ищет по ссылкам пока не найдет = base
// console.log(hanna.age);//Искал и нигде не нашел = undefined
// // Если есть одинаковые св-в у некоторых обьектов, первый что найдет то и вернет
// //Прототипом является всегда какой-то обьект на который у какого-то другого обьекта есть скрытая ссылка
// //КОроче обьекты можем связывать друг c другом при помощи скрытой ссылки
// //Прототипом обьекта являетс обьект справа

//Fn constructor ==============================================================
// function User(name){
//     //const this = {} - это конечно не так, но для наглядного примера
//     this.name = name
//     //return this
// }
// const alex = new User('Alex');//{name: 'Alex'}
// function Users(){}//У двух fn есть одинаковое св-в prototype: {constructor: Users}
// function Animal(){}//prototype: {constructor: Animal}
// // У стрелочных функций такого св-ва нет
// // У всех обычных функци есть св-в prototype: которое является обьектом и у которого есть св-в constructor:
// // который на эту же fn ссылается prototype:{constructor: fn}
// const foo={
//     prototype:{//У функции есть ссылка на обьект в виде этого св-в
//         constructor: foo //И у этого обьекта есть ссылка на функцию в виде constructor:
//     }
// }
// ---------------------------------------------------------
// const userPrototype ={
//     show(){
//         console.log(this.name);
//     }
//
// }
//
// const alex ={
//     name:'Alex',
// }
// const hanna ={
//     name:'Hanna',
// }
// const jon ={
//     name:'Jon',
// }
//
// alex.__proto__ = userPrototype;
// hanna.__proto__ = userPrototype;
// jon.__proto__ = userPrototype;
// const arr = [alex, hanna, jon];
// console.log(arr.map(e=>e.show()));
//REFACTOR много повторяющегос кода ======================================================================
// const userPrototype ={//Этот обьект он уже как бы существует /prototype
//     show(){
//         console.log(this.name);
//     }
//
// }
// function UserName(name){
//     this.name = name
//     this.show = function (){//Так будет плохо, так как будет дублироваться лишняя fn которая будет одинаковая
//         console.log(this.name)}//Пример рефактора ниже
// }
// const a = new UserName('Alex');
// a.show();
// const b = new UserName('Hanna');
// b.show()
// const c = new UserName('Jon');
// c.show()
// -------------------------------------------------
// function User(name){
//     this.name = name
// }
// //Что бы положить метод, рефактор дублирования метода
// User.prototype.show = function (){//Типо делаем сылку на один обьект, [[PROTOTYPE]]-скрытая ссылка
//     console.log(this.name);
// }
// // User- у функции есть св-в. .prototype  является обьектом у которого есть -> {constructor: равен самому User}
// //КОгда создается экземпляр
// const alex = new User('Alex');//alex.__proto__ ------> {constructor: User} <------- User.prototype
// alex.show();
// //Автоматически делается alex.__proto__ = User.protorype - {constructor: User} - этот обьект будет прототипом для
// // всех экзэмпляров наших fn constructors
// const hanna = new User('Alex');
// //hanna.__proto__ = User.prototype
// ----------------------------------------------------
// const Users ={
//     prototype:{//На обьект 3 ссылки: User.prototype; alex.proto; hanna.proto
//         constructor: Users,
//         show(){
//             console.log(this.name);
//         }
//     }
// }
// // const alex = new Users('Alex');
// // const hanna = new Users('hanna');
// const alex ={
//     name:'alex'
//     // [[Prototyype]]: Users.prototype
// }
// const hanna ={
//     name:'hanna'
//     // [[Prototyype]]: Users.prototype
// }
// не выделять --------------------------------------------
//ЧТо бы узнать куда указывает x.proto, нужно узнать какой тип данных у x и всегда попадем в constructor этого x
// x.__proto__----> xConstructor.prototype
// {}.__proto__ ----> будет ссылаться на Object.prototype
// m.__proto__ ----> Map.prototype
// Array.prototype.__proto__ ---> Object.prototype - потому что мы у Array берем обьект prototype, a у него __proto__,
// а конструктор обьекта это Object

// Function.prototype.__proto__ ---> Object.prototype
// (5).__proto__ --> Number.prototype
// String.prototype.__proto__ ---> Object.prototype
// Object.prototype.__proto__ ---> Object.prototype - не верно, конечно Null
// Object.__proto__ ---> Function.prototype
// obj.__proto__ ---> Object.prototype
// Array.__proto__ ---> Function.prototype
// arr.__proto__ ---> Array.prototype
// Function.__proto__ ---> Function.prototype
//proto есть у всех, а prototype только у обычных fn and constructors

// Prototype - это св-в функции constructor (Constructor.prototype) у которого есть ссылка(proto) на инстанс
// proto - это обьект ко всем методам и св-в которого экземпляры имеют доступ по ссылке __proto__