const data = require("./food.json");

//list all food item
console.log("All foof item");
data.forEach(item => console.log(item.foodname))
console.log("\n");

//list all the food items with category vegetables
let vegetable = data.filter(item => item.category == "Vegetable");
console.log("All Vegatable");
vegetable.forEach(item => console.log(item.foodname, ":", item.category));
console.log("\n");

//list all the food items with category fruit
let fruit = data.filter(item => item.category == "Fruit");
console.log("All fruit");
fruit.forEach(item => console.log(item.foodname, ":", item.category));
console.log("\n");

//list all the food items with category protein
let protein = data.filter(item => item.category == "Protein");
console.log("All Protein");
protein.forEach(item => console.log(item.foodname, ":", item.category));

//list all the food items with category nuts
let nuts = data.filter(item => item.category == "Nuts");
console.log("All Nuts");
nuts.forEach(item => console.log(item.foodname, ":", item.category));
console.log("\n");

//list all the food items with category grains
let grains = data.filter(item => item.category == "Grain");
console.log("All Grains");
grains.forEach(item => console.log(item.foodname, ":", item.category));
console.log("\n");

//list all the food items with category dairy
let dairy = data.filter(item => item.category == "Dairy");
console.log("All Dairy items");
dairy.forEach(item => console.log(item.foodname, ":", item.category));
console.log("\n");

//list all the food items with calorie above 100
let calorie_above100 = data.filter(item => item.calorie > 100);
console.log("Item that have calorie above 100");
calorie_above100.forEach(item => console.log(item.foodname, ":", item.category));
console.log("\n");

// list all the food items with calorie below 100
let calorie_below100 = data.filter(item => item.calorie > 100);
console.log("Item that have calorie below 100");
calorie_below100.forEach(item => console.log(item.foodname, ":", item.category));
console.log("\n");

// list all the food items with highest protien content to lowest
let protein_high_to_low = data.sort((item1, item2) => item2.protiens - item1.protiens);
console.log("Food with highest protien content to lowest");
protein_high_to_low.forEach(item => console.log(item.foodname, ":", item.protiens));
console.log("\n");

// list all the food items with lowest cab content to highest
let cab_low_to_high = data.sort((item1, item2) => item1.cab - item2.cab);
console.log("Food with lowest cab content to highest");
cab_low_to_high.forEach(item => console.log(item.foodname, ":", item.cab));


