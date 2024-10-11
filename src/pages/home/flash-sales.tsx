import ProductGrid from "components/product-grid";
import Section from "components/section";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import { flashSaleProductsState } from "state";

export default function FlashSales() {
  const products = useAtomValue(flashSaleProductsState);
  const navigate = useNavigate();

  return (
    <Section title="Flash Sales" viewMore={() => navigate("/categories")}>
      <ProductGrid products={products} />
    </Section>
  );
}
