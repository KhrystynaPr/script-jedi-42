// https://www.codewars.com/kata/587593285448632b8d000143

function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;

  Promise.all([
    OrderAPI.getShoppingCartAsync(user).then((cart) => (shoppingCart = cart)),
    CustomerAPI.getProfileAsync(user).then((profile) => (zipCode = profile.zipCode)),
  ]).then(function () {
    shippingRate = calculateShipping(shoppingCart, zipCode);

    OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then((success) => {
      orderSuccessful = success;
      console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
    });
  });
}

// implement with async/await

async function submitOrder(user) {
  
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  const { zipCode } = await CustomerAPI.getProfileAsync(user);
  const shippingRate = calculateShipping(shoppingCart, zipCode);
  const orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  
  console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
}
