// //Выделяется все
// //id todolista ===================================
// const todoListsID_1 = "12hf-45jf";
// const todoListsID_2 = "34sd-00lq";
// //======================================================
// const todoLists = [//Отдельное хранилище тудулистов
//     {
//         id: todoListsID_1,
//         title: "What to learn",
//         filter: "all",
//         // tasks: [
//         //     {id: 12, title: "JS", isDone: false},
//         //     {id: 13, title: "TS", isDone: false},
//         //     {id: 14, title: "HTML", isDone: false},
//         // ]
//     },
//     {
//         id: todoListsID_2,
//         title: "What to buy",
//         filter: "all",
//         // tasks: [
//         //     {id: 22, title: "Beer", isDone: false},
//         //     {id: 23, title: "Meat", isDone: false},
//         //     {id: 24, title: "Fish", isDone: false},
//         // ]
//     },
// ]
//     //======================Ассоциативный массив============================================
// const tasks = {//хранилище тасок
//     [todoListsID_1]: [// знаечние ключа берем из переменной [todoListsID_1]
//         {id: 12, title: "JS", isDone: false},
//         {id: 13, title: "TS", isDone: false},
//         {id: 14, title: "HTML", isDone: false},
//     ],
//     [todoListsID_2]: [
//         {id: 22, title: "Beer", isDone: false},
//         {id: 23, title: "Meat", isDone: false},
//         {id: 24, title: "Fish", isDone: false},
//     ],
// }
// const name = "Alex"
// const userName = `${name} name`// Alex name
// const user = {
//     [userName]: "",//синтаксис вычисляемых св-в обьекта - ключь ALex name, а  [userName] - переменная(ссылка) которая
//     // содержит значение ключа
//     [10 + 20]: "",// ключь 30
// }
//     //Поиск объекта тудулиста =================================================================================
// console.log(tasks[todoListsID_1].find(t => t.id === 12).title);//ищем обьект у которой id = 12. title / JS
//     //Добавление новой task в массив без пременения push===================================================
// console.log([...tasks[todoListsID_2], {id: 25, title:"Water", isDone: false,}])
//     //Перебор по каждому элементу создавая новый массив метод  map =========================================
// console.log(tasks[todoListsID_1].map(t => t.title)); // JS TS HTML
//
// //reduce ==================================================================
// const nums =[10, 20, 30]//
// console.log(nums.reduce((acc, el)=>acc + el, 0))//0 - ставим что б начиналась итерацияс c нуля
// //итерация acc = 0 + el = 10 / 10;
// // acc = 10 + el = 20 / 30;
// // acc = 30 + el = 30 / 60
//
// console.log(nums.reduce((acc, el)=> acc > el ? acc : el))//30 будет
// //acc = 10 -потому что начинается с 10, нуля нет как в первом случаи
//     //acc 10 > 20-нет / el = 20
// //acc 20 > 30-нет / el 30
//
//
// let students = [
//     {
//         id: 1,
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {   id: 2,
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         id: 3,
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         id: 4,
//         name: "John",
//         age: 23,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
// const sts = {
//     "1": {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
// }
//     //переделка значений id в ключ =========================
// console.log(students.reduce((acc, el)=>{
//     acc[el.id] = {...el}//Создаем аккумулятору ключь с id и положили туда копию элемента объекта
//     delete acc[el.id].id//Удаляем значение id у объекта
//     return acc//Возвращаем полученное значение от проделанной операции
// }, {}))//Начальное значение взяли пустой объект
//
// console.log(students.reduce((acc, el)=> acc + el.scores, 0)) //посчитали все scores
// //0 - для того что бы acc было начальным значением 0, иначе будет object