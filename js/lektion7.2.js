//! Подія click 
//! Задача натискаючи на кнопку "Click" змусь червоний
//! квадратик зміщуватись на 50 рх по диагоналі

// const btn = document.querySelector(".js-click");
// const box = document.querySelector(".js-box");

// btn.addEventListener("click", handleClick);
//     let step = 0;

// function handleClick() {
//     step +=50;
//     // console.log(step);
//     box.style.marginTop = `${step}px`;
//     box.style.marginLeft = `${step}px`;
// }

//! події change, input, blur
// const checkbox =document.querySelector(".js-checkbox");

// checkbox.addEventListener("change", () => {
//     console.log("ok");
    
// })

const userName = document.querySelector(".js-user-name");


// userName.addEventListener("input", () => {
//     console.log("ok");
    
// })

// userName.addEventListener("input", (event) => {
//     console.log(event.target.value);
// })

// userName.addEventListener("focus", () => {
//     console.log("ok");
    
// })

// userName.addEventListener("blur", () => {
//     console.log("ok");
    
// })


//! Задача користувач вводить в input своє ім'я після втрати 
//! фокусу отримує alert з повідомленням-привітанням

// userName.addEventListener("blur", handleBlur)

// function handleBlur(event) {
//     const name = event.target.value;
//     alert(`Hello ${name}`)
// }

//! Оброби форму та збери відгук користувача в об'єкт

// const form = document.querySelector(".js-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const elements = event.currentTarget.elements;

//    const info = {
//     email: elements.email.value,
//     password: elements.password.value,
//     comment: elements.comment.value
//    }
//     console.log(info);

//     event.target.reset(); 
// }

//! keypress, keydown, keyup

// document.addEventListener("keydown", handleKeyPress);

// function handleKeyPress(event) {
//     // console.log(event.code);
//     if(event.code === "Escape") {
//         console.log("Escape");
        
//     } else {
//         console.log("Oooops");
        
//     }
    
// }

//! Відслідкувати натискання клавіш Ctr+C і заборонити копіювання тексту

// document.addEventListener("keydown", handleKey);

// function handleKey(event) {
//     if(event.ctrlKey && event.code === "KeyC") {
//         alert("нельзя скопировать");
//         event.preventDefault();
//     }
// }

//! Події миші

// const box = document.querySelector(".js-box");

// box.addEventListener("mouseenter", onMouseEnter);
// box.addEventListener("mouseleave", onMouseLeave);

// function onMouseEnter(event) {
//     console.log("onMouseEnter");
//     const myBox = event.target;
//     myBox.classList.add("box--active");
// }

// function onMouseLeave(event) {
//     console.log("onMouseLeave");
//     const myBox = event.target;
//     myBox.classList.remove("box--active");
// }

// box.addEventListener("mousemove", onMouseMove);

// function onMouseMove(event) {
//     console.log(event);
// }

//!/**
//  * Реалізуй пошук автомобілів по сайту
// * Користувач потрапляє на сайт і одразу бачить форму для пошуку 
// * і картки всіх автомобілів (масив cars)
// * Користувач може ввести в форму назву Марки або Моделі авто і в 
// * тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
// * Після натискання кнопки пошуку (сабміт форми) відмалюй авто 
// * які збігаються з критеріями пошуку
// */

const cars = [
    {
      id: 1,
      car: "Audi",
      type: "A6",
      price: 30000,
      img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
    },
    {
      id: 2,
      car: "Honda",
      type: "Civic",
      price: 12000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
      id: 3,
      car: "Audi",
      type: "Q7",
      price: 40000,
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
      id: 4,
      car: "BMW",
      type: "5 siries",
      price: 9000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
      id: 5,
      car: "Honda",
      type: "Accord",
      price: 20000,
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
      id: 6,
      car: "Volvo",
      type: "XC60",
      price: 7000,
      img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
];


const form = document.querySelector(".js-form");
const container = document.querySelector(".js-list");

// Створити функцию в яку приймати список автомобилив як параметр

function createMarkup(arr) {
    // повертаемо розмитку яку хочемо размалювати
    return arr
    // тобто хочемо отрімати масив. значить його треба перебрати
    // не явне повернення без {} та без слова return
    .map(car => `
        <li class="car-card" data-id="${car.id}">
        <img src="${car.img}" alt="${car.type}" class="car-image">
        <h2 class="car-title">${car.car}</h2>
        <h3 class="car-type">${car.type}</h3>
        <span class="car-price">${car.price}</span>
        </li>

        `).join("")
        // додаемо на сторінку, для цього треба перетворити масив в рядок join
}
// виводить в консоль рядком все данні про авто
console.log(createMarkup(cars));

// додамо стилі до контейнера

container.style.display = "flex";
container.style.flexWpap = "wrap";
container.style.gap = "25px";

// додаемо на сторінку(також можно метод innerHTML)

container.insertAdjacentHTML("beforeend", createMarkup(cars));

// фильтрувати по пошуку за маркою або моделлю авто
// значення яке вводять в строеку пошуку можно за name

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    // викликаемо метод який відключить стандартну поведінку форми
    // тобто під час відправки форма не буде перезавантажуватися!
    event.preventDefault();

    // отримаємо текст який був введений в инпут
    const elements = event.target.elements;
    const query = elements.query;
    // отримаемо тип, в окошке списке где в оптионс вібираем "марка" чи "модель"
    const options = elements.options;
    // console.log(elements.options.value);
    
    // далі потрібно пройтись по масиву обектів і відфільтрувати ті значення ялі
    // ми отримали вище

    const result = cars
    // якщо користувач вибере item.type шукаємо по типу, item.car по авто
        .filter(item => item[options.value].toLowerCase().includes(query.value.toLowerCase()))
    // привести все до нижнього регитстру, перевірити на включність якщо текста більше

// console.log(result);
    // робимо щоб відображалися лише ті що відповідають пошуку
    container.innerHTML = createMarkup(result);

}

// const form = document.querySelector(".js-form");
// const container = document.querySelector(".js-list");

// function createMarkup(arr) {
//   return arr
//     .map(car => `
//         <li class="car-card" data-id="${car.id}">
//           <img src="${car.img}" alt="${car.type}" class="car-image">
//           <h2 class="car-title">${car.car}</h2>
//           <h3 class="car-type">${car.type}</h3>
//           <span class="car-price">${car.price}$</span>
//         </li>
//       `)
//       .join("")
// }

// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.gap = "25px";
// container.insertAdjacentHTML("beforeend", createMarkup(cars));

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const elements = event.target.elements;
//   const query = elements.query;
//   const option = elements.options;

//   // const obj = {
//   //   id: 6,
//   //   car: "Volvo",
//   //   type: "XC60",
//   //   price: 7000,
//   //   img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   // }
  
//   // console.log(option.value);
//   // console.log(obj[option.value].toLowerCase().includes(query.value.toLowerCase()));


//   const result = cars
//     .filter(item => item[option.value].toLowerCase().includes(query.value.toLowerCase()))
  
//   container.innerHTML = createMarkup(result);
// }