// ========= TS CLASS ==============================================
// class User {
////нужно про типизировать сам класс
//     name: string;// Можно поставить значение по default name: string = '...'
//     age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     show():string{
//         return this.name
//     }
// }
//В TS есть модификаторы доступа: public, protected, private | readonly
//ПОзваляют ограничить права доступа к каким-то методам или св-в
// PUBLIC -------------------------------------------------------------
// class User {
//
//     // name: string;//public - Это св-в доступно всем: - лучше всегда и указывать что оно pablic
//     public name:string;
//     // 1. Данному инстансу
//     // 2. Наследникам
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
// }
// class Nik extends User{
//     constructor(name:string) {
//         super(name);
//     }
//     show(){
//         console.log(this.name)
//     }
// }
// const user = new User('Nik');
// console.log(user.name);
//PROTECTED -------------------------------------------------------------
//Делает все то же самое что Public но запрещает напрямую обращаться к св-в user.name
// class User {
//
//     protected name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
// }
//
// class Nik extends User {
//     constructor(name: string) {
//         super(name);
//     }
//
//     show() {
//         console.log(this.name)
//     }
// }
// const user = new User('Nik');
// console.log(user.name)//Запрещено напрямую обращаться /protected
// PRIVATE ------------------------------------------------------------------------
//все то же самое что protected, только теперь наследники не могут обращаться к св-в
// class User {
//
//     private name: string;//Только для меня, аналог #name
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
// }//private - только внутри этого класса
//
// class Nik extends User {
//     constructor(name: string) {
//         super(name);
//     }
//
//     show() {
//         console.log(this.name)//нельзя обращаться наследнику к св-в родителя name/private
//     }
// }
// const user = new User('Nik');
// READONLY -------------------------------------------------------------
// //можно комбинировать с public, protected, private
// class User {
//
//     public readonly name: string;//Только для меня, аналог #name
//     // protected readonly name: string;
//     // private readonly name: string;
//     //Можно просто написать readonly
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
// }
//
// class Nik extends User {
//     constructor(name: string) {
//         super(name);
//     }
//
//     show() {
//         console.log(this.name)
//     }
// }
// const user = new User('Nik');
// user.name = 'Vita'//Нельзя переприсвоить из-за readonly
//Фишка модификаторов -----------------------------------------------------------------
// class User {
//
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// //C модификаторами / польза
// class Nik{
//     constructor(public  name:string) {
//     }
//     //или и т. д.
//     // constructor(public readonly name:string) {
//     // }
// }
// const nik = new Nik('Nik');
// nik.name;
