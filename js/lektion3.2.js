//! Псевдомасив arguments(потрибен для отримання аргументив, яки ми передаэмо писля виклику функции) и... 
//!Array.from (перетворюэ псевдомасив на масив)
// function foo(){
// // console.log(arguments);
// const args = Array.from(arguments);
// console.log(args);
// console.log(Array.isArray(args));
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4);
// foo(1, 2, 3, 4, 5);


 /**
   * Напиши функцію add для складання довільної
   * кількості аргументів (чисел)
   */

// const add = function () {
//     const args = Array.from(arguments);
//     // console.log(args);
//     let total = 0;
// for(const item of args) {
//     total +=item;
// }
// return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));


/**
   * Напиши функцію calAverage() яка приймає довільну кількість
   * аргументів і повертає їхнє середнє значення. Усі аргументи
   * будуть лише числами.
   */

// function calAverage() {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total/ arguments.length;
// }

// console.log(calAverage(1, 2, 3));
// console.log(calAverage(12, 21, 32, 45, 81, 73));


//!стэк викликив, порядок виконання

// function fnA() {
//     console.log("fnA");
// }

// function fnB() {
//     console.log("fnB");
// }

// function fnC() {
//     console.log("fnC");
// }


// console.log("before fnA");
// fnA();
// console.log("after fnA");

// console.log("before fnB");
// fnB();
// console.log("after fnB");

// console.log("before fnC");
// fnC();
// console.log("after fnC");


// function bar() {
//     console.log("bar");
// }

// function baz() {
//     console.log("baz");
// }

// function foo() {
//     console.log("foo");
//     bar();
//     baz();
// }

// foo(); //результат foo bar baz

// function bar() {
//     baz();
//     console.log("bar");
// }

// function baz() {
//     console.log("baz");
// }

// function foo() {
//     console.log("foo");
//     bar();
//     console.log("after");

// }

// foo();

 // -------------------------------- 4
  
  /**
   * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
   * який для кожного елемента масиву буде виводити в консоль повідомлення у
   * форматі <номер елемента> - <значення елемента>. Нумерація елементів
   * повинна починатися з 1.
   *
   * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
   * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
   */

//   function logItems(items) {
//     for(let i = 0; i < items.length; i++) {
//       console.log(`${i + 1} - ${items[i]}`);
//      }
//   }

//   console.log(logItems(["Mango", "Poly", "Ajax"]));
//   console.log(logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]));


/**
   * Напиши функцію printInfo(names, phones) яка виводить
   * у консоль ім'я та телефонний номер користувача. У параметри
   * names та phones будуть передані рядки імен та телефонних номерів,
   * розділені комами. Порядковий номер імен та телефонів у рядках
   * вказують на відповідність. Кількість імен та телефонів
   * гарантовано однакова.
   */

// function printInfo(names, phones) {
//    const namesArr = names.split(",");
//    const phonesArr = phones.split(",");

//    for(let i = 0; i < names.length; i++) {
//     console.log(namesArr[i], phonesArr[i]);
//    }
// }


//     printInfo(
//         "Jacob,William,Solomon,Artemis",
//         "89001234567,89001112233,890055566377,890055566300"
//       );

//       printInfo(
//         "Petya,Roma,Yura,Maks",
//         "89001234567,89001112233,890055566377,890055566300"
//       );


    /**
   * Напиши функцію formatTime(minutes) яка переведе значення
   * minutes (кількість хвилин) у рядок у форматі годин
   * та хвилин HH:MM.
   */
  
  
//   function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     // console.log(hours);
//     // console.log(minutes);

//     const doubleDigitHours = String(hours).padStart(2, 0);
//     const doubleDigitMinutes = String(minutes).padStart(2, 0);
//     return `${doubleDigitHours}:${doubleDigitMinutes}`
//   }

//   console.log(formatTime(70));
//   console.log(formatTime(450));
//   console.log(formatTime(1441));



 // Створити функцію яка буде розбивати початковий масив 
  // на потрібну кількість елементів розділюячи на декілька 
  // масивів.Функція приймає 2 параметри
  // 1 - масив значень
  // 2 - потрібну кількість елементіа в масиві
  //  Функція повертає масив масивів


//   const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
//   function getCombination(arr, count) {
//      const res = [];
//      for(let i = 0; i < arr.length; i+= count) {

//      const a = arr.slice(i, i + count);
//      res.push(a);
//   }
//      return res;
//   }

//   console.log(getCombination(data, 3));
  

// function foo(min, max) {
//     let arr = [];
//     for(let i = min; i <= max; i += 2) {
//         return arr.push(i);
//         console.log(arr);
        
//     }
// }

// console.log(foo(2, 10));