
// Création du charactère et de ses propriétées
let character = {
	name : "Kirhin",
	age : 32,
	items_to_give: ["carquois", "bullet", "bullet", "food"],
};

for (let objectKeys in character) {
	//console.log('objectKeys = ' + objectKeys + '/ value = ' + character[objectKeys]);
	//};
	console.log('' + character[objectKeys]);
	};



	let giveItem = function() {
	let random = Math.floor(Math.random() * character.items_to_give.length);
	console.log(character.items_to_give[random]);
	};

	giveItem();
