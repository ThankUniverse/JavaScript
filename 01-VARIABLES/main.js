		//Exercice 1
		//Déclaration de variables

			var mesEnfants = 1;
			var maFemme = "Lili";
			var monPays = "Thailande";
			var monMetier = "Web dev";

		// Résultat afficher dans la console

			console.log("Je serais " + monMetier + " et habiterai en " + monPays + ", et marié a " + maFemme + " avec " + mesEnfants + " enfants.");
		//Fin exercice======================

		//Exercice 2
		//Afficher un age grâce a l'opérateur -
		
			var anneeCourante = 2018;
			var sonAnneeDeNaissance = 1984;
		//Résultat utilisant ces deux variables
			console.log(anneeCourante - sonAnneeDeNaissance);
		//Fin exercice======================

		//Exercice 3	

			myAge = 33;
			maximumAge = 200;
			food = "sushi's";
			eatPerDay = 35;
			yearLeft = maximumAge - myAge;

			console.log("Il vous reste " + (yearLeft * eatPerDay) + " " + food + " avant d'atteindre l'age de " + maximumAge + " ans.");
		//Fin exercice======================

		//Exercice 4
		//Décomposer la résolution du calcul :

			var result = (1 + 2) * 3 + 4 / 2;

 /* étape 1 : (3) * 3 + 4 / 2;
    étape 2 : (9) + 4 / 2;
    étape 3 : (4.5) + 4;
    étape 4 : (8);
 */

 			console.log(result);


 		//Exercice Langues

 		var fr = "Bonjour tout le monde";
 		var es = "Hola, Mundo";
 		var en = "Hello World";
 		var message = (prompt("Veuillez encoder une langue:"));
 		console.log(message);

 		if (message === "fr") {
 			console.log(fr);
 		} else if (message === "es") {
 			console.log(es);
 		} else if (message === "en") {
 			console.log(en);
 		}

 		//Exercice Affichage des scores

 		var score = 10;
 		var result = "";

 		if (score <= 90) {
 			result = "A";
 		} else if (score >= 90) {
 			result = "B";
 		} else if (score >= 50) {
 			result = "C";
 		}

 		console.log(result);
