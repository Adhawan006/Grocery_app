import React, { useState } from "react";

function ProductList({ products, addToCart }) {

  const [clickedId, setClickedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ get categories dynamically
  const categories = ["All", ...new Set(products.map(p => p.category))];

  const handleClick = (product) => {
    addToCart(product);
    setClickedId(product.id);

    setTimeout(() => {
      setClickedId(null);
    }, 500);
  };

  // ✅ filter by category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="products">

      {/* 🔥 CATEGORY BAR */}
      <div className="category-bar">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2>{selectedCategory} Items</h2>

      {/* 🔥 PRODUCTS */}
      {filteredProducts.map((p) => (
        <div key={p.id} className="card">
          <img src={p.img} alt={p.name} />
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>

          <button onClick={() => handleClick(p)}>
            {clickedId === p.id ? "Added ✓" : "Add"}
          </button>
        </div>
      ))}

    </div>
  );
}

export default ProductList;