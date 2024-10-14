// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);

// function onParentClick(event) {
//     console.log("onParentClick target", event.target);
//     console.log("onParentClick currentTarget", event.currentTarget);

// }

// function onChildClick(event) {
//     console.log("onChildClick target", event.target);
//     console.log("onChildClick currentTarget", event.currentTarget);
// }

// function onInnerChildClick(event) {
//     console.log("onInnerChildClick target", event.target);
//     console.log("onInnerChildClick currentTarget", event.currentTarget);
// }

//! Задача про клик на 3 квадратика, тут 3 слухача собітий
// const container = document.querySelector(".container");

// [...container.children].forEach(box => {
//     box.addEventListener("click", handleClick);
// })

// function handleClick(event) {
//     const color = event.currentTarget.dataset.color;
//     console.log(color);
    
// }

//! тут один слухач подій
// const container = document.querySelector(".container");

// container.addEventListener("click", handleClick);

// function handleClick(event) {
//     if(!event.target.classList.contains("box")) {
//         return;
//     }

//     const color = event.target.dataset.color;
//     console.log(color);
    
// }

//! Задача
/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
    {
      id: 1,
      img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
      name: "Monitor",
      price: 3000,
      description: "23-inch monitor with Full HD resolution.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
      name: "Laptop",
      price: 20000,
      description:
        "Lightweight and powerful laptop with a 15-inch display and SSD.",
    },
    {
      id: 3,
      img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
      name: "Smartphone",
      price: 8000,
      description: "Equipped with a triple camera and a multi-core processor.",
    },
    {
      id: 4,
      img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
      name: "Tablet",
      price: 12000,
      description: "10-inch tablet with high performance and a Retina display.",
    },
];


const container = document.querySelector(".products");
// * Реалізуй делегування подій на колекції карток
container.insertAdjacentHTML("beforeend", createMarkup(products))

container.addEventListener("click", handleClick);

// відмалювати картки (це єлементи масива)
// параметр масив, повертає результат віконання - новий масив
// тобто повертаемо картинки як ключ обїекта img c названием и ценой
function createMarkup(arr) {
  return arr
    .map(product => `
      <li class="item product-item" data-id="${product.id}">
        <img src="${product.img}" alt="${product.name}" width="300">
        <h2>${product.name}</h2>
        <p>Ціна: ${product.price}грн</p>
      </li>
    `).join("");
}

// Клик на event.target = отримуэ список по якому кликнути, ли ул или т.д.
// event.currentTarget (контейнер юл)= посилання на элемент на якому видбулась подыя
// робимо для того щоб зрозуміти ми кликнули по контейнеру чи ні
// т.е. кликнули не в той самий єлемент де висить слухач події
function handleClick(event) {
  if(event.target === event.currentTarget) {
    return;
  }

  const currentProduct = event.target.closest(".product-item");
  const id = currentProduct.dataset.id;
  
  const product = products.find((item) => item.id === +id);
    
//   рядочок який скопирований с файлика Єкзамплес библиотеки
  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${product.img}" alt="${product.name}">
      <h2>${product.name}</h2>
      <h3>${product.price} грн</h3>
      <p>${product.description}</p>
    </div>
  `)
  
  instance.show();
}

console.log(window);
