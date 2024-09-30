import Section from "components/section";
import { useAtomValue } from "jotai";
import { categoriesState } from "state";

export default function Category() {
  const categories = useAtomValue(categoriesState);

  console.log(categories);
  return (
    <Section title="Danh mục sản phẩm" viewMore={() => {}}>
      <div className="pt-2.5 pb-4 flex gap-6 overflow-x-auto px-4">
        {categories.map((category) => (
          <div className="flex flex-col items-center space-y-2 flex-none basis-[70px] overflow-hidden">
            <img
              src={category.image}
              className="w-[70px] h-[70px] object-cover rounded-full border-[0.5px] border-black/15"
              alt={category.name}
            />
            <div className="text-center text-sm w-full line-clamp-2">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
