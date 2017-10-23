var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100 + 1);
  var item = {[itemName]: itemPrice};
  // I need to add a new object to the array "cart".
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartList = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
    return;
  }
  for (let i = 0; i < cart.length; i++ ) {
    var object = cart[i];
    var key = Object.keys(object)[0];
    var price = object[key];
    cartList.push(`${key} at $${price}`)
  }
  // for (var i = 0; i < cart.length; i++) {
  //   for (var key in cart[i]) {
  //     var price = cart[i][key]
  //     cartList.push(`${key} at $${price}`)
  //   }
  // }
   if (cart.length === 1) {
    console.log(`In your cart, you have ${cartList}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${cartList[0]} and ${cartList[1]}.`)
  } else {
  //  cartList[cartlist.length - 1] = `and ${cartList.last}`
    console.log(`In your cart, you have ${cartList.slice(0,-1).join(', ')}, and ${cartList[cartList.length - 1]}.`)
  }
}

function total() {
  var totalPrice = [];
  var sum = 0;
  // iterates through the cart array, and returns the current total value of the items in the cart.
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i];
    var key = Object.keys(object)[0];
    var price = object[key];
    sum += price; //VERY USEFUL
// The Reduce method works too, but is sloppier.
    //totalPrice.push(price);
    //console.log(totalPrice);
    //var sum = totalPrice.reduce((a, b) => a + b, 0);
    //console.log(sum);
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
