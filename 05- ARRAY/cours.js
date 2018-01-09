let groceries = [
"apples",
"oranges",
"raspberry"
];

groceries.unshift("cucumber"); // ajoute un element de liste au début
groceries.push("tomatoes"); //ajoute un element de liste a la fin

for(let i = 0; i < groceries.length; i++) {
	console.log( groceries [i], i);
} // pour lister les element

groceries.forEach(function(value, iterator) {
	console.log(value, iterator);
});

// Pour copier une liste
copyOfGroceries = groceries.slice(); //old way to copy a list
copyOfGroceries = [...groceries]; //new way to copy a list

//test ajout d'un element a une liste
copyOfGroceries.unshift("oignons"); 
console.log(groceries);

console.log(copyOfGroceries);