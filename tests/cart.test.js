const cart = require('../shopping-cart/cart');

describe('The addItem function', () => {
    
    // POSITIVE CASE

    // EXAMPLE: Write a test for addItem

    test('should log item and quantity added to cart', () => {
        expect(cart.addItem(cart.dummieCart, "apple", 2)).toEqual([{ item: "apple", quantity: 2 }]);
    });

     // NEGATIVE CASE

    // EXAMPLE: Write a test for addItem

    test('should log error message when a negtive quanity is added to the cart', () => {
        expect(cart.addItem(cart.dummieCart, "apple", -2)).toBe("Error: quantity cannot be negative.");

    });

    // EDGE CASE

    // EXAMPLE: Write a test for addItem

    test('should log error message when an item with a quantity of zero is entered', () => {
        expect(cart.addItem(cart.dummieCart, "apple", 0)).toBe("Error: quantity cannot equal to zero.");

    });

});

describe('The removeItem function', () => {
  
    // POSITIVE CASE

    // EXAMPLE: Write a test for removeItem

    test('should remove the specified item from the cart and log the updated cart', () => {
        expect(cart.removeItem(cart.removeCart, "apple")).toEqual([{ item: 'banana', quantity: 1}, { item: 'orange', quantity: 1}]);
    });

    // NEGATIVE CASE

    // EXAMPLE: Write a test for removeItem

    test('when an attempt is made to remove an item that is not in cart, an error indicating this will be logged', () => {
        expect(cart.removeItem(cart.removeCart, "carrot")).toBe("Error: This item is not in cart.  Item cannot be removed");
    });

    // EDGE CASE

    // EXAMPLE: Write a test for removeItem

    test('should remove the last item in the cart and log updated cart', () => {
        expect(cart.removeItem(cart.removeCart, "orange")).toEqual([{ item: 'banana', quantity: 1}]);
    });

});

    describe('The getTotalItems function', () => {
        
        // POSITIVE CASE
    
        // EXAMPLE: Write a test for getTotalItems
    
    test('should log number of items in cart', () => {
        expect(cart.getTotalItems(cart.getTotalItemsCart)).toEqual(3);
    });

    // NEGATIVE CASE

    // EXAMPLE: Write a test for getTotalItems

    test('should log 0 for an empty cart', () => {
        expect(cart.getTotalItems(cart.emptyCart)).toEqual(0);

    });

    test('should log 5000 for highQuantityCart with a quantity 5000 items', () => {
        expect(cart.getTotalItems(cart.highQuantityCart)).toEqual(5000);

    });
});