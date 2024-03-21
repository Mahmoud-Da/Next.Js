import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard2.module.css";

const ProductCard2 = () => {
  return (
    <>
      <div className={styles.card}>
        <AddToCart></AddToCart>
      </div>
      <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600">
        Hi
      </div>
    </>
  );
};

export default ProductCard2;
