//Многомерные структуры ===================================================
//Array =====================================================
// let arr = [];
// let arr1 =[];
// // let l = 1;//счетчик, перенесли теперь в счетчик
//
// for (let i = 0, l=1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//         for (let k = 0; k < 3; k++) {
//             arr1 = arr[i][j];
//             arr[i][j] = [...arr1, l];
//             l++;
//         }
//     }
//
// }
// console.log(arr);
//Сформируйте с помощью двух вложенных циклов следующий массив: ----
// let arr = [];
//
// for (let i = 0, num =1; i < 4; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         // arr[i].push(num*2);
//         // ++num;
//         //--------
//         // let arr1 = arr[i];
//         // arr[i] = [...arr1, num*2];
//         // ++num;
//         //------------
//         // arr[i][j] = num++;
//     }
//
// }
// console.log(arr);
//
//OBJ ================================================================
// let obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
// let sum =0;
// // for (let i = 1; i <= Object.keys(obj).length; i++) {
// //     for (let j = 1; j <= Object.keys(obj).length; j++) {
// //         sum += obj['key' + i]['key' + j]
// //     }
// // }
// //или - но так длинней)
// for (let i = 1; i <= Object.keys(obj).length; i++) {
//     let subObj = obj['key' + i];
//     for (let j = 1; j <= Object.keys(obj).length; j++) {
//         sum += subObj['key' + j];
//     }
// }
// console.log(sum);
//Выводим все элементы -------------------------------------------
// for (let key in obj) {
//     let subObj = obj[key];
//
//     for (let subKey in subObj) {
//         console.log(subObj[subKey]);
//     }
// }
// //Сума через for in ---
// let sumForIn = 0;
// for (let key in obj) {
//     let subObj = obj[key];
//
//     for (let subKey in subObj) {
//         sumForIn += subObj[subKey]
//     }
// }
// console.log(sumForIn);
//
//Перебор многомерных структур -------------------------------------------
// let students = {
//     'group1': ['student11',
//         'student12', 'student13'],
//     'group2': ['student21',
//         'student22', 'student23'],
//     'group3': ['student31',
//         'student32'],
// };
// //перебор через двойной цикл. Обьект через for in, массив for of
// for (let objKey in students) {
//     for (let arr of students[objKey]) {
//         console.log(arr)
//     }
// }
// //for --
// let objKey = Object.keys(students)
// console.log(objKey)
// for (let j = 0; j < objKey.length; j++) {
//     console.log(String(students[objKey[j]]))
// }
//массив обьектов ------------
// let users = [
//     {
//         name: 'name1',
//         surn: 'surn1',
//     },
//     {
//         name: 'name2',
//         surn: 'surn2',
//     },
//     {
//         name: 'name3',
//         surn: 'surn3',
//     },
// ];
// for (let user of users) {
//     console.log(user.name + ' ' + user.surn);
// }