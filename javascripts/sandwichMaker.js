var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  return {
  // getPrices: function()

  // Return the public interface that other code can interact with
    addTopping: function(toppingPrice) {
		totalPrice += toppingPrice;
		return totalPrice;
    }
  };
})();