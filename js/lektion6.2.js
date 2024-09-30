// ! Загальна інфа про класи
// class Car {

//     static qty = 0;

//     static increment() {
//         Car.qty += 1;
//     }

//     #model;
//     #price;

//     constructor({brand, model, price}) {
//        this.brand = brand;
//        this.#model = model;
//        this.#price = price;
//        Car.increment();
//     }

//     getModel() {
//         return this.model;
//     }

//     changeModel(newModel) {
//         this.model = newModel;
//     }

//     get price(){
//         return this.#price + 2000;
//     }

//     set price(newPrice) {
//         if(typeof newPrice === "number") {
//             this.#price = newPrice;
//         }
        
//     }
// }

// const audi = new Car({brand: "audi", model: "Q7", price: 70000});
// const bmw = new Car({brand: "bmw", model: "X5", price: 80000});


// // console.log("audi", audi);

// // audi.changeModel("Q5"); 
// // console.log(audi.getModel()); // Q7    //Q5


// // console.log(audi.model);  //undefined
// // audi.price = "50";
// // console.log(audi.price);
// // audi.price = 50;
// // console.log(audi.price);

// console.log(Car.qty);

// !Наслідування класів

// class Hero {
//     constructor({name, xp}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} received ${amount} xp`);
//         this.xp += amount;
//     }
// }

// class Warrior extends Hero {
//     // constructor({name, xp, weapon}) {
//     // super({name, xp});
//     // варіант з rest:
//     constructor({weapon, ...restProps}) {
//         super(restProps);
    
//         this.weapon = weapon;
//     }

//     // метод дочірнього класу
//     attack() {
//         console.log(`${this.name} attack with ${this.weapon}`);
        
//     }
// }

// const arthos = new Warrior({name: "Arthos", xp: 1000, weapon: "sword"});

// console.log("arthos начальна xp", arthos);

// arthos.attack();
// arthos.gainXp(200);
// console.log("arthos финальна xp", arthos);


// class Mage extends Hero {
//     constructor({name, xp, spells}) {
//         super({name, xp});

//         this.spells = spells;
//     }

//     cast() {
//         console.log(`${this.name} is casting a spell`);
//     }
// }

// const khadgar = new Mage({name: "Khadgar", xp: 500, spells: ["fireball"]});


// console.log(khadgar);
// khadgar.gainXp(100);
// khadgar.cast();
// console.log(khadgar);


//! ЗАДАЧА
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями
// email - пошта, рядок
// age - вік, число
// numerOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями

// Додай метод getInfo(), який, повертає рядок:
// User ${email} is age years old and has ${numPosts} posts.

// Додай метод updatePostCount(value), який у параметрі value
// приймає кількість постів, які додати користувачеві.



// class Blogger {
// // ключ = властивості, тому короткий запис
//     constructor({ email, age, numerOfPosts, topics}) {
//         this.email = email;
//         this.age = age;
//         this.numerOfPosts = numerOfPosts;
//         this.topics = topics;
//     }
// // Додай метод getInfo(), який, повертає рядок:
// // User ${email} is age years old and has ${numPosts} posts.
//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numerOfPosts} posts.`;
//     }
// // Додай метод updatePostCount(value), який у параметрі value
// // приймає кількість постів, які додати користувачеві.
//     updatePostCount(value) {
//         this.numerOfPosts += value;
//     }
// }

// const alice = new Blogger({ 
//     email: "alice@gmail.com", 
//     age: 25,
//     numerOfPosts: 40, 
//     topics: ["tech", "sport"]
// })

// const petya = new Blogger({
//     email: "petya@gmail.com", 
//     age: 30,
//     numerOfPosts: 50, 
//     topics: ["gaming", "cooking"]
// })


// console.log("метод getInfo:", alice.getInfo());
// console.log("метод getInfo:", petya.getInfo());

// console.log("метод: updatePostCount:");
// alice.updatePostCount(5);


// console.log("alice", alice);
// console.log("petya", petya);

// !Задача
// Напиши клас User який створює об'єкт із властивостями login та email.
// Оголоси приватні властивості #login та #email, доступ до яких 
// зроби через гетер и сетер login та email.

// class User {
//     #login;
//     #email;

//     constructor({login, email}) {
//         this.#login = login;
//         this.#email = email;
//     }

//    get login() {
//     return this.#login;
//    }

//    set login(newLogin) {
//     this.#login = newLogin;
//    }

//    get email() {
//     return this.#email;
//    }

//    set email(newEmail) {
//     this.#email = newEmail;
//    }
// }

// const kate = new User({
//     login: "Kate",
//     email: "kate@gmail.com"
// })



// kate.login = "SuperKate";
// console.log(kate.login);

// kate.email = "SuperKate@gmail.com";
// console.log(kate.email);


// console.log(kate);
