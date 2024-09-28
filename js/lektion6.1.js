// Контекст виконання функции, контекст методу объекта

// const user = {
//     userName: "Alice",
//     showThis() {
//         console.log(this);
//     }
// }

// user.showThis();

// Якщо стрилочна пуста функция завжди контекстом функции буде Window (окно браузера)
// const foo = () => {
//     console.log(this);
// }

// foo();

// приклад

// const user = {
//     userName: "Alice",
//     showThis() {
//         console.log("showThis", this); // showThis {userName: 'Alice', showThis: ƒ}

//         const foo = () => {
//             console.log("foo", this); // foo {userName: 'Alice', showThis: ƒ}
//         }
//         foo()
//     }
// }

// user.showThis();

// ! Контекст методу объекта, але оголошена як зовнивня функция
// function showName() {
//     // console.log(this);
//     console.log(this.userName);   
// }

// const user = {
//     userName: "Kate"
// }

// user.showUserName = showName; 
// // console.log(user.showUser.Name);
// user.showUserName(); // Kate

// // Потому что контекст функции буде объект что визвал этц функцию

// // 1) user.showUserName(); ---> запускает: function showName() {  
// // потому что user.showUserName = showName; 

// // 2) функция function showName() {   ---> запускает
// //              а) console.log(this); // {userName: 'Kate', showUserName: ƒ}
// //              б) console.log(this.userName);  ---->  userName: "Kate"   // Kate

// ! Виклик без контексту, але оголошена як метод объекта

// const user = {
//     userName: "Alice",
//     showName() {
//         console.log("showName", this);
//         console.log("userName", this.userName);     
//     }
// }

// user.showName();

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */


// const chopShop = {
//     stones: [
//       { name: "Emerald", price: 1300, quantity: 4 },
//       { name: "Diamond", price: 2700, quantity: 3 },
//       { name: "Sapphire", price: 1400, quantity: 7 },
//       { name: "Ruby", price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find(item => item.name === stoneName);
//         if(!stone) {
//             return`${stoneName} not found`;
//         }
//         return stone.price * stone.quantity;
//     }
// }

// // Метод объекта тобто функция всередини нього

// console.log(chopShop.calcTotalPrice("Sapphire"));

// ! Метод call 

// function foo(a, b, arr) {
//     console.log(a, b, arr);
    
//     console.log("foo", this);
// }

// const objA = {
//     a: 5,
//     b:10
// }

// const objB = {
//     x: 15,
//     y: 100
// }
// // перший аргумент - це контекст функции
// // foo.call(objA, objB, "lalala", [1, 2]);

// ! Метод apply

// // тоже самое только надо передавать аргументы как массив

// foo.apply(objB, [100, "tototo", [10, 20]]);

//* Пример задача

// function changeColor(color) {
//     console.log(this);
//     this.color = color;
// }

// const hat = {
//     color: "black"
// }

// const sweater = {
//     color: "green"
// }

// changeColor.call(hat, "blue");

// ! Прототип (скопировать на основе обїекта)

// const animal = {
//     legs: 4,
// }

// const dog = Object.create(animal);
// dog.name = "Patron";

// // animal.legs = 5;

// // console.log("dog", dog);
// // console.log(dog.legs);  //не власна властивість
// // console.log(dog.name);  //власна властивість
// // console.log("animal", animal);


// const keys = Object.keys(dog);
// console.log(keys);



// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.

// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",

//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log(`Авто зупинилося.`);
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }


// // прискорюється
// cruiseControl.accelerate()
// cruiseControl.accelerate()
// cruiseControl.accelerate()
// cruiseControl.accelerate()

// // гальмує
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()

// console.log(cruiseControl);



// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SPEED = 60;

// const bmw ={
//     speed: 30,
//     brand: "bmw"
// }

// const audi = {
//     speed: 70,
//     brand: "audi"
// }

// function speedLimit(maxSpeed) {
//     if(this.speed <= maxSpeed) {
//     return `Автомобіль ${this.brand} рухається з безпечною швидкістю.`;
// }
//     return `Автомобіль ${this.brand} перевищює швидкість`;
// }
// // метод call
// console.log(speedLimit.call(bmw, SPEED));

// // метод bind
// const foo = speedLimit.bind(audi, SPEED);
// console.log(foo());
