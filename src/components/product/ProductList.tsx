import { products } from "../../data/product";


const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-lg border border-gray-200 p-3 transition hover:shadow-lg"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain"
          />

          <h2 className="mt-3 font-semibold text-gray-800">
            {product.title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {product.brand}
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span className="font-bold text-gray-900">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          <p className="mt-1 text-sm text-green-600">
            {product.discount}% off
          </p>

          <p className="mt-1 text-sm text-gray-600">
            ⭐ {product.rating} ({product.reviewCount} reviews)
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;