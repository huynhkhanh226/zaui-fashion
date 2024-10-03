import CategoryTabs from "components/category-tabs";
import SearchBar from "components/search-bar";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import { categoriesState } from "state";

export default function CategoriesPage() {
  const navigate = useNavigate();
  const categories = useAtomValue(categoriesState);

  return (
    <>
      <div className="py-2">
        <SearchBar />
      </div>
      <CategoryTabs />
      <div className="grid grid-cols-4 p-4 gap-x-4 gap-y-8">
        {categories.map((category) => (
          <div
            className="flex flex-col items-center space-y-2 overflow-hidden cursor-pointer"
            onClick={() => navigate(`/category/${category.id}`)}
          >
            <img
              src={category.image}
              className="aspect-square object-cover rounded-full border-[0.5px] border-black/15"
              alt={category.name}
            />
            <div className="text-center text-sm w-full line-clamp-2 text-subtitle">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
