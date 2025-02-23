// console.log(Math.floor(Math.random() * 100))
// {
//     let name = "Amir";
//     let age = 30;
//     let canCodeJs = false;

//     console.log("Hello, my name is " + name + ", " + "I am " + age + " years old and I can code JavaScript: " + canCodeJs);
// }

// a = 4;
// b = 3;
// a2 = a**2;
// b2 = b**2;
// c2 = (a2 + b2) ** 0.5;
// console.log(c2);


// let a = 2;
// let b = 3;
// let c = 4;

// b += a;
// a /= c;
// c %= b;

// console.log(a, c, b)


// a = 130;
// b = (a * 1.61);
// console.log('Расстояние 130 миль равно ' + b + ' км');


// let a = "Hello";
// a = prompt("world");
// console.log(a);


// console.log(true || false);


// Практическое занятие 3.1

// let shopping;
// shopping = ['Milk', 'Bread', 'Apples'];
// console.log(shopping.length);

// shopping[1] = 'Bananas';
// console.log('shoping', shopping);

// Практическое занятие 3.2

// let shopping = ['Milk', 'Bread', 'Apples'];

// shopping.splice(1, 1, 'Bananas', 'Eggs');
// console.log('shoping', shopping);

// shopping.pop();
// console.log('shoping', shopping);

// shopping.sort();
// console.log('shoping', shopping);

// let findIndex = shopping.indexOf('Milk');
// console.log('shoping', findIndex);

// shopping.splice(1, 0, 'Carrots', 'Lettuce');
// console.log('shoping', shopping);

// let newShoppingItems = ['Juice', 'Pop'];
// let chaosItems = shopping.concat(newShoppingItems, newShoppingItems);
// console.log('what the hell', chaosItems);

// let lastPop = chaosItems.lastIndexOf('Pop');
// console.log('lastPopIndex', lastPop);


// Практическое занятие 3.3

// let defaultBlock = [1, 2, 3];
// let newBlock = [defaultBlock, defaultBlock, defaultBlock];
// let randomValue = newBlock[1][1];
// console.log(randomValue);

// Практическое занятие 3.4

let myCar = {
    make: 'BMW',
    model: 'M5',
    color: 'Black',
    wheelAmount: 4,
    doIHaveIt: false
};

let carColor = myCar.color;
let newCarColor = carColor;
newCarColor = 'Pink'; /* Мы переназначили со свойства myCar на цвет Pink,
 и переменная newCarColor перестала относиться к myCar.color напрямую */ 
console.log(newCarColor);

let wheelInfo = myCar.wheelAmount;
wheelInfo = 4;
console.log(myCar.wheelAmount);