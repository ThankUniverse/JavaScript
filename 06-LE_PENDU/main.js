let solution = [
"B", "I", "N", "O", "C", "L", "A", "R", "D"];
let guessingLetters = ["", "", "", "", "", "", "", "", ""]

console.log("BIENVENU AU JEU DU BONHOMME PENDU !");
//La reponse est stockée dans une variable réponse et est placé dans une liste, lettre par lettre.
let answer = window.prompt("BIENVENU AU JEU DU BONHOMME PENDU !\nVeuillez encoder un mot en 9 lettres :");
letter = answer.split("");

	for (let i = 0; i < lettres.length; i++) {
		if (lettres[i] == solution[i]) {
			console.log("Good ! You find one ! Keep trying !");
			console.log(lettres[i]);
		} else if (lettres[i] !== solution[i]) {
			console.log(" No ! We will kill you next time little piece of shit !");
		} 
	}
	



	console.log(lettres[5]);// Syntaxe correcte