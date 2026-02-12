export default function ProductCard({ product, onAdd }) {
  // Safety check (extra protection)
  if (!product) return null;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
      
      {/* IMAGE */}
      <div className="h-40 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
          onError={(e) => {
            e.target.src = "/images/products/placeholder.jpg";
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-2">
          {product.category}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-primary font-bold">
            ₹{product.price} / kg
          </span>

          {/* SAFE ADD TO CART */}
          {typeof onAdd === "function" && (
            <button
              onClick={() => onAdd(product)}
    className="
      bg-green-600 
      text-white 
      px-4 
      py-2 
      rounded-lg 
      font-semibold
      shadow
      hover:bg-green-700
      hover:shadow-lg
      transition
    "
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
