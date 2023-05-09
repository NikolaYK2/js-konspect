// let findUser = (id) => {
//     const users = [
//         {id: 1, name: 'Nik', friend: 4},
//         {id: 2, name: 'Vita', friend: null},
//         {id: 3, name: 'Dima', friend: 2},
//     ]
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let user = users.find(u => u.id == id);
//             if (user == null) {
//                 rej('user not found');
//             } else {
//                 res(user);
//             }
//         }, random(500, 1500));
//     })
// }
//
// let axios = {
//     _fake(url, data) {
//         return new Promise((res) => {
//             setTimeout(() => {
//                 let responseData = {
//                     text: `${url} loves you`
//                 };
//                 if (url.indexOf('it-kamasutra') > 0) {
//                     responseData = {
//                         requestedCount: data.count,
//                         message: 'me will prepare stidents for you'
//                     }
//                 } else if (url.indexOf('google') > 0) {
//                     responseData = {
//                         vacancies: 12
//                     }
//                 } else if (url.indexOf('microsoft') > 0) {
//                     responseData = {
//                         vacancies: 21
//                     }
//                 }
//                 res({
//                     request: {},
//                     status: 200,
//                     headers: {},
//                     config: {},
//                     data: responseData,
//                 })
//             }, random(1, 5) + 1000)
//         })
//     }
// }
//
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// const data = axios.get('http://localhost');
// //data - не может быть сразу data, сервер сразу так не сделает, вернет обещание-promise
// // - это объект, есть только методы
// const promise = axios.get('http://localhost');
// //Metod's

// //then
// //Когда обещание выполнишься(res),передаем внутрь callback fn выполни
// promise.then((data) => {
//     console.log(data)
// })

// const promise1 = findUser(1);
// promise1.then((user) => {
//     console.log(user);
// })

// //Сокращенный синтаксис(короткий) реальной жизни
// //pending
// /*const promise = */
// axios.get('http://localhost')
//     //resolved
//     .then((data) => {
//     });
//
// /*const promise1 = */
// findUser(1)
//     .then(() => {
//     });
//
// //catch - передается ошибка, если promise не resolved а rejected
// const promise1 = findUser(1);
// promise1.then((user) => {
//     /*if(user !== null){
//        console.log(user);
//        } else {
//        } - что бы не делать такого рода проверки, на этот случай есть catch*/
// })
//     //Что бы обработать ошибку используем метод catch
//     /*promise1 - раздельно так не пишут, а в цепочке*/
//     .catch((error => {
//         console.log(error)
//     }))
//     //finally
//     .finally(() => {//Выполняется когда код res или rej
//         console.log('finish')
//     })

// //Методы promise
// //Promise.all() - обычно для того, когда нужно работать с запросами паралельно, нужны и те и те
// const fullPromise = Promise.all([promise, promise1]);//Зарезолвится только после того как все промису зарезолвятся
// fullPromise
//     .then((result) => {//Придет массив результатов
//         const dataGoogle = result[0];
//         const dataUser = result[1];
//         console.log(`${dataGoogle.data.vacansies}; ${dataUser.name}`);
//     })
//     .catch(() => {
//         console.log('эпопробуйте позже')
//     })

//А что бы попасть в then даже если один из promise не зарезолвится
// const fullPromise = Promise.allSettled([promise, promise1]);
// fullPromise
//     .then((result) => {//Приходит массив из двух объектов и говорят в каком статусе эти объекты
//         //Нужно сделать проверку
//         const dataGoogle = result[0].status === 'fulfilled' ? result[0].value : {data: {vacansies: null}};
//         const dataUser = result[1].status === 'fulfilled' ? result[1].value : {name: result[1].reason};
//         console.log(`${dataGoogle.data.vacansies}; ${dataUser.name}`);
//     })
//     .catch(() => {
//         console.log('эпопробуйте позже')
//     })
//
// //Статический метод resolve
// const resPromise = Promise.resolve([{}]);//Создаем сразу зарезолвленный промис
// resPromise
//     .then(data => console.log(data))
// //Таким образом можно сделать заглушки
//
// const rejPromise = Promise.reject({message: 'error'});//Создаем сразу rej промис ошибки
// rejPromise
//     .catch(error => console.warn(error))
// //Привер обьекта делающего запрос на сервер
// const usersAPI = {
//     getAllUsers() {
//         return Promise.resolve([{name: 'N'}, {name: 'V'}]);//Бэкэнд типо не готов, пока только вернем фэйковых пользователей
//         //Когда будет бэк готов, мы перепишем данныу на return axios настоящий запрос на сервер
//     },
//     login(login, password) {
//         if (login !== '123' && password !== '123') {//если лоиг и пароль
//             return Promise.reject({messoge: "такой пароль или логин не безопасны"});
//         } else {
//             return Promise.resolve([{name: 'N', id: 1}, {name: 'V', id: 2}]);
//         }
//
//     }
// }
// const pr = usersAPI.getAllUsers();//Берем промис и подписываемся then
// pr.then(users => console.log(users));
// usersAPI.login('123', '222')
//     .then((data) => {
//     })
//     .catch(error => {
//     })
//
// //цЕПОЧКА THEN
// //Каждый вызов then возвращает новый promuse
// const promise2 = findUser(1);
// const promise2_3 = promise2.then((user) => {
// })//как только эта функция отработает только тогда promise2_2 зарезолвится);
// const promise2_3 = promise2.then((user) => {
//     return user
// })//2_3 res юзером, делается это например, когда на не нужны например все user, а только имя
// const promise2_3 = promise2.then((user) => {
//     return user.name
// });
// //В реальной жизни переменные не пишутся а сразу then
// findUser(1)//Найди в базе данный пользователья с id 1
//     .then((user) => {//Когда найдется забери у него имя и отправь имя в следующий then
//         return user.name
//     })
//     .then(name => name)//выведи имя
//
// //get возвращает нам promise
// axios.get('https://google.com')//Превратился моментально в promise
//     .then(response => response.data)//вызываем(делаем подписку) у promise then
//     .then(data => data)
//
// const makeGoogle = () => {
//     // const pr = axios.get('https://google.com');
//     // const pr2 = pr.then(res=>res.data);
//     // return pr2;
//     //Реальный метод
//     return axios.get('https://google.com').then(res => res.data);
// }
// makeGoogle().then(data => data)
//
// //вОЗВРАЩАЕМ ДРУГОЙ PROMISE
// axios.get('https://google.com')//Превратился моментально в promise
//     .then(response => {
//         const pr = Promise.resolve(response.data.value);
//         return pr;
//     })
//     .then(value => value)//то сюда уже придет то чем зарезолвился промис pr
//
// //await/async
// let user = finUser(1)//что бы нам не ждать promise, точней все равно ждать будем, что б код сократить
// let user = await finUser(1)//ждем промис и защет await ждем чем promise res и результат записываем в переменную
// //Находим друга теперь
// let friend1 = await finUser(user.friend);
// let friend2 = await finUser(friend1.friend);
// console.log(friend2.name)
// //Но вы не можем эвэйтить вне асинхронных функций
// //создаем асинхронную функцию
// async function run() {
//     let user = await finUser(1)
//     let friend1 = await finUser(user.friend);
//     let friend2 = await finUser(friend1.friend);
//     console.log(friend2.name)
// }
//
// //промисификация, new Promise()
// findUser(1).then(user => {
//     console.log(user)
// });
//
// function getNum() {
//     return Math.random();
// }
//
// const n1 = getNum();
// const n2 = getNum();
//
// //Вдруг функция станет сложная, длительная
// findUser(1).then(user => {
//     console.log(user)
// });
//
// function getNum() {
//     return Promise.resolve(Math.random());//Создали promise res числом
//     //Распишем на части
//     // const promise = Promise.resolve(Math.random());
//     // return promise;
//
//     //Promise создается при помощи вызова конструктора new
//     const promise = new Promise((res, rej) => {
//         res(Math.random());
//     })
//     return promise
// }
//
// const n1 = getNum().then(n => n);
// const n2 = getNum().then(n => n);
//
// //SAVE data
// const repo = {
//     save(data) {
//         try {
//             localStorage.setItem('some_key', JSON.stringify(data))
//         } catch (error) {
//             return false
//         }
//         return true
//     },
//     //СОздание асинхронной версии
//     saveAsync(data) {
//         const promise = new Promise((res, rej) => {
//             try {
//                 localStorage.setItem('some_key', JSON.stringify(data));
//                 res()
//             } catch (error) {
//                 rej(error)
//             }
//         })
//         return promise;
//     },
//     read() {
//         const data = localStorage.getItem('some-key');
//         if (!data) {
//             return null
//         } else {
//             return JSON.parse(data)
//         }
//     },
//     readAsync() {
//         return new Promise((res, rej) => {
//             const data = localStorage.getItem('some-key');
//             if (!data) {
//                 res(null)
//             } else {
//                 res(JSON.parse(data))
//             }
//         })
//     },
// }
// //синхронный метод
// const result = repo.save({name: 'Nik'}, /*(err) => console.log('saved')*/);
// // if (result) {
// //     console.log('save');
// // } else {
// //     console.log('no save');
// // }
// const data = repo.read()
//
// //пользвание асинхронным методом
// /*const promise = */
// repo.saveAsync({name: 'Nik'})
//     /*promise*/.then(() => console.log('save'))
//     .catch((error) => console.log(error));
// //переходим на синтаксис async
// const run = async () => {
//     await repo.saveAsync({name: 'Nik'});
//     console.log('save');
//
//     const data = await repo.readAsync();//Нам нужно теперь достать data, записываем сразу в переменную
//     console.log(data);
// }
//
// //Пример с отсчетом
// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 1000)
//     }, 1000)
// }, 1000)
//
//
// const wait = (ms) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res()
//         }, ms)
//     })
// }
//
// async function run() {
//     await wait(1000);
//     console.log(1)
//     await wait(1000);
//     console.log(2)
//     await wait(1000);
//     console.log(3)
// }
//
// run();

// //Ошибки
// //Синтаксис then
// findUser(1)
//     .then(user => {
//         console.log(user.name)
//         return user.friend;
//     })
//     .then(friendId => findUser(friendId))
//     .catch(error => {
//         console.log(`oops! ${error}`)
//         return {name: 'bot', friend: 3}//Можем как бы кэтчем обыграть ситуацию, что бы цепочка не разрушилась
//     })
//     .then(friend1 => {
//         console.log(friend1.name)
//         return friend1.friend;
//     })
//     .then(friendId => findUser(friendId))
//     .then(friend2 => console.log(friend2.name))
//     .catch(error => alert(error))
//
// //Синтаксис async await
// async function run() {
//     try {
//         let user = await findUser(1);
//         console.log(user.name);
//         let friend1;//Выносим во внешний скоуп,из блочной видимости
//         try {
//             friend1 = await findUser(user.friend);
//         } catch (error) {
//             friend1 = {name: 'bot', friend: 3}
//         }
//         console.log(friend1.name);
//         let friend2 = await findUser(friend1.friend);
//         console.log(friend2.name);
//     } catch (error) {
//         alert(error);
//     }
// }
//
// run();
//
// //Промисификация run() на будущее
// const api = {
//     save() {
//
//     },
//     read() {
//         return {name: 'it-porno'}
//     }
// }
//
// async function run() {
//     await api.save()
//     console.log('saved');
//     let data = await api.read()//Создаем на будущее, await просто пропустит через себя, если это не promise
//     console.log('read:', data)
// }
//
// //Промисификация api
// const api = {
//     save() {
//
//     },
//     read() {
//         //1-ый способ
//         return new Promise((res) => res({name: 'it-porno'}))
//         //2-ой способ
//         return Promise.resolve({name: 'it-porno'})
//     },
//     //3-ий способ сделать сам метод асинхронным
//     async read() {//Любая асинхронная функция всегда возвращает промис
//         return {name: 'it-porno'}
//     }
// }
// //=================================================================================================
// //пример
// const p = new Promise(function (res, rej) {
//     setTimeout(() => {
//         console.log('Prep data...');
//         const backendData = {//Что бы получить доступ к этим данным, для этого и существует fn res, rej
//             //res вызывается когда асинхронная операция закончилась успешно
//             server: 'aws',
//             port: 2000,
//             status: 'work',
//         }
//         res(backendData);//Говорим promise что он завершил своё выполнение
//     }, 2000);
// })
// //p - является промисом
// p.then((data /*- это backendData*/) => {//ЧТо бы получить доступ к backendData нужно зарезолвить res(backendData)
// //Повторим асинхронную операцию
//     /*const p2 = - вместо того что б создавать переменную, можно просто вернуть promise*/
//     return new Promise((res) => {
//         setTimeout(() => {
//             data.mod = true;
//             res(data);//Сообщаем Promise что он совершился и передаем обьект
//         }, 2000)
//     })
//     //Если просто возвращаем новый promise без переменной, то следующий код не нужен
//     // p2.then(modData=>{
//     //     console.log(modData)
//     // })
//     //Теперь после метода then мы можем снова вызвать метод then, чейнить(цепь)
// })
//     .then((modData) => {
//         modData.fromPr = true;
//         return modData;
//     })
//     .then(data => {
//         console.log(data);
//     })
//     //Ошибки================
//     .catch(err => console.error(err))
//     //Будет вызывать независимо
//     .finally(()=>console.log('Fin'));
// ----------------------------------------------------------------------------------
//Возможности Cоздание промиса функции setTimeout и пользоваться можно много раз
// const sleep = ms => {
//     return new Promise(res=>{
//         setTimeout(()=>res(),ms)
//     })
// }
//
// sleep(2000).then(()=>console.log('2 s'))
// sleep(3000).then(()=>console.log('3 s'))
//
// //Глобальные методы
// //     Promise.all()
// Promise.all([sleep(2000), sleep(5000)])
//     .then(()=>{//Будет выполнен только тогда, когда зарезолвятся все в массиве
//         console.log('all')
//     })
//
// Promise.race([sleep(2000), sleep(5000)])
//     .then(()=>{//Принимает набор промисов и отрабатывает сразу как только хотя бы один промис зарезол
//         console.log('race')
//     })
//

//Задачки
// function delay(ms) {
//     // ваш код
//     return new Promise((res) => {
//         setTimeout(() => {
//             res();
//         }, ms)
//     })
// }
//
// delay(3000).then(() => alert('выполнилось через 3 секунды'));
//
// function delay(ms) {
//     // ваш код
//     return new Promise((res) => {
//         setTimeout(() => {
//             res();
//         }, ms)
//     })
// }
//
// async function run(){
//     await delay(3000);
//     alert('выполнилось через 3 секунды')
// }
// run();

//// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// // https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
// // console.log('script start');
// // setTimeout(function () {
// //     console.log('setTimeout');
// // }, 0);
// //
// // Promise.resolve()
// //     .then(function () {
// //         console.log('promise1');
// //     })
// //     .then(function () {
// //         console.log('promise2');
// //     });
// // console.log('script end');
// //api set
// //tasks p1 pr2
// //s e p1 p2 set

// //! Task 01 Создайте промис, который постоянно находиться в состоянии pending.
// // В конструкторе промиса выведите в консоль сообщение "Promise is created".
// // const promise = new Promise(()=>{
// //     console.log("Promise is created")
// // });
// // console.log(promise)

// //! Task 02 Создайте промис, который после создания сразу же переходит в состояние resolve
// // и возвращает строку 'Promise Data'
// // Получите данные промиса и выведите их в консоль
// // const promise = Promise.resolve('Promise Data');
// // promise.then(data=>console.log(data));
// // console.log(promise)

// //! Task 03 Создайте промис, который после создания сразу же переходит в состояние rejected
// // и возвращает строку 'Promise Error'
// // Получите данные промиса и выведите их в консоль
// // const promise = Promise.reject('Promise Error')
// // promise.then(error=>console.error(error));
//
// //! Task 04 Создайте промис, который переходит в состояние resolved через 3с.
// // (Используйте setTimeout)
// // и возвращает строку 'Promise Data'
// // Получите данные промиса и выведите их в консоль
// // const promise:any = new Promise((res)=>{
// //     setTimeout(()=>{
// //         res('Promise Data')
// //     },3000)
// // }).then(data=>console.log(data));
// // console.log(promise)

// // Task 05 Создайте литерал объекта handlePromise со следующими свойствами:
// // promise, resolve, reject, onSuccess, onError
// // Проинициализируйте первые три свойства null,
// // а последние два функциями, которые принимают один параметр и выводят
// // в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// // вторая - `Promise is rejected with error: ${paramName}`
// // Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// // Первый обработчик, создает промис, заполняет первые три свойства,
// // описаного выше объекта: свойство promise получает новый созданный промис,
// // свойства resolve и reject получают ссылки на соответствующие функции
// // resolve и reject. Следующие два обработчика запускают методы resolve и reject.
// // type HandlePromiseType={
// //     promise:null,
// //     resolve:null,
// //     reject:null,
// //     onSuccess:(paramName:any)=>void,
// //     onError:(paramName:any)=>void,
// // }
// // export let handlePromise:any ={
// //     promise:null,
// //     resolve:null,
// //     reject:null,
// //     onSuccess(paramName:any){
// //         console.log(`Promise is resolved with data: ${paramName}`)
// //     },
// //     onError(paramName:any){
// //         console.log(`Promise is rejected with error: ${paramName}`)
// //     },
// // };

// //! Task 06 Создайте промис, который через 1 с возвращает строку "My name is".
// // Создайте функцию onSuccess, которая получает один параметр,
// // прибавляет к нему Ваше имя и возвращает новую строку из функции
// // Создайте функцию print, которая выводит в консоль значение своего параметра
// // Добавьте два метода then и передайте созданные функции.
// // const promise = new Promise((res: any, rej) => {
// //     setTimeout(() => {
// //         res('My name is');
// //     }, 1000)
// // })
// // const onSuccess = (param: any) => {
// // }
// // const print = (param: any) => {
// //     return console.log(param)
// // }
// // promise
// //     .then((str) => {
// //         return onSuccess(str);
// //     })
// //     .then((result) => {
// //         print(result)
// //     })

// //! Task 7 Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// // второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// // Получите результаты работы промисов, объедините свойства объектов
// // и выведите в консоль {name, age, city}
// // const promise = new Promise((res) => {
// //     setTimeout(() => {
// //         return res({name: 'Vita'});
// //     }, 2000)
// //
// // })
// // const promise1 = new Promise((res) => {
// //     setTimeout(() => {
// //         return res({age: 31});
// //     }, 3000)
// // })
// // const promise2 = new Promise((res) => {
// //     setTimeout(() => {
// //         return res({city: 'Molodechno'});
// //     }, 4000)
// //
// // })
// // let resultPromise = Promise.all([promise, promise1, promise2]);
// // resultPromise.then((resalt:any) => {
// //     // let a:any = resalt[0];
// //     // let b:any = resalt[1];
// //     // let c:any = resalt[2];
// //     // let result = {...a, ...b, ...c}
// //     let result = {...resalt[0], ...resalt[1], ...resalt[2]}
// //     console.log(result)
// //     console.log(`${result.name} ${result.age} ${result.city}`)
// // })
// // just a plug
//

// Работа с массивами промисов в JavaScript
// // ! Сделайте функцию, возвращающую промис, внутри которого установлена случайная задержка
// // от 1 до 10 секунд. Пусть своим результатом промис возвращает эту задержку.
// // С помощью цикла и вашей функции заполните массив 10-ю промисами.
// // const promiseArray = [];
// // const fnPromise = () => {
// //     return new Promise((res, rej) => {
// //         let randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
// //         setTimeout(() => {
// //             res(randomNum);
// //         }, randomNum * 1000);
// //     })
// // }
// // for (let i = 0; i < 10; i++) {
// //     promiseArray.push(fnPromise().then(e => e));
// // }
// // // console.log(promiseArray);
// // // Используя массив промисов из предыдущей задачи сделайте так,
// // // чтобы в консоль вывелся результат первого сработавшего промиса.
// // // console.log(promiseArray);
// // Promise.all(promiseArray).then(function (res) {
// //     console.log(res);
// //     return res;
// // })
// //     .then((sum)=>{
// //         console.log(sum.reduce((acc:any, el)=>acc + el));
// //     })
// //     .catch(function (err) {
// //         console.log(err);
// //     });
// //
// // Promise.race(promiseArray).then(function (res) {
// //     console.log(res);
// // }).catch(function (err) {
// //     console.log(err);
// // });

// Создание сработавших промисов в JavaScript
// Пусть теперь мы решили, что для переданного нуля мы должны вернуть ноль, а для чисел меньше нуля - исключение. В этом нам поможет метод Promise.reject:
// function func(num) {
//     if (num > 0) {
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve(num * num);
//             }, 3000);
//         });
//     } else if (num === 0) {
//         return Promise.resolve(0);
//     } else {
//         return Promise.reject('incorrect number');
//         // вернем отклоненный промис
//     }
// }

// Промисификация асинхронного кода в JavaScript
// выполните промисификацию загрузки картинок. Потестируйте полученный код.
// let image = document.createElement('img');
// image.src = 'img.png';
//
// image.addEventListener('load', function () {
//     document.body.appendChild(image);
// });
// image.addEventListener('error', function () {
//     console.log('image load error');
// });
//
// const loadImage = (patch) => {
//     return new Promise((res, rej) => {
//         let image = document.createElement('img');
//         image.src = patch;
//         image.addEventListener('load', function () {
//             res(image);
//         });
//         image.addEventListener('error', function () {
//             rej(new Error(`image ${patch} load error`));
//         });
//
//     })
// }
// loadImage('img.png').then((image) => {
//     document.body.appendChild(image);
// }).catch((error) => console.log(error))

// Пусть пути к картинкам хранятся в массиве:
//
// let paths = new Promise((res) => {
//     return res(['img1.png', 'img2.png', 'img3.png']);
// });
// // Напишите код, который дождется окончания загрузки всех картинок, а затем добавит их в цикле в конец body.
// Promise.all([paths]).then(data => console.log(data));

// // Дан следующий код:
// //
// //     window.addEventListener('DOMContentLoaded', function() {
// //         console.log('dom загружен');
// //     });
// // Выполните его промисификацию.
// const load = () => {
//     return new Promise((res) => {
//        window.addEventListener('DOMContentLoaded', function () {})
//         res(window)
//     })
// }
// load().then((data) => {
//     console.log(` dom загружен ${data}`)
// })

// // Промисы в синхронном стиле
// // function func() {
// //     getSmth(2).then(res1 => {
// //         getSmth(3).then(res2 => {
// //             getSmth(4).then(res3 => {
// //                 console.log(res1 + res2 + res3);
// //             });
// //         });
// //     });
// // }
// //
// // func();
// // Перепишите его через синхронный синтаксис промисов.
// const getSmth=(num)=>{
//     return num * num;
// }
// async function func(){
//     let pr1 = await getSmth(2);
//     let pr2 = await getSmth(3);
//     let pr3 = await getSmth(4);
//     console.log(pr1 + pr2 + pr3)
//     return pr1 + pr2 + pr3;
// }
// func();

