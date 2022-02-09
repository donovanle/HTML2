function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var firstPizza = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni","sausage"]);
var secondPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var thirdPizza = pizzaOven("thin", "marinara", ["american", "mozzarella"], ["olives", "pepperoni"]);
var fourthPizza = pizzaOven("stuffed", "buffalo", ["cheddar"], ["pineapple"]);
console.log(firstPizza);
console.log(secondPizza);
console.log(thirdPizza);
console.log(fourthPizza);