// отримати загальну вартість, "кнопку" очистити и сам контейнер об'єкта
// (просто отримаємо єлементи з файлу basket.html)
const totalPrice = document.querySelector(".js-total-price");
const clear = document.querySelector(".js-clear");
const container = document.querySelector(".js-list");

// змінна для localStorage
const PRODUCT_LS = "basket";
// так само якщо порожньо додаеємо пустий масив, якщо є розпарсимо
const products = JSON.parse(localStorage.getItem(PRODUCT_LS)) || [];
// зробимо змінну для зберігання сумми покупок
let totalCost;

// дізнаємось чи порожній масив, тобто довжина 0 чи 0
// якщо не порожній відобразимо кнопку clear   clear.hidden = false;
// порахуємо загальну вартість продуктів: 
// totalCost = products.reduce((acc, { qty, price }) => acc += qty * price, 0);
if(products.length) {
    clear.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => acc += qty * price, 0);
}

// якщо totalPrice не порожня буде ціна, якщо пустая "Your basket is empty";
totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : "Your basket is empty";
// звертаємося до контейнера и додаємо
container.insertAdjacentHTML("beforeend", createMarkup(products));
clear.addEventListener("click", handleClick);

// функція для видалення всього в localStorage по змінній PRODUCT_LS
// РЕДИРЕКТ перейдемо на сторінку index    window.location.href = "index.html";
function handleClick() {
    localStorage.removeItem(PRODUCT_LS);
    window.location.href = "index.html";
}

// функція для наповнення корзини розміткою 
function createMarkup(arr) {
    return arr.map(({ img, name, qty, price }) => `
        <li class="cart-item">
            <img src="${img}" alt="${name}" class="product-img"/>
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${qty * price} грн</p>
        </li>
    `).join("")
}