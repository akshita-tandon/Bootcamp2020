// console.log("hello webpack")
// console.log("Hello from anothe time")

// ES6 start
// let limit=100;
// console.log(limit);

// import {newArrays,onlyflexBox,arrayTime,arrayTimeSeconds,totalTime} from './ques2.js'

// console.log("List to Array",newArrays);
// console.log("Array containing flexbox",onlyflexBox);
// console.log("List of time",arrayTime);
// console.log("Time converted to seconds",arrayTimeSeconds);
// console.log("Total time",totalTime);

// import {markup} from './ques3'
// console.log(markup);

// import {findArea} from './ques8'

// findArea();

// import {printUniqueElements} from './ques9'

// console.log(printUniqueElements(arr));

 //import {dothis} from './ques11'

// dothis();

//Question 1
// class Instrument {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
// }
// class Guitar extends Instrument {
//   describe() {
//     return `I'm a ${this.name} from the ${this.type} family.`;
//   }
// }
// let fender = new Guitar("Fender", "strings");
// console.log(fender);

 //Question 2
// function Vehicle(make, year, color) {
//   this.make = make;
//   this.year = year;
//   this.color = color;
//   this.bio = () => `A ${this.color} ${this.make} made in ${this.year}.`;
// }
// let s = new Vehicle("Tesla", 2017);
// s.color = "black";
// console.log(s);

// // Question 3
// const contains = (word, letter) => {
//   let letters = word.split("");
//   let letter_set = new Set(letters);
//   return letter_set.has(letter);
// };
// let true_check = contains("west", "e");
// let false_check = contains("north", "e");
// console.log(true_check);
// console.log(false_check);

// //Question 4
// let string = 'supercalifragilisticexpialidocious';
// const countLetter = (word, orig_letter) => {
//   let letters = new Map();
//   for (let i = 0; i < word.length; i++) {
//     let letter = word[i];
//     if (!letters.has(letter)) {
//       letters.set(letter, 1);
//     } else {
//       letters.set(letter, letters.get(letter) + 1);
//     }
//   }
//   return letters.get(orig_letter);
// };
// let a_count = countLetter(string, 'a');
// let x_count = countLetter(string, 'x');
// console.log(a_count);
// console.log(x_count);





