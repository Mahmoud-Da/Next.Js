"use client";
import Image from "next/image";
import ProductCard1 from "./components/ProductCard1";
import ProductCard2 from "./components/ProductCard2";

export default function Home() {
  return (
    <>
      <main>
        <h1>Hello World</h1>
      </main>
      <ProductCard1 />
      <br />
      <ProductCard2 />
    </>
  );
}
