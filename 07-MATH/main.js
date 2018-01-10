//Exercice Min and Max

let minimum =(Math.min(7, 5, -12, 6, 32, 18, 14, -2));
console.log(minimum);
let maximum =(Math.max(-3, 9, 21, 36, 27, 54, 17, 35));
console.log(maximum);

console.log(minimum + maximum);

//Exercice: Variable 1

let floatBateau = 10.4;
let couleBateau = Math.floor(floatBateau);
let voleBateau = Math.ceil(floatBateau);

console.log(floatBateau);
console.log(couleBateau);
console.log(voleBateau);


//Exercice: Variable 2

let random = Math.random() * 50 + 50;
console.log(random);

let binary = Math.random();
binary = Math.round(binary);
console.log(binary);

let oneToTen = Math.random() * 10.1;
console.log(oneToTen);

//Exercice: Variable 3

let characters = ["Goro", "Johnny Cage", "Kano", "Liu Kang", "Sub-Zero", "Scorpion", "Shang Tsung", "Sonya Blade", "Raiden", "Reptile", "Cyrax", "Sektor", "Smoke"];
let charactersNumber = Math.random() * characters.length;
let charactersRound = Math.round(charactersNumber);

console.log(charactersRound);
console.log(characters[charactersRound]);


