import React from "react";

//!use-strict ------> this = some object
// use-strict --------> this = any data type

//1. global scope ---> this = global object всегда будет ссылка на глобальный объект
//смотрим где this используется

//2. внутри функции: смотрим как вызывается функция!!!!
//Обычная функция

function foo() {//Первым делом смотрим как функция вызвана и ничто другое!!!!!
    console.log(this);
}

//Обычный вызов функции ====================================================
foo();//this будет undefined в не строгом режиме будет window
//нету никаких обьектов слева, точек, new
//- обычный вызов функции ---Ю undefined (!use-strict ---> window)

//Функция вызвана от какого-то объекта ======================================
const user = {
    name: 'Alex',
    snowName() {
        console.log(this);
    }
}
user.snowName()//this будет то что слева от точки user

const user2 = {
    name: 'Vita',
    snowName: user.snowName,
}
user2.snowName()//this будет то что слева от точки user2

function foo() {
    console.log(this.name);
}

const fooObj = {
    foo: foo
}
fooObj.foo();

//С помощью методов функции (call, apply, bind) ============================
function foo() {
    console.log(this);
}

const user = {
    name: 'Nik',
}
//fn call вызывается сразу
foo.call(user);//this будет то что я передал в метод call
foo.call({name: 1});//или то что я передал в call то и будет this
foo.apply({name: 2});//делает то же самое

//Если функция с параметрами:
function foo(a, b) {
    console.log(this);
    console.log(a, b);
}

const user = {
    name: 'Nik',
}
//Первый аргумент меняет this
foo.call({name: 1}, 1, 2);//параметры передаются через запятую
foo.apply({name: 2}, [1, 2]);//через массив

const bindFoo = foo.bind({name: 2});//Функцию сразу не вызывает, возвращает обертку,
// что бы запустить функцию, нужно вызвать обертку
bindFoo();
//способ без записи в переменную, просто в конце добавляют вызов
foo.bind({name: 2})();//() - добавленный в конце вызов функции
//вызов с аргументами
foo.bind({name: 2}, 1, 2)();//в сам bind
foo.bind({name: 2})(1, 2);//в вызов
foo.bind({name: 2}, 1)(2);//или так
const bindFoo = foo.bind({name: 2}, 1, 2);//Функцию сразу не вызывает, возвращает обертку,
bindFoo(3, 4);//3,4 не вызовутся, только если параметры функции добавить function foo(a, b, c, d)
// типо а и b уже заняты и т. д.
// можно передать все в обертку
bindFoo(1, 2);

//Вызвана с помощью ключевого слова new и this всегда будет новый обьект==========================================
function foo() {
    //Происходит не явно
    // const this ={}
    // И в конце функции происходит
    // return this
    console.log(this);
}

new foo(); //Вызвана как конструктор, this внутри функции становится новый обьект
const a = new foo();
console.log(a);//foo {} - пустой обьект а слева показана, какой конструктор этот обьект создал

function UserConstructor(name, age) {
    //Говоря обычным языком
    // const newUser = {};
    // newUser.name = name;
    // newUser.age = age;
    // return newUser;
    this.name = name;
    this.age = age;
    // return this
    // return this.name - можно возвращать например не весь обьект а его часть
}

// const a = userConstructor("Vita", 31)// - функция вызвана как простая функция
new UserConstructor();//функция вызвана как конструктар, и
// строчки const newUser = {};
// return newUser; писать уже не надо
//Принята что функция конструктор пишется с большой буквы

new (User.bind({name: 'Vita'}))();
// this Будет User {} - так как new главнее и выполнится он

//СТРЕЛОЧНАЯ ФУНКЦИЯ нет своего this ---> THIS берется из внешнего скоупа ===============================
// выпрыгивает и ищет this
//То есть теперь не смотрим как вызвона функция, теперь просто смотреть скоуп с которого заберется this
const foo = () => {//Вообще не искать место вызова, просто нужно найти скоуп внешний
    // в котором есть this
    // скоупы в котором есть this это либо глобальный скоуп либо обычная функция
    console.log(this);
}
//в данном случаи this Будет window

const user = {
    hi: () => {
        console.log(this);
    }
}
user.hi();//Обьект user не создает лексическое окружение,
// значит опять во внешний скоуп глобальный и это window

const user = {
    hi() {
        //this надет внутри функции hi
        //hi - вызывается через точку user.hi() - this будет слева от функции
        const foo = () => {
            console.log(this);
        }
        foo();
    }
}
user.hi();

const user = {//this будет window
    hi: () => {
        const foo = () => {
            console.log(this);
        }
        foo();
    }
}
user.hi();

const user = {//this будет user потому что foo стрелочная функция, к ней метод не применется
    hi() {
        const foo = () => {
            console.log(this);
        }
        foo.call({hello: 'Vita'});
    }
}
user.hi();

const user = {
    age: 23,
    showAge() {

        const foo = () => {
            console.log(this.age);
        }
        foo.call({age: 12});
    }
}
user.showAge.call({age: 20});// 20

const a = {
    msg: 'hel',
    getMsg() {
        const msg = 'hey'
        return this.msg
    },
    getMsg2: () => {
        const msg = 'hey'
        return this.msg
    },

}
console.log(a.getMsg());// this ---> a значит hel
console.log(a.getMsg2());// this ---> window так как getMsg() нигде не вызывается, а у window.msg нет такого св

const a = {
    name: 'a',
    getName() {
        console.log(this.name);
    }
}
const b = {
    name: 'b'
}
const c = {
    name: 'c'
}
//методы не мутируют исходную функцию, значит каждый вызов будет работать по своим правилам
a.getName();//this будет a, так как слева от точки вызова fn /name a
a.getName
    .bind(b)//this Будет b - /name b - то чем мы привизали контекст в первый раз тем и будет,
    // нельзя перебандить
    .call(c);//this Будет b/name b
a.getName();//this будет a, так как слева от точки вызова fn /name a
a.getName.call(b);//this будет b/name b


this.name = 'global';
const a = {
    name: 'a',

    go: function () {
        console.log(this.name);
    },

    run: () => {
        console.log(this.name);
    },

    stop: function () {
        (() => {
            console.log(this.name)
        }).call({name: 'call'});
    }
}
a.go();//this a ---> 'a'
a.run(); //this window ---> window.name = 'global'
a.stop();//this a ---> 'a'


const user ={
    name: 'Vita',
    showName(){
        console.log(this.name);
    }
}
const foo=(cb)=>{
    cb();
}
foo(user.snowName());//this будет window.name - потому что (user.snowName())это не вызов функции
// вызов получается на 256 строчке - cb(), простой вызов а значит this window


const user ={
    name: 'Vita',
    showName(){
        console.log(this.name);
    }
}

setTimeout(user.snowName,1000);//потеря контекста, будет this window
//Что б this стало user, обратимся к стрелочной функции и сделаем обертку
setTimeout(()=>user.snowName(),1000);
//без обертки
setTimeout(user.snowName.bind(user),1000);


class Header extends React.Component {
    state ={
        count: 0
    }
    onClick =()=>{//По этому пишем стрелочную функцию
        this.setState({
            count: this.state.count++
        })
    }
    render(){
        return(
            <Avatar onClick={this.onClick/*.bind(this)*/}/>//конекст скорей всего потеряется и по этому
            // нужно забиндить, по этому нужно писать стрелочную функцию что бы не биндить
        )
    }
}
const Avatar =(props)=>{
    return(
        <div onClick={()=>props.onClick()}></div>
    )
}


const user ={
    group: 'Samurai',
    students:['Hanna', 'Alex'],

    showGroup(){
        this.students.forEach(function (student){
            console.log(this.group + ' ' + student);
        })
    }
}
user.showGroup();//this для первой функция будет user.students / второй this в другой функции,
// которая нигде не вызывается, значит this.group будет undefined - this скорее всего потеряется
// фиксится просто стрелочной функцией
const user ={
    group: 'Samurai',
    students:['Hanna', 'Alex'],

    showGroup(){
        this.students.forEach( (student)=>{//выпрыгивает во внешний контенкст функцию, а тут this user
            //так как user.showGroup();
            console.log(this.group + ' ' + student);
        })
    }
}
user.showGroup();
//или через bind
const user ={
    group: 'Samurai',
    students:['Hanna', 'Alex'],

    showGroup(){
        this.students.forEach( function (student){
            console.log(this.group + ' ' + student);
        }).bind(this);//тоже будет user
    }
}
//Метод forEach вторым параметром просит this
const user ={
    group: 'Samurai',
    students:['Hanna', 'Alex'],

    showGroup(){
        this.students.forEach( function (student){
            console.log(this.group + ' ' + student);
        }, this);
    }
}


'use strict'//this может быть что угодно
function foo(){
    console.log(this);
}
foo.call(undefined);//this будет undefined, короче что передали в call То и будет this

// '!use strict'
function foo(){
    console.log(this);
}
foo.call(undefined);//this будет undefined ---> превращает в window,
// call(5) ---> превратит в обьектное представление 5-ки {5} и т. д. со всеми примитивами


