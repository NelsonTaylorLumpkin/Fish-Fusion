const { boatInventory } = require("./fishingBoat.js")

let inventory = boatInventory()

const mongerInventory = (chefPrice) => {
  let filteredFish = []
for (const fish of inventory)
  if (fish.amount >= 10 && fish.price <= chefPrice) {
    fish.amount = 10;
    filteredFish.push(fish);
}
    return filteredFish
}


module.exports = { mongerInventory }
/*
declare the function. 
leave an empty array. 
Iterate through all the fish in the inventory. 
Filter through based on price and quantity. 
Return to mongerInventory.*/