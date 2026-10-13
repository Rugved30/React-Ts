
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "../../../data/categories";

const CategoryRow = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="w-full border-y border-gray-200 bg-white">
      <div
        className="mx-auto flex w-full items-stretch
          overflow-x-auto px-2 [scrollbar:none]
          [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;