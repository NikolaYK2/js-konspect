//Замыкание, лексическое окружение, рекурсия


// //{}-это environmentsRecords  ->-это outer, ссылка на какой-то другой такой-же обьект
// const LE={// Скрытый обьект
//     environmentsRecords:{
//
//     },
//     outer: LE || null,
// }
// //Лексическое окружение формируется на уровне скрипта
//
// const name = 'Vita';//Переменная написана на уровне скрипта/глобально - под этим имеется уровень скрипта

//globalLE -> {sayHi: Function, name: 'Vita' } -> null

let name = 'Vita'; //{sayHi: Function, name: 'Vita'}
function sayHi(message) {// Если передается переменная как параметр, воспринимать ее как локальная переменная на момент вызова
    // {foo: Function, message: 'Hi} ->global

    // как только движок эту функцию распарсит(прочтет), он создает для это функции спеыиальную переменную
    // ((Environment)) - эта переменная, эта ссылка на то LE, в которой эта функция была создана -> global

    //{foo: Function, greeting: 'Hi} ->global
    // Для этой функции формируется свой собственный обьект sayHiLE {greeting; Hi}-> globalLE
    let greeting = 'Hi'; //sayHiLE {greeting; Hi}-> globalLE
    function foo() {
//[[environment]]-> sayHiLE - переменная environment выполняется только в момент вызова функции

        //{} -> sayHiLE cсылка скопируется из переменной env {}-обьект пустой, так как никаких переменных в фукнции foo не опеределяли
        console.log(greeting + ' ' + name); //Теперь движку нужно понять где находятся переменные, сначала он смотрит
        // в локальноLE(sayHiLE {greeting; Hi}) окружение, смотрит есть ли в этом обьекте такой ключ,
        // greeting есть и он его заменяет на срочку hi, затем снова индификатор переменной, движок опять смотрит в своем
        // окружение LEsayHiLE {greeting; Hi}), такой переменной не находит и идет по этой ссылку -> в globalLE
        // смотрит тут {sayHi: Function, name: 'Vita'}, если и глобально переменную не найдет будет ошибка freferens error
    }
}
sayHi('huy');

if (true){
     //{}-свой собственный обьет LE
}

// let name = 'Nik';
//
// function sayHi(){
//     console.log(name);
// };
//
// name = 'Hanna';
//
// sayHi();

// const name ='Vita';
// const getHi=()=>{
//     const name = 'Nik';
//     return ()=>{
//         console.log(name);
//     }
// }
//
// const hi = getHi();
// hi();

// Пример из собеседований======================================================================
//globalLE -> {counter: function} -> null после того как выполниться функция counter()ж записывается сюда
//globalLE -> {counter: function, count: function} -> null
const counter =()=>{
    //[[env]]->globalLE

    //{}->globalLE
    let count = 0;//{count: 0}-> globalLE
    return ()=>{
        //[[env]]->counterLE
        //{}->counterLE при первом вызове count удаляется это лексическое окружение
        console.log(count++);
    }
}

const count = counter();

count();
count();
//=========================================================================
//globalLE -> {counter: function, count: function, count1: function} -> null

let count = 0; // теперь при вызове всех функций будет 1 2 3 4 5 6, так как первый каунтер уже поизменял знаечния переменной
const counter =()=>{
//1 создается объект LE counterLE ->{count: 0}
//2 создается объект LE counterLE ->{count: 0}
    let count = 0; // если эту переменную выкинуть глобально то два разных LE будут ссылаться уже на один и тот же скоуп
    return ()=>{
        //1 [[env]]->counterLE
        //2 [[env]]->counterLE будет создана заново переменная которая уже будет ссылаться на второй обьект 2
        console.log(++count);
    }
}
//На каждый вызов формируется обьект лексического окружения, а затем если вызов той-же функции он уже меняет обькт(данные)
//Получается два независимых счетчика
const count = counter();//один вызов сделали
const count1 = counter();//заходим еще раз в функцию counter, теперь одна и та же фнкция но как будто разпаралелена, каждый счетчик независим

count();
count();
// 1, 2 ,3

count1();
count1();
// 1, 2 ,3

//Функция замыкания
const counter =()=>{
    return()=>{
        console.log(++count);
    }
}
const count = counter();//когда вызываю каунтер функция return ()=>{} запоминает обьект LE в которой она была создана


//Рекурсия
const pow = (x,n)=>{
    if (n === 1){
        return x;
    } else {
        return x * pow(x,n - 1);//Шаг рекурсии
    }
}
