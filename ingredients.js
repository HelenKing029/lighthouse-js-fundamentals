var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;
// Write a while loop that prints out the contents of ingredients:
while (repeat < 7){
  console.log(ingredients);
  repeat ++;
}
console.log(ingredients);

// Write a for loop that prints out the contents of ingredients:
  console.log("Kitchen Ingredients:");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:

 console.log("Kitchen Ingredients:");
for (var i = ingredients.length; i > 0; i--) {
  console.log(ingredients[i]);
}
