const prompt = require("prompt-sync")(); 

// Практическое занятие 4.1

// let iWannaSleep = false;
// if(iWannaSleep) {
//     console.log('time to go to bed');
// } if(!iWannaSleep) {
//     console.log('party rock!');
// } else {
//     console.log('confuse');
// }


// let age = 66;
//  let cost = 0;
//  let message;
//  if (age < 3) {
//     cost = 0;
//     message = "Access is free under three.";
//  } else if (age >= 3 && age < 12) {
//     cost = 5;
//     message ="With the child discount, the fee is 5 dollars";
//  } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message ="A regular ticket costs 10 dollars.";
//  } else {
//     cost = 7;
//     message ="A ticket is 7 dollars.";
//  }
//  console.log(message);
//  console.log("Your Total cost "+cost);


// let age = prompt('Введите возраст: ');
// let message;

// if(age >=21) {
//     message = 'Passed';
// } else if(age >= 19) {
//     message = 'Passed 0.5';
// } else {
//     message = 'Failed';
// }

// console.log(message);


// let age = prompt('Введите возраст: ');
// let access = age < 18 ? 'Failed' : 'Passed';
// console.log(access);

let activity = prompt('What time is it: ')
switch(activity) {
    case "Get up":
      console.log("It is 6:30AM");
      break;
    case "Breakfast":
      console.log("It is 7:00AM");
      break;
    case "Drive to work":
      console.log("It is 8:00AM");
      break;
    case "Lunch":
      console.log("It is 12:00PM");
      break;
    case "Drive home":
      console.log("It is 5:00PM");
      break;
    case "Dinner":
      console.log("It is 6:30PM");
      break;
    default:
      console.log("I cannot determine the current time.");
      break;
 }