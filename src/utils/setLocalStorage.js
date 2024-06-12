// get data in localStorage
const getShoppingCart = () => {
  let shoppingCart = {};
  const isStored = localStorage.getItem("shopping-cart");
  if (isStored) {
    shoppingCart = JSON.parse(isStored);
  }
  return shoppingCart;
};

// Use local starager to manage data
export const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quntity
  const quantiy = shoppingCart[id];
  if (quantiy) {
    const newQunatity = quantiy + 1;
    shoppingCart[id] = newQunatity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
export const removeFromDb = (id) => {
  let shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
export const removeOneFromDb = (id) => {
  let shoppingCart = getShoppingCart();
  const quantity = shoppingCart[id];
  if (quantity) {
    if (quantity === 1) {
      delete shoppingCart[id];
    } else {
      shoppingCart[id] = quantity - 1;
    }

    // Save the updated shopping cart back to local storage
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

export const getLocalData = async () => {
  const response = await fetch("/ProductData.json");
  const products = await response.json();
  const storedCart = getShoppingCart();
  let saveCart = [];

  for (const id in storedCart) {
    const addProduct = products.find((pd) => pd.id == id);
    if (addProduct) {
      const quantity = storedCart[id];
      addProduct.quantity = quantity;
      saveCart.push(addProduct);
    }
  }
  return saveCart;
};
