// const courses = ["HTML", "CSS", "JS", "React", 1, 2, true];
// // console.table(courses);
// console.log(courses);

// courses[2] = "lala";
// console.log(courses);

// //! метод join
// const courses = ["HTML", "CSS", "JS", "React"];

// const str = courses.join(" ");
// console.log(str);

// //! метод split
// const arr = str.split(" ");
// console.log(arr);

//! метод slice
// const courses = ["HTML", "CSS", "JS", "React"];
// const arr = courses.slice(0, 3);
// console.log(arr);

//! метод concat
// const arr = [1, 2, 3];
// const newArr = courses.concat(arr);
// console.log(newArr);

//! метод indexOf
// const index = courses.indexOf("JS");
// console.log(index);

//! метод push/pop
// courses.push("lalala");
// console.log(courses);
// const a = courses.pop("");
// console.log(courses);
// console.log("a =", a);

//!Итерация массива
//! ЦИКЛ for

// const friends = ["Mark", "Vova", "Oleg", "Maks"];
// const arr =[];

// for(let i = 0; i < friends.length; i++) {
//     // friends[i] = `{friends[i]}!`;
//     arr.push(`${friends[i]}-${i}`);
//     console.log(i);
// }

// console.log(arr);


//Пример с пустым масивом, хардкодим точное колличество сколько раз он будет проходить раз помасиву
// const tags = [];

// for(let i = 0; i < 3; i += 1) {
//     // tags.push(`tag-${i}`);
//     console.log(`lalala-${i}`);
//     console.log(i);
// }
// // console.log(tags);

//! ЦИКЛ for... of

// for(const name of friends) {
//     console.log(name);
// }



/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// ПЛОЩА а * b

// const values = "5 10";
// const arr = values.split(" ");
// console.log(arr);
// const resultArea = Number(arr[0]) * Number(arr[1]);
// console.log(resultArea);


// // периметр (а + b) * 2
// const resultPerimeter = (Number(arr[0]) + Number(arr[1])) * 2;
// console.log(resultPerimeter);


/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];


// for(let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1} : ${fruits[i]}`);
// }

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for(const num of numbers) {
//     // console.log(num);

//     if(num % 2 === 0) {
//         total += num;
//     }
// }
// console.log(total);

//отсеивание через continue
// if(num % 2) {
//     console.log("if", num);
//     continue;
// }
// console.log("else", num);
// }

//вывести в новый массив все парные
// const arr = [];
// for(const num of numbers) {
//     if(num % 2) {
//         continue;
//     }
//     arr.push(num);
// }
// console.log(arr);


/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38001112233,380055566377,380055566300";

// const namesArr = names.split(",");
// // console.log(namesArr);

// const phonesArr = phones.split(",");
// // console.log(phonesArr);

// for(let i = 0; i < phones.length; i++) {
// console.log(`${namesArr[i]} : ${phonesArr[i]}`);
// }

// for(let i = 0; i < 3; i+=1) {
//     console.log(i)
// }