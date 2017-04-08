// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices={
  	"lettuce": 0.10,
  	"tomato": 0.10,
  	"onion": 0.10,
  	"cucumber": 0.15,
  	"pickles": 0.10,
  	"b-peppers": 0.15,
  	"jalapeno": 0.20
  	}
  var selectedVeggies = [];
  var veggiePriceTotal=0;

  // Augment the original object with another method

  maker.addVeggie = function(typeOfVeggie) {
  	var index = selectedVeggies.indexOf(typeOfVeggie);
  	if (index === -1){
	  	selectedVeggies.push(typeOfVeggie);
  	} else {
  		selectedVeggies.splice(index, 1);
  	}
  	
    return selectedVeggies;
  },
  maker.addVeggiePrice = function(typeOfVeggie) {
	var index = selectedVeggies.indexOf(typeOfVeggie);
  	if (index === -1){
	  	veggiePriceTotal += veggiePrices[typeOfVeggie];
  	} else {
  		veggiePriceTotal -= veggiePrices[typeOfVeggie];
  	}
  	return veggiePriceTotal;
  }


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);