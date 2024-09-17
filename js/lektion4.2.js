//! МАСИВ ОБЪЕКТОВ
const friends = [
    {name: "Ross", online: false},
    {name: "Joey", online: true},
    {name: "Chandler", online: false},
    {name: "Phoebe", online: true},
    {name: "Monica", online: true},
    {name: "Rachel", online: false},
];

// 1)Пошук друга за именем

// function findByName (allFriends, friendName) {
//     for(const item of allFriends) {
//         // console.log(item);
//         if(item.name.toLowerCase() === friendName.toLowerCase()) {
//             item.online = false;
//             return item;
//         }
        
//     }
//     return "Not found";
// }

// console.log(findByName(friends, "Monica"));

// 2)Отримати имена всех друзей 

// function getAllNames (allFriends) {
//     const result = [];

//     for(const item of allFriends) {
//         result.push(item.name);
//     }
//     return result;
// }

// console.log(getAllNames(friends));

// 3)Отримаемо имена только тех друзей, которые сейчас онлайн

// function getOnlineFriends(allFriends) {
//     const res = [];
//     for(const item of allFriends) {
//         if(item.online) {
//             res.push(item);
//         }
//     }
//     return res;
// }

// console.log(getOnlineFriends(friends));


/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */
  

const stones = [
    { name: "Смарагд", price: 1300, quantity: 4 },
    { name: "Діамант", price: 2700, quantity: 3 },
    { name: "Сапфір", price: 400, quantity: 7 },
    { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice(arr, name) {

    let sum = 0;

for(const stone of arr) {
    if(stone.name === name) {
        sum += stone.price * stone.quantity;
    }
}
        return sum;
}

console.log(calcTotalPrice(stones, "Сапфір"));


