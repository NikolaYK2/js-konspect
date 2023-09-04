// const user = {
//     name: 'Nik',
//     age: 3,
//     isOnline: false,
// }
// let propName = 'friends';
// const copyUser = {...user,
//     isOnline: true,
//     friends: ['Akex', 'Nik', 'Max'], // - что бы добавить переменную в обьект, ее нужно взят в квадратные скобки
//     } //spread - дублирование(создание) нового обьекта
// // console.log(copyUser);
// // console.log(copyUser === user);
//
// //копирование опять ссылки
// const copy2User = {...copyUser};
// copy2User.friends.push('Anna');
// copy2User.age = 90;
// console.log(copy2User);
// console.log(copy2User === copyUser);
// console.log(copyUser);
//
// //глубокая копия
// const copy2user = {...copyUser, friends: [...copyUser.friends]};
// copy2user[propName].push('Anna');
// console.log(copy2user.friends === copyUser.friends);
// console.log(copyUser);
// console.log(copy2user);
// console.log(user);
// -----------------------------------------------------------------------------

//============================================Урок 2 CHANGE EL======================================================================================
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     },
// ];
//
// const names = ["Bob","Alex","Nik","John"];
//
// const getNames = (arr) => {
//     const result = [];//создаем пустой массив
//     //
//     const getName = (elArr) => elArr.name//что мы хотим с каждым элементом массива, хотим выдрать св-в name
//     //
//     for(let i =0; i < arr.length; i++) {
//     const newValue = getName(arr[i]);//arr[i- 0,1,2,3] - берем элемент массива
//     result[i] = newValue;//result[0Bob,1Alex,2Nik,3John]
//     }
//     return result;//"Bob","Alex","Nik","John"
// };
// console.log(getNames(students));
//
// const addScores = (arr) => {
//     const result = [];
//     //
//     const getNewValue = (elScores) => ({...elScores, scores: elScores.scores + 10})//return входит сюда, окружили в круглые скобки
//         //
//     for(let i =0; i < arr.length; i++) {
//         const newValue = getNewValue(arr[i]);
//         result[i] = newValue;
//     }
//     return result;
// };
// console.log(addScores(students));

//МЕТОД MAP ==========================================================
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     },
// ];
//
// //1-преобразование обьектов JSX
// //2-
// const getNameSt = (elArr) => elArr.name;//что мы хотим с каждым элементом массива, хотим выдрать св-в name
// const addScoresToStudent = (elScores) => ({...elScores, scores: elScores.scores + 10})//функция которая прибавляет к scores
//
// const getMappedArray = (arr, mapFn) => {
//     const result = [];
//     for(let i =0; i < arr.length; i++) {
//         const newValue = mapFn(arr[i]);
//         result[i] = newValue;
//     }
//     return result;
// };
// console.log(getMappedArray(students, getNameSt));
// console.log(getMappedArray(students, addScoresToStudent));
// console.log(students.map(getNameSt));//исп. метод Map просто
// //Изменения в массиве через MAP ---------------
// console.log(students.map(st => {
//     if(st.name === "Nick") {
//         return {...st, isMarried: true};
//     } else {
//         return st;
//     }
// }));

//МЕТОД ФИЛЬТР - возвращает массив выбранных элементов===============================================
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     },
// ];
//
// const getFilteredArray = (arr, filterFn) => {
//     const result = [];
//     for(let i =0; i < arr.length; i++) {
//         const newValue = filterFn(arr[i]);//true-то добавляет в массив ||-или  false-игнорирует элемент ничего с ним не делает
//         if (newValue === true) {
//             result.push(arr[i]);
//         }
//     }
// return result;
// }
// console.log(getFilteredArray(students, st => st.age > 20))
// console.log(students.filter(st => st.age > 20));
//=====================================================================
//----------------------------------------------------------------------
// const student = {
//     name: "Bob",
//     age: 22,
//     isMarried: true,
//     scores: 85,
// };
// const copyStudent = {};
// const keys = Object.keys(student);//keys - позваляет из указзаного обьекта получить массив ключей
// // console.log(keys);
// for (let i = 0; i < keys.length; i++) {
//     copyStudent[keys[i]] = student[keys[i]];
// };
// console.log(student);
// console.log(copyStudent);
// console.log(student === copyStudent);
//-------------------------------------------------------------

//МЕТОД Find - возвращает обьект=========================================================
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     },
// ];
//
// const getStudent = (arr, findFn) => {
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = findFn(arr[i])
//         if (newValue === true) {
//             return arr[i];
//         }
//     }
//     return arr;
// }
// console.log(students);
// console.log(getStudent(students, st => st.name === "Nick"));

// ===================lesson 3 stopPropagation & preventDefault====================================================================
// const handler = (event) => {
//     //не будет задевать(показывать) родительский элемент
//     event.stopPropagation();//Поосле того как ты вызовишь функцию, никуда дальше не надо всплывать
//     console.log(event.currentTarget.id);//target - будет ссылка на тот элемент который кликнули
// }
// const sm = document.getElementById("small")
// const md = document.getElementById("medium")
// const bg = document.getElementById("big")
//
//
// sm.onclick = handler;//назанчение события
// md.onclick = handler;//назанчение события
// bg.onclick = handler;//назанчение события
// // sm.onclick  = null;//удаление обработчика событий
//
// sm.addEventListener("click", handler);//функция назнаечния обработчика события
// //недостаток, не сохраняется ссылка
// //не исп. ананимные функции в качестве обработчика
//
// sm.removeEventListener("click", handler)//удаления события
//
// const a = document.getElementById("a");
// a.onclick = (e) => {
//     e.preventDefault();//предотвратить дефолтный метод//то есть не будет переходить по ссылке
//     alert("yes?")
// };
// // 1 e/event - обьект стандартного вида который формирует браузер и который передает в функцию обработчик
// // в этом обьекте есть практически все свдения проишедших событий, чаще всего currentTarget and target
// // в обьекте есть два события stopPropagation - прекращения распространения
// //                           preventDefault - предотвращение события по умолчанию



