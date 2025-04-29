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
cart.reduce(function(total, item)) {
    total + item.quantity,0;
}
    return getTotalItems;

};




shoppingCart();

console.log(addItem(cart, "apple", 2));

