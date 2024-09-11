//! РОЗГАЛУДЖЕННЯ (РАЗВЕТЛЕНИЕ IF ELSE)
// console.log("before");

// if (35>30) {
// console.log("видно");
// }
// console.log("after");

//! ТЕРНАРНИЙ ОПЕРАТОР
//* обычная запись
// const balance = 1000;
// let message;
// if (balance >=0) {
//     message = "Positive";
// } else {
//     message = "Negative";
// }
// console.log(message);

//* запись с помощью тернарного оператора
// const balance = 1000;
// //всегда const     условие что будет?  если тру   если фалсе
//  const message = balance >= 0 ? "Positive" : "Negative";

// console.log(message);

//* Напиши скрипт для отображения годин и хвилин у консоли браузера у формати рядка.
//* Якщо значення зминной minutes доривнюэ = 0, то выводь рядок без хвилин 14г.

// const hours = 14;
// const minutes = 26;
// let msg;

// if(minutes > 0) {
//     msg =`${hours} г. ${minutes} хв.`
// } else {
//     msg = `${hours} г.`
// }
// console.log(msg);

//*ця ж задача через тернарный оператор
// const hours = 14;
// const minutes = 26;

// const msg = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;
// console.log(msg);

/**
 * Напиши скрипт для видображення часу до дедлайну
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */
// const dedLine = 1;

// if(dedLine === 0) {
//     console.log("Today");
// } else if(dedLine === 1) {
//     console.log("Tomorrow");
// } else if(dedLine === 2) {
//     console.log("Overmorrow");
// } else {
//     console.log("Date in the future");
// }


/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const deadline = 1;

// switch(deadline) {
//     case 0:
//         console.log("Today");
//         break;
//     case 1:
//         console.log("Tomorrow");
//         break;
//     case 2:
//         console.log("Overmorrow");
//         break;
//     default:
//         console.log("Date in the future");
// }

/*
 * Напиши скрипт выбора опції доставки товару.
 * Опция зберігається у змінній option: 1 - самовывоз, 2 - курьер, 3 - пошта
 *
 * У змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Курьер доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправленна сьогодні'
 * - 'Вам передзвонить менеджер'
 */

// const option = 3;
// let message;

// switch(option) {
//     case 1:
//         message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
//         break;
//     case 2: 
//         message = "Курьер доставить замовлення завтра з 9:00 до 18:00";
//         break;
//     case 3: 
//         message = "Посилка буде відправленна сьогодні";
//         break;
//     default:
//         message = "Вам передзвонить менеджер";
// }

// console.log(message);


//! оператор && 
// если 2 true повертаэ последнее
// если видит false повертаэ перше побачене

// console.log(undefined && null);
//! оператор ||

// console.log(4 || 5);
// console.log(null || 6);
// console.log(6 || null);


/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "pro";
// let canConnect;

// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// console.log("can connect", canConnect);

// через тернарний оператор
// const sub = "pro";
// const canConnect = sub === "pro" || sub === "vip";

// console.log("can connect", canConnect);



/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */
