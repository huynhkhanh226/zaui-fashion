import { useParams } from "react-router-dom";
import Filter from "./filter";
import HorizontalDivider from "components/horizontal-divider";
import ProductGrid from "components/product-grid";
import { useAtomValue } from "jotai";
import { productsState } from "state";

export default function CategoryPage() {
  const { id } = useParams();
  const products = useAtomValue(productsState);

  return (
    <div>
      <Filter />
      <HorizontalDivider />
      <ProductGrid products={products} className="pt-4 pb-[13px]" />
    </div>
  );
}
