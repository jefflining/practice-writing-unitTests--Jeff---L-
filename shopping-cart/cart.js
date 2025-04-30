// Implement and test a basic shopping cart module. The module should include the
// following methods:
// 1. addItem(cart, item, quantity): Adds an item to the cart.
// 2. removeItem(cart, item): Removes an item from the cart.
// 3. getTotalItems(cart): Returns the total number of items in the cart.

let cart = [];

const shoppingCart = () => {



function addItem(cart, item, quantity) {
    cart.push({item, quantity}); 
}
    return addItem;

}

function removeItem(cart, item) {
const index = cart.indexOf(item);
if (index > -1) {
    cart.splice(index, 1);
}
    return removeItem;
} 

function getTotalItems(cart) {
    return cart.reduce (function(total, item) {
        return total + item.quantity;
    }, 0);

}



const addItem = shoppingCart();
addItem(cart, "apple", 2); 
console.log(cart);


