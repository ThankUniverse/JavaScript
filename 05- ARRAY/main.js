//Exercice1

let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = 0;

for (let i=0; i < values.length; i++) {
	result =  result + values[i];
}
console.log(result);

//Exercice2

let actor = ["Johnny Deep", "Sylvester Stallone", "James Bond"];
let position = ["première", "deuxième", "troisieme"];

let text = textBonus = "";

actor.forEach(function (item, index) {
	console.log("La position de " + item + " est " + position[index]);
})

//Exercice3

let characters = ["Mario", "Luigi", "Peach"];
let copyOfCharacters = [...characters];

copyOfCharacters.push("Bowser");
console.log(copyOfCharacters); 


//

//for (i = 0;  )

/*
//Exercice2
let acteurs = ["Jean claude VanDamme", "Chow Yun Fat", "Bruce Lee"];

for (numbers = 0; numbers <= 3; numbers++) {
	console.log("Le numéro " + number + " est " + acteurs);
} 

console.log("Le numéro " + number + acteurs[0]);
console.log("Le numéro " + number + acteurs[1]);
console.log("Le numéro " + number + acteurs[2]);
*/