//*зарплата сотрудникам

// function add (x, y) {
//   const dayTotal = x * 8 * 1.2;
//   const total = dayTotal * y;
//   return total;
// }

// const petya = add(20, 20);
// const katya = add(20, 15);
// const yura = add(17, 21);

// console.log("petya", petya);
// console.log("katya", katya);
// console.log("yura", yura);


//* область видимости
// const str = "Hello";

// function foo() {

//   const message = "world";
  
//   function lalala() {
//     const msg = "lalala";
//     console.log(message);
//   }
//   lalala();
// }

// foo();

//* check 18+
// function check(name, age) {
//   if (age === 18) {
//     return `${name} ще молода`
//   }
//     else {
//     return "Сходи за таблетками!"
//   }
// }

// let user = prompt ("Скильки тоби рокыв?");
// user = check ("Alice", user);

// console.log(user);

//* Задача
//* Напиши функцию calcBMI (weight, height) яка розраховуе индекс маси тела
//* человека. Для цього потрибно вагу роздилити на квадрат висоты

//* 1) вага и высота переданы как рядки
//* 2) роздилювачем може бути крапка або кома (24,7 или 24.7)
//* 3) индекс масси тела треба округлити до одной цифры после запятой

function calcBMI (weight, height) {

//заменяем запятую на точку
   let numWeight = weight.replace(",",".");
    //console.log(numWeight);  --> 88.3

    //заменяем рядок на число
   numWeight = Number.parseFloat(numWeight);
   //console.log(typeof numWeight); --> тип numWeight будет number

   //так же с ростом
   const numHeight = Number.parseFloat(height);

   //формула 
   const bmi = numWeight / (numHeight ** 2);

   //округляем до 1 цифры после запятой 
   return bmi.toFixed(1);
}

const bmi = calcBMI("60,4", "1.69");
console.log(bmi);