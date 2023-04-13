//class - инструкция с помощью которой можно создавать однатипные обьекты

//FN CONSTRUCTOR ==========================================================================================
//Желательно называть с большой буквы
// function DeleteUser(userId) {
//     this.type = 'DELETE-USER';
//     this.payload = {
//         userId: userId
//     }
//     //return this Неявно
// }
// const action1 = new DeleteUser(1);
// console.log(action1)
//Тот же обьект но через class
// class DeleteUser{
//     constructor(userId) {
//         this.type = 'DELETE-USER';
//         this.payload = {
//             userId: userId
//         }
//     }
//     render(){}
// }
// const action1 = new DeleteUser(1);
// console.log(action1)

//Унаследование prototype =================================================================================
// function User(name, site, dob) {
//     this.name = name;
//     this.site = site;
//     this.dateOfBirth = dob;
//     //return this Неявно
// }
// User.prototype.hello = function (){
//     console.log(`i am ${this.name} ${this.site} ${this.dateOfBirth}`)
// }
// const u1 = new User('Nik', 'it-incubator', new Date(1991,10,3));
// console.log(u1);
//class --------------------------------------------
// class User {
//     constructor(name, site, dob) {
//         this.name = name;
//         this.site = site;
//         this.dateOfBirth = dob;
//     }
//     hello(){
//         console.log(`i am ${this.name} ${this.site} ${this.dateOfBirth}`)
//     }
// }
// const u1 = new User('Nik', 'it-incubator', new Date(1991,10,3));
// // u1.hello();
// console.log(u1.hello());

//Инкапсуляция ====================================================================================================
class User {
    #name = ''

    constructor(name, site, dob) {
        this.#name = name;
        this.site = site;
        this.dateOfBirth = dob;
    }

    //Geteri setori нужны для контроля к примеру присваивания нового знаечния к св-в привер set name(value)
    get name(){//можно обратиться к приватному св-в через такой вот метод
        return this.#name
    }
    //или
    // getName() {//можно обратиться к приватному св-в через такой вот метод
    //     return this.#name
    // }

    //Fn которая изменяет приватное св-в
    set name(value) {//Можно контралировать, например запретить имя Игорь
        if (value === 'Igor') throw new Error('Такое имя не пойдет')
        this.#name = value;//меняем на то что прилетит Value
    }
    // setName(value) {//Можно контралировать, например запретить имя Игорь
    //     if (value === 'Igor') throw new Error('Такое имя не пойдет')
    //     this.#name = value;//меняем на то что прилетит Value
    // }

    hello() {
        console.log(`i am ${this.#name} ${this.site} ${this.dateOfBirth}`)
    }
}

const u1 = new User('Nik', 'it-incubator', new Date(1991, 10, 3));
// u1.hello();
// console.log(u1.#name);//#-значит приватное Нельзя обратиться к св-ву напрямую, нужно использовать методы
// console.log(u1.hello());
// console.log(u1.getName());//Обращение к приватному св-в через getName()
//или
// console.log(u1.name);//Обращение к приватному св-в через get name(), делая обращение как будто к обычному св-в

//НАСЛЕДОВАНИЕ =====================================================================================================
//тот класс что выше изменять нельзя, можно только расширить
class Coder extends User {//Coder extends-расширяет class User
    //Хоти добавить еще какую-то технологию например this.tech для этого вызываем constructor
    constructor(name, site, dob, tech) {//На самом деле является наследникам User и что бы сконкструировать себя,
        // должен вызвать User-ский constructor c помощью super()
        // нужно передать так же три параметра бати (name, site, dob) и 4-ый который хотим добавить - tech;
        super(name, site, dob);
        this.tech = tech;
    }

    code(){
        console.log(`i am ${this.name}, my technologist ${this.tech}`);
    }

    //Можно переопредилить метод hello()
    hello() {
        super.hello();//У суперского класса вызываем hello(), выполни что ты делаешь в User, а потом можно изменить его
        console.log('idi na h')
    }
}
const coder = new Coder('Vita', 'domashniy-incubator', new Date(1991,1,17), 'C++')
// coder.hello();
// coder.code()

class Haker extends Coder {
    constructor(a,b,c,d) {
        super();
        this.name = 'XXX'//Делаем хакеру свой конструктор
        this.tech = 'XXXX'
    }
    code() {
        console.log('Всех ламанул лохи')
    }

}
const hak = new Haker();
// hak.hello()
// hak.code()

//ПОЛИМОРФИЗМ ============================================================================================
//У всех один и тот же метод как бы показать сообщение, но каждый обьект что-то делает по своему потому что по сути они
// все экземпляры одного обьекта
const users = [u1, coder, hak]
// users.forEach(u=>u.hello())

//REACT ============================================================================================
// class Profile extends  React.Component{
//     constructor(props) {
//         super(props);
//     }
//     render(){
//     }
// }
//Следит React и если увидел Компоненту
//const comp = <Profile/> - то он ее создает через new Profile
//React-у нужно вызвать метод render comp.render()
//jsx => html
//comp.componentDidMount();

//Поменялся state например
//Если должна обновится?
// if (comp.shouldComponentUpdate){
//новый jsx const newJsx = comp.render();
//jsx =>html
//comp.componentDidUpdate();
//}