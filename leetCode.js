// var romanToInt = function (s) {
//     let arguments = s.toUpperCase();
//     let result = 0;
//
//     const symbol = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//
//     for (let i = 0; i < arguments.length; i++) {
//         const stop = symbol[arguments[i]];
//         const next = symbol[arguments[i + 1]];
//
//         if (stop < next) {
//             result += next - stop
//             i++
//         } else {
//             result += stop
//         }
//     }
//
//     return result;
// };