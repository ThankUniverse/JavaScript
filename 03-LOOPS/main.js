//Exercice 1

let i = 0;

for (i = 0; i <= 20; i++) {
	 if (i%2 === 0) {
		console.log(" Le numero " + i + " est pair");
	} else {
		console.log(" Le numero " + i + " est impair");
		}
	}

//Exercice 2

let v = 0;

for (v = 0; v <= 10; v++) {
	console.log("Le résultat de " + v + " X 9 = " + v * 9);
}

//Exercice 3

let e = 0;
let grade = "";
for (e = 0; e <= 100; e++) { 
	if (e < 90 && e > 80) {
		grade = "A";
	console.log(e + " = grade : " + grade);
	} else if (e < 80 && e > 70) {
		grade = "B";
	console.log(e + " = grade : " + grade);
	} else if (e < 70 && e > 65) {
		grade = "C";
	console.log(e + " = grade : " + grade);
	} else if (e < 65 && e > 0) {
		grade = "D";
	console.log(e + " = grade : " + grade);
	} else {
		grade = "F";
	console.log(e + " = grade : " + grade);

	}
}

//Exercice 4 

let pyramide = ("*");
let result = ("");
let etoiles = 0;
while (etoiles !== 5) {
	etoiles++;
	result = result + pyramide;	
	console.log(result);
}

