//CodeSchool Mongo Level 5

// Please complete the following syntax to group together our monsters by their type
db.monsters.aggregate(
    {
      "$group":{"_id":"$type"}
    }
)

// Please complete the following syntax to group together the monsters by their type, 
// then include a count of all the monsters for that type and that types average attack.
// (the firest three items are the answer to the prior question)
db.monsters.aggregate(
    {
      "$group":{"_id":"$type","total":{"$sum":1},"averageAttack":{"$avg":"$stats.attack"}}
    }
)
