// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices={
  	"swiss": 0.75,
  	"cheddar": 0.75,
  	"provolone": 0.75,
  	"meunster": 0.75,
  	"mozzarella": 0.75
  	}
  var selectedCheeses = [];
  var cheesePriceTotal=0;

  // Augment the original object with another method

  maker.addCheese = function(typeOfCheese) {
  	var index = selectedCheeses.indexOf(typeOfCheese);
  	if (index === -1){
	  	selectedCheeses.push(typeOfCheese);
  	} else {
  		selectedCheeses.splice(index, 1);
  	}
  	
    return selectedCheeses;
  },
  maker.addCheesePrice = function(typeOfCheese) {
	var index = selectedCheeses.indexOf(typeOfCheese);
  	if (index === -1){
	  	cheesePriceTotal += cheesePrices[typeOfCheese];
  	} else {
  		cheesePriceTotal -= cheesePrices[typeOfCheese];
  	}
  	return cheesePriceTotal;
  }


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);