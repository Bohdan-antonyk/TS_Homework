// Взяти дз №1-3 з модуля по js та типізувати їх.
//     Завдання можна копіювати з виконаних дз по js та впроваджувати типізацію безпосередньо в них,
//     замінивши розширення файлів.

// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let firstVariable: string = 'hello';
let secondVariable: string = 'owu';
let thirtyVariable: string = 'com';
let shortNameCountry: string = 'ua';
let firstNumber: number = 1;
let tendNumber: number = 10;
let thirtyNumber: number = -999;
let fourthNumber: number = 123;
let pi: number = 3.14;
let fiveNumber: number = 2.7;
let sixtyNumber: number = 16;
let plausibleValue: boolean = true;
let falsyValue: boolean = false;

console.log(firstVariable);
console.log(secondVariable);
console.log(thirtyVariable);
console.log(shortNameCountry);
console.log(firstNumber);
console.log(tendNumber);
console.log(thirtyNumber);
console.log(fourthNumber);
console.log(pi);
console.log(fiveNumber);
console.log(sixtyNumber);
console.log(plausibleValue);
console.log(falsyValue);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName: string = 'Bohdan';
let lastName: string = 'Antonuk';
let middleName: string = 'Ihorovich';
let person: string = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let y: number = 100;
let b: string = '100';
let c: boolean = true;

console.log(typeof y);
console.log(typeof b);
console.log(typeof c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstNamePrompt: string = prompt("Введіть ваше ім'я:");
let middleNamePrompt: string = prompt("Введіть ваше по-батькові:");
let age: string = prompt("Скільки вам років?");

console.log("Ім'я:", firstNamePrompt);
console.log("По-батькові:", middleNamePrompt);
console.log("Роки:", age);

// Масиви та об'єкти
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr: any[] = [1, 'Hello', true, 3.14, null, undefined, {name: 'John'}, [1, 2, 3], -5, 'World'];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1: { title: string, pageCount: number, genre: string } = {title: 'Abetka', pageCount: 25, genre: 'Literature'};
let book2: { title: string, pageCount: number, genre: string } = {
    title: 'History of USA',
    pageCount: 258,
    genre: 'History'
};
let book3: { title: string, pageCount: number, genre: string } = {
    title: 'The Great Emu War',
    pageCount: 322,
    genre: 'History'
};

console.log(book1, book2, book3);


// - Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4: {
    title: string,
    pageCount: number,
    genre: string,
    authors: [{ name: string, age: number }, { name: string, age: number }]
} = {
    title: 'Abetka',
    pageCount: 25,
    genre: 'Literature',
    authors: [
        {name: 'Ivan Franko', age: 45},
        {name: 'Lesya Ukrainka', age: 42}
    ]
};

let book5: {
    title: string,
    pageCount: number,
    genre: string,
    authors: [{ name: string, age: number }, { name: string, age: number }]
} = {
    title: 'History of USA',
    pageCount: 258,
    genre: 'History',
    authors: [
        {name: 'John Smith', age: 50},
        {name: 'Sarah Johnson', age: 38}
    ]
};

let book6: {
    title: string,
    pageCount: number,
    genre: string,
    authors: [{ name: string, age: number }, { name: string, age: number }]
} = {
    title: 'The Great Emu War',
    pageCount: 322,
    genre: 'History',
    authors: [
        {name: 'Andrew T. Williams', age: 40},
        {name: 'Emily Brown', age: 32}
    ]
};

console.log(book4);
console.log(book5);
console.log(book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user3: { name: string, username: string, password: string }[] = [
    {name: 'Ivan Petrenko', username: 'ivanpetrenko', password: '123434'},
    {name: 'Olena Koval', username: 'olenakoval', password: '321482'},
    {name: 'Mykola Shevchenko', username: 'nikolachevchenko', password: '4561122'},
    {name: 'Svitlana Doroshenko', username: 'svitlanadoroshenko', password: '789445'},
    {name: 'Anatoliy Levchenko', username: 'anatoliylevchenko', password: '101743'},
    {name: 'Tetiana Ivanova', username: 'tetyanaivanova', password: '2002543'},
    {name: 'Vasyl Tkachенко', username: 'vasyltkachenko', password: '333322'},
    {name: 'Yuliya Melnyk', username: 'yuliamelnyk', password: '5678986'},
    {name: 'Oleksandr Kravchuk', username: 'oleksandrkravchuk', password: '999000'},
    {name: 'Natalia Borysenko', username: 'nataliaborisenko', password: '100500'}
];

for (let i = 0; i < user3.length; i++) {
    console.log(user3[i].password);
}


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatures: number[][] = [
    [10, 20, 15],
    [12, 22, 17],
    [14, 24, 18],
    [16, 26, 20],
    [18, 28, 22],
    [20, 30, 25],
    [22, 32, 27]
];

for (let i = 0; i < temperatures.length; i++) {
    console.log(`День ${i + 1}: Вранці - ${temperatures[i][0]}°C, Вдень - ${temperatures[i][1]}°C, Ввечері - ${temperatures[i][2]}°C`);
}


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x: number = 1;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time: number = 35;

if (time >= 0 && time <= 14) {
    console.log('Перша четверть години');
} else if (time >= 15 && time <= 29) {
    console.log('Друга четверть години');
} else if (time >= 30 && time <= 44) {
    console.log('Третя четверть години');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта четверть години');
} else {
    console.log('Некоректне значення часу');
}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day: number = 15;

if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада місяця');
} else {
    console.log('Некоректне значення дня');
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let dayNumber: number = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Please enter a valid number!");
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1: number = 8;  // Перше число
let num2: number = 12; // Друге число

if (num1 > num2) {
    console.log("Максимальне число: " + num1);
} else if (num1 < num2) {
    console.log("Максимальне число: " + num2);
} else {
    console.log("Числа рівні.");
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,буде присвоювати змінній х значення "default"
//     якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//

let x1: number | string = 0;

if (!x1) {
    x1 = "default";
}

console.log(x1);


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray: { title: string, monthDuration: number }[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i: number = 0; i < coursesAndDurationArray.length; i++) {
    let course = coursesAndDurationArray[i];

    if (course.monthDuration > 5) {
        console.log("Супер");
    }
}

// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i: number = 0; i < 10; i++) {
    document.write("<div>I create 10 div elements using for</div>");
}


// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i: number = 0; i < 10; i++) {
    document.write(`<div>This is div element and this is its id №${i}</div>`);
}


// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i: number = 0;
while (i < 20) {
    document.write("<h1>This is main title</h1>");
    i++;
}


//     #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let a: number = 0;
while (a < 20) {
    document.write(`<h1>This is main title and is its id №${a}</h1>`);
    a++;
}


//     #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (let j: number = 0; j < listOfItems.length; j++) {
    const listOfItem = listOfItems[j];
    document.write(`<li>${listOfItem}</li>`);
}
document.write(`</ul>`)


// -----------------------------------------------
//     #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://gioice.com.ua/wp-content/uploads/2020/11/chaj.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products: { title: string, price: number, image: string }[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://gioice.com.ua/wp-content/uploads/2020/11/chaj.png'
    },
];

for (const product of products) {
    document.write(`<div class="product-card">
     <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
    <img src="${product.image}" alt="" class="product-image">
 </div>`)
}


// --------------------
// #4WrHwFTEop0
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:


let users: { name: string, age: number, status: boolean }[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//     - користувачів зі статусом true

for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}


// - користувачів зі статусом false

for (const user of users) {
    if (!user.status) {
        console.log(user);
    }
}


// - користувачів які старші за 30 років

for (const user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}



