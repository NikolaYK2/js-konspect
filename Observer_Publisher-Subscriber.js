//PATTENR архитектурное готовое решение проблем/задач =================================================================
// // observable - без посредника...
// // publisher\subscriber - с посредником/publisher-имеет сови eventi/subscriber-передает слушателей подписывая на
// eventi и когда они отрабатываются, запускаются наши слушатели
//СЛУШАТЕЛИ -ЭТО функции, которые выполняют какое-то конкретное событие
// // событие всегда в прошедшем времени event = past simple
//ubscribe(function subscriber(){})-слушатель а в скобках, за чем смотреть будет
// store.subscribe(function subscriber(){});// событие state изменился(обычно передается функция rerender которая
// перерисовывает компоненту используя актуальные знаечния Stora)
// // useSelector() ---> store.subscribe
// button.addEventListener('click', function subscriber(){});//событие Произошел клик
// <button onClick={()=>{}}/>//Клик произошел(аналог addEventListener, но как бы в React миру)
// setTimeout(function subscriber(){},1000);//событие -  Прошло время
// promise.then(function subscriber(){})//событие res ПРОМИС ЗАРЕЗОЛВИЛСЯ || rej
// //На бэке -----------------------------------------------------------------------------------------------------------
// app.post('/users', function subscriber(){})//Произошел запрос на эндпоинт /users
// //subscriber === handler-обработчик событий === listener-cлушатель === observer-наблюдатель ===
// // === watcher-наблюдатель(в файловой системе)
//Создание переиспользуемый модулей - изолированная функция которая может переиспользоваться в разных местах(модуль)
//На React ------------------------------------------------
// <AppButton /*создаем слушателя->*/onClick={
//     /*передаем подписчика на событие, какую то функцию, которая будет вызвана в момент клика*/
//     ()=>{}
// }/>
//STORE ----------------------------------------------------------------------------
// const store = {
//     _subscribers: [],//подписчиков могут быть несколько, место для хранения
//     //Есть функция которая изменяет наш store/change store
//     dispatch() {//КОгда stor изменился, берем подписчиков и для каждого запускаем
//         this._subscribers.forEach(s => s()); //можно просто вызывать подписчиков, можно еще закидывать в них информацию
//     },
//     //вызывваем наших подписчиков, подписчиков могут быть несколько их нужно где-то хранить
//     subscribe(subscriber) {
//         this._subscribers.push(subscriber);//Реализовываем нашу подписку на изм. нашего стора
//     }
// }
//BUTTON ----------------------------------------------------
// const button = {
//     // _subscribers: [],
//     // _clickSubscribers: [],
//     // _focusSubscribers: [],
//     //Создаем хранилище под все нужды/ассоциативный массив
//     _subscribers: {
//         'click': [],//Свой массив подписчиков
//         'focus': [],//Свой
//     },
//     //Есть событие которое происходит в кнопке
//     click() {
//         this._subscribers['click'].forEach(s=>s());//Вызовуться все подписчики, но будет отрабатывать только конкретный
//     },
//     focus() {
//         this._subscribers['focus'].forEach(s=>s());
//     },
//     //Реализуем подписку /addEventListener - это функция которая добавляет слушателя
//     addEventListener(eventName/*-И это тоже нужно где-то хранить*/, subscriber) {
//         // this._subscribers.push(subscriber);//Сюда должны передовать не только подписчика, а еще метод на который
//         // мы подписываемся
//         this._subscribers[eventName].push(subscriber);//Для каждого подписчика свое хранилище
//         //Хранилище можно сделать в виде двух массивов
//         // _clickSubscribers: [],
//         // _focusSubscribers: [],
//         // или создать ассоциативный массив
//     },
//     //Отписка от события
//     removeEventListener(eventName,subscriber){
//         this._subscribers[eventName] = this._subscribers[eventName].filter(s=>s !== subscriber);
//     }
// }
// //Далее мы обращаемся к нашей кнопке
// button.addEventListener('click',()=>{console.log('hi')});//Передаем событие на которое
// // подписываемся 'click', и передаем функцию слушателя
// //Отписка от события ----
// button.removeEventListener('click',()=>{console.log('hi')});//но так не отпишимся, нужно для
// // начала слушателя где то сохранить
// const consoles =()=>{
//     console.log('hi')
// }
// button.addEventListener('click',consoles);
// button.removeEventListener('click',consoles);
//==============================================================================
//Event-emitter =================================================================
// const EventEmitter = require('events');
//
// //Этот обьект умеет генерировать события на него можно дописываться Observable. Как и store, button, window
// const eventEmitter = new EventEmitter();
// eventEmitter.emit('money', {balance: -10});
//
// eventEmitter.on('money',(data)=>{//Подписываемся на событие, которое называется 'money',
//     console.log(data);
// });
// eventEmitter.emit('money',{balance:-20, data: new Data()});//Генерируем(создаем/показываем) событие
//=========================================================