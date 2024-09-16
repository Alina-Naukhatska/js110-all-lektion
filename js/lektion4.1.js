//! ОБЪЭКТЫ

const playlist = {
    name: "My playlist",
    rating: 5,
    traks: ["track-1", "track-2", "track-3"],
    isFavorite: true,
};

// console.log(playlist);

//! доступ до свойств 
//! первый вариант, если известно имя ключа
// console.log(playlist.name);

//! второй вариант если имя ключа передается как зминна
// // const prop = "name";

// // console.log(playlist[prop]);

// //перевизначити свойство
// playlist.name = 'lalala';

// //додади нове значення

// playlist.location = "Dnipro";

// console.log(playlist);


// function foo() {
//     console.log("lalala");
// }

// foo.hello = "hi";

// console.dir(foo);


//! Объект копируется за посиланням

// const a = { x: 1, y: 2};
// const b = a;

// a.x = 100;

// console.log("a", a);
// console.log("b", b);


//Коротки властивости

// const username = "Alice";
// const age = 30;

// const user = {
//     username,
//     age,
// }

// console.log(user);

//зминна - имя ключа

// const inputName = "color";

// const picker = {
//     [inputName]: "#afafaf"
// }

// console.log(picker);

// function createObj(key, value) {
//     return {
//         [key]: value
//     }
// }

// console.log(createObj("name", "Kate"));
// console.log(createObj("color", "red"));


//! ПЕРЕБОР ОБЪЕКТА   (ЗАДАЧА: сумма свойства объекта)

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3
}

let total = 0;

//! 1 вар. Перебор объекта for ... in
// for(const key in feedback) {
//     total += feedback[key];
// }

// console.log(total);

//! 2 вар. Метод Object.keys, перебор масива ключей
// const keys = Object.keys(feedback);

// // console.log(keys);

// for(const key of keys) {
//     total += feedback[key];
// }

// console.log(total);

//! 3 вар. Метод Object.values, перебор масива свойств ключей

// const values = Object.values(feedback);

// for(const item of values) {
//     total += item;
// }

// console.log(total);


// -------------------------------- 5

/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
    name: "Alice",
    age: 20,
    hobby: "html",
    premium: true
};

const user1 = {
    name: "Kate",
    age: 22,
    hobby: "html",
    premium: true
};

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for(const key of keys) {
//     console.log(`${key}: ${user[key]}`);
//}
// console.log(user);

//Ця задача в вигляди функции

// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;

// const keys = Object.keys(obj);

//     for(const key of keys) {
//     console.log(`${key}: ${obj[key]}`);
//     }
// }

// foo(user);
// foo(user1);

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

const salaries = {
    Kate: 130,
    Alice: 160,
    Petya: 100
}


function summa(obj) {
    let total = 0;

const values = Object.values(obj);

for(const value of values) {
    total += value;
    }
    return total;
}

console.log(summa(salaries));
