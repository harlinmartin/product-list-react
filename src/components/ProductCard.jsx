const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-2"
      />

      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-600">₹ {product.price}</p>
      <p className="text-sm">{product.category}</p>
      <p className="text-sm mb-3">⭐ {product.rating}</p>

      <button
        onClick={() => console.log(product.name)}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;
