import React from "react";

function Cart({ cart, removeFromCart, addToCart, placeOrder }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>🧾 Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">

              {/* item info */}
              <span>
                {item.name} x{item.quantity} - ₹{item.price * item.quantity}
              </span>

              {/* 🔥 quantity buttons */}
              <div>
                <button onClick={() => removeFromCart(item.id)}>−</button>
                <button onClick={() => addToCart(item)}>+</button>
              </div>

            </div>
          ))}

          {/* totals */}
          <h4>Total Items: {totalItems}</h4>
          <h3>Total Price: ₹{total}</h3>

          {/* order button */}
          <button 
            className="order-btn" 
            onClick={placeOrder}
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;