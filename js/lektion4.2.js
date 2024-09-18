//! МАСИВ ОБЪЕКТОВ
// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

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
  

// const stones = [
//     { name: "Смарагд", price: 1300, quantity: 4 },
//     { name: "Діамант", price: 2700, quantity: 3 },
//     { name: "Сапфір", price: 400, quantity: 7 },
//     { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(arr, name) {

//     let sum = 0;

// for(const stone of arr) {
//     if(stone.name === name) {
//         sum += stone.price * stone.quantity;
//     }
// }
//         return sum;
// }

// console.log(calcTotalPrice(stones, "Сапфір"));


//! Метод Объекта та this

// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],

//     changeName(newName) {
//         this.name = newName;
//     },

//     addTrack(track) {
//         this.tracks.push(track);
//     },

//     updateRating(newRating) {
//         this.rating = newRating;
//     },

//     geTracksCount() {
//         return this.tracks.length;
//     }
// }

// const petyaPlaylist = {
//     name: "Sport playlist",
//     rating: 4,
//     tracks: ["track-4", "track-5", "track-6"],
// }

// petyaPlaylist.changeName = playlist.changeName;


// playlist.addTrack("lalala");

// playlist.updateRating(100);
// console.log(playlist);
// console.log(playlist.geTracksCount());



// petyaPlaylist.changeName("Petya Sport playlist");
// playlist.changeName("lalala");


// console.log("playlist", playlist);
// console.log("petyaPlaylist", petyaPlaylist);


//!Rest та spread оператори

// function sum(a, b, ...num) {
//     console.log(num);
// }

// sum(1, 2, 3, 4, 5)

// const arr = [
//     1000,
//     ...[1, 2, 3],
//     4000,
//     ...[5, 6, 7],
//     8000
// ]

// console.log(arr);

// function foo(arg, arg2) {
//     console.log(arg);
//     console.log(arg2);

// }

// foo(...[1, 2, 3]);

// const ab = [1, 2, 3];
// const dg = [4, 5, 6];
// const yl = [7, 8, 9];

// const sd = [...ab, ...dg, ...yl];
// console.log(sd);


//!задача оновити налаштування користувача

// const defaultSettings = {
//     theme: "ligth",
//     showNotifications: true,
//     hideSidebar: false,
// };

// const userSettings = {
//     showNotifications: false,
//     hideSidebar: true,
// };

// const result = {
//     ...defaultSettings,
//     ...userSettings
// }

// console.log(result);


//! ------------------------------------ 4

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };
    
    /*
     * Кожна транзакція це об'єкт із властивостями: id, type та amount
     */
    
    const account = {
      // Поточний баланс рахунку
      balance: 0,
    
      // Історія транзакцій
      transactions: [],
    
      /*
       * Метод створює та повертає об'єкт транзакції.
       * Приймає суму та тип транзакції.
       */
      createTransaction(amount, type) {
        const transaction = { id: amount, amount, type};
        return transaction;
      },
  
    
      /*
       * Метод, що відповідає за додавання суми до балансу.
       * Приймає суму транзакції.
       * Викликає createTransaction для створення об'єкта транзакції
       * після чого додає його до історії транзакцій
       */
      deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
        this.transactions.push(transaction);
      },
    
      /*
       * Метод, що відповідає за зняття суми з балансу.
       * Приймає суму транзакції.
       * Викликає createTransaction для створення об'єкта транзакції
       * після чого додає його до історії транзакцій.
       *
       * Якщо amount більше ніж поточний баланс, виводь повідомлення
       * про те, що зняття такої суми не можливе, недостатньо коштів.
       */
      withdraw(amount) {
        if(this.balance < amount) {
            console.log("недостатньо коштыв");
            return
        } 
        this.balance -= amount;
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
      },
    
  
  
      /*
       * Метод повертає поточний баланс
       */
      getBalance() {
     return this.balance;
      },
    
      /*
       * Метод шукає та повертає об'єкт транзакції по id
       */
      getTransactionDetails(id) {
        for(const item of this.transactions) {
            if(item.id === id) {
                return item;
        }
    }
    return "not found";
      },
    
      /*
       * Метод повертає кількість коштів
       * певного типу транзакції з усієї історії транзакцій
       */
      getTransactionTotal(type) {
        let sum = 0;
        for(const item of this.transactions) {
            if(item.type === type) {
                sum += item.amount;
            }
        }
        return sum;
      },
  };
    
account.deposit(500);
account.deposit(200);
account.withdraw(100);
console.log(account.getTransactionDetails(100));

console.log(account);
console.log(account.getBalance());

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));



