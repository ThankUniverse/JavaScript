
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

	// Create a shop

let shop = {
		Gun = {
		title : "Bulldoll",
		physic : 100,
		magic : 20,
		minLevel : 10,
		available : true,
		}

		Arc = {
			title : "BurningLine",
			physic : 40,
			magic : 50,
			minLevel : 0,
			available : true,
		}

		Sword = {
			title : "TheZipKiller"
		}

} 
