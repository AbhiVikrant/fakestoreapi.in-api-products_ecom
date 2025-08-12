import "./style.css"
import React from "react";
import { StoreProvider } from "./context/StoreContext";
import ProductList from "./components/ProductList";
import SortDropDown from "./components/SortDropDown";

function App() {
  return (
    <StoreProvider>
      <div style={{ padding: "20px" }}>
        <h2>Product Cards</h2>
        <SortDropDown/>
        <ProductList />
      </div>
    </StoreProvider>
  );
}

export default App;
