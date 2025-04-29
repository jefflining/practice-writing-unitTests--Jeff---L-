let cart = [];

const shoppingCart = () => {



function addItem(cart, item, quantity) {
    return cart.push({item, quantity});
}

function removeItem(cart, item) {
const index = cart.indexOf(item);
if (index > -1) {
    cart.splice(index, 1);
}
return cart;
} 

function getTotalItems(cart) {
cart.reduce(function(total, item){
    return (total + item.quantity,0);
});
}

}
shoppingCart();

console.log(addItem(cart, "apple", 2));

