
import { useState } from "react";
import { products } from "../../../data/product";


const SearchBar = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase().trim()),
  );

  return (
    <div className="relative w-full">
      {/* Search Input Container */}
      <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 focus-within:border-blue-500">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products, brands and more"
          className="w-full bg-transparent py-3 text-sm outline-none"
        />

        {/* Search Button */}
        <button
          type="button"
          aria-label="Search"
          className="ml-2 shrink-0 text-blue-600 hover:text-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {search.trim() !== "" && (
        <div className="absolute left-0 top-full z-50 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <button
                type="button"
                key={product.id}
                onClick={() => setSearch(product.title)}
                className="block w-full px-4 py-3 text-left text-sm hover:bg-gray-100">
                {product.title}
              </button>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-gray-500">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
