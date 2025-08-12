import React from "react";
import { useStore } from "../context/StoreContext";

const SortDropDown = () => {
  const { sortOption, setSortOption } = useStore();

  return (
    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
      <option value="">Sort by...</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating">Rating: High to Low</option>
      <option value="category">Category: A-Z</option>
    </select>
  );
};

export default SortDropDown;
