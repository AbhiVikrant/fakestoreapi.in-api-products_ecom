import React from "react";
import { useStore } from "../context/StoreContext";
import ProductCard from "./card";

const ProductList = () => {
  const { products } = useStore();

  if (!products.length) return <p>Loading products...</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
