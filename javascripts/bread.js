// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices={
  	"white": 1.00,
  	"wheat": 1.00,
  	"rye": 1.00,
  	"pumpernickel": 1.00,
  	"tortilla": 1.00
  	}
  // var selectedBread = [];
  var BreadPriceTotal=0;

  // Augment the original object with another method

  maker.addBread = function(typeOfBread) {
    var selectedBread = typeOfBread
  	// var index = selectedCheeses.indexOf(typeOfCheese);
  	// if (index === -1){
	  // 	selectedCheeses.push(typeOfCheese);
  	// } else {
  	// 	selectedCheeses.splice(index, 1);
  	// }
  	
    return selectedBread;
  },
  maker.addBreadPrice = function(typeOfBread) {
    var breadPriceTotal = breadPrices[typeOfBread];
	// var index = selectedCheeses.indexOf(typeOfCheese);
 //  	if (index === -1){
	//   	cheesePriceTotal += cheesePrices[typeOfCheese];
 //  	} else {
 //  		cheesePriceTotal -= cheesePrices[typeOfCheese];
 //  	}
  	return breadPriceTotal;
  }


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);