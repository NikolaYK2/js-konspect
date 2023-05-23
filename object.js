// primitives, iterators, descriptors

//============================ PRIMITIVE ==================================================
// const us = {}
//Что бы обьект выполнять с какими-то примитивными операциями, обьект должен быть приведен к примитивному знаечнию
// console.log(us + "hi")
// console.log(us + 1)
// console.log(us * 5)
// console.log(us / 2)
// console.log(String(us))
//js как он хочет работать с обьектом

//1. hint --> 'string' | 'num'  <-----> 'default' =============

// 2. try call us[Symbol.toPrimitive]() ===================
//пытается вызвать у обьекта метод try call us[Symbol.toPrimitive-статическое св-в](hint-сюда передает)
// const id1 = Symbol('1')
// const id2 = Symbol('1')
// console.log(id1 === id2)//Никогда не буду = друг другу
// us[id1] = 'hi'
// console.log(us);
// //Символы всегда уникальны и его нельзя никак переопределить
// us[Symbol.toPrimitive] = function () {
// }
// console.log(us);
//
// const user = {
//     [Symbol.toPrimitive]: function (hint) {//Под ключем [Symbol.toPrimitive] создаем функцию и
//     передаем Hint function (hint);
//
//         console.log('hint:', hint)
//     }
// // или
// //  [Symbol.toPrimitive] (hint) {
// //         console.log('hint:', hint)
// //  }
// }
// console.log(user);
// user + 'hi';
// user * 10;
// `${user}`;
// user > 5;
////теперь мы решаем как реализовать этот метод  [Symbol.toPrimitive] (hint) {} ---------------------------
// const user = {
//     age: 31,
//     name: 'Nik',
//     [Symbol.toPrimitive]: function (hint) {//Решаем какой примитив вместо этого обьекта вернуть
//         if (hint === 'string'){
//             return user.name
//         }
//         if (hint === 'number'){
//             return user.age
//         }
//         return user.name;
//     }
// }
// console.log(user + ' hi')
// console.log(user * 10)
//Где это может быть полезно -------------------------------------------------------------------
// const user = {
//     age: 31,
//     name: 'Nik',
// }
// const user1 = {
//     age: 30,
//     name: 'Vit',
// }
// console.log(user > user1)//false - а как бы первый пользователь старше, а значит можно привезти обьект к примитиву
// Примитивный обьект через метод симбол-----------------------------------------------
// const user = {
//     age: 31,
//     name: 'Nik',
//     [Symbol.toPrimitive]: function (hint) {
//         if (hint === 'number'){
//             return user.age
//         }
//         return user.name;
//     }
// }
// const user2 = {
//     age: 30,
//     name: 'Vita',
//     [Symbol.toPrimitive]: function (hint) {
//         if (hint === 'number'){
//             return user2.age
//         }
//         return user2.name;
//     }
// }
// console.log(user > user2);//true
// -----------------------------------------------------------------------------------
// const user = {
//     [Symbol.toPrimitive]: function (hint) {
//         return 2
//     }
// }
//
// class User {
//     constructor(age) {
//         this.age = age;
//     }
//
//     [Symbol.toPrimitive] = function (hint) {
//         return this.age;
//     }
//
//     compare(user) {
//         return this > user;
//     }
// }
//
// const user1 = new User(31);
// const user2 = new User(30);
// console.log(user2.compare(user1));
// static methods ----------------------------------------------------------------------
// const user = {
//     [Symbol.toPrimitive]: function (hint) {
//         return 2
//     }
// }
//
// class User {
//     constructor(age) {
//         this.age = age;
//     }
//
//     [Symbol.toPrimitive] = function (hint) {//[Symbol.toPrimitive] - Это метод
//         return this.age;
//     }
//
//     static compare(user1, user2) {
//         const res = user1 > user2;
//         console.log(res);
//         return res;
//     }
// }
//
// const user1 = new User(31);
// const user2 = new User(30);
// User.compare(user1, user2);

//3. if 'string'-если выбрал -> то сначала пытается у обьекта вызвать метод toString(), если и его нет то -> valueOf()
//   if 'number' | 'default' -> valueOf() -если метода нет или  не возвращает примитив то -> пытается вызвать toString()
// const user = {
//     toString(){
//         console.log('to String');
//         return 'Nik'
//     },
//     valueOf(){
//         console.log('value of');
//         return 31;
//     }
// }
// //Оба метода как бы работают правильно, оба возвращают примитив
// String(user);
// console.log(String(user));//Вызовет toString()-если вернул примитив, то значит все хорошо,
// //а если например возвращает какой нибудь обьект, то пойдет и попытается вызвать метод (как запасной) valueOf()-а если и этот метод
// //не вернет примитив, то он скажет что обьект не может привезти к примитивному значению / и на оборот
// console.log(user + 'hi')//выберет toString()
// console.log(user * 10)//выберет valueOf() и т.д.
// если метод не возвращает примитив----------------------------------------------------------------
// const user = {
//     toString(){
//         console.log('to String');
//         return {}
//     },
//     valueOf(){
//         console.log('value of');
//         return 31;
//     }
// }
// //Оба метода как бы работают правильно, оба возвращают примитив
// String(user);
// console.log(String(user));//пойдет и вызовет valueOf и на оборот, если второй вернет не примитив, то вызовет после него
// // первый метод
//Ни один из методов не возвращает примитив --------------------------------------------------------
// const user = {
//     toString(){
//         console.log('to String');
//         return {}
//     },
//     valueOf(){
//         console.log('value of');
//         return {};
//     }
// }
// String(user);//Будет ошибка, не конвертирует
// console.log(String(user));
//Если нет вообще методов, то они уже есть по дефолту в prototype ---------------------------------------
// //Примерное реализованы как то так
// const user = {
//     toString(){
//         return '[object Object]';
//     },
//     valueOf(){
//         return this; //если будет связано с числом, то он попытается вызвать этот метод, и потом все равно
//         // венрнется в toString (вернет этот  же обьект)
//     }
// }
// String(user);
// console.log(String(user));
// задача --------------------------------------------------------------------------------------------
// // чему равно х что бы фн вернула true
// const x = {
//     count: 0,
//     toString(){
//         return this.count++
//     }
// };
// const  test =(x)=> `${x}` !== `${x}`
// console.log(test(x))
//как будет выглядеть обьект если его вывести в консоль ------------------------
// const a ={};
// const b ={};
// b[a] = 5;//Ключи всегда приводит к строке
// console.log(b);//[object Object]:5

// ======== ITERATORS ===========================================
// - некий обьект который формируется на основании какой-то коллекции, как минимум есть метод next()
// const arr = [1, 2, 3];
// const arrIterator = {
//     next() {//Есть метод next
//
//     }
// }
// arrIterator.next()//Примерно возвращает {value:1, done:false-тут скажет закончили итерацию или нет}
// arrIterator.next()//{value:2, done:false}
// arrIterator.next()//{value:3, done:false}
// arrIterator.next()//{value:undefined, done:true-скажет что закончили }
// И для массивов и для строк есть встроенные итераторы----------------------------------------------------------------
// const arr = [1, 2, 3];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
//Здесь же опять сами каждый раз вызываем/ REFACTOR что бы сами все вызывались --------------------
// const arr = [1, 2, 3];
// const iterator = arr[Symbol.iterator]();
// while (true){
//     const res= iterator.next();
//     if (res.done) break;
//     console.log(res.value)
// }
//циклы for синтаксический сахар над алгоритмом что выше ======
//по элементу массива -----------------------------------------
// const arr = [1, 2, 3, 4, 5];
// for (let n of arr) {//n - элементы массива
//     console.log(n)
// }
// //по indexu
// for (let n in arr) {//n - элементы массива
//     console.log(n)
// }
// -------------------------------------------
//ПРИМЕРЫ ----------------------------------------------------
// let range = {
//     from: 0,
//     to: 10,
//     [Symbol.iterator]: function () {
//         let from = this.from
//         let to = this.to
//         return {
//             next() {
//                 if (from <= to){
//                     return {done: false, value: from++}
//                 } else {
//                     return {done: true, value: undefined}
//                 }
//             }
//         }
//     },
// }
// for (let n of range) {
//     console.log(n);
// }
// console.log([...range])
// перевод на класс ------------------------------------
// class Range {
//     #from = 0;
//     #to = 10;
//
//     constructor(from, to) {
//         this.#from = from
//         this.#to = to
//     }
//
//     static from(from, to) {
//         return [...new Range(from, to)]
//     }
//
//     [Symbol.iterator]() {
//         let from = this.#from
//         let to = this.#to
//         return {
//             next() {
//                 if (from <= to) {
//                     return {done: false, value: from++}
//                 } else {
//                     return {done: true, value: undefined}
//                 }
//             }
//         }
//     }
// }
// const arr0To10 = Range.from(0,10);
// const arr5To10 = Range.from(5,10);
// console.log(arr0To10);
// console.log(arr5To10);
// //или
// console.log(Array.from(new Range(1,7)));

// ================ DESCRIPTORS ===================================================================
// const user = {
//     name: 'Nik',
//     age: 23
// }
//// Посмотреть св-в у конкретного св-в
// console.log(Object.getOwnPropertyDescriptor(user, 'name'))//Говорим обьекту показать все настройки св-ва (name)
// //Посмотреть св-в сразу у всего обьекта
// console.log(Object.getOwnPropertyDescriptors(user))
// 1. способ как настроить св-в---------------------------------------------------------------
// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Nik',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     age:{
//         value: 23,
//     }
// });
// console.log(Object.getOwnPropertyDescriptors(user));
// 2. способ как настроить св-в---------------------------------------------------------------
// const user = {};
// Object.defineProperty(user, 'name', {
//     value: 'Nik',
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// 3. способ как настроить св-в---------------------------------------------------------------
// const user = {};
// Object.defineProperties(user, {
//     name: {
//         value: 'Nik',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })
// ------------------------------------------------------------------------------------------------
// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Nik',
//         writable: true,//Разрешено ли перезаписывать св-в
//         enumerable: true,//Скрывает св-в, например в консоли не будет видно св-в(ключ)"name"/не увидим в циклас,
//         // становится не итерируемым
//         configurable: true,// 1.не можем удалять св-в / 2. запрещает менять enumerable/configurable
//         // / 3. Запрещает менять writable: false --> true именно в таком направлении
//     },
//     age: {
//         value: 31,
//         writable: true,
//         enumerable: true,//
//         configurable: true
//     },
// });
// user.name = 'Vita';//Если writable: false - то вы не сможем переписать это св-в
// console.log(user.name);
// console.log(Object.keys(user))
