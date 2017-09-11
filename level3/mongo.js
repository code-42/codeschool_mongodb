/*
CodeSchool Mongo Level 3
Create a gaming database and collections
Requirements
Recommended to create this database but is not needed. For this item the database will have the monster collection. A document will have the following example data:

{
	"name": "Bat",
	"Level": 4,
	"health": 25,
	"type": "Flying",
	"attacks": ["scratch", "bite"],
	"stats": {
		"attack": 5,
		"defense": 2
	},
	"style": "cool"
}

In a file called mongo.js create the following commands. To help with syntax have your file look like this:

var mongo = function(db) {

};

Write the command that will find all monsters with an attack lower than 10
Write the command that will find all monsters with a level above 5 but below 15 inclusive
Write the command to find monsters that do not have the “bite” attack.
Write the command to find monsters with levels less than 6 but only return the name, level and health attributes
Write the command to find all monsters who attack is between 10 and 20 but do not include the monsters health or style
Write the command to find out how many monsters are in the collection.
Write the command to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
*/


var mongo = function(db){
    //Write the command that will find all monsters with an attack lower than 10
    db.monsters.find({"stats.attack":{"$lt":10}})
    
    // Write the command that will find all monsters with a level above 5 but below 15 inclusive
    db.monsters.find({"stats.attack":{"$lte":15, "$gte":5}})
    
    // Write the command to find monsters that do not have the “bite” attack.
    db.monsters.find({"attacks":{"$ne":"bite"}})
    
    // Write the command to find monsters with levels less than 6 but only return the name, level and health attributes
    db.monsters.find({"Level":{"$lt":6}},{"name":true,"Level":true,"health":true,"_id":false})
    
    // Write the command to find all monsters who attack is between 10 and 20 but do not include the monsters health or style
    db.monsters.find({"stats.attack":{"$gt":10, "$lt":20}},{"health":false,"style":false})
    
    // Write the command to find out how many monsters are in the collection.
    db.monsters.find().count()
    
    // Write the command to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
    db.monsters.find().sort({"Level":-1})
};


db.monsters.insert(
    {
    	"name": "Cat",
    	"Level": 42,
    	"health": 9,
    	"type": "Kitty",
    	"attacks": ["scratch", "bite", "hiss"],
    	"stats": {"attack": 9, "defense": 2},
    	"style": "smelly"
    }
)

db.monsters.insert(
    {
    	"name": "Rat",
    	"Level": 4,
    	"health": 1,
    	"type": "Rhodent",
    	"attacks": ["bite", "jump", "scare"],
    	"stats": {"attack": 8, "defense": 3},
    	"style": "ugly"
    }
)

db.monsters.insert(
    {
    	"name": "Ghost",
    	"Level": 12,
    	"health": 0,
    	"type": "spooky",
    	"attacks": ["shake", "rattle", "roll"],
    	"stats": {"attack": 4, "defense": 2},
    	"style": "invisible"
    }
)

db.monsters.insert(
    {
    	"name": "Dragon",
    	"Level": 120,
    	"health": 10,
    	"type": "spooky",
    	"attacks": ["fire", "fly", "tail"],
    	"stats": {"attack": 14, "defense": 22},
    	"style": "mean"
    }
)