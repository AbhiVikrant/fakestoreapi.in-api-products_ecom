import "./style.css"
import React from "react";
import { StoreProvider } from "./context/StoreContext";
import ProductList from "./components/ProductList";

function App() {
  return (
    <StoreProvider>
      <div style={{ padding: "20px" }}>
        <h2>Product Cards</h2>
        <ProductList />
      </div>
    </StoreProvider>
  );
}

export default App;
