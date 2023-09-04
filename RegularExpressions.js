//с помощью конструктора -------------
// function phoneRegex (num){
//     this.res = /37529[0-9]{7}/.test(num);
// }
// let number = new phoneRegex(375292738121);
// console.log(number.res)
//c  помощью литерала ----------------
// let phoneRegex = /37529\d{7}/; /*или вместео \d -[0-9] или [0123456789]*/
// console.log(phoneRegex.test('375292738211'));
// EMAIL ----------------
// let emailReg = /^[a-zA-Z0-9._-]+@[a-z]mail\.[a-z]{2,5}$/;//^-указываем что это начало строки...$-это конец
// //{1,}/+-символов должно быть 1, или более
// //\w+-Любая буква
// //Есть зарезервированные символы,  и если хотим что бы эти символы опредилялись как символы,
// // перед ними нужно поставить \, пример как с точкой \.
// console.log(emailReg.test('izmail.k2@gmail.com'))
// --------------------------------
//Написать регулярку что бы соответствовала https://tut.by ------------------
// let siteReg = /^[htps]{4,5}:\/\/[a-z]{2,}\.by$/;//https - можно еще поставить https{0,1}
// console.log(siteReg.test('https://tut.by'))
// console.log(siteReg.test('http://tut.by'))

//А что б валидировала бе https-то есть она может быть а может и нет ----------------
// let siteReg = /^([htps]{4,5}:\/\/)?[a-z]{2,}\.by$/;//https - можно еще поставить https{0,1}
// console.log(siteReg.test('https://tut.by'))
// console.log(siteReg.test('tut.by'))
// // ([htps]{4,5}:\/\/)? - берем группу символов в круглые скобки  и ставим знак вопроса
// //можно взять группу символов, для этого круглые скобки ^(abc){1,}$ --------------------------

//Как быть если дефис разрешен, но нужно его запретить в начале ------------------------------
// let siteReg = /^([htps]{4,5}:\/\/)?[a-z-]{2,}\.by$/;
// Например харткодим первый символ
// let siteReg = /^([htps]{4,5}:\/\/)?[a-z][a-z-]{2,}\.by$/;//[a-z]-харткодим первый символ[a-z-]
// console.log(siteReg.test('https://-tut.by'))
// console.log(siteReg.test('tut.by'))

//А если нужно сделать субдомен, то есть что б повторялось --------------------------------
// let siteReg = /^([htps]{4,5}:\/\/)?([a-z][a-z-]{2,}\.){1,}by$/;
// // ([a-z][a-z-]{2,}\.){1,}
// console.log(siteReg.test('https://admin.aaaa.tut.by'))
// console.log(siteReg.test('tut.by'))


