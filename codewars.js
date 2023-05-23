// function warnTheSheep(queue) {
//     let arr = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];
//         if (arr[queue] !== "wolf") {
//             console.log(`Oi! Sheep number ${queue} ! You are about to be eaten by a wolf`)
//         } else {
//             console.log("Pls go away and stop eating my sheep");
//         }
// }
// warnTheSheep(6);

// function warnTheSheep(queue) {
//     let orderedQueue = queue.reverse();
//     for (let i = 0; i < queue.length; i++) {
//         if (orderedQueue[0] === "wolf")
//             return "Pls go away and stop eating my sheep";
//         else
//             return `Oi! Sheep number ${orderedQueue.indexOf("wolf")}! You are about to be eaten by a wolf!`;
//     }
// }
//
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])); //"Oi! Sheep number 1! You are about to be eaten by a wolf!"
// console.log(warnTheSheep(["sheep", "sheep", "wolf"])); //"Pls go away and stop eating my sheep"

//Задача про поиск в массиве метод indexOf!!=============================
// function warnTheSheep(queue) {
//     let arr = queue.reverse();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "wolf") {
//             return "Pls go away and stop eating my sheep";
//         } else {
//             return `Oi! Sheep number ${arr.indexOf("wolf")}! You are about to be eaten by a wolf!`;
//         }
//     }
// }
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]));
//==============================================================================

//============Ширина между 1 и последним столбов=====================================================================
// let result = 0;
// function pillars(num_pill, dist, width) {
//     return num_pill === 1  ? 0 :  result =  ((num_pill-2)*width) + ((100*dist)*(num_pill-1))
// }
// pillars(3, 30, 10)
// console.log(result)
//==========================================================
//=============Удвоенный массив=============================================

// function maps(x) {
//     const a = [1, 2, 3]
//     const b = a.map(e => e * x)
//     console.log(b)
// }
//
// maps(2)
// function maps(x) {
//     return x.map(e => e * 2)
//
// }
// maps([1,2,3])

//ДОМАШКА==============================================================
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
// const users = ['Ivan', 'Ish',];
//     users.push("Ol")
// console.log(users)
//     users.splice(1, 1,"Petr" )
// console.log(users)
//     userDelet = users.splice(0, 1)
// console.log(userDelet);
//     users.unshift("MAsh", "Pasha")
// console.log(users)


// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
// let arr = ['Ваня', 'Иштван', 'Оля',];
// arrDel = arr.splice(1,1)
// console.log(arrDel)

// Задача №4.
//Сделать из строки массив
// let str = 'Ваня,Иштван,Оля';
// arr = str.split(",");
// console.log(arr)

// Задача №5.
// Чему равен previousValue в начале работы метода?
// let arr = [9, 2, 8,];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
// console.log(previousValue);
// });

//===================Revers строки=======================
// function solution(str) {
//     let revers = str.split('').reverse().join('');
//     console.log(b)
//
//     return revers
// }
//
// solution("world");
//
// //===revers через for
// function solution(str) {
//     let revers = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revers += str[i];
//     }
//     return revers;
// }
//
// solution("world");
//===================================================================

//====================================================
// let a = "123"
// let res = '';
// for (let i = 0; i < a.length; i++) {
//     if(a[i] >= 2){
//         res +=Number(a[i]) + 1;
//     } else {
//         res +=Number(a[i]) - 1;
//     }
// }
// console.log(res)

// ===========================Сумма цифр если меньше 5 то -1, если равно или больше то +1
// function fakeBin(x) {
//     let result = '';
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] >= 5) {
//             result += Number(x[i]) + 1;
//         } else {
//             result += Number(x[i]) - 1;
//         }
//     }
//     console.log(result)
//     return  result;
// }
// fakeBin('123567')
// ===========================Замена цифр если меньше 5 то 0, если равно или больше то 1
// function fakeBin(x) {
//     let result = '';
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] >= 5) {
//             result += x[i] = 1;
//         } else {
//             result += x[i] = 0;
//         }
//     }
//     console.log(result)
//     return  result;
// }
// fakeBin('5174629')

// function fakeBin(x) {
//     let result = x.split(',').map(num => num >= 5 ? 1 : 0).join('')
//     console.log(result)
// }
// fakeBin('5174629')

//===================================================================================
// String.prototype.isUpperCase = function (a) {
//     if (a === a.toUpperCase()){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(String.prototype.isUpperCase('d'))
// ==============нихуя не понял
// String.prototype.isUpperCase = function() {
//     return String(this).toUpperCase() === String(this);
// }
//===========================================================
// function makeNegative(num) {
//     return num <= 0 ? num : -num
// }
// console.log(makeNegative(-1))
//==================================================================

//FACTOR=====================================================================================================
// function checkForFactor (base, factor) {
//     let result = base % factor;
//     if(result === 0){
//         return true;
//     } else if(result > 0) {
//         return false;
//
//     }
// }
// checkForFactor(4,2);
// ==================================================================================================

// CONVERTER CELIA==================================================================================

// function convertToCelsius (temperature) {
//     let celsius = (temperature - 32) * (5/9)
//     if(celsius > 0)
//         return console.log((celsius.toFixed(1) + " is freezing temperature"));
//     else
//         return console.log((celsius + " is above freezing temperature"));
//
// }
// convertToCelsius(100);
// ======================================================================================
// function grow(x){
//     let result = 1;
//     for(let i=0; i < x.length; i++){
//         result  *= x[i];
//     }
//     console.log(result)
//     return result
// }
// grow([1,2,3,4])
// =========================================================================

// УДАЛЕНИЕ ПРОБЕЛОВ ИЗ СТРОКИ===============================================================================
// function noSpace(x){
//     return x.split(' ').map(e=>e === ' ' ? '': e).join('')
// }
// let result = noSpace('Иди н а хуй');
// console.log(result)
//
// function noSpace(x){
//     console.log(x)
//     return x.split(' ').join('')
// }
// let result = noSpace('Иди н а хуй');
// console.log(result)

//БЛЮДО НА ТУ ЖЕ БУКВУ ЧТО И ИМЯ===========================================================================================================
// function feast(beast, dish) {
//     return beast.toUpperCase()[0] === dish.toUpperCase()[0];
// }
//
// let a = feast('Фолк', 'иноград');
// console.log(a);
//================================================================================================

// функцию, которая принимает целое число  строку и возвращает строку, повторяющуюся ровно столько раз.==============================================================================================
// function repeatStr (n, s) {
//     return s.repeat(n);
// }
// let a = repeatStr(3, 'Привет');
// console.log(a);
//==============================================================================================

//Удвоить целое число==============================================================================================
// function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i * 2;
// }

//Языки стран==============================================================================================
// function greet(language) {
//     const world = {
//         english: 'Welcome',
//         czech: 'Vitejte',
//         danish: 'Velkomst',
//         dutch: 'Welkom',
//         estonian: 'Tere tulemast',
//         finnish: 'Tervetuloa',
//         flemish: 'Welgekomen',
//         french: 'Bienvenue',
//         german: 'Willkommen',
//         irish: 'Failte',
//         italian: 'Benvenuto',
//         latvian: 'Gaidits',
//         lithuanian: 'Laukiamas',
//         polish: 'Witamy',
//         spanish: 'Bienvenido',
//         swedish: 'Valkommen',
//         welsh: 'Croeso'
//     }
//     if (world[language]){
//         return world[language]
//     } else if(language.trim() === ''){
//         return 'no ip address was supplied';
//     } else {
//         return 'ip address not in the database';
//     }
// }
// let a = greet('welsh');
// console.log(a)

//Вы играете набанджо==============================================================================================
// function areYouPlayingBanjo(name) {
//     // Implement me
//     if (name.toLowerCase().slice(0,1) === 'r'){
//         return `${name} plays banjo`
//     }else {
//         return `${name} does not play banjo`
//
//     }
// }
// let a = areYouPlayingBanjo('Dingo ');
// console.log(a);
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================

//Первая цункция World
// function hi(){
//     let str = 'Hi huy';
//     console.log(str);
// }
// hi();

// Функция, которая принимает массив и функцию - Не понятно что за условие
// Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 5 }), true)
// Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 4 }), false)
// const arr = [1, 2, 3, 4, 5];
// function none(arr) {
//     return function pipes(fun) {
//         return fun >= arr.length;
//     }
// }
// const result = none(arr);
// console.log(result(6))

// Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.
// Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив/список.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == [] false
// const array = [0, 2, 3, 4, 5]
// const array2 = [1, -2, 3, -4, 5]
// function invert(array) {
//     if (array !== undefined){
//         return array.map(num=>num * -1);
//         // console.log(result)
//     } else {
//         console.log('huy')
//         return 'huy';
//     }
// }
// let a = invert(array2);
// console.log(a)
//refactor
// function invert(array) {
//     return array !== undefined ? array.map(num=>num * -1) : 'huy';
// }
// let a = invert(array2);
// console.log(a)
//Через ЦИкл================================
// let result = [];
// function invert(array) {
//     if (array)
//     for (let i = 0; i < array.length; i++) {
//         result = [...result, array[i] * -1];
//     }
//     return result;
// }
// let a = invert(array);
// console.log(a)

// функция принимает 1 параметры: n, n - количество клиентов, покупающих хот-доги,
// разные числа имеют разные цены (см. следующую таблицу), возвращает число,
// которое клиент должен заплатить, сколько денег.
// количество	цена
// п < 5	            100
// n >= 5 и n < 10	    95
// п >= 10	            90
// function saleHotdogs(n){
//     if (n < 5){
//         return n *100;
//     } else if(n>= 5 && n < 10){
//         return n * 95;
//     } else if(n >= 10){
//         return n * 90;
//     } else {
//         return 'Dobro powalovat'
//     }
// }
// const a = saleHotdogs(5);
// console.log(a)

//Создайте функцию, вызываемую shortcutдля удаления строчных гласных
// ( a, e, i, o, u) в заданной строке.
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
//
// function shortcut(string) {
//     let letters = ['a', 'e', 'i', 'o', 'u', 'y', ' '];
//     let result = [];
//     let stringArray = string.split('');
//     result = stringArray.filter(a=>a !== letters[0])
//         .filter(a=>a !== letters[1])
//         .filter(a=>a !== letters[2])
//         .filter(a=>a !== letters[3])
//         .filter(a=>a !== letters[4])
//         .filter(a=>a !== letters[5])
//         .filter(a=>a !== letters[6])
//     return result.join('');
// }
// let a = shortcut('I am Niklay');
// console.log(a)
//
// function shortcut(string) {
//     return string.replace(/[aeiouy]/gi, '');//[ищем в строке буквы]/gi, находя заменяем на ничего ''
//     // g - глобальное сопоставление i - игнорировать регистр, m - сопоставление по нескольким строкам y - Экспериментальная возможность
//     // «липкий» поиск, сопоставление начинается с текущей позиции в строке
// }
//
// let a = shortcut('I am Niklay');
// console.log(a)
//
// function shortcut(string) {
//     let letters = 'aeiouy';
//     let result = '';
//     // let stringArray = string.split('');
//
//     for (let i = 0; i < string.length; i++){
//        if (!(letters.indexOf(string[i]) > -1)){
//            result +=string[i]
//        }
//     }
//     return result;
// }
// let a = shortcut('I am Niklay');
// console.log(a)
// function shortcut(string) {
//     let letters = ['a', 'e', 'i', 'o', 'u', 'y'];
//     // let lettersSoglas = ['b', 'c', 'd','f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
//     let result = [];
//     // let stringArray = string.split('');
//
//     for (let i = 0; i < string.length; i++) {
//         letters.map(a=>a === string[i] ? result+=string[i] : result)
//     }
//     return result;
//
// }
// let a = shortcut('mama privet');
// console.log(a)

//Берём любое натуральное число n. Если оно чётное, то делим его на 2,
// а если нечётное, то умножаем на 3 и прибавляем 1 (получаем 3n + 1).
// Над полученным числом выполняем те же самые действия, и так далее. Гипотеза Коллатца заключается в том,
// что какое бы начальное число n мы ни взяли, рано или поздно мы получим единицу.
// function hotpo(n) {
//     let count = 0;
//         while (n > 1) {
//             if (n % 2 === 0) n = n / 2;
//             else n = 3 * n + 1;
//             count++;
//         }
//     return count;
// }
// let a = hotpo(1000);
// console.log(a);

//Создайте функцию, которая принимает целое число в качестве аргумента
// и возвращает значение "Even"для четных или "Odd"нечетных чисел.
// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return alert('Even')
//     } else {
//         return alert("Odd")
//     }
// }
// evenOrOdd(2)

//О нет, Тимми создал бесконечный цикл! Помогите Тимми найти
// и исправить ошибку в его незавершенном цикле for!
// function createArray(number){
//     var newArray = [];
//
//     for(var counter = 1; counter <= number; counter++){
//         newArray.push(counter);
//     }
//
//     return newArray;
// }

//Про сперму =================================================
// function chromosomeCheck(sperm) {
//     let b = sperm.toLowerCase();
//     return b === sperm.replace(/y/gi).toLowerCase() ? "Congratulations! You're going to have a daughter."
//         : b === sperm.replace(/xx/gi).toLowerCase() ? "Congratulations! You're going to have a son." : "";
//
// }
// let a = chromosomeCheck('yX')
// console.log(a)

//Максимально сократить код
// function find(array, element) {
//     for (let i =0; i < array.length; i++) {
//         if(array[i] === element) return  i;
//     }
//     return "Not found";
//
// }
// let a = find(['a', 'b', 'c'], 'b');
// console.log(a);
// //сокращенная запись
// const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x

// TODO: Refactor and shorten the function
// // function describeAge(age) {
// //     if (age <= 12) {
// //         return "You're a(n) kid";
// //     } else if (age >= 13 && age <= 17) {
// //         return "You're a(n) teenager";
// //     } else if (age >= 18 && age <= 64) {
// //         return "You're a(n) adult";
// //     } else {
// //         return "You're a(n) elderly";
// //     }
// // }
// let b = 'You\'re a(n) '
// const describeAge=(age)=>{return age<=12?`${b}kid`:age>=13&&age<=17?`${b}teenager`:age>=18&&age<=64?`${b}adult`:`${b}elderly`}
// let a = describeAge(14);
// console.log(a);
// //можно было  бы в строке делать логику
// "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")

//УМножение символа ============
// function contamination(text, char) {
//     // Code here ;)
//     let result = '';
//     if (text === '' || char === '' || text === undefined || char === undefined) {
//         return '';
//     } else if (char !== '') {
//         for (let i = 0; i < text.length; i++) {
//             result += char;
//         }
//         return result;
//     }
// }
// let a = contamination('!!!!!', '&');
// console.log(a);

//Обьем куба =========================================
// let cubeChecker = function (volume, side) {
//     if (volume === side**3 && volume > 0 && side > 0) {
//         return true;
//     } else if(volume <=0 && side<=0){
//         return false;
//     }
//     return false;
// };
// console.log(cubeChecker(56.3, 1));

// const as=(az)=>{
//     let p = az**3;
//     return (qw)=>{
//         return  p + qw;
//     };
// }
// const a = as(2);
// console.log(a(3));

// 3Например, если задано неотрицательное целое число, верните строку с бормотанием: "1 sheep...2 sheep...3 sheep...".
// Ввод всегда будет действительным, т.е. отрицательных целых чисел не будет.
// var countSheep = function (num){
//     //your code here
//     let result = '';
//     for (let i = 1; i <= num; i++){
//         result += `${i} sheep...`
//     }
//     return result;
// }
// console.log(countSheep(3));

//Смена светафора последовательная
// function updateLight(current) {
//     //your code here!
//     if (current === 'green'){
//         return 'yellow'
//     } else if (current === 'yellow'){
//         return 'red'
//     } else if (current === 'red'){
//         return 'green'
//     }
// }
// console.log(updateLight('red'))

//Индекс массы тела
// function bmi(weight, height) {
//     let result = weight / height**2;
//     return result <= 18.5 ? 'Underweight' :
//         result <= 25.0 ? 'Normal' :
//             result <= 30.0 ? 'Overweight' :
//                 result > 30 ? 'Obese' : '';
// }
// console.log(bmi(85, 18.5))

// function derive(coefficient,exponent) {
//     return `${coefficient * exponent}x^${exponent - 1}`
// }
//
// console.log(derive(7,8));

// function integrate(coefficient, exponent) {
//     let resExponent = exponent + 1;
//     return `${coefficient / resExponent}x^${resExponent}`
// }
// console.log(integrate(3,2))

// let arr = [1, 1, 2, 3, 1, 2, 3, 4];
// let arr2 = [1, 3];
// Array.prototype.remove_ = function (integer_list, values_list) {
//     //your code here
//     for (let i = 0; i < values_list.length; i++) {
//         for (let j = 0; j <= integer_list.length; j++) {
//             values_list[i] === integer_list[j] ? integer_list = integer_list.filter(e => e !== values_list[i]) : integer_list;
//         }
//     }
//     return integer_list;
// }
// console.log(arr.remove(arr,arr2))
// let arr = [1, 1, 2, 3, 1, 2, 3, 4];
// let arr2 = [1, 3];
// let arr = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
// let arr2 = [1, 3, 4, 2];
//
// function remove(integer, value) {
//     for (let i = 0; i < value.length; i++) {
//         for (let j = 0; j <= integer.length; j++) {
//             integer = integer.filter(e=>e !== value[i]);
//         }
//     }
//     return integer;
// }
// console.log(remove(arr, arr2))
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

