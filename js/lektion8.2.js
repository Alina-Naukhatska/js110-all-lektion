// const city = "Kyiv";

// const user = {
//     username: "Alice",
//     age: 25,
//     skills: {
//         css: true,
//         js: false
//     },
//     city: "Lviv"
// }

// це значить що ми зберігли 2 нові змінні username і age
// const {username, age, skills, city: userCity = "Dnipro"} = user;
// console.log(username);
// console.log(skills);
// console.log(city);
// console.log(userCity);

// деструктурізація в параметрі функції

// const user = {
//     username: "Alice",
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }

// function getInfo({username, skills: {html, css, js}}) {
//     console.log(`Hello my name is ${username}, i know html ${html}, css ${css} and js ${js}`);
    
// }

// getInfo(user);

//!Деструктурізація обьекта в циклі

const users = [{name: "Kate"}, {name: "Alice"}, {name: "Petya"}];

//!Без структурізації

// const names = []; 
// for(const user of users) {
//     names.push(user.name)
// }

// console.log(names);

//! З деструктурізацієй 1 метод

// const names = [];
// for(const user of users) {
//     const {name} = user;
//     names.push(name)
// }

// console.log(names);

//! З деструктурізацієй 2 метод

// const names = [];
// for(const {name} of users) {
// // вместо "const user" подставляем = {name}
//     // for(const user of users) {
//     // const {name} = user;
//     names.push(name)
// }

// console.log(names);

//! З деструктурізацієй 3 метод

// const names = users.map(({name}) => name);

// console.log(names);

/**
 * Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username
 */

// const user = {
//     id: 1,
//     username: "harry_potter",
//     profile: {
//       name: "Harry",
//       surname: "Potter",
//       age: 25,
//     },
//   };

  

// Деструктуризація об'єкта для отримання окремих змінних

// const { 
//   username,
//   profile: { name, surname }
//  } = user;



// // // Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);



/**
 * Допиши функцію таким чином щоб кожна властивість
 * об'єкта product була незалежним параметром
 */

// const product = {
//     name: "Smart TV",
//     price: 25000,
//     category: "Electronics",
//     details: {
//       brand: "Samsung",
//       color: "Black",
//       weight: "15.5",
//     },
//   };
    
// //  достаем ключі вместо названия обьекта 
//   function getInfo({
//     name,
//     price,
//     category,
//     details: { brand, color, weight }
//   }) {
//     console.log(`Назва товару: ${name}`);
//     console.log(`Ціна: ${price} грн`);
//     console.log(`Категорія: ${category}`);
//     console.log("Деталі:");
//     console.log(`- Бренд: ${brand}`);
//     console.log(`- Колір: ${color}`);
//     console.log(`- Вага: ${weight} кг`);
//   }
  
//   getInfo(product)
  

/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ sideC, sideA, sideD, sideB }) {
    const perimeter = sideA + sideB + sideC + sideD;
    return perimeter;
  }

const house = {
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15
}
  
  const perimeter = calculateHousePerimeter(house);
  // const perimeter = calculateHousePerimeter(10, 15, 10, 15);
// console.log(`Периметр будинку: ${perimeter}`);