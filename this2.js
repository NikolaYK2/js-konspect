// this - это какое-то св-в, чем оно может являться:
// '!use-strict' -> {?} - то это прям всегда обьект
// 'use-strict' -> может являться что угодно: (null, undefined, {},) - чаще всего 5, '',  [], fn

//работа this правила ---------------
//1.Global scope
//2. Fun -(fn, metods) simple f() | arrow f ()=>
//3. bind, apply, coll
//4. fn constructor ----> всегда будет новый обьект
//------------------------------------

//1 - В глобал будет window, в node global

//2 - ()=> берет всегда This из внешнего LE игнорируя любые правила
//this - найдет глобально
// const a = () => {
//     console.log(this);
// }
// a();
// -------------------------------------------------
// function foo() {
// //this - ? возьмет сначала отсюда
//     const a = () => {
//         console.log(this);
//     }
//     return a();
// }
// foo();
// --------------------------------
// const us = {
//     sw: () => {
//         console.log(this);//this - Будет global так как обьект us не имеет своего LE
//     }
// }
// us.sw();
// --------------------------------
// const us = {
//     sw() {
//         //this = us
//         const a = () => {
//             console.log(this); // this = us
//         }
//         a();
//     }
// }
// us.sw();
// ------------------------------------------
// function a(){
//     console.log(this);//this = undefined 'use strict'-> window '!use strict'
// }
// a();//место вызова и this это то что слева от точки
// // age = 'glob' - так мы увидем win.age = global
// const us={
//     age:23,
//     sh:()=>{
//         console.log(this.age);//undefined /this = win.age-нету у win = undefined
//     }
// }
// us.sh();
// -----------------------------------------
// const us={
//     age:23,
//     sh(){
//         console.log(this.age);//this = us.age
//     }
// }
// us.sh();//как всегда обращаем внимание на вызов
// -------------------------------------------
// let us={
//     age:23,
//     sh(){
//         console.log(this.age);
//     }
// }
// const newU = us;
// us = null;//вот для этого нужен this, в случаи если кто-то сотрет ссылку на obj us
// newU.sh();
// -------------------------------
//как можно метод к обьекту добавить ------------------------
// let us1 = {
//     age: 25
// }
// let us2 = {
//     age: 33
// }
//
// function sh() {//Эта fn не будет считаться методом, она лежит вне обьекта
//     console.log(this);
//     console.log(this.age);
// }
//
// us1.f = sh;
// us2.f = sh;
//
// us1.f();//Вызвать fn можно в контексте этого обьекта /this -это контекст вызова
// us2.f();

//3 - методы fn привязывают контекст / первым аргументом принимают контекст ======================================
// имеет преимущество перед первым и вторым методами(global, и через точку)------------------------------------------
//методы call, aplly вызывают fn сразу
//bind можно вызвать потом
// const us1 = {
//     age:10
// }
// const us2 = {
//     age:15
// }
// function sh(){
//     console.log(this.age);
// }
// us1.f = sh;
// us1.f.call(us2);//fn вызывается сразу
// //или
// let foo = us1.f;
// foo.bind(us2)();//fn можно вызвать потом или сразу bind()();
// //или вызвать потом
// let runFoo = foo.bind(us2);
// runFoo();//вызвали потом
// ----------
// Задачка
// const a ={
//     age: 23
// }
// const us1 ={
//     age: 10,
//     sh(){
//         (()=>{
//         console.log(this.age);//this будет us1
//             }
//         ).call(a);
//     }
// }
// us1.sh();
//------------
// const a = {
//     age: 23
// }
// const b = {
//     age: 1
// }
// const us1 = {
//     age: 10,
//     sh() {
//         console.log(this.age);//this будет a, и больше привязывать контекст не будет
//     }
// }
// // us1.sh.bind(a).call(b);//Привязывает контекст один раз
// // us1.sh.call(b).bind(a);//вернет undefined так как fn sh ничего не возвращает, а bind возвращает новую fn

//4 - конструктор возвращает new {} ============================================
// function Us(name){
//     //this ->{}
//     this.name = name//{name:name}
//     //return this ->{}
// }
// const use = new Us('Alex');//->{name: 'Alex'}
// console.log(use.name);


//Задачи -----------------------------------------
// const obj ={
//     message: 'Hello Word!',
//     logM:()=>{
//         console.log(this.message);//this = win.mes = undefined
//     }
// }
//
// const call = (function (){
//     obj.logM()
// }).bind(obj);
// setTimeout(call, 1000);
//---------------
// const obj ={
//     message: 'Hello Word!',
//     logM(){
//         console.log(this.message);//this = obj = 'Hello Word!'
//     }
// }
// const call = (function (){
//     obj.logM()
// }).bind(obj);//Bind тут не работает
// setTimeout(call, 1000);
//----------------------
// const obj ={
//     message: 'Hello Word!',
//     logM(){
//         console.log(this.message);//this = undefined, потому что в setTimeout мы передаем не вызов метода
//         //у обьекта а ссылку на fn, получается logM();
//     }
// }
// setTimeout(obj.logM, 1000);
// // Обьяснение пример
// function setTimeouts(cb){
//     //.....проходит время
//     cb();
// } /*то же самое что написать*/
// let foo = obj.logM;
// foo();
//как пофиксить допустим задачу выше ------
// const obj ={
//     message: 'Hello Word!',
//     logM(){
//         console.log(this.message);
//     }
// }
// setTimeout(()=>obj.logM(), 1000);
// // или привязать контекст
// setTimeout(obj.logM.bind(obj), 1000);
//-------------------------
// const a={
//     w:'Wor',
//     gr(){
//         return `hel, ${this.w}!`
//     },
//     fa:()=>{//выпрыгивает в global ---> this = win
//         return `good, ${this.w}!`
//     },
// }
// console.log(a.gr());//this = a.w -> 'Wor'
// console.log(a.fa.call(a));//this = win.w ---> undefined
//-----------------------
// const a={
//     na:'a',
//     fi(){
//         console.log(this.na);
//     },
//     se(){
//         //выпригивает сюда, this = a, судя по вызову
//         (()=>{
//             console.log(this.na);
//         })();
//     },
//     th:()=>{
//         console.log(this.na);
//     },
// }
// a.fi();//this = a.na --> 'a';
// a.se();//this = a.na --> 'a';
// a.th();//this = win.na ---> undefined;
//--------------
// const a={name:'a'}
// function foo(){
//     console.log(this.name);//Биндим обьектом this = a.name ---> 'a'
// }
// foo.bind(a)();
//----------------
// 'use strict'
// function a(){
//     console.log(this);//this '!use strict' = win; 'use strict' = undefined
// }
// a();//Слева ничего не стоит значит undefined ---> win (зависит от режима)
//------------------
// const c = {
//     name: 'c',
//     getName() {
//         console.log(this.name);
//     }
// }
// function A(name) {
//     this.name = name
//     this.getName = function () {
//         console.log(this.name);
//     }
// }
// // const aConstr = A.bind(c);
// // const a = new aConstr('a');
// // a.getName()
// //по другому в одну строчку, более наглядно
// const a = new (A.bind(c))('a');
// a.getName();
//
// function B() {
//     return this;
// }
// const b = B.call(c);//fn биндим обьект с/ this = c.name --->'c'
// b.getName();
//-------- c обьектом c ----------
// const c = {
//     name: 'c',
//     getName() {
//         console.log(this.name);
//     }
// }
// function B(name){
//     this.name = name
//     return this
// }
// const b = B.bind(c)('a');//биндем обьект с и вызываем с аргументом 'a' и переопределим св-в на 'a'
// b.getName();// 'a'
//-----------------
// const group={
//     name:'sam',
//     user:['al','han'],
//     shw(){
//         //this = group(слева от точки).user ---> this = ничего,
//         // потому что внутри fn forEach(fn - не вызывается) - this внутри потерлся
//         this.user.forEach(function (user){
//             console.log(`grop: ${this.name}, User: ${user}`)
//         });
//     }
// }
// group.shw();
//как пофиксить -------------
//forEach принимает вторым параметром thisArg
// const group={
//     name:'sam',
//     user:['al','han'],
//     shw(){
//         this.user.forEach(function (user){
//             console.log(`grop: ${this.name}, User: ${user}`)
//         }, this);//мы передаем тот this который лежит в shw()
//     }
// }
// group.shw();
//Или исп. ()=> ----------
// const group={
//     name:'sam',
//     user:['al','han'],
//     shw(){
//         this.user.forEach( (user)=>{//выпрыгивает в область видимости shw,
//             // а тут this = group
//             console.log(`grop: ${this.name}, User: ${user}`)
//         });
//     }
// }
// group.shw();
//или bind ---------------
// const group={
//     name:'sam',
//     user:['al','han'],
//     shw(){
//         this.user.forEach( (function (user){
//             console.log(`grop: ${this.name}, User: ${user}`)
//         }).bind(this));
//     }
// }
// group.shw();
//-------------------------------
// const a={
//     age:11
// }
// const  b={
//     age: 13,
//     hi:()=>{//выпрыгнет в global --> this = win.age = undefined
//         console.log(this.age);
//     },
//     hi2(){
//         //this = b.age ---> 13
//         (()=>{//выпрыгнет во внешний скоуп
//             console.log(this.age);
//         }).call(a);
//     }
// }
// b.hi();//undefined
// b.hi2();//13
//----------------------------
// const b={
//     name: 'b',
//     get:function (){
//         return (//вызывает и возвращает короче this.name, получается
//             ()=>this.name
//         )();
//         // this.name
//     }
// }
// const c={
//     name:'c'
// }
// Object.setPrototypeOf(c,b)//привязывает обьекту с --> b-делает prototype-ом c.__proto__ = b
// console.log(c.get());
// console.log(b.get());
//-------------
// const a = {
//     name: 'a'
// }
// const b = {
//     name: 'b',
//     get: function () {
//         return (function () {
//                 return this.name
//             }).call(a);//this = a, так как fn забиндили обьектом a
//     }
// }
// console.log(b.get());
//-------------------------------------------------------------------------------------------------
//global scope в chrome это window
//fn; fn =>; arrow fn
//call, apply, bind
//fn constructor
// noinspection ES6ShorthandObjectProperty

// const car = {
//     color: 'red',
//     swow:()=>{
//         console.log(this.color);
//     }
// }
// car.swow();//ПОлучим undefaineed, так как стрелочная fn выпрыгиват в global - в данном случаии this берется у
// window, а у win нет св-в color,
// ---------------------------------------
// const car = {
//     color: 'red',
//     swow(){
//         console.log(this.color);
//     }
// }
// const  present = car.swow;//переменной Сдесь же передаем ссылку на наш метод,а потом ее вызываем не так как надо для this)))
// present();//undefined так как вызываем в global scope
// const newCar = car.swow.bind(car);
// newCar();//ok
// ------------------------------------------
// const car = {
//     color: 'red',
//     swow() {
//         const car = {
//             color: 'blue',
//             a() {
//                 console.log(this.color);
//             }
//         }
//         car.a();
//         console.log(this.color)
//     }
// }
// car.swow();
// -------------------------------------------
// class Man {
//     constructor(props) {
//         this.props = props;
//     }
//     log(){
//         console.log(this.props.age)
//     }
//     render(){
//         //this ??
//         setTimeout(()=>{
//             this.log();
//         },1000)
//     }
// }
// const man1 = new Man({age: 10}); //This у нас будет переданным обьектом
// //render вызывется справа, this = Man, потом this.log() = будет являться тем this что в render()
// man1.render();//Будет 10
// ---------------------------------------------
// const man = {
//     _counter: {
//         value: 0,
//         step: 2
//     },
//     prW(){
//         const b = this.prC.bind(this);
//         setTimeout(b,1000);
//     },
//     prC(){
//         console.log(this._counter.value);
//     },
//     getS(){
//         console.log('this', this)
//         return this._counter.value
//     }
// }
// man.prW();



