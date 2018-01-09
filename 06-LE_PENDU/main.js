let solution = [
"B", "I", "N", "O", "C", "L", "A", "R", "D"];

console.log("BIENVENU AU JEU DU BONHOMME PENDU !");

let reponse = console.log(prompt("BIENVENU AU JEU DU BONHOMME PENDU !\nVeuillez encoder un mot en 9 lettres :"));
//
console.log(reponse);

let index = reponse[0];
	while (index < 9) {
		index++;
	}

	console.log(index);