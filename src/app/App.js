import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import "./App.css";
import { products } from "../data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [search, setSearch] = useState("");

  // ➕ add to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ➖ remove from cart
  const removeFromCart = (id) => {
    const existing = cart.find((item) => item.id === id);

    if (existing.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  // ✅ place order
  const placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000);
  };

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="container">

      {/* TOP LEFT */}
      <div className="top-left">
        Designed by:- <b><u>Aditya Dhawan</u></b>, <b>590013369</b>
      </div>

      {/* TOP RIGHT */}
      <div className="bottom-right">
        <h3>School of Computer Science, UPES</h3>
      </div>

      <h1>🛒 Grocery Store</h1>

      <p style={{ opacity: 0.7, marginTop: "-5px" }}>
        Fresh groceries at your fingertips!
      </p>

      <h3>Items in Cart: {totalItems}</h3>

      {/* 🔍 Search */}
      <div className="search-box">
        <span>🔍</span>
        <input
          type="text"
          placeholder="Search groceries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {orderPlaced && (
        <div className="success-msg">
          ✅ Order placed successfully, Happy Shopping!
        </div>
      )}

      <div className="main">

        {/* ✅ Products (NO filtering here anymore) */}
        <ProductList
          products={products}   // 🔥 full data
          addToCart={addToCart}
          search={search}       // 🔥 pass search
        />

        {/* ✅ Cart */}
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          placeOrder={placeOrder}
        />

      </div>
    </div>
  );
}

export default App;