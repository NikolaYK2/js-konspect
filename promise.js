let findUser = (id) => {
    const users = [
        {id: 1, name: 'Nik', friend: 4},
        {id: 2, name: 'Vita', friend: null},
        {id: 3, name: 'Dima', friend: 2},
    ]
    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find(u => u.id == id);
            if (user == null) {
                rej('user not found');
            } else {
                res(user);
            }
        }, random(500, 1500));
    })
}

let axios = {
    _fake(url, data) {
        return new Promise((res) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'me will prepare stidents for you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }
                res({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData,
                })
            }, random(1, 5) + 1000)
        })
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//
//
// const data = axios.get('http://localhost');
// //data - не может быть сразу data, сервер сразу так не сделает, вернет обещание-promise
// // - это объект, есть только методы
// const promise = axios.get('http://localhost');
// //Metod's
//
// //then
// //Когда обещание выполнишься(res),передаем внутрь callback fn выполни
// promise.then((data) => {
//     console.log(data)
// })
//
// const promise1 = findUser(1);
// promise1.then((user) => {
//     console.log(user);
// })
//
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
//
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
//
// //А что бы попасть в then даже если один из promise не зарезолвится
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
//             return Promise.reject({messoge: "такой пароль или логин не безопасны"});//Бэкэнд типо не готов, пока только вернем фэйковых пользователей
//         } else {
//             return Promise.resolve([{name: 'N', id: 1}, {name: 'V', id: 2}]);//Бэкэнд типо не готов, пока только вернем фэйковых пользователей
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
// })//2_3 res юзером,делается это например, когда на не нужны например все user, а только имя
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
// //Вдруг функция станет сложная, длиетльная
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

//Ошибки
//Синтаксис then
findUser(1)
    .then(user => {
        console.log(user.name)
        return user.friend;
    })
    .then(friendId => findUser(friendId))
    .catch(error => {
        console.log(`oops! ${error}`)
        return {name: 'bot', friend: 3}//Можем как бы кэтчем обыграть ситуацию, что бы цепочка не разрушилась
    })
    .then(friend1 => {
        console.log(friend1.name)
        return friend1.friend;
    })
    .then(friendId => findUser(friendId))
    .then(friend2 => console.log(friend2.name))
    .catch(error => alert(error))

//Синтаксис async await
async function run() {
    try {
        let user = await findUser(1);
        console.log(user.name);
        let friend1;//Выносим во внешний скоуп,из блочной видимости
        try {
            friend1 = await findUser(user.friend);
        } catch (error) {
            friend1 = {name: 'bot', friend: 3}
        }
        console.log(friend1.name);
        let friend2 = await findUser(friend1.friend);
        console.log(friend2.name);
    } catch (error) {
        alert(error);
    }
}

run();

//Промисификация run() на будущее
const api = {
    save() {

    },
    read() {
        return {name: 'it-porno'}
    }
}

async function run() {
    await api.save()
    console.log('saved');
    let data = await api.read()//Создаем на будущее, await просто пропустит через себя, если это не promise
    console.log('read:', data)
}

//Промисификация api
const api = {
    save() {

    },
    read() {
        //1-ый способ
        return new Promise((res) => res({name: 'it-porno'}))
        //2-ой способ
        return Promise.resolve({name: 'it-porno'})
    },
    //3-ий способ сделать сам метод асинхронным
    async read() {//Любая асинхронная функция всегда возвращает промис
        return {name: 'it-porno'}
    }
}
//=================================================================================================
//пример
const p = new Promise(function (res, rej) {
    setTimeout(() => {
        console.log('Prep data...');
        const backendData = {//Что бы получить доступ к этим данным, для этого и существует fn res, rej
            //res вызывается когда асинхронная операция закончилась успешно
            server: 'aws',
            port: 2000,
            status: 'work',
        }
        res(backendData);//Говорим promise что он завершил своё выполнение
    }, 2000);
})
//p - является промисом
p.then((data /*- это backendData*/) => {//ЧТо бы получить доступ к backendData нужно зарезолвить res(backendData)
//Повторим асинхронную операцию
    /*const p2 = - вместо того что б создавать переменную, можно просто вернуть promise*/
    return new Promise((res) => {
        setTimeout(() => {
            data.mod = true;
            res(data);//Сообщаем Promise что он совершился и передаем обьект
        }, 2000)
    })
    //Если просто возвращаем новый promise без переменной, то следующий код не нужен
    // p2.then(modData=>{
    //     console.log(modData)
    // })
    //Теперь после метода then мы можем снова вызвать метод then, чейнить(цепь)
})
    .then((modData) => {
        modData.fromPr = true;
        return modData;
    })
    .then(data => {
        console.log(data);
    })
    //Ошибки================
    .catch(err => console.error(err))
    //Будет вызывать независимо
    .finally(()=>console.log('Fin'));

//Возможности
//Cоздание промиса функции setTimeout и пользоваться можно много раз
const sleep = ms => {
    return new Promise(res=>{
        setTimeout(()=>res(),ms)
    })
}

sleep(2000).then(()=>console.log('2 s'))
sleep(3000).then(()=>console.log('3 s'))

//Глобальные методы
//     Promise.all()
Promise.all([sleep(2000), sleep(5000)])
    .then(()=>{//Будет выполнен только тогда, когда зарезолвятся все в массиве
        console.log('all')
    })

Promise.race([sleep(2000), sleep(5000)])
    .then(()=>{//Принимает набор промисов и отрабатывает сразу как только хотя бы один промис зарезол
        console.log('race')
    })

