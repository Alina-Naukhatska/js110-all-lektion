//! Пошук HTML елементу за допомогою querySelector и querySelectorAll
// const magicBtn = document.querySelector("#magic-btn");
// console.log(magicBtn);

// const listItems = document.querySelector('.styled-list');
// console.log(listItems);

// const listUl = document.querySelector('ul');
// console.log(listUl);

// const listItemsAll = document.querySelectorAll('.list-link');
// console.log(listItemsAll);

//!  Властивості навігвції по DOM-вузлах

// const navEl = document.querySelector(".styled-list");

// const firstEl = navEl.firstElementChild;
// const lastEl = navEl.lastElementChild;


// console.log(firstEl);
// console.log(lastEl);
// console.log("псевдомасив:", navEl.children);
// console.log("масив:", [...navEl.children]);

// const navItem = navEl.children[1];
// console.log(navItem);
// console.log(navItem.nextElementSibling);
// console.log(navItem.previousElementSibling);
// console.log(navItem.parentNode);

//! Властивості елемента (hero)
//! Зображення
//! Текст та textContent

// const img = document.querySelector(".hero-image");
// console.log(img);

// img.src = "/img/Ярик и Марсик.jpg";
// img.alt = "new cat";

// const titleEl = document.querySelector(".hero-title");

// console.log(titleEl.textContent);

// titleEl.textContent =  "New me";

// img.setAttribute("width", 350);
// img.setAttribute("height", 500);
// img.removeAttribute("width");
// console.log(img.hasAttribute("width"));

// const actions = document.querySelectorAll(".actions button");
// console.log(actions);

// const btn = actions[2];
// console.log(btn.dataset.action);

// btn.dataset.btn = "red";

// delete btn.dataset.action;
// const currentPageUrl = "/contact";
// const linkEl = document.querySelector(`.list-link[href="${currentPageUrl}"]`);
// const linkElTeg = document.querySelector(`.list-link[href="/contact"]`);

// console.log(linkEl);
// console.log(linkElTeg);

// linkEl.classList.add("list-link--current");
// linkEl.classList.remove("list-link--current");
// linkEl.classList.toggle("list-link--current");
// linkEl.classList.replace("list-link--current", "blue");
// console.log(linkEl.classList.contains("list-link--current"));

//! Створити єлемент (заголовок)
// const titleEl = document.createElement("h1");

// titleEl.classList.add("page-title");
// titleEl.textContent = "My title";
// console.log(titleEl);

// document.body.prepend(titleEl);

//! Створити єлемент (зображення)

// const imageEl = document.createElement("img");
// imageEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42R_W45qVJ2YSWLaSPXkDkTCC4w5UvXD3tA&s";
// imageEl.alt = "four-leaf clover";
// imageEl.width = 320; 
// console.log(imageEl);
// document.body.append(imageEl);
// const heroEl = document.querySelector(".hero");

// heroEl.append(titleEl, imageEl);

//! Створюємо та додаємо новий пункт меню

// const navItemEl = document.createElement("li");
// navItemEl.classList.add("list-item");

// const navLinkEl = document.createElement("a");
// navLinkEl.classList.add("list-link");
// navLinkEl.textContent = "Profile";
// navLinkEl.href = "/profile";

// navItemEl.append(navLinkEl);

// const navEl = document.querySelector(".styled-list");
// navEl.append(navItemEl);

// console.log(navItemEl);
// console.log(navLinkEl);

//! Створення колекции элементов

// const options = [
//     { label: 'червоний', color: '#F44336' },
//     { label: 'зелений', color: '#4CAF50' },
//     { label: 'синій', color: '#2196F3' },
//     { label: 'сірий', color: '#607D8B' },
//     { label: 'рожевий', color: '#E91E63' },
//     { label: 'індіго', color: '#3F51B5' },
// ];

// const colorPicerContainer = document.querySelector(".color-picker");

// const elements = options.map(option => {

//     const buttonEl = document.createElement("button");
//     buttonEl.classList.add("color-picker__option");
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
    
//     return buttonEl;

// })

// colorPicerContainer.append(...elements);
// console.log(elements);


//! Теж саме але функція (стоврення розмітки колорпікера)

// const createMarkup = arr => {
//     return arr.map(option => {
//         const buttonEl = document.createElement("button");
//         buttonEl.classList.add("color-picker__option");
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;
        
//         return buttonEl;  
//     })
// }

// colorPicerContainer.append(...createMarkup(options))

//! innerHTML додати в заголовок тег и текст

// const titleEl = document.querySelector(".hero-title");
// titleEl.innerHTML = '<a href="">My title</a>';
// titleEl.innerHTML = "";

//! не видаляя контент insertAdjacentHTML

// titleEl.insertAdjacentHTML("beforeend", '<a href="">My title</a>');

//! ТРАНЗАКЦИЯ

// const transactionHistory = [
//     {
//       id: '758d5283-358e-4fbb-b222-a17fd04e8916',
//       amount: '179.07',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Bogan - DuBuque',
//       name: 'Auto Loan Account 7313',
//       type: 'deposit',
//       account: '19808943',
//     },
//     {
//       id: 'f0463ec4-7104-4adb-a41c-b1c7549055f8',
//       amount: '930.87',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Legros, Weimann and Treutel',
//       name: 'Auto Loan Account 0721',
//       type: 'invoice',
//       account: '38277848',
//     },
//     {
//       id: '6c0e5a78-ad9f-46af-8299-44b77f5099d5',
//       amount: '704.53',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Beatty, Wisozk and Koch',
//       name: 'Savings Account 1894',
//       type: 'withdrawal',
//       account: '76727204',
//     },
//     {
//       id: '16bd2a9d-7b0e-418f-a75c-7076e8ab6175',
//       amount: '656.81',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Hane - Bode',
//       name: 'Personal Loan Account 2316',
//       type: 'withdrawal',
//       account: '27462350',
//     },
//     {
//       id: 'd328680d-4aa5-40ee-912b-9b5149b602e6',
//       amount: '280.21',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Schulist - Waelchi',
//       name: 'Savings Account 9032',
//       type: 'payment',
//       account: '99923313',
//     },
//     {
//       id: 'e51fb348-8523-4e39-915f-39687ca4eebf',
//       amount: '303.06',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Swaniawski - Hayes',
//       name: 'Checking Account 0573',
//       type: 'invoice',
//       account: '75028346',
//     },
//     {
//       id: 'cd727197-5ffb-45a7-9bf5-9d08092a1cce',
//       amount: '462.59',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Berge - Reinger',
//       name: 'Personal Loan Account 8173',
//       type: 'invoice',
//       account: '93437240',
//     },
//     {
//       id: '247e150a-71ba-4df7-9836-5bb400e012bb',
//       amount: '242.49',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Stroman Inc',
//       name: 'Savings Account 1383',
//       type: 'withdrawal',
//       account: '18476423',
//     },
//     {
//       id: '6224c740-ff23-429d-854a-c7b310f7653b',
//       amount: '770.94',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Johns - Pagac',
//       name: 'Auto Loan Account 1392',
//       type: 'invoice',
//       account: '07680863',
//     },
//     {
//       id: '79ccb1dd-6544-47cc-9a40-ea453985a748',
//       amount: '788.40',
//       date: '2012-02-01T22:00:00.000Z',
//       business: 'Ullrich, Shields and Koelpin',
//       name: 'Personal Loan Account 8318',
//       type: 'invoice',
//       account: '07081761',
//     },
// ]; 

// const tableEl = document.querySelector(".js-transaction-table");

//  const markup = transactionHistory.map((item) => 
//     `
//     <tr> 
//     <td>${item.id}</td>
//     <td>${item.amount}</td>
//     <td>${item.date}</td>
//     <td>${item.business}</td>
//     <td>${item.name}</td>
//     <td>${item.type}</td>
//     <td>${item.account}</td>
//     </tr>
//     `)
//  .join("");

// tableEl.insertAdjacentHTML("beforeend", markup)