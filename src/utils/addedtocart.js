export default function addedtocartMsg(button) {
  if (!button) {
    console.warn("No button element passed to addedtocartMsg");
    return;
  }

  const product = button.closest(".product-container");
  if (!product) {
    console.warn("No .product-container found for button", button);
    return;
  }

  const addedToCart = product.querySelector(".added-to-cart");
  if (!addedToCart) {
    console.warn("No .added-to-cart found inside product", product);
    return;
  }

  addedToCart.classList.add("visible");

  setTimeout(() => {
    addedToCart.classList.remove("visible");
  }, 2000);
}

