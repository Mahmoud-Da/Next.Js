import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard2.module.css";

const ProductCard2 = () => {
  return (
    <div className={styles.card}>
      <AddToCart></AddToCart>
    </div>
  );
};

export default ProductCard2;
