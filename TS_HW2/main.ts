// Взяти дз №4-6 з модуля по js та типізувати їх.
// Зверніть особливу увагу на те, що функції тепер щось повертають і це треба типізувати!
// Завдання можна копіювати з виконаних дз по js та впроваджувати типізацію безпосередньо в них, замінивши розширення файлів.

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a: number, b: number): number {
    const result = a * b;
    console.log(result);
    return result;
}

square(2, 5);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(radius: number): number {
    const PI = Math.PI;
    const squareCircleArea = PI * radius * radius;
    console.log(squareCircleArea);
    return squareCircleArea;
}

circleArea(5);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(height: number, radius: number): number {
    const result = 2 * Math.PI * radius * height;
    console.log(result);
    return result;
}

squareCylinder(5, 2);

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function showArray(array: any[]): void {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

let arr1: any[] = [1, 2, true, NaN, 0, false, undefined, null];

showArray(arr1);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

function createParagraph(text: string): void {
    document.write(`<p>${text}</p>`);
}

createParagraph('I want to create paragraph');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function createLiElements(text: string): void {
    document.write(`
                    <ul>
                       <li>${text}</li>
                       <li>${text}</li>
                       <li>${text}</li>
                   </ul>
`)
}

createLiElements('List of li elements');

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function createListOfElements(text: string, numberOfElements: number): void {
    document.write(`<ul>`);
    for (let i = 0; i < numberOfElements; i++) {
        document.write(`<li>${text}</li>`);
    }

    document.write(`</ul>`);
}

createListOfElements('List of li elements', 10);


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function createListOfPrimitiveElements(array: Array<number | string | boolean | null | undefined>): any {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

let arrayOfPrimitiveElements = [1, 2, 3, 'Bohdan', false, true, undefined, -44, 'Ivan', 0];
createListOfPrimitiveElements(arrayOfPrimitiveElements);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function createArrayOfObject(user: { id: number, name: string, age: number }[]): void {
    for (const userElement of user) {
        document.write(`<div>${userElement.id} ${userElement.name} ${userElement.age}</div>`);
    }
}

let arrayOfObjects: { id: number, name: string, age: number, }[] = [
    {id: 1, name: 'Bohdan', age: 31},
    {id: 2, name: 'Ivan', age: 22},
    {id: 3, name: 'Olha', age: 18},
    {id: 4, name: 'Maria', age: 33},
    {id: 5, name: 'Alex', age: 20},
    {id: 6, name: 'Sergey', age: 23},
    {id: 7, name: 'Kateryna', age: 45}
];
createArrayOfObject(arrayOfObjects);


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function thSmallestNumber(array: number[]): number {
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }
    console.log(smallestNumber)
    return smallestNumber;
}

let arrayOfNumbers2: number[] = [1, 77, 0, 4, -6, -2, -73, 8, -33, 100];

thSmallestNumber(arrayOfNumbers2);

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumOfNumbers(numbers: number[]): number {
    let counter = 0;
    for (const number of numbers) {
        counter += number;
    }
    console.log(counter);
    return counter;

}

sumOfNumbers(arrayOfNumbers2);

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr: any, index1: number, index2: number): [] | number {
    let firstIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = firstIndex;

    console.log(arr);
    return arr;
}

swap(arrayOfNumbers2, 0, 1);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH: number, currencyValues: {
    currency: string,
    value: number
}[], exchangeCurrency: string): number | string {
    for (const currencyValue of currencyValues) {
        if (exchangeCurrency === currencyValue.currency) {
            const result = sumUAH / currencyValue.value;
            console.log(result);
            return result;
        }
    }
    return 'Exchange is not possible';
}

exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD');

// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(`Це брудна стрінга і її довжина ${str.length} символів`);

let clearStr = str.trim();
console.log(`Це чиста стрінга і її довжина ${clearStr.length} символів`);


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(string): string[] | string {
    if (typeof string === 'string' && string.length !== 0) {
        return string.split(' ');
    }
    return 'Error';
}

let str2 = 'Ревуть воли як ясла повні';

console.log(stringToArray(str2));


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrayOfNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrayOfNumbersToString = arrayOfNumbers.map(number => number.toString());
console.log(arrayOfNumbersToString);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array: number[], direction: string): number[] | string {
    if (direction === 'ascending') return array.sort((a, b) => a - b);

    if (direction === 'descending') return array.sort((a, b) => b - a);

    else {
        return 'Error';
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, ''));

//
// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const newArray = coursesAndDurationArray2
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(number => number.monthDuration > 5)
    .map((value, index) => ({id: index + 1, ...value}));

console.log(newArray);

// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }


type Card = {
    cardSuit: string;
    value: string;
    color: string;
};

const deckOfCards: Card[] = [];
const cardSuits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

for (const cardSuit of cardSuits) {
    for (const cardValue of cardValues) {
        const color: "red" | "black" = cardSuit === 'heart' || cardSuit === 'diamond' ? 'red' : 'black';
        const card: Card = {cardSuit, value: cardValue, color};
        deckOfCards.push(card);
    }
}

console.log(deckOfCards);


const aceSpade: Card = deckOfCards.find(card => card.value === 'ace' && card.cardSuit === 'spade');
console.log(aceSpade);

const findValue6: any[] = deckOfCards.filter(card => card.value === '6');
console.log(findValue6);

const findAllRedColors: any[] = deckOfCards.filter(card => card.color === 'red');
console.log(findAllRedColors);

const findAllDiamonds: any[] = deckOfCards.filter(card => card.cardSuit === 'diamond');
console.log(findAllDiamonds);

const findAllClubs: any[] = deckOfCards.filter(card => card.cardSuit === 'clubs' && (card.value >= '9'));
console.log(findAllClubs);

//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const reduce: any = deckOfCards.reduce((acc: any, card: any): any => {
        if (card.cardSuit === 'spade') {
            acc.spades.push(card);
        } else if (card.cardSuit === 'diamond') {
            acc.diamonds.push(card);
        } else if (card.cardSuit === 'heart') {
            acc.hearts.push(card);
        } else if (card.cardSuit === 'clubs') {
            acc.clubs.push(card);
        }

        return acc;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    })

console.log(reduce);

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray: { title: string, monthDuration: number, hourDuration: number, modules: string[] }[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


const findSassModule: {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
}[] = coursesArray.filter(course => {
    return course.modules.includes('sass');
});
console.log(findSassModule);

const findSDockerModule: {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
}[] = coursesArray.filter(course => {
    return course.modules.includes('docker');
});
console.log(findSDockerModule);


