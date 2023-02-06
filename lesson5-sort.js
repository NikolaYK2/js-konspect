//=========МЕТОД sort===================================================
// const names = ["Bob", "Donald", "Alex", "alex", "007", "Юрий",]//Сортировка по таблице символов юникода
// console.log(names.sort())
// console.log(names.sort((a,b) => a.localeCompare(b)))//Сортировка регистронезависимым способом
// console.log(names.sort(
//     (a, b) => a.toUpperCase() > b.toUpperCase() ? 1 : -1))//тоже как и верхняя функция по имени

// const numbers = [100, 9, 66, 1000, 1,]
// // // const compareFn = (a, b) => {//сортировка по возрастанию
// //     if(a>b){
// //         return 1//если хотим переставить, любе положительное число сигнал - это да
// //     }else {
// //         return -1//любое отрицательное - это нет, если не хотим переставлять
// //     }
// // }
// const compareFn = (a, b) => a - b;//Сокращение верхней функции
// console.log(numbers.sort(compareFn))
// //ПО убыванию можно исп. метод reverse()
// console.log(numbers.sort(compareFn).reverse())
//========================================================
//=========МЕТОД sort===================================================
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

const compareFn = (a, b) => a.scores - b.scores;//Сокращение верхней функции

// console.log(students.sort(compareFn))
// console.log(students.sort((a,b)=>a.name.localeCompare(b.name)))//Сортировка по имени регистронезависимым способом
// console.log(students.sort(
//     (a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))//тоже как и верхняя функция по имени
//===============================================================================
//========Cортировка пузырьком / bubble sort=======================================================================
const nums = [54, 11, 36, 32, 67, 89, 25]

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true; /*- отсортирован ли массив*/
    for (let i = 0; i < nums.length - 1 - j; i++) {//по возрастанию / -1 что бы не вывалиться за пределы массива /- j = 0 бежим до конца, когда 1 то -1(типо уже незачем сравнивать с последним отсортированным числом)
        if (nums[i] > nums[i + 1]) { /*массив не отсортирован, продолжать цикл*/
            isSorted = false;//что бы работало сокращение нужно ";", короче лучше везде ставить
                // const temp = nums[i];//54 -раз сюда попали значит меняем местами / метод 3-ох стаканов
                // nums[i] = nums[i + 1];//11
                // nums[i + 1] = temp;//54
                //cокращение но быстрее выше
                [nums[i + 1], nums[i]]/*- это не массив*/ = [nums[i], nums[i + 1]];//как use State ти по
        }
    }
    if (isSorted) break;
}
//On2
console.log(nums)

//Сортировка выбором=================================================================
// // Вспомогательные методы для перемены местами и сравнения
// // Мы часто будем менять местами элементы в массивах, поэтому давайте начнем с написания вспомогательного метода swap:
//     function swap(arr, a, b) {
//         let temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
//     }
// //
// // Также мы часто будем сравнивать элементы, поэтому, как мне кажется, будет не лишним написать отдельную функцию для этого:
//     const Compare = {
//         LESS_THAN: -1,
//         BIGGER_THAN: 1
//     };
// function defaultCompare(a, b) {
//     if (a === b) {
//         return 0;
//     }
//     return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }
// //
// function selectionSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     let minIndex;
//     for (let i = 0; i < length - 1; i++) {
//         minIndex = i;
//         for (let j = i; j < length; j++) {
//             if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
//                 minIndex = j;
//             }
//         }
//         if (i !== minIndex) {
//             swap(arr, i, minIndex);
//         }
//     }
//     return arr;
// }

//Сортировка слиянием================================
// Алгоритм сортировки слиянием это один из алгоритмов «разделяй и властвуй»).
// Другими словами, он делит исходный массив на более мелкие массивы,
// пока каждый маленький массив не будет содержать всего одну позицию,
// а затем сливает маленькие массивы в более крупный и отсортированный.
// Здесь реализация рекурсивная. Она состоит из двух функций: одна для деления массивов на более мелкие,
// а другая — для осуществления сортировки.===
// function mergeSort(arr, compare = defaultCompare) {
//     if (arr.length > 1) {
//         const { length } = arr;
//         const middle = Math.floor(length / 2);
//         const left = mergeSort(arr.slice(0, middle), compare);
//         const right = mergeSort(arr.slice(middle, length), compare);
//         arr = merge(left, right, compare);
//     }
//     return arr;
// }
// //
// function merge(left, right, compare) {
//     let i = 0;
//     let j = 0;
//     const result = [];
//     while (i < left.length && j < right.length) {
//         result.push(compare(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
//     }
//     return result.concat(i < left.length ? left.slice(i) : right.slice(j));
// }

//бЫСТРАЯ СОРТИРОВКА
// function quickSort(arr, compare = defaultCompare) {
//     return quick(arr, 0, arr.length - 1, compare);
// }
// //
// function quick(arr, left, right, compare) {
//     let i;
//     if (arr.length > 1) {
//         i = partition(arr, left, right, compare);
//         if (left < i - 1) {
//             quick(arr, left, i - 1, compare);
//         }
//         if (i < right) {
//             quick(arr, i, right, compare);
//         }
//     }
//     return arr;
// }
// //
// function partition(arr, left, right, compare) {
//     const pivot = arr[Math.floor((right, left) / 2)];
//     let i = left;
//     let j = right;
//
//     while (i <= j) {
//         while (compare(arr[i], pivot) === Compare.LESS_THAN) {
//             i++;
//         }
//         while (compare(arr[j], pivot) === Compare.BIGGER_THAN) {
//             j--;
//         }
//         if (i <= j) {
//             swap(arr, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }
//короткая запись
// function QuickSort(A)
// {
//     if (A.length == 0) return [];
//     var a = [], b = [], p = A[0];
//     for (var i = 1; i < A.length; i++)
//     { if (A[ i ] < p) a[a.length] = A[ i ];
//     else b[b.length] = A[ i ];
//     }
//     return QuickSort(a).concat( p,QuickSort(b) );
}