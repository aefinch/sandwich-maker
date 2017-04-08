// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices={
  	"turkey": 1.00,
  	"chicken": 1.00,
  	"ham": 1.25,
  	"roastBeef": 1.25,
  	"bacon": 1.50,
  	"pastrami": 1.25,
  	"tuna": 1.50};
  var selectedMeats = [];
  var meatPriceTotal=0;

  // Augment the original object with another method

  maker.addMeat = function(typeOfMeat) {
  	var index = selectedMeats.indexOf(typeOfMeat);
  	if (index === -1){
	  	selectedMeats.push(typeOfMeat);
  	} else {
  		selectedMeats.splice(index, 1);
  	}
  	
    return selectedMeats;
  },
  maker.addMeatPrice = function(typeOfMeat) {
	var index = selectedMeats.indexOf(typeOfMeat);
  	if (index === -1){
	  	meatPriceTotal += meatPrices[typeOfMeat];
  	} else {
  		meatPriceTotal -= meatPrices[typeOfMeat];
  	}
  	return meatPriceTotal;
  }
  toppingPrice=meatPriceTotal;

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);