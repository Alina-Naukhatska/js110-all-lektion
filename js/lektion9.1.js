//! перетворення в json
// const json = JSON.stringify(true);
// console.log(typeof(json));
// console.log(json);

//! перетворення функцій
// const dog = {
//     name: "Mango",
//     age: 3,
//     isGoodBoy: true,
//     bark() {
//       console.log("Woof!");
//     },
//   };
  
//   const json = JSON.stringify(dog);
//   console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
  
//! парсинг json

// console.log(JSON.parse("5")); // 5
// console.log(JSON.parse("false")); // false
// console.log(JSON.parse("null")); // null

// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name); // "Mango"

//! Обробка помилок try...catch
// try {
//     const data = JSON.parse("Well, this is awkward");
//   } catch (error) {
//     console.log(error.name); // "SyntaxError"
//     console.log(error.message); // Unexpected token W in JSON at position 0
//   }
  
//   console.log("✅ This is fine, we handled parsing error in try...catch");
  
//!   Детальніше про помилки
// Фаза інтерпретації, або оцінки (compile time, evaluation time) — підготовка перед виконанням коду: 
// інтерпретатор знаходить синтаксичні помилки, помилки типізації тощо. Отже, код ще не виконується, лише оцінюється.

// Фаза виконання (runtime) — скрипт починає виконуватися: виконуються інструкції викликів функцій і оцінювання виразів, 
// відбувається пошук необхідних ідентифікаторів у відповідних областях видимості тощо.

// console.log('This message will not appear in the console');

// cos value = 5;

//! Local Storage 
//! збереження, чому треба використовувати метод JSON.stringify

// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, JSON.stringify(names));

//! Читання, чому треба використовувати метод JSON.parse

// const value = localStorage.getItem(LS_KEY);

// console.log(JSON.parse(value));

//! Видалення

// localStorage.removeItem(LS_KEY);

//! Задачка записать, розпарсити, изменить(відфільтрувати), записать

// localStorage.setItem(LS_KEY, JSON.stringify(names));
// const value = JSON.parse(localStorage.getItem(LS_KEY));
// const newArr = value.filter(item => item.toLowerCase() !== "kate");
// localStorage.setItem(LS_KEY, JSON.stringify(newArr));
// console.log(newArr);

//! Задача (зберігати данні в форму і не втрачати їх після 
//! перезавантаження сторінки, якщо форма не була відправлена)

// // змінна для збереження в localStorage
// const STORAGE_KEY = "feedback-msg";

// // 1) отримаемо єлементы форми 
// const form =document.querySelector(".feedback-form");
// const textarea = document.querySelector("textarea");

// // 2) повісимо слухач подій на textarea 
// // подія input викликає функцію handleInput
// textarea.addEventListener("input", handleInput);

// // 3)створюємо цю функцію, яка витягує данні які ввів користувач
// // зберігаємо в localStorage
// function handleInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
// }
// // так как ключ STORAGE_KEY один данні value кожен раз 
// // перезаписуються в localStorage при спрацюванні події input

// // 4)потрібно відображати ці данні з localStorage в input 
// // після перезавантаження

// // 4.1) створимо фунцію куди розпарсимо значення з localStorage
// // 4.2) перевіримо якщо нічого нема -> виходимо
// // 4.3) якщо є зберіжемо данні savedMessage
// function populateTextAres() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     console.log(savedMessage);
//     if(savedMessage) {
//         textarea.value = savedMessage;
//     }
// }
// // викличемо функцію
// populateTextAres();

// // 5)Щоб після натискання на кнопку Submit форма очищувалась 
// // повісимо слухач подій на !форму!
// form.addEventListener("submit", handleSubmit);

// // 6) ця функція, відміняє стандарту поведінку, очищує форму
// // очищуємо localStorage
// function handleSubmit(event) {
//     event.preventDefault();
//     console.log("Відправлення форми");
//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }

//! Відобразити товари на сторінці та можливість додавати в корзину
//! корзина на іншій сторінці, тобто туди коли переходимо вони повинні відображатися

// const instruments = [
//     {
//         id: 1,
//         img: "https://static.dnipro-m.ua/cache/products/7056/catalog_origin_218728.jpg",
//         name: "Шуруповерт",
//         price: 150,
//         description: "Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."
//     },
//     {
//         id: 3,
//         img: "https://static.dnipro-m.ua/cache/products/992/catalog_origin_322784.jpg",
//         name: "Шліфмашина",
//         price : 1299,
//         description: "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."
//     },
//     {
//         id: 4,
//         img: "https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",
//         name: "Пила",
//         price: 11049,
//         description: "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."
//     },
//     {
//         id: 5,
//         img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_323420.jpg",
//         name: "Рівень",
//         price: 897,
//         description: "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."
//     },
//     {
//         id: 6,
//         img: "https://static.dnipro-m.ua/cache/products/9500/catalog_origin_470179.jpg",
//         name: "Тример",
//         price: 3699,
//         description: "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."
//     },
//     {
//         id: 7,
//         img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",
//         name: "Мотокоса",
//         price: 11049,
//         description: "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."
//     },
//     {
//         id: 8,
//         img: "https://static.dnipro-m.ua/cache/products/4980/catalog_origin_183761.jpg",
//         name: "Генератор",
//         price: 10890,
//         description: "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."
//     }
// ]

// // отримаемо список продуктів
// const container = document.querySelector(".js-list");
// // створимо ключ, який буде додаватися в localStorage
// const PRODUCT_LS = "basket";

// // додає на сторінку перед кінцем
// container.insertAdjacentHTML("beforeend", createMarkup(instruments));
// // реагує на клик
// container.addEventListener("click", handleAdd);

// // функція створює розмітку списка товарів (назва, картинка, цена, кнопка в корзину)
// function createMarkup(arr) {
//     return arr
//         .map(({ id, img, name, price, description }) => `
//             <li data-id="${id}" class="product-card js-product">
//                 <img src="${img}" alt="${name}" class="product-img"/>
//                 <h2 class="product-title">${name}</h2>
//                 <p class="product-description">${description}</p>
//                 <p class="product-price">${price} грн</p>
//                 <button class="product-add-btn js-add">Add to basket</button>
//             </li>
//         `).join("");
// }

// // функція при кліку на кнопці "в корзину" (тому шукаємо єлемент з класом js-add це додати в корзину)

// // щоб зрозуміти який конкретно товар (по id) ->
// // метод closest шукає найближчий батьківський єлемент с класом closest(".js-product")
// // щоб отримати id Number(product.dataset.id); перетворюємо на число

// // щоб знайит єлемент по id const currentProduct = instruments.find
// // підставляємо щоб співпадало з обраним products.findIndex(({ id }) => id === productId);

// // щоб додати продукт в localStorage:
// // спочатку їх отримаємо та розпарсимо, якщо ничо нема додамо пустий масив
// // const products = JSON.parse(localStorage.getItem(PRODUCT_LS)) ?? [];

// // якщо додати 2 однакових товара, але щоб их відображалось не 2 копии
// //  const index = products.findIndex(({ id }) => id === productId);
// // якщо такий єлемент є отримаємо його індекс якщо нема (-1)

// // if(index !== -1) {     якщо знайден индекс (не -1):
// // додаемо в об'єкт властивість currentProduct.qty = 1;буде кол-во 1
// // якщо є такий об'єкт збільшимо кол-во на 1   products[index].qty += 1

// // оновлюємо данні в localStorage
// //  localStorage.setItem(PRODUCT_LS, JSON.stringify(products));
// function handleAdd(event) {
//     if(!event.target.classList.contains("js-add")) {
//         return;
//     }

//     const product = event.target.closest(".js-product");
//     const productId = Number(product.dataset.id);
//     const currentProduct = instruments.find(({ id }) => id === productId);
    
//     const products = JSON.parse(localStorage.getItem(PRODUCT_LS)) ?? [];
//     const index = products.findIndex(({ id }) => id === productId);
    
//     if(index !== -1) {
//         products[index].qty += 1;
//     } else {
//         currentProduct.qty = 1;
//         products.push(currentProduct);
//     }

//     localStorage.setItem(PRODUCT_LS, JSON.stringify(products));
// }

//! далі потрібно отобразити продукти в нашій корзині
// це на іншій сторінці  (basket.js)  --->