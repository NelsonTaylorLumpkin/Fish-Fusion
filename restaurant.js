const { mongerInventory } = require("./fishMonger.js")

const mongerFish = mongerInventory(7.50)


const chefPurchase = () => {
    let chefInventory = []
    for (const fish of mongerFish)
    if (fish.price <= 5){
        chefInventory.push(fish.amount * .5)

         }
         return chefInventory
}

const restaurantFish = chefPurchase()
console.log(restaurantFish)


const fishMenu = (menuDuJour) => {
      console.log  (`<h1>Menu</h1>`)
       console.log ( `<article class="menu">`)
        for (const fish of mongerFish)
            console.log (`<h2>${fish.species}</h2>
            <section class="menu__item">${fish.species} Soup</section>
            <section class="menu__item">${fish.species} Sandwich</section>
            <section class="menu__item">Grilled ${fish.species}</section>
        </article>`)
        return menuDuJour
    }
    

const fishalicious = fishMenu()
console.log(fishalicious)
//console.log(mongerFish)
