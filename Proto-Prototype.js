//CLASS ==========================================================
// class User{
//     constructor(name) {
//         this.name = name;
//         this.state = {};
//         this.someMethod = function () {}
//     }
//     render(){
//         return `My name is ${this.name}`
//     }
// }
// const user = new User('Nik');
// const user2 = new User('Vit');
// //два однатипных но разных обьекта
// console.log(user === user2)//false
// console.log(user.neame === user2.name) //false так как относятся к каждому классу по своему
// console.log(user.state === user2.state) //false так как примитивы
// console.log(user.render === user2.render)//true так как попадает в протатип и у всех будет один и тот же метод
// console.log(user.someMethod === user2.someMethod)//false так как относится к классу и каждый раз создается
// // для нового инстанса
// console.log(user.__proto__ === User.prototype);//proto это ссылка на prototype classa
// console.log(Function.__proto__ === Function.prototype);
// //1. если это обьект, то он полюбому создан с помощью какого-то класса и __proto__ этого обьекта будет ссылаться на
// // prototype Этого класса
//--------------------------------------------------------------
// class User{}
// class SuperUser{}
// const user =new User();
// console.log(user.__proto__ === User.prototype)//У любого обьекта есть __proto__ потому что созданы
// с помощью какого-то класса ---------------------------------------
// let a = new Object();
// console.log(a.__proto__ === Object.prototype);
// ----------------------------------------------------------
// let a = {};
// console.log(a.__proto__ === Object.prototype);
// ----------------------------------------------------------
// let a = new Array();
// console.log(a.__proto__ === Array.prototype)
// ----------------------------------------------------------
// let a = [];
// console.log(a.__proto__ === Array.prototype)
// ----------------------------------------------------------
// let a = function (){};
// console.log(a.__proto__ === Function.prototype)
// ----------------------------------------------------------
// let a = ()=>{}
// console.log(a.__proto__ === Function.prototype)
// ----------------------------------------------------------
// let a = new String('hi');
// console.log(a.__proto__ === String.prototype)
// ----------------------------------------------------------
// let a = 'hi';
// console.log(a.__proto__ === String.prototype)//примитив, но если мы к нему обращаемся как к обьекту:
// a.__proto__ & a.length и т.д. то примитив становится на время обьектом. С числами так же
// ----------------------------------------------------------
// let a = class {};
// console.log(a.__proto__ === Function.prototype)
// ----------------------------------------------------------
// class User{};
// console.log(User.__proto__ === Function.prototype);
// ----------------------------------------------------------
// console.log(Object.__proto__ === Function.prototype)
// ----------------------------------------------------------
// let a = Promise.resolve(10);
// console.log(a.__proto__ === Promise.prototype)
// ----------------------------------------------------------
// console.log(Array.__proto__ === Function.prototype)
// let a = [];
// console.log(a.__proto__ === Array.prototype)
// console.log(Array.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)

//FUNCTION ======================================================
// function User(name){//Функция конструктор должна быть не стрелочной
//         this.name = name;
//         this.state = {};
//         this.someMethod = function () {}
// }
// //Теперь добавим render в прототип
// User.prototype.render = function (){
//     console.log(`hi ${this.name}`)
// }
// const u1 = new User("Nik");
// console.log(u1.render());
// --------------------------------------------
// console.log(Array.prototype.constructor === Array)
// --------------------------------------------
//User.prototype - cидит render
//Promise.prototype - cидит then, catch, finaly
// --------------------------------------------
// --------------------------------------------