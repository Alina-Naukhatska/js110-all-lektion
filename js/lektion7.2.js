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

const box = document.querySelector(".js-box");

box.addEventListener("mouseenter", onMouseEnter);
box.addEventListener("mouseleave", onMouseLeave);

function onMouseEnter(event) {
    console.log("onMouseEnter");
    const myBox = event.target;
    myBox.classList.add("box--active");
}

function onMouseLeave(event) {
    console.log("onMouseLeave");
    const myBox = event.target;
    myBox.classList.remove("box--active");
}
