// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 90,
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
//     {
//         name: "Helen",
//         age: 20,
//         isMarried: false,
//         scores: 110
//     },
//     {
//         name: "Ann",
//         age: 20,
//         isMarried: false,
//         scores: 105
//     },
// ];
//
// const user = {
//     name: "Bob",
//     age: 23,
//     friends: ["Alex", "Nick", "John"]
// }
//
// // // 1. Создайте поверхностную копию объекта user //поверхнастная потому что не затрагиваем массив внутри
// // let copyUser = {...user};
// // //Проверка:
// // console.log(user === copyUser)/*false - разные объекты*/
// // console.log(user.friends === copyUser.friends)/*true - ссылается один и тот же массив*/
//
// // // 2. Полная (глубокая) копия объекта user
// // const copyUser = {...user, friends: [...user.friends]}
// // //Проверка:
// // console.log(user === copyUser) /*- что должно быть в консоли? false*/
// // console.log(user.friends === copyUser.friends) /*- что должно быть в консоли? false*/
//
//
// // // 3. Поверхностная копия массива students
// // let copyStudents = [...students];
// //
// // //Проверка:
// // console.log(copyStudents === students) /*- что должно быть в консоли? false */
// // console.log(copyStudents[1].name === students[1].name) /*- что должно быть в консоли? true*/
// // console.log(copyStudents[0].age === students[0].age) /*- что должно быть в консоли? true*/
// // console.log(copyStudents[2].scores === students[2].scores) /*- что должно быть в консоли? true*/
//
// //4*. Полная (глубокая) копия массива students (map)
// let deepCopyStudents = students.map(el => ({...el}));//()- Для returna это return
// //Проверка:
// console.log(deepCopyStudents === students)//false
// console.log(deepCopyStudents[0] === students[0])//false
// console.log(deepCopyStudents[1].age === students[1].age)//true так как значение в объектах этих уже одинаковые
//
// // NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// // Вывод результатов - в консоль
//
// // // 5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
// let sortedByName = [...students];
// // console.log(sortedByName.sort((a, b) => a.name.localeCompare(b.name)));
// // console.log(deepCopyStudents.sort((a,b)=> a.name.localeCompare(b.name)));
// // console.log(sortedByName.sort((a,b)=> a.name > b.name ? 1 : -1));
//
// // 5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
// let sortedByScores = [...students];
// const compareFn = (a, b) => a.scores - b.scores
// console.log(sortedByScores.sort(compareFn).reverse());
// console.log(deepCopyStudents.sort((a, b) => b.scores - a.scores))
//
// // // 6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
// // let bestStudents = [...students];
// // console.log(bestStudents.filter(el => el.scores >= 100))
//
// //6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// // let topStudents = [...bestStudents];
// // console.log(topStudents)
// // deepCopyStudents = topStudents.splice(0, 2)
// // console.log(deepCopyStudents)
// const topStudents = deepCopyStudents.splice(0, 3);
// console.log(topStudents);
//
// // //6b. Объедините массивы deepCopyStudents и topStudents так,
// // //чтоб сохранился порядок сортировки (spread-оператор || concat)
// let newDeepCopyStudents = [...deepCopyStudents, ...topStudents];
// // console.log(newDeepCopyStudents)
// // console.log([...deepCopyStudents, ...topStudents]);
// // console.log(deepCopyStudents.concat(topStudents));
//
// // //7. Сформируйте массив холостых студентов (filter)
// // let notMarriedStudents = [...students].filter(el => !el.isMarried);
// // console.log(notMarriedStudents)
// // console.log(newDeepCopyStudents.filter(s=>s.isMarried === false));
//
// // //8. Сформируйте массив имён студентов (map)
// // let studentsNames = [...students].map(e => (e.name));
// // console.log(studentsNames)
// // console.log(newDeepCopyStudents.map(sName=>(sName.name)));
//
// // //8a. Сформируйте строку из имён студентов, разделённых
// // // - пробелом (join)
// // // - запятой (join)
// // let namesWithSpace = [...students].join(" ");
// // console.log(namesWithSpace)
// // let namesWithComma = namesWithSpace.join();
// // console.log(namesWithComma)
// // let nameSplash = newDeepCopyStudents.map(name=>(name.name));
// // console.log(nameSplash.join(' '));
// // console.log(nameSplash.join(', '));
// // console.log(nameSplash.toString());
//
// // //9. Добавьте всем студентам свойство "isStudent" со значением true (map)
// // let trueStudents = students.map(el => ({...students, isStudent: true}));
// // console.log(trueStudents)
// let trueStudents = newDeepCopyStudents.map(addS => ({...addS, isStudent: true}))
// console.log(trueStudents);
//
// //10. Nick женился. Выполните соответствующие преобразование массива students (map)
// // let studentsWithMarriedNick;
// // name === nik
// // {...
// //     el, isMerit
// // :
// //     true
// // }
// // :
// // el
// // console.log(studentsWithMarriedNick)
// let studentsWithMarriedNick = trueStudents.map(st => st.name === 'Nick' ? {...st, isMarried: true} : st);
// console.log(studentsWithMarriedNick)
//
// // //11. Найдите студента по имени Ann (find)
// // let ann = students;
// // console.log(ann)
// // console.log(studentsWithMarriedNick.find(n=>n.name === 'Ann'));
//
// // //12. Найдите студента с самым высоким баллом (reduce)
// // // - c помощью reduce
// // // - *не испльзуя методы массивов и Math.max()*
// let bestStudent = studentsWithMarriedNick.reduce((acc, st) => acc.scores > st.scores ? acc : st)
// console.log(bestStudent)
//
// //13. Найдите сумму баллов всех студентов (reduce)
//
// // И поднимаем руку!!!!
// let scoresSum = students.reduce((a, b) => a + b.scores, 0);
// console.log(scoresSum)
// // // 14. Д.З.:
// // // Напишите функцию addFriends, которая принимает параметром массив students
// // // и добавляет в каждому студенту свойство "friends",
// // // значением которого является массив имён всех остальных студентов из массива students,
// // // за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
//
// const addFriends = (students) => {
//     return students.map(st => ({...st, friends: [...students.filter(n => n.name !== st.name)].map((e) => e.name)}))
// }
// console.log(addFriends(students));
//
// let a = [{name: 'Vit'}, {name: 'Nik'}];

// 1. Simple object
// let man = {
//     name: 'John',
//     age: 28
// };
//
// let manFullCopy = {...man};
// console.log(manFullCopy === man);
//
//
// // 2. Array of primitives
// let numbers = [1, 2, 3];
//
// let numbersFullCopy = [...numbers];
// console.log(numbersFullCopy === numbers);
//
// // 3. Object inside an object
// let man1 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: 'Kate',
//         age: 50
//     }
// };
//
// let man1FullCopy = {...man1, mother: {...man1.mother}};
//
// console.log(man1 === man1FullCopy);
// console.log(man1.mother === man1FullCopy.mother);
//
//
// // 4. Array of primitives inside an object
// let man2 = {
//     name: 'John',
//     age: 28,
//     friends: ["Peter", "Steven", "William"]
// };
//
// let man2FullCopy = {...man2, friends: [...man2.friends]};
//
// console.log(man2 === man2FullCopy);
// console.log(man2.friends === man2FullCopy.friends);
//
//
// // 5 Array of objects
// let people = [
//     {name: "Peter", age: 30},
//     {name: "Steven", age: 32},
//     {name: "William", age: 28}
// ];
//
//
// let peopleFullCopy = [...people.map(e=>({...e}))];
//
// console.log(people === peopleFullCopy);
// peopleFullCopy[0].name = 'huy';
// console.log(people[0].name);
// console.log(peopleFullCopy[0].name);
//
//
// // 6 Array of objects inside object
// let man3 = {
//     name: 'John',
//     age: 28,
//     friends: [
//         {name: "Peter", age: 30},
//         {name: "Steven", age: 32},
//         {name: "William", age: 28}
//     ]
// };
//
// let man3FullCopy ={...man3, friends:[...man3.friends.map(e=>({...e}))]};
//
// console.log(man3 === man3FullCopy);
// man3FullCopy.friends[0].name = 'huy';
// console.log(man3.friends[0].name);
// console.log(man3FullCopy.friends[0].name);


// 7 Object inside an object, inside an object
// let man4 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         }
//     }
// };
//
// let man4FullCopy = {...man4,
//     mother: {
//     ...man4.mother,
//         work: {
//         ...man4.mother.work
//     }}};
//
// console.log(man4 === man4FullCopy);
// man4FullCopy.mother.name = 'huy';
// man4FullCopy.mother.work.position = 'Nahuy';
//
// console.log(man4.mother.name);
// console.log(man4.mother.work.position);
//
// console.log(man4FullCopy.mother.name);
// console.log(man4FullCopy.mother.work.position);


// 8 Array of objects inside object -> object
// let man5 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {name: "Kevin", age: 80},
//             {name: "Jennifer", age: 78},
//         ]
//     }
// };
//
// let man5FullCopy = {...man5, mother: {...man5.mother, work: {...man5.mother.work}, parents: [...man5.mother.parents.map(e=>({...e}))]}};
// console.log(man5 === man5FullCopy);
//
//
// man5FullCopy.mother.name = 'huy';
// man5FullCopy.mother.work.position = 'Nahuy';
// man5FullCopy.mother.parents[0].name = 'Pizda';
//
// console.log(man5.mother.name);
// console.log(man5.mother.work.position);
// console.log(man5.mother.parents[0].name);
//
// console.log(man5FullCopy.mother.name);
// console.log(man5FullCopy.mother.work.position);
// console.log(man5FullCopy.mother.parents[0].name);


// 9 Object inside an object -> array -> object ->  object
// let man6 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {
//                 name: "Kevin",
//                 age: 80,
//                 favoriteDish: {
//                     title: "borscht"
//                 }
//             },
//             {
//                 name: "Jennifer",
//                 age: 78,
//                 favoriteDish: {
//                     title: "sushi"
//                 }
//             },
//         ]
//     }
// };
//
// let man6FullCopy ={...man6};
// console.log(man6 === man6FullCopy);
//
// man6FullCopy.mother.name = 'huy';
// man6FullCopy.mother.work.position = 'Nahuy';
// man6FullCopy.mother.parents[0].name = 'Pizda';
// man6FullCopy.mother.parents[0].favoriteDish.title = 'ura';
//
// console.log(man6.mother.name);
// console.log(man6.mother.work.position);
// console.log(man6.mother.parents[0].name);
// console.log(man6.mother.parents[0].favoriteDish.title);
//
// console.log(man6FullCopy.mother.name);
// console.log(man6FullCopy.mother.work.position);
// console.log(man6FullCopy.mother.parents[0].name);
// console.log(man6FullCopy.mother.parents[0].favoriteDish.title);

//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy = {...man7,
    mother: {...man7.mother,
        work: {...man7.mother.work},
        parents: [...man7.mother.parents.map(e => ({...e,
            favoriteDish: {
                ...man7.mother.parents.favoriteDish,
                ingredients: [...e.favoriteDish.ingredients.map(el => ({...el}))]
            }
        }))]
    }
}  //  your code

console.log(man7 === man7FullCopy);

man7FullCopy.mother.name = 'huy';
man7FullCopy.mother.work.position = 'Nahuy';
man7FullCopy.mother.parents[0].name = 'netu';
man7FullCopy.mother.parents[0].favoriteDish.title = 'Eeeee';
man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].title = 'Pizda';

console.log(man7.mother.name);
console.log(man7.mother.work.position);
console.log(man7.mother.parents[0].name);
console.log(man7.mother.parents[0].favoriteDish.title);
console.log(man7.mother.parents[0].favoriteDish.ingredients[0].title);

console.log(man7FullCopy.mother.name);
console.log(man7FullCopy.mother.work.position);
console.log(man7FullCopy.mother.parents[0].name);
console.log(man7FullCopy.mother.parents[0].favoriteDish.title);
console.log(man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].title);







