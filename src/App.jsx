import { useState } from "react";
import productsData from "./data/products";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ProductList from "./components/ProductList";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");


  let filteredProducts = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category ? product.category === category : true
    );

  if (sort === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-4">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterSort setCategory={setCategory} setSort={setSort} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
