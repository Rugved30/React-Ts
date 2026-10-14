import { useNavigate } from "react-router-dom";
import type { Category } from "../../../data/categories";


interface CategoryItemProps {
  category: Category;
  isActive: boolean;
  onClick: (categoryId: number) => void;
}

const CategoryItem = ({
  category,
  isActive,
  onClick,
}: CategoryItemProps) => {
  const Icon = category.icon;

  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() =>{onClick(category.id); navigate(`/category/${category.slug}`)}}
      aria-pressed={isActive}
      className={`group relative flex min-w-0 flex-1 flex-col
        items-center justify-center gap-1 px-2 pt-2 pb-3
        text-center transition-colors
        ${
          isActive
            ? "text-gray-950"
            : "text-gray-700 hover:text-blue-600"
        }`}
    >
      <span
        className={`flex h-10 w-11 items-center justify-center
          rounded-lg transition-colors
          ${
            isActive
              ? "bg-blue-50"
              : "bg-transparent group-hover:bg-gray-100"
          }`}
      >
        <Icon
          size={25}
          strokeWidth={1.5}
          className="text-gray-800"
        />
      </span>

      <span className="w-full truncate text-xs font-medium sm:text-sm">
        {category.name}
      </span>

      {isActive && (
        <span className="absolute bottom-0 left-1 right-1 h-1 rounded-full bg-blue-600" />
      )}
    </button>
  );
};

export default CategoryItem;