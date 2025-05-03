let dummieCart = [];

let removeCart = [{ item: 'apple', quantity: 1 }, { item: 'banana', quantity: 1}, { item: 'orange', quantity: 1} ]

let getTotalItemsCart = [{ item: 'apple', quantity: 1 }, { item: 'banana', quantity: 1}, { item: 'orange', quantity: 1} ];

let emptyCart = [];

let highQuantityCart = [{ item: 'apple', quantity: 2000 }, { item: 'banana', quantity: 2000}, { item: 'orange', quantity: 1000}];



function addItem(cart, item, quantity) {
  if (quantity < 0) {
        return "Error: quantity cannot be negative.";
  } else if (quantity === 0) {
      return "Error: quantity cannot equal to zero.";
  } else {
      cart.push({item, quantity,});
  }
  return cart;
}



function removeItem(cart, item) {
    const index = cart.findIndex(cartItem => cartItem.item === item);
    if (index === -1) {
        return "Error: This item is not in cart.  Item cannot be removed"
    }
    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
          
        cart.splice(index, 1);
      }
    }
    return cart;
}



function getTotalItems(cart) {
return cart.reduce (function (total, item) {
  return total + item.quantity;
}, 0);
}



module.exports = {addItem, 
  removeItem, 
  getTotalItems, 
  dummieCart: dummieCart,
   removeCart: removeCart,
  getTotalItemsCart: getTotalItemsCart,
  emptyCart: emptyCart,
  highQuantityCart: highQuantityCart,
};