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

//ЦИКЛ for 
// циклом for для змшнной i (интератора)
// начиная от 0 (=0) до 10 (<10) на каждом шаге додавляем 1 (+1)
// console.log("before");
// for (let i=0; i < 10; i+=1) {

//     console.log(typeof i);
// }

// console.log("after");


//! зависнет бразер, если цикл бесконечный
for (let i = 10; i >= 0; i+=1) {

console.log(i);
}