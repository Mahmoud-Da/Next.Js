"use client";
import Image from "next/image";
import ProductCard1 from "./components/ProductCard1";
import ProductCard2 from "./components/ProductCard2";

export default function Home() {
  return (
    <>
      <main>Hello World</main>
      <ProductCard1 />
      <br />
      <ProductCard2 />
    </>
  );
}
