//! МЕТОД filter

// const numbers = [5, 10, 15, 20, 25];

// const res = numbers.filter(item => item < 15);

// console.log(res);


/**
 * ---------------------------
 */

// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];


// // /**
// //  * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
// //  * значення параметра threshold.

// const filterByPrice = (cars, threshold) => {
//     return cars.filter(car => car.price < threshold);
// }
// console.log("фильтр по цене:");
// console.table(filterByPrice(allCars, 25000));

// // /**
// //  * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігаэться
// //  * зі значенням type

// const getCarsWithType =(cars, type) => {
//     return cars.filter(car => car.type === type);
// }

// console.log("фильтр по типу:");
// console.table(getCarsWithType(allCars, "sedan"));


// ! МЕТОД find

// // const numbers = [5, 10, 15, 20, 25];

// // const number = numbers.find(item => item > 10);

// // console.log(number);

// // * Продолжение задачи с машинами
// //***/ Шукаэмо машину за моделлю
// const getByModel = (cars, model) => { 
//     return allCars.find(car => car.model === model);
// }

// console.log("поиск модели авто:");
// console.table(getByModel(allCars, "Sequoia"));


// //***/ Шукаэмо машину по типу кузова
// const getByType = (arr, type) => { 
//     return arr.find(car => car.type === type);
// }

// console.log("поиск типа кузова:");
// console.table(getByType(allCars, "sedan"));

// ! Метод every
// const isAllInSale = allCars.every(item => item.onSale);

// console.log("Все ли машины продаются? (метод every):");
// console.log(isAllInSale);

// ! Метод some

// const isAnySale = allCars.some(item => item.onSale);

// console.log("Есть ли хотябы одна машина на продажу? (иетод some)");
// console.log(isAnySale);


// const isBigPrice = allCars.some(item => item.price > 32000);

// console.log("Машина ценой болше 32000? (иетод some)");
// console.log(isBigPrice);


// ! МЕТОД reduce

// const numbers = [1, 2, 3, 4, 5];

// const obj = numbers.reduce((acc, item, i) => {
//     acc[i] = item;
//     return acc;
// }, {})

// console.log(obj);

// // Задача: порахувати загальну зарплатню
// // reduce и объект
// const obj = {
//     petya: 100,
//     katya: 70,
//     yura: 60
// }

// const total = Object.values(obj).reduce((acc,item) => acc + item, 0)

// console.log(total);


// Задача порахувати загальну вартисть всих машин
// reduce и массив объектов

// const total = allCars.reduce((acc, item) => {
//     return acc + item.price;
// }, 0)

// // можна наприклад якщо прас помножити на килькисть, т.е.
// // const total = allCars.reduce((acc, item) => {
// //     return acc + item.price * item.quantity;
// // }, 0)

// console.log(total);


// ! МЕТОД toSorted


// const numbers = [1, 9, 3, 6, 2, 12];
// console.log("исходный массив");
// console.log(numbers);

// // * так отсортирует по UNICODE
// const sorted = numbers.toSorted();
// console.log("toSorted");
// console.log(sorted);

// // * так отсортирует по UNICODE
// const arr = ["b", "B", "a", "A"];
// console.log("отсортирует по UNICODE");
// console.log(arr.toSorted());

// // * так отсортирует по алфавиту
// console.log("отсортирует по алфавиту:");
// console.log(arr.toSorted((a, b) => a.localeCompare(b)));

// // Задача отсортировать машины по возрастанию цены

// const result = allCars.toSorted((a, b) => a.price - b.price);

// console.log("отсортировать машины по возрастанию цены");
// console.table(result);

// // Ланцюжки методив 


// // так длинная запись и много переменных:
// // 1) отобрать значения больше 2
// const res = numbers.filter(num => num > 2);
// // 2) кожне значення помножити на 3
// const res1 = res.map(num => num * 3);
// // 3) отсортировать за возрастанием
// const sorted1 = res1.toSorted((a, b) => a - b);
// console.log(sorted1);

// // так тоже только за допомою ланцюжка:
// const sortedChain = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .toSorted((a, b) => a - b);

//     console.log(sortedChain);

// Задача: повернути масив (Тильки) МОДЕЛЕЙ авто, яки зараз продаються
// метод ланцюжок

// const getModelsOnSale = (allCars) => {
//     return allCars 
//     .filter(car => car.onSale)
//     .map(item => item.model)
// }

// console.log(getModelsOnSale(allCars));

// Задача масив:
// const arr = ["apple,🍎", "lemon,🍋", "banana,🍌"]
// // зробити объект: {apple: 🍎, lemon: 🍋, banana: 🍌}

// const obj = arr.reduce((acc, item) => {
//     const itemArr = item.split(",");
//     acc[itemArr[0]] = itemArr[1];
//     return acc;
// }, {})

// console.log(obj);