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
          // Remove item completely if quantity is 1
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


  // console.log(cart.reduce(removeItem(total, cart.quantity, 0)))
  //     return total + quantity;
  // }

//let dummieCart = [{ item: 'apple', quantity: 1 }, { item: 'banana', quantity: 1}, { item: 'orange', quantity: 1} ];
let dummieCart = [];
// console.log(addItem(dummieCart, "apple", 1));

// console.log(removeItem(dummieCart,"carrot"));
//console.log(dummieCart);
console.log(getTotalItems(dummieCart));
// (dummieCart);

module.exports = {addItem, removeItem, getTotalItems,};