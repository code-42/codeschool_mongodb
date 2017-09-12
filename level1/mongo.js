/*
4CodeSchool Mongo Level 1
Create a gaming database and collections
Requirements
Create a new mongo database called myGame.
Using the shell create a “monsters” collection
Insert at least 2 documents
Each document should contain:
“Name”
“Health”
Last fought (date)
Attacks (array)
Enter 3 names for attacks a monster could do example: “bite”
Stats (object)
Attack (number)
Defense (number)
Create a mongo.js file
Inside the file:
Create a function that accepts the 4 attributes plus a 5th variable called db. This variable would reference the mongo db like in the shell.
Write the javascript code that would insert the four attributes into the “monster” collection.
Write the code that would then console.log all the documents inside the collection.
Write the command that will find your monster based on it’s name
Write the command that will find a monster based on one of the attacks it has (if possible use a command that will return more than one monster with the same attack type)
Write the command that will find a monster based on their defense stat.

Note: you do not need to run the file to confirm it works. Writing the same lines in the mongo console should do this. This is just to confirm you know the syntax.
*/

db.createCollection("monsters")

db.monsters.insert(
    {
    "name":"Monster Mo",
    "health":"bad",
    "last_fought":new Date(2017,8,10),
    "attacks":["bite","fight","fright"],
    "stats":{"attack":1, "defense":1}
    }
)

db.monsters.insert(
    {
    "name":"Monster Joe",
    "health":"bad",
    "last_fought":new Date(2017,8,10),
    "attacks":["bite","fight","fright"],
    "stats":{"attack":1, "defense":1}
    }
)

var makeMonster = function(name, health, last_fought, attacks, stats, db){
    var myGame = {};
    use myGame;
    db.monsters.insert(
        {
        "name":"Monster Mo",
        "health":"bad",
        "last_fought":new Date(2017,8,10),
        "attacks":["bite","fight","fright"],
        "stats":{"attack":1, "defense":1}
        },
        {
        "name":"Monster Me",
        "health":"bad",
        "last_fought":new Date(2017,8,10),
        "attacks":["bite","fight","fright"],
        "stats":{"attack":1, "defense":1}
        }
    )
};

console.log(db.monsters.find())

db.monsters.find({"name":"Monster Mo"})

db.monsters.find({"attacks":"bite"})
 
db.monsters.find({"stats.defense":1})

// github test
