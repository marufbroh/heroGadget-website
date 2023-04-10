import { getStoredCart } from "../utils/fakeDB";

const cartProductsLoader = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const storedCart = getStoredCart();
  const savedCarts = [];
  for (const id in storedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      foundProduct.quantity = storedCart[id];
      savedCarts.push(foundProduct);
    }
  }
  return { savedCarts, products };
};

export default cartProductsLoader;
