//API - 15 ======================================
// let pr = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(1);
//     }, 3000);
// }).then(res => {
//     console.log(res);
// });
// console.log(pr);
//
// const axios = {
//     get() {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res({
//                     G: 2,
//                     g3: 4,
//                     message: 'Hi maloy'
//                 });
//             }, 3000);
//         })
//     },
//
// }
// console.log(axios.get())
// axios.get()
//     .then(res => res.message)
//     .then(message => console.log(message))
//     .catch((res) => {
//         console.error(res)
//     });

//THEN AXIOS =====================================================================
// axios.get('it-kamasutra')
//     .then(res => {
//         console.log(res.data)
//         return axios.get('google');
//     })
//     .then(res => {
//         console.log(res.data);
//         return axios.get('microsoft')
//     })
//     .then(res => console.log(res.data));

//ASYNC AWAIT ===========================================================
// const makeRequests = async () => {
//     let kamasutra = await axios.get('it-kamasutra');
//     console.log(kamasutra.data);
//
//     let google = await axios.get('google');
//     console.log(google.data);
//
//     let microsoft = await axios.get('microsoft');
//     console.log(microsoft.data);
//
//     //МОжно использовать одну и ту же переменную, что бы перезатирать, если данные не нужны
// }
// makeRequests();
// ---------------------------------------------------
// const requestOnMoment = async () => {
//     // const p1 = axios.get('it-kamasutra');
//     // const p2 = axios.get('google');
//     // const p3 = axios.get('microsoft');
//     const promise = [
//         axios.get('it-kamasutra'),
//         axios.get('google'),
//         axios.get('microsoft'),
//     ]
//
//     const arr = await Promise.all(promise);
//     console.log(arr.map(e => e.data))
//     // Promise.all([p1, p2, p3]).then(res=>console.log(res.map(e=>e.data)));
// }
// requestOnMoment();
// --------------------------------------------------
// // внутрь Promise передаем колбэк-функцию, которая собственно и есть та логика, которую промис обещает выполнить.
// let myPromise = new Promise((res) => {
//     setTimeout(()=>{
//         res(Math.floor( Math.random() * (10 - 1 + 1) + 1));
//         console.log('Hello');
//     }, 2000)
//     console.log(1)
//     console.log(2)
//     console.log(3)
// });
// // ниже по коду мы можем подписаться, на промис, чтобы он(промис) вызвал нашу функцию, когда он(промис) зарезолвится.
// // Для этого передаём в метод then колбэк-функцию)
// myPromise.then((num) => {
//     console.log(`myPromise зарезолвился, и я узнал об этом: ${num}`);
// })
// myPromise.then((num) => {
//     console.log(`myPromise зарезолвился, и я узнал об этом: ${num}`);
// })
// ---------------------------------------------------------------------
// const doAfter = (num) => {
//
//     return new Promise((res) => {
//         setTimeout(() => {
//             res();
//         }, num * 1000);
//     });
// }
//
// doAfter(3).then(() => console.log('я сработал через 3 секунд'));
// doAfter(5).then(() => console.log('а я сработал через 5 секунд'));
// doAfter(10).then(() => console.log('я сработал через 10 секунд'));
//acync await ==============================================================
// const doAfter = (num) => {
//     return  new Promise((res) => {
//         setTimeout(() => {
//             res();
//         }, num * 1000);
//     });
// }
// const asyncFn = async ()=>{
//     await doAfter(3)
//     console.log(`а я сработал через 3 секунд`);
//     await doAfter(5)
//     console.log(`а я сработал через 5 секунд`);
//     await doAfter(10)
//     console.log(`а я сработал через 10 секунд`);
// }
// asyncFn();
// let promise3 = doAfter(3);
// promise3.then( () => console.log('я сработал через 3 секунд') );
// promise3.then( () => console.log('и я тоже следом сработал через 3 секунд') );
// promise3.then( () => console.log('и я') );
// --------------------------------------------------
// let pr = new Promise((resolve) => {
//     let data = {
//         cities: [{title: "Minsk"}, {title: "Kiev"}],
//         website: "it-kamasutra.com"
//     };
//     resolve(data);
// });
// pr
//     .then(data => {
//         console.log(data);
//         return data.website
//     })
//     .then(website => {
//         console.log(website);
//     })
// -------------------------------------------------
// 16) Создайте новый файл и подключите в него этот фейковый axios.js, который умеет делать get-запросы и post-запросы, и api.js
// api.sendStudentsCountToItKamasutra(20)
//     .then(res => {
//         console.log(res);
//         return res.data
//     })
//     .then(data=>{
//         console.log(data);
//     })

// 19) А это пример из жизни:
// Нужно в камасутру отправить суммарное кол-во вакансий значение, которое получится в ответах от компании microsoft и google

// let prMic = api.getVacanciesCountFromMicrosoft()
//     .then(res => {
//         console.log(`mic ${res.data.vacancies}`);
//         return res.data.vacancies
//     });
//
// let prGoogle = api.getVacanciesCountFromGoogle()
//     .then(vacancies => {
//         console.log(`google ${vacancies}`);
//         return vacancies
//     });
//
// let resultAllPr = Promise.all([prMic, prGoogle]);
// resultAllPr.then((res) => {
//     let mic = res[0]/*.data.vacancies*/;
//     let google = res[1];
//
//     api.sendStudentsCountToItKamasutra(mic + google)
//         .then(res => {
//             console.log(res);
//         });
//
// }).catch(err => alert(`${err} sorry`))
//refactor =======================================================
// let resultAllPr = Promise.all([prMic, prGoogle]);
// resultAllPr
//     .then((res) => {
//         let mic = res[0]/*.data.vacancies*/;
//         let google = res[1];
//
//         return api.sendStudentsCountToItKamasutra(mic + google)
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => alert(`${err} sorry`))

//refactor =======================================================
//Последовательные запросы теперь ============== мой
// api.getVacanciesCountFromMicrosoft()
//     .then(res => {
//         console.log(`mic ${res.data.vacancies}`);
//         let prMic = res.data.vacancies;
//         let google = api.getVacanciesCountFromGoogle()
//         return Promise.all([prMic, google]);
//     })
//     .then(vacancies => {
//         let mic = vacancies[0];
//         let google = vacancies[1];
//         return api.sendStudentsCountToItKamasutra(mic + google);
//     })
//     .then(res => {
//         console.log(res);
//     })
//Refactor моего c использованием замыкания
//versia promise =============
// let mcVulcanises;
// const runPromisVersion = () => {
//     api.getVacanciesCountFromMicrosoft()
//         .then(msCount => {
//             console.log(`mic ${msCount.data.vacancies}`);
//             mcVulcanises = msCount.data.vacancies;
//             return api.getVacanciesCountFromGoogle();
//         })
//         .then(googleCount => {
//             console.log(`google ${googleCount}`);
//             return api.sendStudentsCountToItKamasutra(mcVulcanises + googleCount);
//         })
//         .then(res => {
//             console.log('it-kamasutra:', res.data);
//         })
//
// }
// runPromisVersion();
//refact async =====================================
// const run = async () => {
//     try {
//         let mVc = await api.getVacanciesCountFromMicrosoft();
//         console.log(`mic ${mVc.data.vacancies}`);
//
//         let gVc = await api.getVacanciesCountFromGoogle();
//         console.log(`google ${gVc}`);
//
//         let itKamasutra = await api.sendStudentsCountToItKamasutra(mVc.data.vacancies + gVc)
//         console.log('it-kamasutra:', itKamasutra.data);
//
//     } catch (err) {
//         alert(`${err} te pistec`)
//     }
// }
// run();
//Если нужно все же использовать Promise.all
// const runAll = async () => {
//     // let mVcPromise = api.getVacanciesCountFromMicrosoft()
//     //     .then(mVcPromise => {
//     //         console.log(`mic ${mVcPromise.data.vacancies}`);
//     //         return mVcPromise.data.vacancies
//     //     });
//
//     // let gVcPromise = api.getVacanciesCountFromGoogle();
//     //     .then(vacansies => {
//     //         console.log(`google ${vacansies}`);
//     //         return vacansies
//     //     });
//
//     // let msGooleResault = await Promise.all([mVcPromise, gVcPromise])//МОжно без переменных, сразу сюда кидать вызовы
//     let msGooleResault = await Promise.all([
//         api.getVacanciesCountFromMicrosoft()
//             .then(res => res.data.vacancies),
//         api.getVacanciesCountFromGoogle()
//     ])//МОжно без переменных, сразу сюда кидать вызовы
//
//     let itKamasutra = await api.sendStudentsCountToItKamasutra(msGooleResault[0] + msGooleResault[1])
//     console.log('it-kamasutra:', itKamasutra.data);
// }
// runAll();



