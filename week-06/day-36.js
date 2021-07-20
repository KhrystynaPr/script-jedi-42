// https://www.codewars.com/kata/587593285448632b8d000143

function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;

  const shoppingCartPromise = OrderAPI.getShoppingCartAsync(user).then(function (cart) {
      shoppingCart = cart;
    }
  );

  const profilePromise = CustomerAPI.getProfileAsync(user).then(function (profile) {
    zipCode = profile.zipCode;
  });

  Promise.all([shoppingCartPromise, profilePromise]).then(function () {
    shippingRate = calculateShipping(shoppingCart, zipCode);

    OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function (success) {
      orderSuccessful = success;
      console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
    });
  });
}

// implement with async/await

async function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  await OrderAPI.getShoppingCartAsync(user).then(cart => shoppingCart = cart);
  await CustomerAPI.getProfileAsync(user).then(profile => zipCode = profile.zipCode);

  shippingRate = calculateShipping(shoppingCart, zipCode);

  await OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(success => orderSuccessful = success);
  
  console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
}
