// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var saucePrices={
  	"mustard": 0.25,
  	"mayo": 0.25,
  	"ranch": 0.50,
  	"oil-vinegar": 0.25,
  	"horseradish": 0.50,
  	"barbecue": 0.25
  	}
  var selectedSauces = [];
  var saucePriceTotal=0;

  // Augment the original object with another method

  maker.addSauce = function(typeOfSauce) {
  	var index = selectedSauces.indexOf(typeOfSauce);
  	if (index === -1){
	  	selectedSauces.push(typeOfSauce);
  	} else {
  		selectedSauces.splice(index, 1);
  	}
  	
    return selectedSauces;
  },
  maker.addSaucePrice = function(typeOfSauce) {
	var index = selectedSauces.indexOf(typeOfSauce);
  	if (index === -1){
	  	saucePriceTotal += saucePrices[typeOfSauce];
  	} else {
  		saucePriceTotal -= saucePrices[typeOfSauce];
  	}
  	return saucePriceTotal;
  }


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);