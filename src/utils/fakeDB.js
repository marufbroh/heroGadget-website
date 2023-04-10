const addToDb = (id) => {
  let shoppingCart = {};

  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedCart) {
    shoppingCart = storedCart;
  }

  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};

  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedCart) {
    shoppingCart = storedCart;
  }
  return shoppingCart;
};



export { addToDb, getStoredCart };
