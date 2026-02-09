const FilterSort = ({ setCategory, setSort }) => {
  return (
    <div className="flex gap-4 my-4">
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Accessories">Accessories</option>
      </select>

      <select
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="">Sort By</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default FilterSort;
