// console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// ----! https://learn.javascript.ru/closure ----!
// ----! https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// ----! https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA
//Написать функцию bind
//Пример
// function bind(pe:any, func:any) {
//     return function (...args:any) {
//         func.apply(pe,args)
//     }
// }
//  function logPerson() {
//      console.log(`Person:${this.name}, ${this.age}, ${this.job}`)
// }
//
//
// const person1 = {name: 'Mix', age: 22, job: 'Front'}
// const person2 = {name: 'Elen', age: 12, job: 'SMM'}
//
// bind(person1, logPerson);
// bind(person2, logPerson);

//=========================================================================

//// Сurrying
// ---! https://learn.javascript.ru/currying-partials
// ---!https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827
// function curry(func) {
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function(...args2) {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     };
// }


// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0
//пример задачи
//1 - исп. цикла
// function sumTo(n:number) {
//     let result = 0;
//     for (let i = 0; i < n; i++) {
//         result += n - i
//     }
//     return result;
// }
// const a = sumTo(2);
// console.log(a);
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//         result += i
//     }
//     return result;
// }
// const a = sumTo(2);
// console.log(a);
//2 - Через рекурсию
// function sumTo(n:number):number{
//     if (n === 1) {
//         return n
//     }else {
//        return  n + sumTo(n-1);
//     }
// }
// const a = sumTo(10000);
// console.log(a);
//3 - C формулой арифметической прогрессии
// function sumTo(n:number){
//     return n * (n + 1)/2;
// }
// const c = sumTo(100);
// console.log(c);
//
//написать функцию factorial(n), которая возвращает n! факториал, используя рекурсию.
// function factorial(n:number):number{
//     return (n===1) ? 1 : n * factorial(n-1)!
// }
// const c = factorial(3);
// console.log(c);
//
//Число фибоначи Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее
//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// function fib(n:number):number{
//     return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
// }
// const c = fib(7);
// console.log(c);
// function fib(n: number): number {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// const c = fib(3);
// console.log(c);
//Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// function printList(list:any) {
//     let tmp = list;
//
//     while (tmp) {
//         alert(tmp.value);
//         tmp = tmp.next;
//     }
//
// }
// printList(list);
//Обратите внимание, что мы используем временную переменную tmp для перемещения
//Рекурсия
// function printList(list) {
//
//     alert(list.value); // выводим текущий элемент
//
//     if (list.next) {
//         printList(list.next); // делаем то же самое для остальной части списка
//     }
//
// }
// printList(list);

// Task 01 Сurrying
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// function sum(n:number){
//     return function (a:number){
//         return n + a;
//     }
// }
// const c = sum(3)(6);
// console.log(c);
// function curry(f:any) {
//     return function (a: number) {
//         return function (b: number) {
//             return f(a, b);
//         }
//     }
// }
//
// function sum(a: number, b: number): number {
//     return a + b;
// }
// let curryid = curry(sum);
// const c = curryid(3)(6);
// console.log(c);

// Task 02 Recursion
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
// function makeCounter(){
//     let count = 1;
//     return function (){
//         return count++;
//     }
// }
// const counter = makeCounter();
// const counter2 = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter2());
// console.log(counter());

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
// let counter = {
//     num: 0,
//     increase(){
//         return ++this.num;
//     },
//     decrease(){
//         return --this.num;
//     },
//     reset(){
//         return this.num = 0;
//     },
//     set(){
//        return  this.num;
//     },
// };
// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter.decrease())
// console.log(counter.reset())
// console.log(counter.num)

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
