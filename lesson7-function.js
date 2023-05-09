//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель,
// а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
// function repeatString(str,num, space){
//     let s = str + ' ';
//     let st = s.repeat(num).split(' ');
//     st.length = num;
//     return st.join(space);
//
// }
// let a = repeatString('you', 3, ': ')
// console.log(a)
// function repeatString(str, num, space) {
//     let newStr = '';
//     for (let i = 0; i < num; i++) {
//             newStr += str + space;
//     }
//     return newStr.slice(0,-2);
// }
//
// let a = repeatString('you', 4, ': ')
// console.log(a)
// function repeatString(str, num, space) {
//     let newStr = '';
//     for (let i = 0; i < num; i++) {
//             newStr += str + ' ';
//     }
//     return newStr.split(' ', num).join(space);
// }
//
// let a = repeatString('you', 3, ', ')
// console.log(a)
//=================================================================================================================

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с
// указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
// const checkStart=(str, st) => {
//     if (str[0].toUpperCase() === st[0].toUpperCase())
//     {
//         return true
//     } else {
//         return false
//     }
// }
// let a = checkStart("Incubator", 'Inc');
// console.log(a)
//
// const checkStart=(str, st) => {
//     return str.indexOf(str.charAt(0).toUpperCase());
// }
// let a = checkStart("Incubator", 'Inc');
// console.log(a)
//
// const checkStart=(str, st) => {
//     return str.startsWith(st.slice(0,1).toUpperCase());
// }
// let a = checkStart("Incubator", 'inc');
// console.log(a)
//
// const checkStart=(str, st) => {
//     return str.startsWith(st.charAt(0).toUpperCase());
// }
// let a = checkStart("Incubator", 'inc');
// console.log(a)
//
// str.startWith() slice indexOF
//===================================================================================================

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её
// многоточием.
// function truncateString(str, num) {
//     let result = '';
//     for (let i = 0; i < str.length; i++){
//         let strUs = str.length = i
//         if(strUs < num){
//             result += str[i];
//         } else {
//             break;
//         }
//     }
//     return result + '...';
// }
//
// let a = truncateString("Всем студентам инкубатора желаю удачи!", 10);
// console.log(a)
//
// function truncateString(str, num) {
//     let st = str.split('')
//     st.length = num;
//     return st.join('') + '...';
// }
//
// let a = truncateString("Всем студентам инкубатора желаю удачи!", 10);
// console.log(a)
//
// function truncateString(str,num){
//     return str.slice(0, num) + '...';
// }
// let a = truncateString("Всем студентам инкубатора желаю удачи!", 10);
// console.log(a)
//
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
//=========================================================================================================

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово
// в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
// function getMinLengthWord(str) {
    // let strSplit = str.split(' ');
    // let strMax = Number(strSplit.map(e=>(e.length)).sort((a,b)=>a - b).slice(0,1).join(''));
    // return strSplit.filter(e=>e.length === strMax ? strMax : null).join('')
//
//     let strSplit = str.split(' ');
//     let strMax = 0;
//     for (let i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > strMax) {
//             strMax = strSplit[i].length;
//         }
//     }
//     return strMax;
// }
//
// let strSplit = str.split(' ');
// let strMin = strSplit.filter(e=>e === strSplit[0]).join('');
// for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length < strMin.length) {
//         strMin = strSplit[i];
//     }
// }
// return strMin || null;
// }
//
//     let strNum = str.split(' ').map(e => {
//         return (
//             e.length
//         )
//     })
//     let strResult = Number(strNum.sort((a, b) => a - b).slice(0, 1).join(''));
//     return str.split(' ').filter(e => {
//         if (e.length === strResult) {
//             return strResult;
//         }
//     });
// }
// let a = getMinLengthWord('Всем студентам инкубатора желаю удачи!');
// console.log(a);
//============================================================================================

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
// function setUpperCase(str){
    // return str.toLowerCase().split( ' ').map(e=>e.charAt(0).toUpperCase() + e.slice(1));
//
//     let strSplit = str.split(' ');
//     let charStr = '';
//     for (let i = 0; i < strSplit.length; i++){
//         if (strSplit[i]){
//             charStr += ' ' + strSplit[i].charAt(0).toUpperCase() + strSplit[i].toLowerCase().slice(1);
//         }
//     }
//     return charStr;
// }
//
// let a = setUpperCase("всем стУдентам инкуБатора Желаю удачИ!");
// console.log(a);
//=========================================================================================================
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true
