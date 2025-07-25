document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "product1",
      price: 29.99,
    },
    {
      id: 2,
      name: "product2",
      price: 19.99,
    },
    {
      id: 3,
      name: "product3",
      price: 44.99,
    },
  ];

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to cart</button>
            `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    updateLocalStorage();
    renderCart();
  }
  function removeFromcart(index) {
    cart.splice(index, 1);
    updateLocalStorage();
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button class="remove-btn" data-index="${index}">❌</button>
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCart.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }
  cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      removeFromcart(index);
    }
  });

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    updateLocalStorage();
    alert("Checkout successfully");
    renderCart();
  });
  function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  renderCart();
});
