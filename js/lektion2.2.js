//* Методы (встроеная функция)
//* Slice 
const user = "Alice Franko";

const str = user.slice(3,5);

const userLower = user.toLowerCase();

// console.log(user, str, userLower);

// let link = "https://my-site.com/about";

// if (!link.endsWith("/")) {
//     link += "/";
// }

// console.log(link);

// let link = "https://my-site.com/about";
// let tytyty;
// // Если сайт НЕ заканчивается на слэш и СОДЕРЖИТ конструкцию my-site
// if (!link.endsWith("/") && link.includes("my-site")) {
//     tytyty = link.replace("https", "/");
//     console.log(tytyty);
// }

// console.log(tytyty);

//!--------------------ЦИКЛЫ------------------------------------

//!ЦИКЛ for 
// циклом for для змшнной i (интератора)
// начиная от 0 (=0) до 10 (<10) на каждом шаге додавляем 1 (+1)
// console.log("before");
// for (let i=0; i < 10; i+=1) {

//     console.log(typeof i);
// }

// console.log("after");


//! зависнет бразер, если цикл бесконечный
// (10 > 0, i = 10)
// (11 > 0, i = 12) и т.д. до бесконечности...
// for (let i = 10; i >= 0; i+=1) {

// console.log(i);
// }

//* Вывести каждую букву по одной в консоль!!!
// const lalala = "world";

// for(let i = 0; i < lalala.length; i+=1) {
    
//     //если надо прервать на 3м символе
//     if (i === 3) {
//         break;
//     }
//     console.log(lalala[i]);
// }
//* Инкремент та декремент (префиксный та постфиксный)
// let a = 10;
// const b = --a;

// console.log("a", a);
// console.log("b",b);

//! ЦИКЛ while

// let counter = 0;
// while(counter < 5) {
//     console.log(counter);
//     counter +=1;
// }

//!ЦИКЛ do while (навить якщо умова хибна он отработает 1 раз)
// let counter = 20;
// do {
//     console.log(counter);
//     counter++;
// }
// while(counter <10);

//*Задача: Напишить цикл for, який виводить в консоль браузера числа за зростанням от а до b
//* Але тильки якщо число кратне 5

// const a = 20;
// const b = 100;

// for(let i = a; i <= b; i++) {

//     //если остаток от деления на 5 = 0, т.е если ! (НЕ) 0(false)
//     if(!(i % 5)) {
//         console.log(i);
//     }
// }

//2ой вариант записиconst a = 20;
// const a = 20;
// const b = 100;

// for(let i = a; i <= b; i++) {
// //если отаток от деления i на 5 true (сурово равен нолю)
//     if(i % 5 === 0) {
//         console.log(i);
//     }
// }

//*Задача: Напиши скрипт, который подсчитывает сумму всех ПАРНЫХ чисел, 
//*которые входят в диапазон чисел от min до max

// const min = 0;
// const max = 5;

// let total = 0;

// for(let i = min; i <= max; i++) {
//     if(i % 2 === 0) {
//         total += i;
//     }

// }
// console.log(total);

//НЕ ПАРНЫЕ откинуть (мозголомка)
// const min = 0;
// const max = 5;

// let total = 0;

// for(let i = min; i <= max; i++) {
//     if(i % 2 !== 0) {
//         console.log(i);
//         continue;
       
//     }
//     //  total += i;
//     // console.log("after", i);
    
// }
// console.log(total);


//*Задача: Перевырити чи рядок меньше або доривнюэ длине maxLength (максимальное значение)
// Если меньше или равен -> возвращает весь рядок
// Если больше -> обрезает и добавляет ...

function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
        
    } else {
        return message.slice(0, maxLength) + "...";
        
    }
}

console.log(formatMessage("Lorem ipsum dolor sit amet", 15));
