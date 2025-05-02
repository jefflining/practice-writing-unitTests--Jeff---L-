const cart = require('../shopping-cart/cart');

//console.log(cart.addItem(dummieCart,"apple",2));

describe('The addItem function', () => {
    let dummieCart = []
    // POSITIVE CASE

    // EXAMPLE: Write a test for addItem

    test('should log item and quantity added to cart', () => {
        expect(cart.addItem(dummieCart, "apple", 2)).toEqual([{ item: "apple", quantity: 2 }]);
    });

     // NEGATIVE CASE

    // EXAMPLE: Write a test for addItem

    test('should log error message when a negtive quanity is added to the cart', () => {
        expect(cart.addItem(dummieCart, "apple", -2)).toBe("Error: quantity cannot be negative.");

    });

    // EDGE CASE

    // EXAMPLE: Write a test for addItem

    test('should log error message when an item with a quantity of zero is entered', () => {
        expect(cart.addItem(dummieCart, "apple", 0)).toBe("Error: quantity cannot equal to zero.");

    });

});

describe('The removeItem function', () => {
    let dummieCart = [{ item: 'apple', quantity: 1 }, { item: 'banana', quantity: 1}, { item: 'orange', quantity: 1} ];
    // POSITIVE CASE

    // EXAMPLE: Write a test for removeItem

    test('should remove the specified item from the cart and log the updated cart', () => {
        expect(cart.removeItem(dummieCart, "apple")).toEqual([{ item: 'banana', quantity: 1}, { item: 'orange', quantity: 1}]);
    });

    // NEGATIVE CASE

    // EXAMPLE: Write a test for removeItem

    test('should remove the specified item from the cart and log the updated cart', () => {
        expect(cart.removeItem(dummieCart, "carrot")).toBe("Error: This item is not in cart.  Item cannot be removed");
    });

    // EDGE CASE

    // EXAMPLE: Write a test for removeItem

    test('should remove the last item in the cart and log updated cart', () => {
        expect(cart.removeItem(dummieCart, "orange")).toEqual([{ item: 'banana', quantity: 1}]);
    });

});

    describe('The getTotalItems function', () => {
        let dummieCart = [{ item: 'apple', quantity: 1 }, { item: 'banana', quantity: 1}, { item: 'orange', quantity: 1} ];
        // POSITIVE CASE
    
        // EXAMPLE: Write a test for getTotalItems
    
        test('should log number of items in cart', () => {
            expect(cart.getTotalItems(dummieCart)).toEqual(3);
        });

        // NEGATIVE CASE
    
        // EXAMPLE: Write a test for getTotalItems
    
        test('should log number of items in cart', () => {
            expect(cart.getTotalItems(dummieCart)).toEqual();

        });
});