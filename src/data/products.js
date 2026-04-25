import appleImg from "../assets/appleImg.png";
import milkImg from "../assets/milkImg.png";
import breadImg from "../assets/breadImg.png";
import eggImg from "../assets/eggImg.png";

// 👉 add new images (or reuse existing for now)
import cokeImg from "../assets/cokeImg.png";
import juiceImg from "../assets/juiceImg.png";
import ranthomImg from "../assets/ranthomImg.png";
import balbImg from "../assets/balbImg.jpg";
import MacImg from "../assets/MacImg.png";
import bananaImg from "../assets/bananaImg.png";

export const products = [
  { id: 1, name: "Apple", price: 50, category: "Fruits", img: appleImg },
  { id: 10, name: "Banana", price: 40, category: "Fruits", img: bananaImg },
  { id: 2, name: "Milk", price: 30, category: "Dairy", img: milkImg },
  { id: 3, name: "Bread", price: 40, category: "Bakery", img: breadImg },
  { id: 4, name: "Eggs", price: 60, category: "Dairy", img: eggImg },

  // 🔥 NEW CATEGORY: Beverages
  { id: 5, name: "Coca Cola", price: 40, category: "Beverages", img: cokeImg },
  { id: 6, name: "Orange Juice", price: 60, category: "Beverages", img: juiceImg },

  // 🔥 NEW CATEGORY: Premium Beverages
  { id: 7, name: "Royal Ranthambore", price: 6000, category: "Premium Beverages", img: ranthomImg },
  { id: 8, name: "Balblair", price: 12000, category: "Premium Beverages", img: balbImg },
  { id: 9, name: "Macallan 78-Year", price: 18000, category: "Premium Beverages", img: MacImg }

];