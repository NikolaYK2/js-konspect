// O(N), O(N*N), O(lnN) сложность алгоритма
// O - способ оценки сложности алгоритма, то есть скорости его работы и потребления памяти. O показывает, как зависит время
// выполнения алгоритма от размера входных данных. Например, O (n) означает, что время выполнения алгоритма пропорционально
// количеству элементов во входном массиве. Чем меньше O, тем эффективнее алгоритм.
// О ней стоит говорить когда мы делаем операции по массиву
//
// O(n) - медленный поиск данных, хорошо при маленьком количестве данных
//
// O(lnN) - логарифмическая сложность
//
// 0(n2) - самая долгая время увеличивается на корень квадратный N*N
//
// O(1) - самая быстрая, поиск по индексу например, асоциативный массив или обращение к св-в обьекта через точку
//
// ЗАМЫКАНИЕ -------------------------------------------------------
// for (var i = 0; i < 10; i++) {
//     // for (let i = 0; i < 10; i++) {
//     (function (j) {//берем из замыкания, без этой обертки будет все время 10 так как значение в переменной переприсваивается
//         setTimeout(() => {
//             console.log(j)
//         }, j * 1000)
//     })(i)// i-значение попадает в переменную J
// }
// -----------------------------------------------------------------------
// function mak() {
//     let v = 0;
//     return function () {
//         return v++
//     }
// }
//
// mak()//Вернет нам fn так как fn mak возвращает другую fn а не число
// let f = mak();
// console.log(f())//вот теперь вернет число, которое берет из замыкания
// console.log(f())
//
// let f2 = mak();
// console.log(f2())//будет отдельный счетчик, так как начение берет из своего LE
//
// console.log(f === f2)//false
// console.log(mak()())
// задача -----------------------------------
// function sum(a, b) {
//     return a + b
// }
//
// function addTo10(b) {
//     return sum(10, b)//захардкодили 10
// }
//
// console.log(addTo10(30))
// через bind ----
// let addTo10Bind = sum.bind(null, 10);
// console.log(addTo10Bind(30))//тут мы добавляем один параметр, а что если параметров будет несколько, но не знаем сколько
//
// универсальная fn carry ---------
// function carry(f, ...arg) {
//     return (...argParam) => {//упаковываем параметры
//         return f(...arg, ...argParam)//Передаем параметры которые захардкоржены ...arg, а потом остаточные ...argParam
//     }
// }
//
// let addTo10Carry = carry(sum, 10);
// console.log(addTo10Carry(20))
// -----------------------------
// let a = 10;
// function sum(){
//     a = 100
// }
// sum();
// console.log(a)//100 выпрыгиваем в глобал скоуп и берем там а
// хуета какая-то сука, сам пиздит не зная о чем-----------------------------------
// let a = 10;
// var b = 10;
//
// function y(a) {
//     a++
//     b--
//     c = c + 1
//     // c++
// }
//
// y();//ПОскольку мы в функцию ничег оне передаем то a = undefined
// console.log(a, b,c)//a = 10 так как берем внешнюю, b = 9 так как B тоже не передаем и работаем c глобальной
// -----------------------------------------------------------------
// function hello(s, s2) {
//     console.log(this.name + s + s2)
// }
//
// let a = {name: 'Nik'}
// var hello2 = hello.bind(a,'!')
// hello2('?')//Nik!?
// ----------------------------------------------------------------
// function s(name) {
//     console.log(name)
// }
//
// function b(y) {
//     s(y)
// }
//
// function hey(p) {
//     b(p.name)
// }
//
// hey({name: 'Nik'})//Nik
// -------------------------
// function s(name) {
//     console.log(name)
// }
//
// function b(y) {
//     y.piu//
// }
//
// function hey(p) {
//     b(p)
// }
//
// hey({
//     name: 'Nik', piu: () => {
//         console.log('mik')//Ничег оне увидим так как fn мы не вызываем y.piu а просто передали ссылку
//     }
// })
// --------------------------------------
// function s(name) {
//     console.log(name)
// }
//
// function b(name,age) {
//     s(name)
// }
//
// function hey(name,age) {
//     b(name,age)
// }
//
// hey(12, 'Nik')//12
// -------------------------------------------------
// function s(name) {
//     console.log(name)
// }
//
// function b(name,age) {
//     s(name)
// }
//
// function hey(name,age) {
//     b(name,age)
// }
//
// hey(12, 'Nik')//12
//
//
// RECURS =============================================================
// function sumF(n) {
//     if (n === 1) {
//         return 1
//     } else {
//         return n + sumF(n - 1)
//     }
// }
// или оптимизированная рекурсия --------
// function sumF(n, sum = 0) {
//     sum += n
//     if (n === 1) {
//         return sum
//     } else {
//         return sumF(n - 1, sum)
//     }
// }
//
// console.log(sumF(4))
//
// THIS =============================================================
// let man = {
//     name: 'Nik',
//     hello() {
//         console.log(this.name)//undefinde
//         let bla = ()=>{
//             console.log(this.name + '2')
//         }
//         bla();
//     }
// }
// // let props = {man: man.hello}//получается передаем просто ссылку на fn а не вызываем ее
// // props.man();//все равно что hello()
// class --------------
// bind ---------------
// let man = {lastName: 'kuzy'}
//
// function hello(name){
//     console.log(name + this.lastName)
// }
// const hello2 = hello.bind(man)('nik');
// ----------------------------
// class User extends React.Component {
//     state = {
//         counter: 1
//     }
//     onChange = () => {
//         console.log(this.state.counter)//1 отработают первые
//         this.setState({counter: 100})// async отработает позже, так как fn асинхронная
//         console.log(this.state.counter)//1 отработают первые
//     }
//     render(){}
// }
// --------------------------------
// let man = {
//     name: 'nik',
//     hip() {
//         const hop = () => {
//             console.log(this.name)
//         }
//         return hop;
//     }
// }
// let yo = man.hip();
// yo();//будет nik так как функция Hop грубо говоря родилась когда уже был hop и this man
// ---------------------------
// let man = {
//     name: 'nik',
//     hip() {
//         document.querySelector('btn.ok')
// //здесб this еще пока man
//             .addEventListener('click', this.hop)//любой обработчик который мы отдаем кнопке, дивке там, будет
//         // всегда вызываться от этого элемента
//     },
//     hop() {
//         console.log(this.name)//this потеряли
//     }
// }
// man.hip()
// решение забиндить например ------
// let man = {
//     name: 'nik',
//     hip() {
//         document.querySelector('btn.ok')
//             .addEventListener('click', this.hop.bind(this))
//     },
//     hop() {
//         console.log(this.name)//this потеряли
//     }
// }
// man.hip()
// -----------------------------------
// let man = {
//     name: 'nik',
//     hip() {
//         document.querySelector('btn.ok')
//             .addEventListener('click', function () {
//                 console.log(this.name)//this будет btn
//             })
//     },
//     hop() {
//         console.log(this.name)//this потеряли
//     }
// }
// man.hip()
// ------------------------------------------
// let man = {
//     name: 'nik',
//     hip() {
//         setTimeout(()=>{
//             console.log(this.name)//Будет кнопкой
//         })
//     },
// }
// document.querySelector('but.ok')
//     .addEventListener('click', man.hip)
// -----------------------------------------------
// let man = {
//     name: 'nik',
//     hip() {
//         setTimeout(function (){
//             console.log(this)//Будет window, так как fn вызывает setTimeout.fn
//         })
//     },
// }
// document.querySelector('but.ok')
//     .addEventListener('click', man.hip)//Будет btn
// ------------------------------------------
// let man = {
//     name: 'nik',
//     hip() {
//         //this = but
//         setTimeout(() => {
//             console.log(this)//Будет but
//         })
//     },
// }
// let but = document.querySelector('but.ok')
// but.addEventListener('click', man.hip)
// ------------------------------------
// let man = {
//     name: 'nik',
//     hip() {
//         setTimeout(() => {
//             console.log(this)//props так как вызывается от имени props.hip() - не понятно
//         })
//     },
// }
//
// function User(props) {
//     props.hip();
// }
// User({hip: man.hip})
// ----------------------------------
// let man = {
//     name: 'nik',
//     hip() {
//         var that = this //props
//         setTimeout(function () {
//             console.log(this)//win ---> так как безымянную fn вызывает setT от win
//             console.log(that)//props
//         })
//     },
// }
//
// function User(props) {
//     props.hip();
// }
//
// User({hip: man.hip})
// ------------------------------------
// function User(){}
// let a = User();//win
// let b = new User()// this = {}
// class ------------------------------
// class St {
//     name = 'ana'
//
//     hip() {
//         console.log(this.name)//ana
//     }
//
//     hop = () => {
//         console.log(this.name)//ana
//     }
// }
//
// let st = new St();
// st.hip()
// st.hop()
// button.addEventListener('click', st.hip)//but
// button.addEventListener('click', st.hop)//ana
//
// PROMISE ==========================================================
// async function yo(){
// //асинхронная функция даже если нет return всегда возвращает промисс
// }
// let res = yo();
// res.then(r=>console.log(r))//поскольку ничем не зарезолвлена, undefined
// -------------------------------------------
// let pr1 = new Promise(()=>{})
// let xxx = pr1.then(()=>{})
// let yyy = pr1.then(()=>{})
// //xxx === yyy - false та как каждый раз возвращается новый промисс
//
//
// OBJ ----------------------------------------------------------------------------------
// let a = {name: 'Nik'}
// a['privet'] = 'hey'
// a[1] = '1'
// a[2] = '2'
// a[{}] = '3'//Обьект не может быть, вызывается метод toString = [Obj obj]
// a[{name:'ddd'}] = 'hz'//здесь то же самое, перезатираем значение [Obj obj] с 3 на hz
// console.log(a)
// ------------------------------------
// let man1 = {name:'d'}
// let man2 = {name:'s'}
//
// let man ={}
// man[man1]=1
// man[man2]=2
// console.log(man)//[Obj obj] - опять же обьект не может быть ключем 1 перезапишется на 2
// -----------------------
// function setName(name) {
//     this.name = name
// }
//
// function getName() {
//     return this.name
// }
//
// let a = {
//     name: 'Dima'
// }
// setName.bind(a)('Nik');//1 - первый вариант
// // setName.call(a, 'Vita')//2 - вариатнт
// console.log(a.name)
// ---------------------------------
// let a = 1
// try {
//     a = sum(a, 1)
// } catch (err) {
//     a += 2
// } finally {
//     a++
// }
// console.log(a)//4
// ---------------------------------------------
//
// REDUCE ==========================================================
// console.log([1, 2, 3, 4].reduce((acc, el) => acc + el,0))//0 - что хотим по результату вернуть, то есть число, можно
// // [],{}, '' и т. д.
//
// PROTOTYPE ===================================================
//
// PRACTICK ===============================================
// const arrNames = ['an', 'ser', 'geor']
// const obj = {}
// const objF = []
// let res = arrNames.map((e, index) => ({name: e, age: 18 + index})).sort((a, b) => b.age - a.age)
//
// for (let i = 0; i < arrNames.length; i++) {
//     objF[i] = {...i, name: arrNames[i], age: 18 + i}
// }
// console.log(res)
// console.log(objF)
// -----------------
// const flatArr = [1, 2, 3, [4, 5, 6, [7, 8], 9, 10, [11, 12]]]
// const onFlat = (arr) => {
//
//     let newArr = []
//
//     arr.forEach((e) => {
//         if (typeof e === 'number') {
//             newArr.push(e)
//         } else {
//              newArr.push(...onFlat(e))
//         }
//     })
//     return newArr
// }
// console.log(flatArr.flat(Infinity))
// console.log(onFlat(flatArr))
//
// practick ================================================================================================
// 1 В массиве найти максимальное число -----------------------
// const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
//     //min num
// let minValue1 = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < minValue1) {
//         minValue1 = numbers[i]
//     }
// }
// console.log(minValue1)
//
// //max num
// let maxValue2 = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maxValue2) {
//         maxValue2 = numbers[i]
//     }
// }
// console.log(maxValue2)
// //мой max num-------------------
// let maxNum = 0;
// for (let i = 0; i <= numbers.length; i++) {
//     if (maxNum < numbers[i]) {
//         maxNum = numbers[i]
//     }
// }
// console.log(maxNum)

// 2. Рекурсия: фибоначчи, факториал, сумма чисел от 0 до N ===================================
//Факториал --------------
// const fNum = (num) => {
//     if (num === 1) {
//         return 1
//     } else {
//         return num * fNum(num - 1)
//     }
// }
// console.log(fNum(3))
//fibonachi ---------------
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(3))
// //быстрый способ ------
// function fib2(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// console.log(fib2(77))
// //Цикл начинается с i=3, потому что первое и второе значения последовательности заданы a=1, b=1.
// // Такой способ называется динамическое программирование снизу вверх.
//сумма n чисел --------------
// function sumTo(n) {
//     if (n === 1) return 1
//     return n + sumTo(n - 1)
// }
//
// console.log(sumTo(100) + ' rekursia')
// //через цикл
// const fnSum = (num) => {
//     let sum = 0
//     for (let i = 0; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(fnSum(100) + ' for')
// //с исп. формулы
// const fnSum2 = (num) => {
//     return (1 + num) * num / 2
// }
// console.log(fnSum2(100) + ' po formule')
// // P.S. Надо ли говорить, что решение по формуле работает быстрее всех? Это очевидно. Оно использует всего три операции
// // для любого n, а цикл и рекурсия требуют как минимум n операций сложения.
//
// // Вариант с циклом – второй по скорости. Он быстрее рекурсии, так как операций сложения столько же, но нет
// // дополнительных вычислительных затрат на организацию вложенных вызовов. Поэтому рекурсия в данном случае работает
// // медленнее всех.
//
// // P.P.S. Некоторые движки поддерживают оптимизацию «хвостового вызова»: если рекурсивный вызов является самым последним
// // в функции, без каких-либо других вычислений, то внешней функции не нужно будет возобновлять выполнение и не нужно
// // запоминать контекст его выполнения. В итоге требования к памяти снижаются. Но если JavaScript-движок не поддерживает
// // это (большинство не поддерживают), будет ошибка: максимальный размер стека превышен, так как обычно существует
// // ограничение на максимальный размер стека.

// 3. Call, apply, bind
// bind (не выполняет функцию, возвращает другую функцию с навсегда заданным контекстом):
// bind* более сложный пример с параметрами:
// function foo(age, city) {
//     console.log(`${this.name}, ${age}, ${city}`);
// }
//
// let a = { name: 'Dima' };
// let b = { name: 'Viktor' };
//
// const bindedFooA = foo.bind(a, 30);
// const bindedFooB = foo.bind(b, 18);
//
// bindedFooA('Tbilisi'); // Dima, 30, Tbilisi
// bindedFooB('Minsk'); // 'Viktor, 18, Minsk

//4.  map, filter, reduce
//reducer --------
//reducer пробегается по всему массиву и на выход выдаёт какое-то одно обобщённое значение. Это может быть как новый
// массив, так и простое значение примитив или объект:
//----------------------
// ['Minsk', 'Moscow', '', '', 'London', '']
//     .reduce((acc, el) => {
//         if (el !== '') acc++
//         console.log(acc)
//         return acc
//     }, 0) // подсчитываем, сколько у нас в массиве не пустых строк
//---------------------------------
//     [{age: 18, sex: 'f', name: 'Sveta'},
//     {age: 17, sex: 'f', name: 'Sashka'},
//     {age: 19, sex: 'm', name: 'Andrew'}]
//     .reduce((acc, person) => {
//         if (person.age >= 18 && person.sex === 'f') {
//             acc.push(person)
//         }
//         console.log(acc)
//         return acc
//     }, []) // на выходе получаем новый массив, состоящий из людей, кто девочка и кому 18+ (но лучше эту задачу решать с помощью filter, но и так можно)
//-----------------------------------------
//     [1, 4, 6, 66, -12].reduce((acc, number) => {
//     acc += number
//         console.log(acc)
//     return acc
// }, 0) // подсчёт суммы всех чисел в массиве

//5. замыкание: counter =========================
// function makeCounter() {
//     var currentCount = 1
//     return function () {
//         // (**)
//         return currentCount++
//     }
// }
// var counter = makeCounter() // (*)
//
// // каждый вызов увеличивает счётчик и возвращает результат
// console.log(counter()) // 1
// console.log(counter()) // 2
// console.log(counter()) // 3
//
// // создать другой счётчик, он будет независим от первого
// var counter2 = makeCounter()
// console.log(counter2()) // 1

//6. Промисификация, setInterval, setTimeout ============
// doItAfter(2).then((num) => console.log(num))
// function doItAfter(seconds) {
//     let promise = new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve('hi, i\'m is Promiss')
//         }, seconds * 1000)
//     })
//     return promise
// }

