const cart = require('../shopping-cart/cart');

//console.log(cart.addItem(dummieCart,"apple",2));

describe('The addItem function', () => {
    let dummieCart = []
    // POSITIVE CASE

    // EXAMPLE: Write a test for addItem

    test('should return item and quantity added to cart', () => {
        expect(cart.addItem(dummieCart, "apple", 2)).toEqual([{ item: "apple", quantity: 2 }]);
    });

     // NEGATIVE CASE

    // EXAMPLE: Write a test for addItem

    test('should return error message when a negtive quanity is added to the cart', () => {
        expect(cart.addItem(dummieCart, "apple", -2)).toBe("Error: quantity cannot be negative.");

    });

    // EDGE CASE

    // EXAMPLE: Write a test for addItem

    test('should return error message when an item with a quantity of zero is entered', () => {
        expect(cart.addItem(dummieCart, "apple", 0)).toBe("Error: quantity cannot equal to zero.");

    });

});

describe('The removeItem function', () => {
    let dummieCart = [{ item: 'apple', quantity: 1 }, { item: 'banana', quantity: 1} ]
    // POSITIVE CASE

    // EXAMPLE: Write a test for removeItem

    test('should remove the specified item from the cart and return the updated cart', () => {
        expect(cart.removeItem(dummieCart, "apple")).toEqual([]);
    });

    // NEGATIVE CASE

    // EXAMPLE: Write a test for removeItem

    test('should remove the specified item from the cart and return the updated cart', () => {
        expect(cart.removeItem(dummieCart, "carrot")).toEqual("Error: This item is not in cart.  Item cannot be removed");
    });

    // EDGE CASE

    // EXAMPLE: Write a test for removeItem

    test('should remove the specified item from the cart and return the updated cart', () => {
        expect(cart.removeItem(dummieCart, "banana")).toEqual([{ item: 'apple', quantity: 1 }]);
    });

});