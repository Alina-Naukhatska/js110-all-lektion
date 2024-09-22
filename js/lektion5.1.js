//! --------------    CALLBACK функции  ----------------

// //!_____________1 аргумент/параметр -->  функция 

// function fnA() {
//   console.log("Hello!");
// }

// function fnB() {
//   console.log("Hi");
// }

// function foo(callback) {
//   // console.log(callback);
//   callback();
// }

// //     в функции foo ---> callback (аргумент/параметр) функция
// // foo(fnA)  --->  запустит параметр/callback(fnA) --->  console.log("Hello!");
// // foo(fnB)  --->  запустит параметр/callback(fnB) --->  console.log("Hi");

// foo(fnA);
// foo(fnB);


// //!______аргумент/параметр -->  функция и зминна

// function fnA(itytname) {
//   // console.log(itytname);
//   console.log(`Hello ${itytname}!`);
// }

// function fnB() {
//   console.log("Hi");
// }

// function foo(callback, name) {
//   // console.log(name);
//   callback(name);
// }

// foo(fnA, "Petya");

// //!______функция callback создается прямо в "родительской" функции
// function calc(a, b, callback) {
//   // callback ---> функция, которая принимает 2 параметра и возвращает сумму
//   // мы задаем эти 2 параметра как первые 2 параметра из родительской функции
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, function(x, y) {
//   return x + y;
// });
// ! Это же с помощью стрелочной функции
  // const result = (a, b, callback) => {
  //   const calc = callback(a, b);
  //   console.log(calc);
  // }
  
  // result(2, 3, (x, y) => (x + y));


//! Задача
// Напишите функцию each(array, callback), яка першим параметром очикуэ масив,
// а другим функцию, яка застосовуеться до кожного елемента масиву. Функция 
// each повинна повертати новий масив, елементами якого будуть результати
// виклику коллбека

// function each(array) {
//   const newArr = [];

//   for(const item of array) {
//     newArr.push(item * 2);
//   }
//   return newArr;
// }

// function each1(array) {
//   const newArr = [];

//   for(const item of array) {
//     newArr.push(item - 10);
//   }
//   return newArr;
// }


// console.log(each([64, 49, 36, 25, 16]));
// console.log(each1([64, 49, 36, 25, 16]));
//! вместо этих двух функций можно записать

// function each(array, callback) {
//   const newArr = [];

//   for(const item of array) {
//     // const res = callback(item);
//     // newArr.push(res);
//     newArr.push(callback(item));
//   }
//   return newArr;
// }

// console.log(each([64, 49, 36, 25, 16], function(value){
//   return value * 2;
// }));

// console.log(each([64, 49, 36, 25, 16], function(value){
//   return value - 10;
// }));

// console.log(each([64, 49, 36, 25, 16], function(value){
//   return Math.sqrt(value);
// }));


//! СТРЕЛОЧНЫЕ ФУНКЦИИ

// const addArrow = (a, b, c) => {
//   return a + b + c;
// }

// console.log(addArrow(1, 2, 3));

// rest и стрелка  => сделает массив из параметров
// const addArrow = (...args) => {
//   return args;
// }

// console.log(addArrow(1, 2, 3));

// ! Метод forEach для масивов (метод как цикл) (используют со стрелочными функциями)
// const numbers = [5, 10, 15, 20, 25];

// какие параметри принимает (эл-т массива, индекс, сам массив
// numbers.forEach((number, i, arr) => {
//   console.log("number, i, arr:", number, i, arr);
// });

// посчитать сумму чисел в массиве
// let total = 0;
// numbers.forEach(number => total += number);
// console.log(total);


//! Задача с пронумероваными фруктами
// Выполните рефакторинг кода за допомогою метода forEach

// function logItems(items) {
//     console.log(items);
//     for (let i = 0; i < items.length; i += 1) {
//       console.log(`${i + 1} - ${items[i]}`);
//     }
//   }

// const logItems = (array) => {
//   array.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   })
// }



// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// ! ЗАДАЧА с телефонами
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function printContactsInfo({ names, phones }) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// const printContactsInfo = (obj) => {
//   //! --- split() используется для разделения строки на массив подстрок по указанному разделителю 
//   const namesArr = obj.names.split(",");
//   const phonesArr = obj.phones.split(",");


// //! --- forEach() перебирает элементы массива и вызывает переданную функцию один раз для каждого элемента
// namesArr.forEach((item, i) => {
//   console.log(`${item}: ${phonesArr[i]}`);
// })
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

const allCars = [
    { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
    { make: "Honda", model: "Accord", amount: 2, price: 22455 },
    { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
    { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
    { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
    { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
    { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
    { make: "Ford", model: "F-150", amount: 11, price: 27110 },
    { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
    { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
];

// // создать массив только моделей автомобилей
// const getModels = (cars) => cars.map (car => car.model);

// console.log(getModels(allCars));

// применить скидку в прайсе к каждой машине

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

// const makeCarsDiscount = (cars, discount) => {
//   return cars.map(car => ({...car, price: car.price * (1 - discount)}));
// }
// console.table(makeCarsDiscount(allCars, 0.2));



// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
  
// /*
// * Збільшуємо кількість годин гравця за id
// */
// const playerIdToUpdate = "player-3";

// const newArr = players.map(player => {
//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100
//     }
//   }
//   return player;
// })

// console.table(newArr);


//! РАЗНИЦА МЕЖДУ МЕТОДОМ map() и Flatmap()
// const tweets = [ 
//   {id: "000", likes: 5, tags: ["js", "nodejs"]},
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.map(tweet => tweet.tags);
// const tags1 = tweets.flatMap(tweet => tweet.tags);

// console.log("метод map", tags);
// console.log("метод flatMap", tags1);

// function foo(a,b) {
//   const lalala = Math.random();
//   return (a +b) * lalala;
// }


// console.log(foo(5, 10));
