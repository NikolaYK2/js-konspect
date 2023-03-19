//global scope в chrome это window
//fn; fn =>; arrow fn
//call, apply, bind
//fn constructor
// noinspection ES6ShorthandObjectProperty

// const car = {
//     color: 'red',
//     swow()=>{
//         console.log(this.color);
//     }
// }
// car.swow();//ПОлучим undefaineed, так как стрелочная fn выпрыгиват в global - в данном случаии this берется у
// window, а у win нет св-в color,

// const car = {
//     color: 'red',
//     swow(){
//         console.log(this.color);
//     }
// }
// // const  present = car.swow();//переменной Сдесь же передаем ссылку на наш метод,
// // // а потом ее вызываем не так ка кнадо для this)))
// // present();//undefined так как вызываем в global scope
// const newCar = car.swow.bind(car);
// newCar();//ok

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
