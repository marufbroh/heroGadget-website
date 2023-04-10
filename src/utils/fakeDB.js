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

const removeItemFromDb = (id) => {
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedCart) {
    if (id in storedCart) {
      delete storedCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
    }
  }
};

const deleteShoppingCartFromDb = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, getStoredCart, removeItemFromDb, deleteShoppingCartFromDb };
