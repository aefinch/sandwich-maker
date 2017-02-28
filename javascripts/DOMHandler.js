// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("breadChooser");
var meatChooser = document.getElementById("meatChooser");
var cheeseChooser = document.getElementById("cheeseChooser");
var sauceChooser = document.getElementById("sauceChooser");
var veggieChooser = document.getElementById("veggieChooser");
var breadConf = document.getElementById("breadOrdered");
var meatConf = document.getElementById("meatOrdered");
var cheeseConf = document.getElementById("cheeseOrdered");
var sauceConf = document.getElementById("sauceOrdered");
var veggieConf = document.getElementById("veggieOrdered");
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	breadPrice = SandwichMaker.addBreadPrice(selectedTopping);
	breadConf.innerHTML = selectedTopping + "<br>"

	var totalPrice = SandwichMaker.addTopping(breadPrice);
	console.log(totalPrice);
});
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
	selectedTopping = event.target.value;

  // Determine the price of the topping chosen
	meatPrice = SandwichMaker.addMeatPrice(selectedTopping)
  // Add the topping to the SandwichMaker to increase the total price
	chosenMeats = SandwichMaker.addMeat(selectedTopping);
	meatConf.innerHTML="";
 	for (var i=0; i<chosenMeats.length; i++) {
  	meatConf.innerHTML+=chosenMeats[i] + "<br>";
 	}
	var totalPrice = SandwichMaker.addTopping(meatPrice);
	console.log(totalPrice);

});
cheeseChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	cheesePrice = SandwichMaker.addCheesePrice(selectedTopping);
	chosenCheese = SandwichMaker.addCheese(selectedTopping);
	cheeseConf.innerHTML="";
	for (var j=0; j<chosenCheese.length; j++) {
		cheeseConf.innerHTML+=chosenCheese[j] + "<br>";
	}
	var totalPrice = SandwichMaker.addTopping(cheesePrice);
	console.log(totalPrice);
	
});
sauceChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	saucePrice = SandwichMaker.addSaucePrice(selectedTopping);
	chosenSauce = SandwichMaker.addSauce(selectedTopping);
	sauceConf.innerHTML="";
	for (var k=0; k<chosenSauce.length; k++) {
		sauceConf.innerHTML+=chosenSauce[k] + "<br>";
	}
	var totalPrice = SandwichMaker.addTopping(saucePrice);
	console.log(totalPrice);
});
veggieChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	veggiePrice = SandwichMaker.addVeggiePrice(selectedTopping);
	chosenVeggie = SandwichMaker.addVeggie(selectedTopping);
	veggieConf.innerHTML="";
	for (var m=0; m<chosenVeggie.length; m++) {
		veggieConf.innerHTML+=chosenVeggie[m] + "<br>";
	}
	var totalPrice = SandwichMaker.addTopping(veggiePrice);
	console.log(totalPrice);
});


